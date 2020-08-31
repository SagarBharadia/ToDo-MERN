const express = require("express")
const todosController = require("../controllers/todo")

const router = express.Router()

// Get all todos
router.get("/", todosController.getIndex)

// Create a todo
router.post("/create", todosController.createTodo)

// Get a single todo
router.get("/:id", todosController.getTodo)

// Update a todo
// router.post("/:id/update")

// Delete a todo
// router.post("/:id/delete")

module.exports = router
