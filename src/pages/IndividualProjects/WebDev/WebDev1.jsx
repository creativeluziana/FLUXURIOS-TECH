import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import NetwealthIndiaImage from '../../../assets/PROJECT/WebDev/WebDev/NetwealthIndia.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import MockupNetWealth from '../../../assets/PROJECT/WebDev/WebDev/Mockup_NetWealth.png';
import VideoNetWealthIndia from '../../../assets/PROJECT/WebDev/WebDev/Video_NetWealthIndia.mp4';
import { motion } from 'framer-motion';
import '../../../styles/Projects/WebDev1.css';

const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const project = {
  title: 'NetWealth India',
  subheader: 'Premium Website for a Modern Fintech Brand',
  description: 'Built a sleek, responsive platform for a finance company offering credit, loans, insurance, and investment tools'
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for better mobile feel
    },
  }),
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
      {/* Top Section: Responsive Layout */}
      <motion.div 
        className="webdev1-top-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={0}
        variants={cardVariants}
        style={{ perspective: '1000px' }}
      >
        {/* Image Card First on Mobile */}
        <motion.div 
          className="webdev1-image-box"
          custom={1}
          variants={cardVariants}
        >
          <div
            className="webdev1-image-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none' }}
          >
            <div
              className="webdev1-image-inner"
              style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none', background: innerBg }}
            >
              <img src={NetwealthIndiaImage} alt="Project Screenshot" className="webdev1-main-img" />
            </div>
          </div>
        </motion.div>
        {/* Info Box */}
        <motion.div 
          className="webdev1-info-box"
          custom={2}
          variants={cardVariants}
        >
          <div className="webdev1-title">{project.title}</div>
          <div className="webdev1-subheader">{project.subheader}</div>
          <div className="webdev1-description">{project.description}</div>
          <Button2 href="https://netwealth-new.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>Visit Website</Button2>
        </motion.div>
      </motion.div>
      {/* Mockup Section - Responsive Devices */}
      <motion.div 
        style={{
        width: '100%',
        background: 'radial-gradient(ellipse at center, #2d0b4e 0%, #0A0A1B 100%)',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
          perspective: '1000px',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={3}
        variants={cardVariants}
      >
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: '-1px',
          padding: '0 24px',
        }}>
          We don't just build websites — we craft digital experiences.
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          padding: '0 24px',
        }}>
          A modern web solution tailored to your vision — responsive, scalable, and designed to elevate user experience across every screen.
        </div>
        <img src={MockupNetWealth} alt="NetWealth Responsive Mockup" style={{
          width: '90vw',
          maxWidth: 1000,
          minWidth: 280,
          display: 'block',
          borderRadius: 24,
          margin: '0 auto',
        }} />
      </motion.div>
      {/* Walkthrough Section */}
      <motion.div 
        style={{
        width: '100%',
        background: '#0A0A1B',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        position: 'relative',
          perspective: '1000px',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={4}
        variants={cardVariants}
      >
        {/* Decorative Blur at the top of the section */}
        <img src={BlurImage} alt="Blur" style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          maxWidth: 900,
          minWidth: 180,
          opacity: 0.7,
          filter: 'blur(2px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 12,
          letterSpacing: '-1px',
          zIndex: 1,
        }}>
          Watch the Full Walkthrough
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          zIndex: 1,
        }}>
          A quick video tour of our fintech platform — explore features, design, and functionality in under 2 minutes.
        </div>
        <div
          style={{
            position: 'relative',
            width: 'clamp(75vw, 350px, 350px)',
            maxWidth: '75vw',
            height: 'clamp(200px, 35vw, 400px)',
            borderRadius: '1rem',
            border: `2px solid ${hover ? borderHover : borderColor}`,
            background: '#18182a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none',
            margin: '0 auto',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            style={{
              width: 'clamp(70vw, 310px, 310px)',
              maxWidth: '70vw',
              height: 'clamp(150px, 30vw, 360px)',
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
            <video
              src={VideoNetWealthIndia}
              controls
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '0.7rem',
                background: '#18182a',
                margin: 0
              }}
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default WebDev1;
