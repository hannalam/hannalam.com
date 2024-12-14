import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Yoga from './components/Yoga';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Yoga />
        <Contact />
      </div>
    </div>
  );
}

export default App;