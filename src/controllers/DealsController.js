const DealService = require("../services/DealService");
const OrderService = require("../services/OrderService");

class DealsController {
  async getDealsWon(req, res) {
    try {
      const deals = await DealService.getDealsWon();
      await OrderService.createOrdersOnBling(deals);
      return res.status(200).json(deals);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: "Error" });
    }
  }
}

module.exports = new DealsController();
