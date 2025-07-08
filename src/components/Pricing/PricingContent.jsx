import React from 'react';
import '../../styles/Pricing/PricingContent.css';
import Button2 from '../Button2';
import HomeImage from '../../assets/home_img1.png';
import BottomPattern from '../../assets/bottom_pattern_plain.png';

const PricingContent = () => {

  return (
    <main className="main">
      <div className="content">
        {/* Left Content */}
        <div className="left-content">
          <h1 className="hero-title">
            THIS IS PRICING CONTENT SECTION OK     
          </h1>
          
          <p className="hero-description">
          From atomic design systems to full-stack backend integrations, every Fluxurious build comes with premium features engineered for speed, scalability, and polish.
          </p>

          <div className="buttons">
            <Button2>Explore Features</Button2>
          </div>

          
        </div>

        {/* Right Content (Image) */}
        <div className="right-content">
          <div className="dashboard-container">
            <div className="glow-effect"></div>
            <img src={HomeImage} alt="Dashboard Preview" className="dashboard-image" />
          </div>
        </div>
      </div>
      <img src={BottomPattern} alt="" className="bottom-pattern" style={{ width: '100%', maxWidth: 'none' }} />
    </main>
  );
};

export default PricingContent; 