import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <h1>About Us</h1>
        <p>This is the About Us page.</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs; 