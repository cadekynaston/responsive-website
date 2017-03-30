import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import TextImage from './TextImage';
import MainImage from './MainImage'
import main from './images/main.jpeg';
import first from './images/first.jpeg';
import second from './images/second.jpeg';
import third from './images/third.jpeg';

let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainImage image={main} text="This is some text!"/>
        <div className="text-image-container">
          <TextImage image={first} text={text}/>
          <TextImage image={second} text={text}/>
          <TextImage image={third} text={text}/>
        </div>
        <div className="App-footer">
          <h2>Footer</h2>
        </div>
      </div>
    );
  }
}

export default App;
