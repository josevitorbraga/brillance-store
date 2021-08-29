import { Router } from "express";
import { isAuth } from "../utils/utils.js";

const orderRouter = Router();

orderRouter.get("/home", isAuth, (req, res) => {
  res.status(200).send("OK");
});

export default orderRouter;
