import mongoose from "mongoose";
const { Schema, model } = mongoose;

const currentDate = new Date();
const brazilDate = currentDate.setHours(currentDate.getHours() - 3);

const productsSchema = new Schema({
  name: String,
  description: String,
  price: String,
  category: String,
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
