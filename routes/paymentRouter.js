import { Router } from "express";
import Order from "../models/OrderSchema.js";
import Product from "../models/ProductsSchema.js";
import mercadopago from "mercadopago";

import { sendEmailOrderConfirmation } from "../utils/utils.js";

const paymentRouter = Router();

paymentRouter.get("/check/:orderId/:paymentId", async (req, res) => {
  const { orderId, paymentId } = req.params;

  mercadopago.payment
    .get(paymentId)
    .then(async response => {
      if (response.body.status === "approved") {
        const userOrder = await Order.findById(orderId);

        if (userOrder) {
          sendEmailOrderConfirmation(userOrder);
          userOrder.isPaid = true;
          userOrder.paymentCode = response.body.id;

          userOrder.save();

          return res.send(true);
        }
        return res.send(false);
      } else {
        const orderToDelete = await Order.findById(orderId);

        if (orderToDelete !== null) {
          orderToDelete.productsList.forEach(async product => {
            const backToStock = product.quantity;
            const updatedStockProduct = await Product.findById(product._id);
            updatedStockProduct.stock = updatedStockProduct.stock + backToStock;
            updatedStockProduct.save();
          });

          orderToDelete.deleteOne();
        }

        res.send(false);
      }
    })
    .catch(error => console.log(error));
});

export default paymentRouter;
