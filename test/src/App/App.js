import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Slider from "./Slider/Slider";
import Content from "./Content/Content";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Title />
        <Slider />
        <Content />
        <Subscribe />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
