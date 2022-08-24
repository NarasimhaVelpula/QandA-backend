const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  incorrectAnswers: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  userAnswer: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: "Sent"
  }
})

const UserSchema = mongoose.Schema({
  whatsappProfileName: {
    type: String
  },
  whatsappPhoneNumber: {
    type: String,
    required: true
  },
  whatsappId: {
    type: String,
    requried: true
  },
  status: {
    type: String,
    default: "Yet to Respond"
  },
  questions: {
    type: [MessageSchema]
  },
  currentQuestionId: {
    type: Number,
    default: 0
  }
}, { timestamps: true })


module.exports = mongoose.model("User", UserSchema)

