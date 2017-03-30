import React, { Component } from 'react';
//import logo from './logo.svg';
import './MainImage.css';


class MainImage extends Component {
  render(props) {
    return (
      <div className="top-container">
          <img src={this.props.image} alt="Not Found"/>
          <p>{this.props.text}</p>
      </div>
    );
  }
}

export default MainImage;
