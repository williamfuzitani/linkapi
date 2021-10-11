const OrderService = require("../services/OrderService");
const DealService = require("../services/DealService");

class OrderController {
  async getAll(req, res) {
    try {
      const response = await OrderService.getAll();
      return res.json(response);
    } catch (error) {
      return res.status(400).json({ message: "Error" });
    }
  }

  async createOrders(req, res) {
    try {
      const deals = await DealService.getDealsWon();
      const response = await OrderService.createOrders(deals);
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Error" });
    }
  }

  async createOnBling(deal) {
    try {
      const response = await OrderService.createOnBling(deal);
      const { data } = response.data;
      return res.json(data);
    } catch (error) {
      return res.status(400).json({ message: "Error" });
    }
  }
}

module.exports = new OrderController();
