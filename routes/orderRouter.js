import { Router } from "express";
import Order from "../models/OrderSchema.js";
import mercadopago from "mercadopago";

const orderRouter = Router();

orderRouter.post("/create/new", (req, res) => {
  const { name, email, contact, totalPrice, address, productsList } = req.body;

  const newOrder = new Order({
    name,
    email,
    contact,
    productsList,
    totalPrice,
    address,
  });

  newOrder.save();

  const preference = {
    back_urls: {
      failure: `http://localhost:3333/payment/fail`,
      success: `http://localhost:3333/payment/success/${newOrder._id}`,
    },
    items: productsList,
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return res.send(response.body.sandbox_init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

export default orderRouter;
