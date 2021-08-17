import { Router } from "express";
import Product from "../models/ProductsSchema.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  const name = req.query.name || "";
  const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
  const products = await Product.find({ ...nameFilter });
  res.json(products);
});

productsRouter.post("/", (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
  });
  newProduct.save(err => {
    if (err) {
      return res.send(err);
    } else {
      res.json({ message: "Product created" });
    }
  });
});

export default productsRouter;
