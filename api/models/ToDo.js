const mongoose = require("mongoose")

const ToDoSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model("todos", ToDoSchema)
