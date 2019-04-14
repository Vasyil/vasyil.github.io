import React, { Component } from "react";

class BlocktItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.select
    }
  }
  handleClick = () => {
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {
    return (
      <div
        className={this.props.class}
        style={{ backgroundImage: `url(${this.props.src})` }}        
        onClick={this.handleClick}
      >
        <span className="subscribe-technology__selected">
          {this.state.selected ? "SELECTED" : ""}
        </span>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default BlocktItem;
