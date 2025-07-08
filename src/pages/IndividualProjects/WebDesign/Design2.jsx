// Design2.jsx - Student Dashboard Project Page
// This file is for the Student Dashboard project (Design2)
import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import StudentDashboardImage from '../../../assets/PROJECT/WebDev/WebDesign/Student_Dashboard.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import MockupStudentDashboard from '../../../assets/PROJECT/WebDev/WebDesign/Mockup_StudentDashboard.png';
import './Design.css';

const project = {
  title: 'Student Dashboard',
  subheader: 'One hub. Everything students need',
  description: 'Designed a platform to uplift underserved students—accessible, inspiring, and built to break barriers.'
};

const Design2 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="design-root">
      <Navbar />
      {/* Blur effect at the top */}
      <div className="design-blur-container">
        <img src={BlurImage} alt="Blur" className="design-blur-img" />
      </div>
      <div className="design-content">
        <div className="design-flex-row">
          {/* Left: Info */}
          <div className="design-info">
            <div className="design-title">
              {project.title}
            </div>
            <div className="design-subheader">
              {project.subheader}
            </div>
            <div className="design-description">
              {project.description}
            </div>
            <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
          </div>
          {/* Right: Image Card */}
          <div className="design-image-outer">
            <div
              className={`design-image-card${hover ? ' design-image-card-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`design-image-inner${hover ? ' design-image-inner-hover' : ''}`}>
                <img src={StudentDashboardImage} alt="Project Screenshot" className="design-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION - Unified across all Design pages */}
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
        <img src={MockupStudentDashboard} alt="Student Dashboard Responsive Mockup" style={{
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

export default Design2;
