import { Router } from "express";
import Product from "../models/ProductsSchema.js";

const productsRouter = Router();

// GET ALL PRODUCTS
productsRouter.get("/", async (req, res) => {
  const name = req.query.name || "";
  const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
  const products = await Product.find({ ...nameFilter });
  res.json(products);
});

// GET ALL PRODUCTS FROM A SPECIFIC CATEGORY
productsRouter.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({
    category: { $eq: category },
  });
  res.json(products);
});

// GET A PRODUCT BY HIS ID
productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

// CREATE A NEW PRODUCT
productsRouter.post("/", (req, res) => {
  const { name, description, price, category } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
    category,
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
