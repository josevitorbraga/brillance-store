import mongoose from "mongoose";
const { Schema, model } = mongoose;

const currentDate = new Date();
const brazilDate = currentDate.setHours(currentDate.getHours() - 3);

const orderSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  productsList: {
    type: Array,
  },
  totalPrice: Number,
  address: String,
  isPaid: {
    type: Boolean,
    default: false,
  },
  paymentCode: String,
  created_at: {
    type: Date,
    default: brazilDate,
  },
  updated_at: {
    type: Date,
    default: brazilDate,
  },
});

const Order = model("Order", orderSchema);

export default Order;
