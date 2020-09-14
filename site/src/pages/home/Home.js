import React, { Component } from "react"
import Header from "components/header/Header"

class Home extends Component {
  state = {
    title: "",
  }

  generateDate = () => {
    const today = new Date()
    let dateToString = ""

    switch (today.getDay()) {
      case 0:
        dateToString += `Sunday ${today.getDate()},`
        break
      case 1:
        dateToString += `Monday ${today.getDate()},`
        break
      case 2:
        dateToString += `Tuesday ${today.getDate()},`
        break
      case 3:
        dateToString += `Wednesday ${today.getDate()},`
        break
      case 4:
        dateToString += `Thursday ${today.getDate()},`
        break
      case 5:
        dateToString += `Friday ${today.getDate()},`
        break
      case 6:
        dateToString += `Saturday ${today.getDate()},`
        break
    }

    switch (today.getMonth()) {
      case 0:
        dateToString += " Jan"
        break
      case 1:
        dateToString += " Feb"
        break
      case 2:
        dateToString += " Mar"
        break
      case 3:
        dateToString += " Apr"
        break
      case 4:
        dateToString += " May"
        break
      case 5:
        dateToString += " Jun"
        break
      case 6:
        dateToString += " Jul"
        break
      case 7:
        dateToString += " Aug"
        break
      case 8:
        dateToString += " Sep"
        break
      case 9:
        dateToString += " Oct"
        break
      case 10:
        dateToString += " Nov"
        break
      case 11:
        dateToString += " Dec"
        break
    }

    this.setState({
      title: dateToString,
    })
  }

  componentDidMount() {
    this.generateDate()
  }

  render() {
    const { title } = { ...this.state }
    return (
      <div>
        <Header title={title} />
        <div className="content">
          <h2 class="subtitle-with-border">
            <span>Tasks</span>
          </h2>
        </div>
      </div>
    )
  }
}

export default Home
