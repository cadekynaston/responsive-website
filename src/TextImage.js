import React, { Component } from 'react';
//import logo from './logo.svg';
import './TextImage.css';


class TextImage extends Component {
  render(props) {
    return (
      <div className="main-container">
          <img src={this.props.image} alt="Not Found"/>
          <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TextImage;
