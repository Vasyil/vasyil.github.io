import React, { Component } from "react";
import "./Footer.css";
import list from "./footer-list";
import FooterList from "./components/FooterList";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h3 className="footer-title">UpsideDown</h3>
        <nav className="footer-nav" id="footer-navigation">
          {list.map(({title}, index) => {
            return <FooterList key={index} title={title} />;
          })}
        </nav>
      </footer>
    );
  }
}

export default Footer;
