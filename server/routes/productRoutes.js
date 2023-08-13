const express = require ("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController.js"); 
const { protect, systemAdmin } = require("../middleware/authMiddleware.js"); 

router.route('/').get(getProducts)
router.route('/').post(protect, systemAdmin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

router.route('/:id').get(getProductById)
router.route('/:id').delete(protect, systemAdmin, deleteProduct)
router.route('/:id').put(protect, systemAdmin, updateProduct);



module.exports = router;
