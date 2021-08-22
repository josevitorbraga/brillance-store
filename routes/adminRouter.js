import { Router } from "express";
import { isAuth } from "../utils/utils.js";

const adminRouter = Router();

adminRouter.get("/home", isAuth, (req, res) => {
  res.status(200).send("OK");
});

export default adminRouter;
