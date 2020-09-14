import PropTypes from "prop-types"
import React, { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    const { title } = { ...this.props }
    return (
      <header>
        <h2 className="title">{title}</h2>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
