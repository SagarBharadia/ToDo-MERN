const mongoose = require("mongoose")

const ToDoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "You need something todo! (Don't you?)"],
  },
  done: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model("todos", ToDoSchema)
