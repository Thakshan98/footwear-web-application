const Feedback = require("../models/feedbackModel.js");
const asyncHandler =require("express-async-handler");

const getFeedbackById = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id)

  if (feedback) {
    res.json(feedback)
  } else {
    res.status(404)
    throw new Error('Feedback not found')
  }
};



const createFeedback = async (req, res) => {
  const {
   
    feedback,
   
  }= req.body
  
  const feed = new Feedback({
    user: req.user._id,
    feedback,
  })
  
  const createdFeedback = await feed.save()
  res.status(201).json(createdFeedback)
};


const getFeedback = async (req, res) => {
    const feedback = await Feedback.find({}).populate('user', 'id name email')
    res.json(feedback)
  };

module.exports = {
  createFeedback,
  getFeedbackById,
  getFeedback,
}
