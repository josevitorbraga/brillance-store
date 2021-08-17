import { Router } from "express";
import productsRouter from "./productsRouter.js";

const routes = Router();

routes.use("/products", productsRouter);

export default routes;
