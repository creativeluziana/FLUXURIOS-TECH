import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PricingContent from '../components/Pricing/PricingContent.jsx';

const Pricing = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="pricing-container">
        <PricingContent />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;  
