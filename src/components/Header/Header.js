import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Movies</h1>
        <NavLink to="/">Home</NavLink>

      </header>
    )
  }
}
export default Header;