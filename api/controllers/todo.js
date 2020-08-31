const ToDo = require("../models/ToDo")

// Get all todos
exports.getIndex = async (req, res) => {
  try {
    const todos = await ToDo.find()
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
    const todo = new ToDo({
      task: task,
      created_at: new Date(),
      updated_at: new Date(),
    })
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
    const todo = await ToDo.findById(id)

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

exports.updateTodo = async (req, res) => {
  const { id } = req.params

  const { task, done } = req.body

  try {
    ToDo.findById(id)
      .then((todo) => {
        todo.task = task
        todo.done = done === null ? todo.done : done
        todo.updated_at = new Date()

        return todo.save()
      })
      .then(() => {
        res.status(201).end()
      })
      .catch((err) => {
        // Need to figure out different options and handle this
        console.log(err)
      })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not update todo." })
  }
}

exports.deleteTodo = async (req, res) => {
  const { id } = req.body

  try {
    const todo = await ToDo.findByIdAndRemove(id)

    if (!todo) {
      res.status(404).json({ error: "Todo not found." })
    } else {
      res.status(204).end()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not delete todo." })
  }
}
