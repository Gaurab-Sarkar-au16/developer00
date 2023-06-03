const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");

const OrdersController = require("../controllers/orders");

//Handle incoming requests for orders
router.get("/", checkAuth, OrdersController.ordersGetAll);

router.post("/", checkAuth, OrdersController.ordersCreate);

router.get("/:orderId", OrdersController.ordersGetSingle);

router.delete("/:orderId", OrdersController.ordersDelete);

module.exports = router;
