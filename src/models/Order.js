const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: {
    type: String,
    unique: true,
  },
  total_value: {
    type: Number,
    default: 0,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
