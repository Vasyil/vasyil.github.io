import React, { Component } from "react";
import "./Title.css";
import list from "./list";
import ListComponent from "./components/ListComponent";

class Header extends Component {
  render() {
    return (
      <section className="text">
        <div className="text-title">
          <h3 className="text-title__h3">top stories</h3>
          <h1 className="text-title__h1">
            The World's Oceans Are
            <br />
            Warming 13% Faster
            <br />
            Than Previously Thought
          </h1>
          <h5 className="text-title__h5">Continue reading</h5>
        </div>
        <ul className="text-footer">
          {list.map(({id, text, number}) => {
            return (
              <ListComponent
                key={id}
                number={number}
                text={text}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Header;
