import React, { Component } from "react";

class NavList extends Component {
  render() {
    return (
      <li className="header-nav__item">
        <a href={this.props.src} className="header-nav__link">
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default NavList;
