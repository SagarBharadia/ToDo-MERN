import React, { Component } from "react"

class ToDosTable extends Component {
  state = {
    todos: [],
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
    return <div></div>
  }
}

export default ToDosTable
