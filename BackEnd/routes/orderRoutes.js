const express = require("express");
const {
  createOrder,
  getOrder,
  getOrders,
} = require("../controllers/orderController");
const router = express.Router();

router.post("/create", createOrder);
router.get("/:orderId", getOrder);
router.get("/user/:userId", getOrders);

module.exports = router;
