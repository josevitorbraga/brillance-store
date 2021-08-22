import { Router } from "express";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";
import adminRouter from "./adminRouter.js";

const routes = Router();

routes.use("/admin", adminRouter);
routes.use("/products", productsRouter);
routes.use("/users", userRouter);

export default routes;
