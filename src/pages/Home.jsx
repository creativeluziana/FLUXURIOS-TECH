import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/hero';
import WhatWeBuild from '../components/Home/whatwebuild';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <WhatWeBuild />
    </div>
  );
};

export default Home;