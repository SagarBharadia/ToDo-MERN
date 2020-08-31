const ToDo = require("../models/ToDo")

// Get all todos
exports.getIndex = async (req, res) => {
  try {
    const todos = await ToDo.find((data) => data)
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ error: "Could not fetch all todos." })
    console.log(error)
  }
}

// Create new todo
exports.createTodo = async (req, res) => {
  const { task } = req.body

  try {
    const todo = new ToDo({ task: task, created_at: new Date() })
    todo.save()
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({ error: "Could not create todo." })
    console.log(error)
  }
}

exports.getTodo = async (req, res) => {
  const { id } = req.params

  try {
    const todo = await ToDo.findById(id, (todo) => todo)

    if (!todo) {
      res.status(404).json({ error: "Todo not found." })
    } else {
      res.status(200).json(todo)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not get todo." })
  }
}
