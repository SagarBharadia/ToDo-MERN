import React, { Component } from "react"

class ToDoRow extends Component {
  toggleDone = (id, done) => {
    const payload = {
      done: done,
    }
    fetch(`http://localhost:3000/todos/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((todo) => this.props.updateToDos(todo))
  }

  render() {
    const { todo } = { ...this.props }
    return (
      <tr
        onClick={this.toggleDone.bind(this, todo._id, !todo.done)}
        className={`todo-row ${todo.done ? "complete" : ""}`}
      >
        <td>{todo.task}</td>
      </tr>
    )
  }
}

export default ToDoRow
