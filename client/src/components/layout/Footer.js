import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='footer'>
          <div className='footer-content'>
            <span className='copyright'> &#169; </span>
            Joel Godoy {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
