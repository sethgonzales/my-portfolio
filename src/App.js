import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Demos from './components/Demos';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
        <Projects />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
        <About />
      </AnimationOnScroll>
      <Demos />
    </div>
  );
};

export default App;
