import React from 'react';
import './About.css';
import HeadShot from './../img/headshot.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className='about-left-column'>
          <img alt='Seth Gonzales' src={HeadShot} className='headshot' />
        </div>
        <div className='about-right-column'>
          <div className='welcome'>
            <h1>It's Nice to Meet You</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className='connection-links'>
            <a href="" className='connection-link'>
              <img src="email-logo.png" alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/seth-gonzales/" className='connection-link'>
              <img src="linkedin-logo.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/sethgonzales" className='connection-link'>
              <img src="github-logo.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
