const express = require ("express");
const router = express.Router();
const {
    getCategory,
    getCategories,
    getCategoryById,
    deleteCategory,
    createCategory,
    updateCategory,
}= require ("../controllers/categoryController.js");
const { protect, systemAdmin } = require ("../middleware/authMiddleware.js");

router.route('/').get(getCategory)
router.route('/get').get(getCategories)
router.route('/').post(protect, systemAdmin, createCategory)
router.route('/:id').get( getCategoryById)
router.route('/:id').delete(protect, systemAdmin, deleteCategory)
router.route('/:id').put(protect, systemAdmin, updateCategory)

  module.exports = router;


 