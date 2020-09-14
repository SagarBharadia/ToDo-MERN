import React, { Component } from "react"
import ToDoRow from "./partials/ToDoRow"

class ToDosTable extends Component {
  state = {
    todos: [],
  }

  updateToDos = (updatedToDo) => {
    const updatedToDos = this.state.todos.map((todo) => {
      if (todo._id === updatedToDo._id) {
        return updatedToDo
      } else {
        return todo
      }
    })
    this.setState({
      todos: updatedToDos,
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then((todos) => todos.json())
      .then((todos) => {
        this.setState({
          todos: todos,
        })
      })
  }

  render() {
    const { todos } = { ...this.state }
    return (
      <table id="todo-table">
        <tbody>
          {todos.map((todo) => {
            return (
              <ToDoRow
                key={todo._id}
                todo={todo}
                updateToDos={this.updateToDos}
              />
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default ToDosTable
