import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import NetwealthIndiaImage from '../../../assets/PROJECT/WebDev/WebDev/NetwealthIndia.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import MockupNetWealth from '../../../assets/PROJECT/WebDev/WebDev/Mockup_NetWealth.png';

const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const project = {
  title: 'NetWealth India',
  subheader: 'Premium Website for a Modern Fintech Brand',
  description: 'Built a sleek, responsive platform for a finance company offering credit, loans, insurance, and investment tools'
};

const WebDev1 = () => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {/* Back Button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '24px 0 0 48px', zIndex: 2 }}>
        <Button2 onClick={() => navigate('/projects?section=webdev')} style={{ width: 'fit-content', minWidth: '40px' }}>{'< Back to Web Development Projects'}</Button2>
      </div>
      {/* Blur effect at the top */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 0 }}>
        <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '48px 0', marginTop: 48, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 1200,
          background: 'none',
          borderRadius: 32,
          padding: '32px 0',
          gap: 48,
          perspective: 1200,
          width: '100%',
        }}>
          {/* Left: Info */}
          <div style={{ flex: 1, maxWidth: 520, textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '2.8rem', color: '#fff', marginBottom: 12, lineHeight: 1.1 }}>
              {project.title}
            </div>
            <div style={{ color: '#bdbdbd', fontWeight: 700, fontSize: '1.25rem', marginBottom: 12, fontStyle: 'italic' }}>
              {project.subheader}
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.15rem', marginBottom: 40, lineHeight: 1.6 }}>
              {project.description}
            </div>
            <Button2 href="https://netwealth-new.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>Visit Website</Button2>
          </div>
          {/* Right: Image Card */}
          <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <div
              style={{
                position: 'relative',
                width: 540,
                height: 360,
                borderRadius: '1rem',
                border: `2px solid ${hover ? borderHover : borderColor}`,
                background: '#18182a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                transition: 'border-color 0.3s, box-shadow 0.3s',
                boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                style={{
                  width: 500,
                  height: 320,
                  borderRadius: '0.7rem',
                  border: `2px solid ${hover ? borderHover : borderColor}`,
                  background: innerBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0,
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
                }}
              >
                <img src={NetwealthIndiaImage} alt="Project Screenshot" style={{
                  width: '95%',
                  height: '90%',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: '0.7rem',
                  background: '#18182a',
                  margin: 0
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mockup Section - Responsive Devices */}
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
        <img src={MockupNetWealth} alt="NetWealth Responsive Mockup" style={{
          width: '80vw',
          maxWidth: 900,
          minWidth: 220,
          display: 'block',
          borderRadius: 24,
          margin: '0 auto',
        }} />
      </div>
      <Footer />
    </div>
  );
};

export default WebDev1;
