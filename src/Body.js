import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div className="Body-top">
          <img src={logo} className="Body-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Body-intro">
          To get started, edit <code>src/Body.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Body;