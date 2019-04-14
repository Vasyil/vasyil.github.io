import React, { Component } from "react";
import "./Slider.css";
import list from "./list";
import SliderBlock from "./components/SliderBlock";

class Slider extends Component {
  render() {
    return (
      <section className="slider">
        <div className="slider-body">
          <h4 className="slider-title">TRENDING NOW</h4>
          <div className="slider-body__slide slide">
            {list.map(({id, src, color, text, title}) => {
              return (
                <SliderBlock
                  key={id}
                  src={src}
                  text={text}
                  color={color}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
