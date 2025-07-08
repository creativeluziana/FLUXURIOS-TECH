// WebDev2.jsx - Gym Website Project Page
// This file is for the Gym Website project (WebDev2)
import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import GymWebsiteImage from '../../../assets/PROJECT/WebDev/WebDev/GymWebsite.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import MockupGymWebsite from '../../../assets/PROJECT/WebDev/WebDev/Mockup_GymWebsite.png';
import './WebDevStyle.css';

const project = {
  title: 'Gym Website',
  subheader: 'Modern, powerful, and built to move',
  description: 'Sleek design. Fast access. Made for members who lift, train, and hustle—and for the trainers who keep them going.'
};

const WebDev2 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="webdev-root">
      <Navbar />
      {/* Blur effect at the top */}
      <div className="webdev-blur-container">
        <img src={BlurImage} alt="Blur" className="webdev-blur-img" />
      </div>
      <div className="webdev-content">
        <div className="webdev-flex-row">
          {/* Left: Info */}
          <div className="webdev-info">
            <div className="webdev-title">
              {project.title}
            </div>
            <div className="webdev-subheader">
              {project.subheader}
            </div>
            <div className="webdev-description">
              {project.description}
            </div>
            <Button2 onClick={() => alert('View Project clicked!')} style={{ width: 'fit-content', minWidth: '40px' }}>View Project</Button2>
          </div>
          {/* Right: Image Card */}
          <div className="webdev-image-outer">
            <div
              className={`webdev-image-card${hover ? ' webdev-image-card-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`webdev-image-inner${hover ? ' webdev-image-inner-hover' : ''}`}>
                <img src={GymWebsiteImage} alt="Project Screenshot" className="webdev-img" style={{ width: 'fit-content', minWidth: '40px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION - Unified across all WebDev pages */}
      <div style={{
        width: '100%',
        background: 'radial-gradient(ellipse at center, #2d0b4e 0%, #0A0A1B 100%)',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
      }}>
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: '-1px',
        }}>
          We don't just build websites — we craft digital experiences.
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: '1.25rem',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
        }}>
          A modern web solution tailored to your vision — responsive, scalable, and designed to elevate user experience across every screen.
        </div>
        <img src={MockupGymWebsite} alt="Gym Website Responsive Mockup" style={{
          width: '80vw',
          maxWidth: 900,
          minWidth: 220,
          display: 'block',
          borderRadius: 24,
          margin: '0 auto',
        }} />
      </div>
      {/* END HERO SECTION */}
      <Footer />
    </div>
  );
};

export default WebDev2;
