import React, { Component } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./pages/home/Home"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
