const express = require ("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToPaidCash,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  deleteOrder,
  updateShow,
} = require ("../controllers/orderController.js");
const { protect, systemAdmin } = require ("../middleware/authMiddleware.js");

router.route('/').post(protect, addOrderItems).get(protect, systemAdmin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id').delete(protect, deleteOrder)
router.route('/:id/show').put(protect, updateShow)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/paycash').put(protect,systemAdmin, updateOrderToPaidCash)
router.route('/:id/deliver').put(protect, systemAdmin, updateOrderToDelivered)

module.exports = router;
