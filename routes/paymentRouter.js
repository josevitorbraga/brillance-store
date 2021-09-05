import { Router } from "express";
//import Order from '../models/OrderSchema'

const paymentRouter = Router();

paymentRouter("/success", (req, res) => {
  res.send("Sucess, order created.");
});
paymentRouter("/fail", (req, res) => {
  res.send("Oops, something went wrong.");
});

export default paymentRouter;

// const preference = {
//   back_urls: {
//     failure: `http://localhost:3333/payment/fail`,
//     success: `http://localhost:3333/payment/success`,
//   },
//   items: productsList,
// };

// mercadopago.preferences
//   .create(preference)
//   .then(function (response) {
//     return res.send(response.body.sandbox_init_point);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
