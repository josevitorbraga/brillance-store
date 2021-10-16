import { Router } from "express";
import { isAuth } from "../utils/utils.js";

import Order from "../models/OrderSchema.js";
import Product from "../models/ProductsSchema.js";

import mercadopago from "mercadopago";

import { sendEmailOrderShipped } from "../utils/utils.js";

const orderRouter = Router();

orderRouter.post("/create/new", (req, res) => {
  const {
    name,
    email,
    contact,
    totalPrice,
    address,
    productsList,
    shippmentType,
    shippmentPrice,
  } = req.body;

  productsList.forEach(async product => {
    const newStock = product.stock - product.quantity;
    await Product.findByIdAndUpdate(product._id, {
      stock: newStock,
    });
  });

  const newOrder = new Order({
    name,
    email,
    contact,
    productsList,
    totalPrice,
    address,
    shippmentType,
  });

  newOrder.save();

  mercadopago.preferences
    .create({
      shipments: {
        cost: shippmentPrice,
        mode: "not_specified",
      },
      back_urls: {
        failure: `https://brillance.herokuapp.com/pagamento/${newOrder._id}/`,
        success: `https://brillance.herokuapp.com/pagamento/${newOrder._id}/`,
        pending: `https://brillance.herokuapp.com/pagamento/${newOrder._id}/`,
      },
      auto_return: "approved",
      items: productsList,
    })
    .then(function (response) {
      return res.send(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

orderRouter.get("/get", isAuth, async (req, res) => {
  const allOrders = await Order.find();
  if (!allOrders) {
    res.send("Sem pedidos recentes");
  }
  res.json(allOrders);
});

orderRouter.get("/get/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  await Order.findById(id)
    .then(response => res.json(response))
    .catch(error => res.send("Pedido não encontrado"));
});

orderRouter.post("/update", isAuth, async (req, res) => {
  const { orderId, trackerId } = req.body;

  const order = await Order.findById(orderId);

  order.trackerId = trackerId;
  order.isShipped = true;

  order.save();

  sendEmailOrderShipped(order)
    .then(response => res.send("Produto despachado"))
    .catch(error => res.send(error));
});

export default orderRouter;
