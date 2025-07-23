// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clubs from './components/Clubs';
import Contact from './components/Contact';

const App = () => {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Clubs />
      <Contact />
    </main>
  );
};

export default App;

