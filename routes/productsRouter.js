import { Router } from "express";

import Product from "../models/ProductsSchema.js";
import upload from "../config/upload.js";
import { isAuth, updateImage } from "../utils/utils.js";

const productsRouter = Router();

// GET ALL PRODUCTS
productsRouter.get("/", async (req, res) => {
  const title = req.query.title || "";
  const titleFilter = title ? { title: { $regex: title, $options: "i" } } : {};
  const products = await Product.find({ ...titleFilter });
  res.json(products);
});

productsRouter.get("/auth", isAuth, async (req, res) => {
  const title = req.query.title || "";
  const titleFilter = title ? { title: { $regex: title, $options: "i" } } : {};
  const products = await Product.find({ ...titleFilter });
  res.json(products);
});

// GET ALL PRODUCTS FROM A SPECIFIC CATEGORY
productsRouter.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({
    category_id: { $eq: category },
  });
  res.json(products);
});

// GET A PRODUCT BY HIS ID
productsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

// Route that edits a product by his id
productsRouter.put("/edit/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const { title, description, unit_price } = req.body;
  product.title = title;
  product.description = description;
  product.unit_price = unit_price;
  await product.save();
  res.status(200).json(product);
});

productsRouter.patch(
  "/:id/image",
  //isAuth,
  upload.single("image"),
  async (request, response) => {
    try {
      const { id } = request.params;

      const product = await updateImage({
        product_id: id,
        imageFileName: request.file.key,
      });

      return response.send(product.image);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
);

// CREATE A NEW PRODUCT
productsRouter.post("/", isAuth, (req, res) => {
  const { title, description, unit_price, category_id } = req.body;
  const newProduct = new Product({
    title,
    description,
    unit_price,
    category_id,
  });
  newProduct.save(err => {
    if (err) {
      return res.send(err);
    } else {
      res.send(newProduct._id);
    }
  });
});

// DELETE A PRODUCT
productsRouter.delete("/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  await product.remove();
  res.json({ message: "Product deleted" });
});

export default productsRouter;
