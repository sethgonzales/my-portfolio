//Home.js
import React from 'react';
import './Home.css';
import AtomAnimation from './AtomAnimation';


const Home = () => {
  return (
    <div id="home" className="home">
      <div className="left-column">
        <h1>Seth Gonzales</h1>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <div className="right-column">
        <AtomAnimation />
      </div>
    </div>
  );
};

export default Home;
