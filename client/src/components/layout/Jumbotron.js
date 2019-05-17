import React, { Component } from 'react';
import './styles/Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div
        id='carouselExampleSlidesOnly'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100 bg-image'
              src='https://i.pinimg.com/originals/98/97/ad/9897adca581976d74c2d3e298e00b22b.jpg'
              alt='First slide'
            />
            <div class='carousel-content'>
              <h1>TEST</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
