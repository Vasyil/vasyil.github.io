import React, { Component } from "react";

class SliderBlock extends Component {
  render() {
    return (
      <div className="slider-body__block">
        <img src={this.props.src} alt={this.props.text} />
        <h4 style={{ color: this.props.color }} className="slider-body__title">
          {this.props.text}
        </h4>
        <p className="slider-body__text">{this.props.title}</p>
      </div>
    );
  }
}

export default SliderBlock;
