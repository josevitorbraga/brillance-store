import mongoose from "mongoose";
const { Schema, model } = mongoose;

const currentDate = new Date();
const brazilDate = currentDate.setHours(currentDate.getHours() - 3);

const productsSchema = new Schema({
  title: String,
  description: String,
  unit_price: Number,
  category_id: String,
  stock: Number,
  currency_id: {
    type: String,
    default: "BRL",
  },
  image: {
    type: String,
    default: "defaultImg.jpg",
  },
  created_at: {
    type: Date,
    default: brazilDate,
  },
  updated_at: {
    type: Date,
    default: brazilDate,
  },
});

const Product = model("Product", productsSchema);

export default Product;
