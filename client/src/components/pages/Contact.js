import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div class='container'>
        <div class='row mt-5'>
          <div class='col-7'>
            <h1 className='header hello'>Dont be a stranger</h1>
            <div>
              <h1 className='header'>Need help?</h1>
              <p className='supporting-text'>coloradophotography@gmail.com</p>
            </div>
            <div>
              <h1 className='header'>Business Phone</h1>
              <p className='supporting-text'>303-555-555</p>
            </div>{' '}
          </div>
          {/* Contact Form */}
          <div class='col-5'>
            <form>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Name</label>
                <input
                  type='name'
                  class='form-control'
                  placeholder='Enter Name'
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  placeholder='Enter email'
                />
              </div>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Budget</label>
                <input
                  type='boolean'
                  class='form-control'
                  placeholder='Budget for photoshoot $'
                />
              </div>
              <div class='form-group'>
                <label for='exampleFormControlTextarea1'>Description</label>
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='Describe the job that you would like done. Please include the dates for job'
                />
              </div>

              <button type='submit' class='btn btn-outline-secondary'>
                GO !
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
