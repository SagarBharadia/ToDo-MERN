const ToDo = require("../models/ToDo")

// Get all todos
exports.getIndex = async (req, res) => {
  const todos = await ToDo.find((data) => data)

  try {
    res.json(todos)
  } catch (error) {
    console.log(error)
  }
}
