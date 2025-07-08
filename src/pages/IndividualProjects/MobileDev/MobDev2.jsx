// MobDev2.jsx - Fitness Tracker Project Page
// This file is for the Fitness Tracker project (MobDev2)
import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import './MobDev.css';

const project = {
  title: 'Fitness Tracker',
  subheader: 'Health & Wellness',
  description: 'Track workouts and progress with a beautiful UI.'
};

const MobDev2 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="mobdev-root">
      <Navbar />
      {/* Blur effect at the top */}
      <div className="mobdev-blur-container">
        <img src={BlurImage} alt="Blur" className="mobdev-blur-img" />
      </div>
      <div className="mobdev-content">
        <div className="mobdev-flex-row">
          {/* Left: Info */}
          <div className="mobdev-info">
            <div className="mobdev-title">
              {project.title}
            </div>
            <div className="mobdev-subheader">
              {project.subheader}
            </div>
            <div className="mobdev-description">
              {project.description}
            </div>
            <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
          </div>
          {/* Right: Image Card */}
          <div className="mobdev-image-outer">
            <div
              className={`mobdev-image-card${hover ? ' mobdev-image-card-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`mobdev-image-inner${hover ? ' mobdev-image-inner-hover' : ''}`}>
                {/* No image provided for this project */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobDev2;
