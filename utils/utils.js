import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import Product from "../models/ProductsSchema.js";

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const generateToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      user: user.user,
      password: user.password,
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: "1d" }
  );
};

export const isAuth = (request, response, next) => {
  const { jwtCookie } = request.cookies;
  if (jwtCookie) {
    return jwt.verify(jwtCookie, `${process.env.JWT_SECRET}`, (err, decode) => {
      if (err) {
        return response.status(401).send({ message: "invalid token" });
      }
      request.user = decode;
      return next();
    });
  }
  return response.status(401).send({ message: "missing token" });
};

export const updateImage = async ({ product_id, imageFileName }) => {
  const product = await Product.findById(product_id);

  if (!product) {
    throw new Error("This product does not exists...");
  }
  product.image = imageFileName;
  await Product.findOneAndUpdate({ _id: product_id }, product);

  return product;
};

export const sendEmailOrderConfirmation = async emailData => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: [emailData.email, process.env.EMAIL_VENDOR], // list of receivers
    subject: `Pedido N° ${emailData._id} Realizado! - Brillance Store`, // Subject line
    text: "Sua compra foi aprovada no nosso site, em breve enviaremos o código de rastreio dos seus produtinhos!!", // plain text body
    html: `
      <h1>Olá ${emailData.name},</h1>
      <p>Sua compra foi aprovada no nosso site, em breve enviaremos o código de rastreio dos seus produtinhos!!</p>
      <p>Segue abaixo o detalhe do pedido:</p>
      <br/>
      <h3><b>Destinatário:</b> ${emailData.name}</h3>
      <h3><b>Endereço:</b> ${emailData.address}</h3>
      <h3><b>Contato:</b> ${emailData.contact}</h3>
      <br/>
      <ul>
        ${emailData.productsList.map(
          item => `
        <li>
        ${item.quantity}x - ${item.title} R$ ${item.unit_price}
      </li>

        `
        )}
      </ul>
      <br/>
      <h3>Valor total: R$ ${emailData.totalPrice}</h3>
    `, // html body
  });
};

export const sendEmailOrderShipped = async emailData => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: [emailData.email, process.env.EMAIL_VENDOR], // list of receivers
    subject: `Pedido N° ${emailData._id} Enviado! - Brillance Store`, // Subject line
    text: "Uhuul seu pedido está a caminho!!", // plain text body
    html: `
      <h1>Olá ${emailData.name},</h1>
      <p>Seu pedido foi enviado!!!</p>
      <p>Segue abaixo o detalhe do pedido:</p>
      <br/>
      <h3><b>Destinatário:</b> ${emailData.name}</h3>
      <h3><b>Endereço:</b> ${emailData.address}</h3>
      <h3><b>Contato:</b> ${emailData.contact}</h3>
      <br/>
      <h3>Rastreamento: ${emailData.trackerId}</h3>
      <br/>
      <ul>
        ${emailData.productsList.map(
          item => `
        <li>
        ${item.quantity}x - ${item.title} R$ ${item.unit_price}
      </li>

        `
        )}
      </ul>
      <br/>
      <h3>Valor total: R$ ${emailData.totalPrice}</h3>
    `, // html body
  });
};
