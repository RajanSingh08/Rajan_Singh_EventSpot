import React from 'react';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';


const Homepage = () => {
  return (
    <div className="pb-4 bg-background-gray overflow-y-hidden">
      <Hero />
      <Projects />
      <Recommendations />
      <Contact />
    </div>
  );
};

export default Homepage;
