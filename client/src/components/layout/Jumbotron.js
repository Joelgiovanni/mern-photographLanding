import React, { Component } from 'react';
import './styles/Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className='overlay'>
        <img
          src='https://i.pinimg.com/originals/98/97/ad/9897adca581976d74c2d3e298e00b22b.jpg'
          alt='Mountains'
          className='background'
        />

        <h1 className='centered'>
          <b>Colorado Photography </b>
          <i className='fas fa-camera-retro' />
        </h1>
      </div>
    );
  }
}

export default Jumbotron;
