import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <Projects />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <About />
      </AnimationOnScroll>
    </div>
  );
};

export default App;
