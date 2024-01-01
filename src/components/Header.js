//Header.js
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    scroll.scrollTo(id, {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  return (
    <header className="fixed-header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
              onClick={() => scrollToSection('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              // offset={-50}
              duration={800}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              // offset={-50}
              duration={800}
              onClick={() => scrollToSection('about')}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
