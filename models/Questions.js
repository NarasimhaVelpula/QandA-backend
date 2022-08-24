const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
  questionId: String,
  correctAnswer: String,
  incorrectAnswers: [String],
  question: String
})

module.exports = mongoose.model("Question", QuestionSchema)