import React, { Component } from "react";

class FooterList extends Component {
  render() {
    return (
      <a href="#header" className="footer-nav__link">
        {this.props.title}
      </a>
    );
  }
}

export default FooterList;
