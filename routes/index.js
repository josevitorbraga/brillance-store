import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";
import orderRouter from "./orderRouter.js";

const routes = Router();

routes.use("/order", orderRouter);
routes.use("/products", productsRouter);
routes.use("/users", userRouter);

export default routes;
