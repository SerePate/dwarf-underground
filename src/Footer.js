import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-header">
          <img src={logo} className="Footer-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Footer-intro">
          To get started, edit <code>src/Footer.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Footer;