import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
};

export default App;
