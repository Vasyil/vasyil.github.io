import React, { Component } from "react";

class ListComponent extends Component {
  render() {
    return (
      <li className="text-footer__item">
        {this.props.number}
        <br /> {this.props.text}
      </li>
    );
  }
}

export default ListComponent;
