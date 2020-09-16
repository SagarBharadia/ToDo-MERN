import React, { Component } from "react"
import "./MobileNav.css"

export default class MobileNav extends Component {
  render() {
    return (
      <div id="mobile-nav">
        <i class="fas fa-calendar-day btn"></i>
        <i class="fas fa-clock btn"></i>
        <i class="fas fa-plus btn standout"></i>
        <i class="fas fa-check-square btn"></i>
        <i class="fas fa-user btn"></i>
      </div>
    )
  }
}
