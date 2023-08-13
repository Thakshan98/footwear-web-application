const express = require ("express");
const router = express.Router();
const {
    createFeedback,
    getFeedbackById,
    getFeedback,
} = require ("../controllers/feedbackController.js");
const { protect, systemAdmin } = require ("../middleware/authMiddleware.js");

router.route('/').post(protect, createFeedback).get(protect, systemAdmin, getFeedback)

router
  .route('/:id')
  .get(getFeedbackById)


  module.exports = router;
