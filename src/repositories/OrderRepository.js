const Order = require("../models/Order");

class OrderRepository {
  getAll() {
    return Order.find();
  }

  create(order) {
    const filter = { date: order.date };
    return Order.findOneAndUpdate(filter, order, {
      upsert: true,
    });
  }
}

module.exports = new OrderRepository();
