import React, { Component } from "react";

class BlockList extends Component {
  render() {
    return (
      <div className="content-box" id={this.props.id}>
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="content-box__img"
        />
        <div className="content-box__text">
          <h4
            style={{ color: this.props.color }}
            className="content-box__science"
          >
            {this.props.alt}
          </h4>
          <h2 className="content-box__title">{this.props.title}</h2>
          <p className="content-box__paragraph">{this.props.paragraph}</p>
          <div className="content-box__line" />
          <div className="content-box__date">
            <h5>{this.props.date}</h5>
            <h5>{this.props.time}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockList;
