const mongoose = require("mongoose")

const ToDoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "You need something todo! (Don't you?)"],
  },
  done: Boolean,
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
