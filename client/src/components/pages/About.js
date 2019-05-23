import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className='about-header'>
          <ul className='nav justify-content-center'>
            <a
              href='https://twitter.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              <i className='fab fa-twitter icon' />
            </a>
            <a
              href='https://instagram.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              <i className='fab fa-instagram icon' />
            </a>
            <a
              href='https://facebook.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              <i className='fab fa-facebook icon' />
            </a>
          </ul>
          <h4 className='header-text'>
            <span className='text-danger'>Follow us. </span>Stay in the loop
          </h4>
        </div>
        <div className='banner'>
          <img
            src='https://wearebrewstuds.com/wp-content/uploads/2016/02/new-belgium-craft-beer-giving-conservation-alliance-colorado-scenery.jpg'
            alt='Mountains'
            className='about-background'
          />
          <h1 className='centered'>
            <b>Colorado Photography </b>
            <i className='fas fa-camera-retro' />
          </h1>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col about-info'>
              <h3 className='smaller-header'>10 years experience</h3>
              <p>
                We hold almost 10 years experience in the industry. Time and
                time again we have proved that clients always come first. No
                project will ever be too small or too large for our team.
                Testimonials can be provided upon request. However, we believe
                that our work will speak for itself. Collaboratively build
                backward-compatible relationships whereas tactical paradigms.
              </p>
            </div>
            <div className='col about-info'>
              <h3>Local</h3>
              <p>
                We believe that being local is important. As a company that was
                founded and developed in Colorado we belive in the importance of
                keeping things local. We value the community, nature and beauty
                of Colorado. A team that prioritises its values will never go
                unnoticed.Progressively network performance based services for
                functionalized testing procedures.
              </p>
            </div>
            <div className='col about-info'>
              <h3> Values </h3>
              <p>
                Many large companys that you seek will filter out smaller
                clients. Looking for only the biggest paycheck. Here at Colorado
                Photography we evaluate every single indivual client. We do this
                in order to perfectly taylor and meet your every need. No
                request will go ignored. You will be in the right hands with us.
                Wether it be for a wedding, birthday, private shoot or landscape
                shoots.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
