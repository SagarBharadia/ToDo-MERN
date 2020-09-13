const ToDo = require("../models/ToDo")
const { genErrorBag } = require("../util/ErrorHandling")

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
      done: false,
      created_at: new Date(),
      updated_at: new Date(),
    })
    todo.save((err) => {
      if (err) {
        const errorBag = genErrorBag(err.errors)

        res.status(422).json(errorBag)
      } else {
        res.status(200).json(todo)
      }
    })
  } catch (error) {
    res.status(500).json({ error: "Could not create todo." })
    console.log(error)
  }
}

// Get todo
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

// Update todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params

  const { task, done } = { ...req.body }

  try {
    ToDo.findById(id).then((todo) => {
      if (!todo) {
        res.status(404).end()
        return
      }

      console.log(todo)

      todo.task = task === undefined ? todo.task : task
      todo.done = done === undefined ? todo.done : done
      todo.updated_at = new Date()

      console.log(todo)

      return todo.save((err) => {
        if (err) {
          const errorBag = genErrorBag(err.errors)

          res.status(422).json(errorBag)
        } else {
          res.status(200).json(todo)
        }
      })
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not update todo." })
  }
}

// Delete todo
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
