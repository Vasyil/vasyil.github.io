import React, { Component } from "react";
import "./Subscribe.css";
import rectangleList from "./subscribe-list";
import blockList from "./block-list";
import BlocktItem from "./components/BlockItem";
import RectangleList from "./components/RectangleList";

class Subscribe extends Component {
  state = {
    inputText: '',
    selected: blockList.map(item => item.select)
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = ({target: {value}}) => {
    this.setState({
      inputText: value
    });
  }
  
  render() {
    const {inputText} = this.state;
    return (
      <section className="subscribe" id="brain">
        <div className="subscribe-form">
          <h2 className="subscribe-form__title">News Tailored to Your Taste</h2>
          <p className="subscribe-form__text">
            Select any category, which looks interesting to you for receiving
            your personazlied article selection at the beginning of each week.
          </p>
          <div className="subscribe-form__mail">
            <form onSubmit={this.handleSubmit} className="subscribe-form__block">
            <input
              className="subscribe-form__input"
              type="text"
              placeholder="beamazing@gmail.com"
              pattern="[a-zA-Z0-9.-_]{4,}@[a-zA-Z.-]{2,}[.][a-zA-Z]{2,}"
              value={inputText}
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="YEAH, LET’S DO IT!" className="subscribe-form__button" />
            </form>
          </div>
        </div>
        <div className="subscribe-technology">
          <h4 className="subscribe-technology__title">
            PICK CATEGORIES YOU LIKE
          </h4>
          <div className="subscribe-technology__blocks">
            {blockList.map((item, index) => {
              return (
                <BlocktItem
                  class={item.class}
                  src={item.src}
                  key={index}
                  text={item.text}
                  select={this.state.selected[index]}
                />
              );
            })}
          </div>
        </div>
        {rectangleList.map((item, index) => {
          return <RectangleList class={item} key={index} />;
        })}
      </section>
    );
  }
}

export default Subscribe;
