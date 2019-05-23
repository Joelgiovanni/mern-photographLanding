import React, { Component } from 'react';
import '../styles/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-sm'>
            <div className='picture bg-1'>
              <h1 className='centered-content'>
                <b>NATURE</b>
                <i className='fab fa-pagelines' />
              </h1>
            </div>
          </div>
          <div className='col-sm'>
            <div className='picture bg-2'>
              <h1 className='centered-content'>
                <b>PORTRAIT</b>
                <i className='far fa-user' />
              </h1>
            </div>
          </div>
          <div className='col-sm'>
            <div className='picture bg-3'>
              <h1 className='centered-content'>
                <b classname='mr-2'>EVENTS</b>
                <i className='fas fa-calendar-check' />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
