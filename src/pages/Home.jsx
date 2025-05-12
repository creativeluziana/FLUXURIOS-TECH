import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeContent from '../components/Home/hero.jsx';
import WhatWeBuild from '../components/Home/whatwebuild.jsx';
import HowWeDeliver from '../components/Home/HowWeDeliver.jsx';
import OurWork from '../components/Home/OurWork.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HomeContent />
      <WhatWeBuild />
      <HowWeDeliver />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;