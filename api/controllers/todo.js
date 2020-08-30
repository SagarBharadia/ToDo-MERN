const ToDo = require("../models/ToDo")

// Get all todos
exports.getIndex = async (req, res) => {
  try {
    const todos = await ToDo.find((data) => data)
    res.json(todos)
  } catch (error) {
    res.status(500)
    res.json({ error: "Could not fetch all todos." })
    console.log(error)
  }
}

// Create new todo
exports.createTodo = async (req, res) => {
  const { task } = req.body

  try {
    const todo = new ToDo({ task: task, created_at: new Date() })
    todo.save()
    res.json(todo)
  } catch (error) {
    res.status(500)
    res.json({ error: "Could not create todo." })
    console.log(error)
  }
}
