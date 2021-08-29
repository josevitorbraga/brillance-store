import jwt from "jsonwebtoken";

import Product from "../models/ProductsSchema.js";

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
  console.log(imageFileName);

  const product = await Product.findById(product_id);

  if (!product) {
    throw new Error("This product does not exists...");
  }
  product.image = imageFileName;
  await Product.findOneAndUpdate({ _id: product_id }, product);

  return product;
};
