import React, { Component } from 'react';
//import logo from './logo.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          LOGO
        </div>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Search</a>
        </div>

      </div>
    );
  }
}

export default Nav;
