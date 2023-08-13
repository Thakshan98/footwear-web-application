const mongoose = require("mongoose");


const feedbackSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
 
    feedback: {
      type: String,
     
    },
  },
  {
    timestamps: true,
  }
);


module.exports =  mongoose.model('Feedback', feedbackSchema);


