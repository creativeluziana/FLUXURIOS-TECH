import React from 'react';
import '../../styles/Pricing/PricingHero.css';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';

const PricingHero = () => {
  return (
    <div className="pricing-hero">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="pricing-hero-blur-top" />
      
      <div className="pricing-hero-content">
        <h1 className="pricing-hero-title">
          <span className="highlight">Try It</span> Out First, Then <span className="highlight">Choose</span> a Strategy.
        </h1>
        <p className="pricing-hero-description">
          Simple plans, simple prices. Only pay for what you really need. Change or cancel your plan at anytime.
        </p>
      </div>
      
      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="pricing-hero-bottom-pattern" />
    </div>
  );
};

export default PricingHero;
