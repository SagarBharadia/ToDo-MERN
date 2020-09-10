import React, { Component } from "react"
import "./App.css"
import "./Components/ToDosTable"
import ToDosTable from "./Components/ToDosTable"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>What have I got ToDo today?</h1>
        <ToDosTable />
      </div>
    )
  }
}

export default App
