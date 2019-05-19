import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/portfolio' className='link'>
            Portfolio
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='link'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='link'>
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
