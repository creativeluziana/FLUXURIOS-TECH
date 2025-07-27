import React from 'react';
import ProjectImage from '../../assets/projects.png';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern_plain.png';
import { motion } from 'framer-motion';
import Button2 from '../Button2';
import Button1 from '../Button1';
import { Link, useLocation } from 'react-router-dom';
import NetwealthIndiaImage from '../../assets/PROJECT/WebDev/WebDev/NetwealthIndia.png';
import GymWebsiteImage from '../../assets/PROJECT/WebDev/WebDev/GymWebsite.png';
import LuxuryVacationsImage from '../../assets/PROJECT/WebDev/WebDev/LuxuryVacations.png';
import BaysideSportsImage from '../../assets/PROJECT/WebDev/WebDev/BaysideSports.png';
import AarohanImage from '../../assets/PROJECT/WebDev/WebDesign/Aarohan.png';
import StudentDashboardImage from '../../assets/PROJECT/WebDev/WebDesign/Student_Dashboard.png';
import FashionWebDesignImage from '../../assets/PROJECT/WebDev/WebDesign/FashionWebDesign.png';

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
    { id: 1, reverse: false, title: 'Aarohan', subheader: 'Education for every dream', description: 'Designed a platform to uplift underserved students—accessible, inspiring, and built to break barriers.', image: AarohanImage },
    { id: 2, reverse: true, title: 'Student Dashboard', subheader: 'One hub. Everything students need', description: 'Designed a platform to uplift underserved students—accessible, inspiring, and built to break barriers.', image: StudentDashboardImage },
    { id: 3, reverse: false, title: 'Fashion Website', subheader: 'Style that speaks digital', description: 'Built a bold, trend-forward site where aesthetics and usability walk the runway together.', image: FashionWebDesignImage },
  ],
  'Web Development': [
    { id: 1, reverse: false, title: 'NetWealth India', subheader: 'Premium Website for a Modern Fintech Brand', description: 'Built a sleek, responsive platform for a finance company offering credit, loans, insurance, and investment tools' },
    { id: 2, reverse: true, title: 'Gym Website', subheader: 'Modern, powerful, and built to move', description: 'Sleek design. Fast access. Made for members who lift, train, and hustle—and for the trainers who keep them going.', image: GymWebsiteImage },
    { id: 3, reverse: false, title: 'Luxe Escapes', subheader: 'Luxury travel, front and center', description: 'Crafted a visually immersive experience for high-end getaways—where stunning design meets one-click bookings.', image: LuxuryVacationsImage },
    { id: 4, reverse: true, title: 'Bayside Sports Redesign', subheader: 'Scalable Online Store', description: 'Revamped the site for speed, clarity, and energy—so fans and players connect with the action in seconds.', image: BaysideSportsImage },
  ],
  'App Development': [
    { id: 1, reverse: false, title: 'Productivity Mobile App', subheader: 'Team Productivity', description: 'A distraction-free productivity app for teams.' },
    { id: 2, reverse: true, title: 'Fitness Tracker', subheader: 'Health & Wellness', description: 'Track workouts and progress with a beautiful UI.' }
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

function useIsVerySmallScreen(breakpoint = 490) {
  const [isVerySmall, setIsVerySmall] = React.useState(() => window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const onResize = () => setIsVerySmall(window.innerWidth <= breakpoint);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);
  return isVerySmall;
}

const ProjectCard = ({ reverse, index, title, subheader, description, image, isMobile }) => {
  const [hover, setHover] = React.useState(false);
  const isFirstWebDev = title === 'NetWealth India';
  const isSecondWebDev = title === 'Gym Website';
  const isThirdWebDev = title === 'Luxe Escapes';
  const isFourthWebDev = title === 'Bayside Sports Redesign';
  const isFirstWebDesign = title === 'Aarohan';
  const isSecondWebDesign = title === 'Student Dashboard';
  const isThirdWebDesign = title === 'Fashion Website';
  const isFirstAppDev = title === 'Productivity Mobile App';
  const isSecondAppDev = title === 'Fitness Tracker';
  const displayImage = image || (isFirstWebDev ? NetwealthIndiaImage : ProjectImage);
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
            <img src={displayImage} alt="Project Screenshot" style={{
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
        <div style={{ fontWeight: 700, fontSize: '2.8rem', color: '#fff', marginBottom: 12, lineHeight: 1.1, textAlign: 'center' }}>
          {title}
        </div>
        <div style={{ color: '#bdbdbd', fontWeight: 700, fontSize: '1.25rem', marginBottom: 12, textAlign: 'center', fontStyle: 'italic' }}>{subheader}</div>
        <div style={{ color: '#e0e0e0', fontSize: '1.15rem', marginBottom: 40, lineHeight: 1.6, textAlign: 'center' }}>
          {description}
        </div>
        {isFirstAppDev ? (
          <Link to="/projects/appdev/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondAppDev ? (
          <Link to="/projects/appdev/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDesign ? (
          <Link to="/projects/webdesign/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDesign ? (
          <Link to="/projects/webdesign/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDesign ? (
          <Link to="/projects/webdesign/3" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDev ? (
          <Link to="/projects/webdev/1" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDev ? (
          <Link to="/projects/webdev/2" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDev ? (
          <Link to="/projects/webdev/3" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFourthWebDev ? (
          <Link to="/projects/webdev/4" style={{ alignSelf: 'center', textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : (
          <Button2 onClick={() => alert('View Project clicked!')} style={{ alignSelf: 'center' }}>View Project</Button2>
        )}
      </div>
    </>
  ) : (
    <>
      {/* Left: Info */}
      <div style={{ flex: 1, maxWidth: 520, textAlign: 'left' }}>
        <div style={{ fontWeight: 700, fontSize: '2.8rem', color: '#fff', marginBottom: 12, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ color: '#bdbdbd', fontWeight: 700, fontSize: '1.25rem', marginBottom: 12, fontStyle: 'italic' }}>{subheader}</div>
        <div style={{ color: '#e0e0e0', fontSize: '1.15rem', marginBottom: 40, lineHeight: 1.6 }}>
          {description}
        </div>
        {isFirstAppDev ? (
          <Link to="/projects/appdev/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondAppDev ? (
          <Link to="/projects/appdev/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDesign ? (
          <Link to="/projects/webdesign/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDesign ? (
          <Link to="/projects/webdesign/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDesign ? (
          <Link to="/projects/webdesign/3" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFirstWebDev ? (
          <Link to="/projects/webdev/1" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isSecondWebDev ? (
          <Link to="/projects/webdev/2" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isThirdWebDev ? (
          <Link to="/projects/webdev/3" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : isFourthWebDev ? (
          <Link to="/projects/webdev/4" style={{ textDecoration: 'none' }}>
            <Button2>View Project</Button2>
          </Link>
        ) : (
          <Button2 onClick={() => alert('View Project clicked!')}>View Project</Button2>
        )}
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
            <img src={displayImage} alt="Project Screenshot" style={{
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
  const location = useLocation();
  // Get section from query param
  const params = new URLSearchParams(location.search);
  const sectionParam = params.get('section');
  const sectionMap = {
    webdesign: 'Web Design',
    webdev: 'Web Development',
    appdev: 'App Development',
  };
  const initialSection = sectionMap[sectionParam] || FILTERS[0];
  const [selected, setSelected] = React.useState(initialSection);
  const projects = PROJECTS[selected];
  const isMobile = useIsMobile();
  const isVerySmallScreen = useIsVerySmallScreen(490);
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: isMobile ? '0 16px' : 0 }}>
      {/* Top Blur Effect */}
      <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: isMobile ? '90vw' : '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      {/* Filter Buttons */}
      {isMobile ? (
        <div style={{
          display: 'flex',
          flexDirection: isVerySmallScreen ? 'row' : 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: 40,
          marginBottom: 32,
          zIndex: 1,
          gap: isVerySmallScreen ? '0.25rem' : '0.5rem',
          flexWrap: isVerySmallScreen ? 'wrap' : 'nowrap',
          justifyContent: 'center',
        }}>
          {isVerySmallScreen ? (
            // 2x1 layout for very small screens
            <>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', width: '100%' }}>
                {FILTERS.slice(0, 2).map((filter) => (
                  selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => setSelected(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => setSelected(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button1>
                  )
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.25rem', width: '100%' }}>
                {(() => {
                  const filter = FILTERS[2];
                  return selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => setSelected(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => setSelected(filter)}
                      style={{ 
                        fontSize: '0.75rem',
                        padding: '8px 12px',
                        minWidth: 'auto',
                        width: 'calc(50% - 0.125rem)'
                      }}
                    >
                      {filter}
                    </Button1>
                  );
                })()}
              </div>
            </>
          ) : (
            // Original 2x1 layout for larger mobile screens
            <>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
                {FILTERS.slice(0, 2).map((filter) => (
                  selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => setSelected(filter)}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => setSelected(filter)}
                    >
                      {filter}
                    </Button1>
                  )
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}>
                {(() => {
                  const filter = FILTERS[2];
                  return selected === filter ? (
                    <Button2
                      key={filter}
                      onClick={() => setSelected(filter)}
                    >
                      {filter}
                    </Button2>
                  ) : (
                    <Button1
                      key={filter}
                      onClick={() => setSelected(filter)}
                    >
                      {filter}
                    </Button1>
                  );
                })()}
              </div>
            </>
          )}
        </div>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: 80,
          marginBottom: 64,
          zIndex: 1,
          flexWrap: 'nowrap',
          width: 'auto',
        }}>
          {FILTERS.map((filter) => (
            selected === filter ? (
              <Button2
                key={filter}
                onClick={() => setSelected(filter)}
                style={{ minWidth: 0 }}
              >
                {filter}
              </Button2>
            ) : (
              <Button1
                key={filter}
                onClick={() => setSelected(filter)}
                style={{ minWidth: 0 }}
              >
                {filter}
              </Button1>
            )
          ))}
        </div>
      )}
      {/* Project Cards */}
      {projects.map((proj, i) => (
        <ProjectCard
          key={proj.id}
          reverse={proj.reverse}
          index={i}
          title={proj.title}
          subheader={proj.subheader}
          description={proj.description}
          image={proj.image}
          isMobile={isMobile}
        />
      ))}
      {/* Bottom Pattern */}
      <img src={BottomPattern} alt="Bottom Pattern" style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', maxWidth: 'none', zIndex: 0, pointerEvents: 'none', opacity: 0.4 }} />
    </div>
  );
};

export default ProjectsContent; 