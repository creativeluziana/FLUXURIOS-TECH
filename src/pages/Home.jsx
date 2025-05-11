import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/hero';
import WhatWeBuild from '../components/Home/whatwebuild';
import WhatsUnderHood from '../components/Home/WhatsUnderHood';
import HowWeDeliver from '../components/Home/HowWeDeliver';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <WhatWeBuild />
      <WhatsUnderHood />
      <HowWeDeliver />
    </div>
  );
};

export default Home;