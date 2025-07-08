import React from 'react';
import ProjectImage from '../../assets/projects.png';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern_plain.png';
import { motion } from 'framer-motion';
import Button2 from '../Button2';
import Button1 from '../Button1';

const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.18,
      ease: 'easeOut',
    },
  }),
};

const PROJECTS = {
  'Web Design': [
    { id: 1, reverse: false, title: 'AI Distraction Free Learning Platform', desc: 'Custom digital products, designed with precision and delivered with speed — no shortcuts, no compromises.' },
    { id: 2, reverse: true, title: 'Modern Portfolio Website', desc: 'A sleek, responsive portfolio for creative professionals.' },
    { id: 3, reverse: false, title: 'Landing Page UI Kit', desc: 'A conversion-focused landing page for SaaS startups.' },
  ],
  'Web Development': [
    { id: 1, reverse: false, title: 'E-Commerce Backend', desc: 'Robust backend for scalable online stores.' },
    { id: 2, reverse: true, title: 'API Integration Suite', desc: 'Seamless API integrations for modern web apps.' },
    { id: 3, reverse: false, title: 'Real-Time Dashboard', desc: 'Live analytics dashboard for business insights.' },
  ],
  'App Development': [
    { id: 1, reverse: false, title: 'Productivity Mobile App', desc: 'A distraction-free productivity app for teams.' },
    { id: 2, reverse: true, title: 'Fitness Tracker', desc: 'Track workouts and progress with a beautiful UI.' },
    { id: 3, reverse: false, title: 'Social Chat App', desc: 'A real-time chat app with group and private messaging.' },
  ],
};

const FILTERS = ['Web Design', 'Web Development', 'App Development'];

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isMobile;
}

const ProjectCard = ({ reverse, index, title, desc, isMobile }) => {
  const [hover, setHover] = React.useState(false);
  // For mobile, always image first, then text, but keep desktop sizing
  const cardContent = isMobile ? (
    <>
      {/* Image Card */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
        <div
          style={{
            position: 'relative',
            width: '90vw',
            maxWidth: 340,
            height: '56vw',
            maxHeight: 220,
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
              width: '85vw',
              maxWidth: 300,
              height: '48vw',
              maxHeight: 180,
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
            <img src={ProjectImage} alt="Project Screenshot" style={{
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
      {/* Text/Info */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: '2.8rem', color: '#fff', marginBottom: 24, lineHeight: 1.1, textAlign: 'center' }}>
          {title.split(' ').map((word, i) => (i === 2 ? <React.Fragment key={i}><br />{word} </React.Fragment> : word + ' '))}
        </div>
        <div style={{ color: '#e0e0e0', fontSize: '1.15rem', marginBottom: 40, lineHeight: 1.6, textAlign: 'center' }}>
          {desc}
        </div>
        <Button2 onClick={() => alert('View Project clicked!')} style={{ alignSelf: 'center' }}>View Project</Button2>
      </div>
    </>
  ) : (
    <>
      {/* Left: Info */}
      <div style={{ flex: 1, maxWidth: 520, textAlign: 'left' }}>
        <div style={{ fontWeight: 700, fontSize: '2.8rem', color: '#fff', marginBottom: 24, lineHeight: 1.1 }}>
          {title.split(' ').map((word, i) => (i === 2 ? <React.Fragment key={i}><br />{word} </React.Fragment> : word + ' '))}
        </div>
        <div style={{ color: '#e0e0e0', fontSize: '1.15rem', marginBottom: 40, lineHeight: 1.6 }}>
          {desc}
        </div>
        <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
      </div>
      {/* Right: Double Border Image Card with What We Build colors */}
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
            <img src={ProjectImage} alt="Project Screenshot" style={{
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
    </>
  );
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : (reverse ? 'row-reverse' : 'row'),
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1200,
        margin: isMobile ? '32px auto' : '48px auto',
        background: 'none',
        borderRadius: 32,
        padding: isMobile ? '16px 0' : '32px 0',
        gap: isMobile ? 16 : 48,
        perspective: 1200,
        width: '100%',
      }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={cardVariants}
    >
      {cardContent}
    </motion.div>
  );
};

const ProjectsContent = () => {
  const [selected, setSelected] = React.useState(FILTERS[0]);
  const projects = PROJECTS[selected];
  const isMobile = useIsMobile();
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: isMobile ? '0 16px' : 0 }}>
      {/* Top Blur Effect */}
      <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: isMobile ? '90vw' : '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      {/* Filter Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '0.5rem' : '1.5rem',
        marginTop: isMobile ? 40 : 80,
        marginBottom: isMobile ? 32 : 64,
        zIndex: 1,
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        width: isMobile ? '100%' : 'auto',
      }}>
        {FILTERS.map((filter) => (
          selected === filter ? (
            <Button2
              key={filter}
              onClick={() => setSelected(filter)}
              style={{ minWidth: isMobile ? 120 : 0 }}
            >
              {filter}
            </Button2>
          ) : (
            <Button1
            key={filter}
            onClick={() => setSelected(filter)}
              style={{ minWidth: isMobile ? 120 : 0 }}
          >
            {filter}
            </Button1>
          )
        ))}
      </div>
      {/* Project Cards */}
      {projects.map((proj, i) => (
        <ProjectCard
          key={proj.id}
          reverse={proj.reverse}
          index={i}
          title={proj.title}
          desc={proj.desc}
          isMobile={isMobile}
        />
      ))}
      {/* Bottom Pattern */}
      <img src={BottomPattern} alt="Bottom Pattern" style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', maxWidth: 'none', zIndex: 0, pointerEvents: 'none', opacity: 0.4 }} />
    </div>
  );
};

export default ProjectsContent; 