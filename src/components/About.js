import React from 'react';
import './About.css';
import HeadShot from './../img/headshot.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className='about-left-column'>
          <img alt='Seth Gonzales' src={HeadShot} className='headshot' />
          <div className='connection-links'>
            <a href="mailto:sethgonzales157@gmail.com?subject=Hello%20Seth!" className='connection-link'>
              <i className='fa fa-envelope'></i>
            </a>
            <a href="https://www.linkedin.com/in/seth-gonzales/" className='connection-link'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href="https://github.com/sethgonzales" className='connection-link'>
              <i className='fa fa-github'></i>
            </a>
          </div>
        </div>
        <div className='about-right-column'>
          <div className='welcome'>
            <h1>It's Nice to Meet You</h1>
          </div>
          <div className='about-story'>
            <p>
              I am a former Chemistry Educator turned Software Developer.
            </p><br />
            <p>
              In the classroom, I thrived on mentoring students and empowering them through inquiry-based education, all while occasionally showcasing the marvels of a highly exothermic, product favored reaction (aka <em>explosive</em> demonstrations).
            </p><br />

            <p>
              Transitioning into software development, I bring a unique blend of communication, problem-solving, and leadership skills. I am eager to apply my expertise within a collaborative team; I aim to learn, contribute, and craft impactful solutions that resonate.
            </p><br />

            <p>
              I would love the opportunity to grow within your team.
            </p><br />

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
