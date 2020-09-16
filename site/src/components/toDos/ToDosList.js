import React, { Component } from "react"
import "./ToDoList.css"

class ToDosTable extends Component {
  render() {
    const { todos } = { ...this.props }
    // return (
    //   <table class="table">
    //     <tbody>
    //       {todos.map((todo) => {
    //         return <ToDoRow key={todo._id} todo={todo} />
    //       })}
    //     </tbody>
    //   </table>
    // )
    return (
      <ol class="todo-list styled">
        {todos.map((todo) => {
          return (
            <li className="list-item">
              <div className="w-75">{todo.task}</div>
              <div className="w-25 text-right">&#xB7;&#xB7;&#xB7;</div>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default ToDosTable
