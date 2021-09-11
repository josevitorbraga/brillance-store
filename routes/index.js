import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";
import orderRouter from "./orderRouter.js";
import paymentRouter from "./paymentRouter.js";

const routes = Router();

routes.use("/order", orderRouter);
routes.use("/products", productsRouter);
routes.use("/users", userRouter);
routes.use("/payment", paymentRouter);

export default routes;
