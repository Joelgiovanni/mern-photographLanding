import React, { Component } from 'react';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <p>Home</p>
        </li>
        <li className='nav-item'>
          <p>Portfolio</p>
        </li>
        <li className='nav-item'>
          <p>Inquiries</p>
        </li>
        <li className='nav-item'>
          <p>Contact</p>
        </li>
      </ul>
    );
  }
}

export default Navbar;
