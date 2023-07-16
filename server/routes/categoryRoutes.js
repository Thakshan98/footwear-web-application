const express = require ("express");
const router = express.Router();
const {
    getCategory,
    getCategoryById,
    deleteCategory,
    createCategory,
    updateCategory,
}= require ("../controllers/categoryController.js");
const { protect, systemAdmin } = require ("../middleware/authMiddleware.js");

router.route('/').get(getCategory).post(protect, systemAdmin, createCategory)
router
  .route('/:id')
  .get( getCategoryById)
  .delete(protect, systemAdmin, deleteCategory)
  .put(protect, systemAdmin, updateCategory)

  module.exports = router;