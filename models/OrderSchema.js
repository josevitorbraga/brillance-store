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
  shippmentType: String,
  isPaid: {
    type: Boolean,
    default: false,
  },
  paymentCode: {
    type: String,
    default: null,
  },
  isShipped: {
    type: Boolean,
    default: false,
  },
  trackerId: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: brazilDate,
  },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: "143800m",
  },
});

const Order = model("Order", orderSchema);

export default Order;
