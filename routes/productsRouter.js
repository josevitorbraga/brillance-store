import { Router } from "express";
import multer from "multer";

import Product from "../models/ProductsSchema.js";
import uploadConfig from "../config/upload.js";
import { isAuth, updateImage } from "../utils/utils.js";

const productsRouter = Router();
const upload = multer(uploadConfig);

// GET ALL PRODUCTS
productsRouter.get("/", async (req, res) => {
  const name = req.query.name || "";
  const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
  const products = await Product.find({ ...nameFilter });
  res.json(products);
});

productsRouter.get("/auth", isAuth, async (req, res) => {
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

// Route that edits a product by his id
productsRouter.put("/edit/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const { name, description, price } = req.body;
  product.name = name;
  product.description = description;
  product.price = price;
  await product.save();
  res.status(200).json(product);
});

productsRouter.patch(
  "/:id/image",
  isAuth,
  upload.single("image"),
  async (request, response) => {
    try {
      const { id } = request.params;

      const product = await updateImage({
        product_id: id,
        imageFileName: request.file.filename,
      });

      return response.send(product.image);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
);

// CREATE A NEW PRODUCT
productsRouter.post("/", isAuth, (req, res) => {
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
      res.send(newProduct._id);
    }
  });
});

export default productsRouter;
