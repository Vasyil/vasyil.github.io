import React, { Component } from "react";
import NavList from "./components/NavList";
import "./Header.css";
import list from "./list";

class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <nav className="header-nav">
          <input className="header-nav__checkbox" type="checkbox" id="burger" />
          <label className="header-nav__menu" htmlFor="burger" />
          <div className="header-nav__logo">UpsideDown</div>
          <ul className="header-nav__list" id="header-navigation">
            {list.map(({id, text, src}) => {
              return (
                <NavList src={src} text={text} key={id} />
              );
            })}
            <li className="header-nav__search" />
            <li className="header-nav__ring" />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
