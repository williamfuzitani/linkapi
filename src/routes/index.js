const router = require("express").Router();

const DealsController = require("../controllers/DealsController");
const OrderController = require("../controllers/OrderController");

router.get("/deals/won", DealsController.getDealsWon);

router.get("/orders", OrderController.getAll);
router.post("/order", OrderController.createOrders);

module.exports = router;
