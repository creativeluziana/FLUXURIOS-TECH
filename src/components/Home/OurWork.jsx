import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Home/OurWork.css';
import landzyImage from '../../assets/landzy.png';
import projectsImage from '../../assets/projects.png';
import BlurEffect from '../../assets/Blur.png';
import LogoSymbol from '../../assets/IMP/LOGO_SYMBOL.png';

const OurWork = () => {
  const projects = [
    {
      title: "Landzy Real Estate",
      categories: ["Web Platform", "Real Estate", "Frontend"],
      image: projectsImage,
      description: "Modern real estate platform for property management and listings",
      url: "/projects/landzy-real-estate"
    },
    {
      title: "Landzy Property Hub",
      categories: ["Mobile App", "Real Estate", "iOS", "Android"],
      image: projectsImage,
      description: "Mobile application for seamless property browsing and management",
      url: "/projects/landzy-property-hub"
    },
    {
      title: "Landzy Admin Dashboard",
      categories: ["Web Application", "Data Analytics", "Backend", "Admin"],
      image: projectsImage,
      description: "Comprehensive admin panel for real estate management",
      url: "/projects/landzy-admin-dashboard"
    },
    {
      title: "Landzy Agent Portal",
      categories: ["Web & Mobile", "CRM", "Real Estate"],
      image: projectsImage,
      description: "Dedicated platform for real estate agents and brokers",
      url: "/projects/landzy-agent-portal"
    },
    {
      title: "Landzy Analytics Suite",
      categories: ["Data Analytics", "Backend", "Admin"],
      image: projectsImage,
      description: "Advanced analytics and reporting platform for real estate insights",
      url: "/projects/landzy-analytics"
    },
    {
      title: "Landzy AI Assistant",
      categories: ["AI Solution", "Backend", "Admin"],
      image: projectsImage,
      description: "Intelligent virtual assistant for property recommendations",
      url: "/projects/landzy-ai-assistant"
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchDistance, setTouchDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const projectDisplayRef = useRef(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentProject) return;
    setIsTransitioning(true);
    setCurrentProject(index);
  };

  const handleProjectClick = (url) => {
    window.location.href = url;
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDistance(0);
  };

  const onTouchMove = (e) => {
    if (!isDragging || isTransitioning) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    const distance = touchStart - currentTouch;
    setTouchDistance(distance);
  };

  const onTouchEnd = () => {
    if (!isDragging || !touchStart || !touchEnd) {
      setIsDragging(false);
      setTouchDistance(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
    
    setIsDragging(false);
    setTouchDistance(0);
  };

  // Implement mouse drag functionality (for desktop testing)
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragDistance(0);
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      setDragEnd(e.clientX);
      const distance = dragStart - e.clientX;
      setDragDistance(distance);
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      const distance = dragStart - dragEnd;
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          nextProject();
        } else {
          prevProject();
        }
      }
      setIsDragging(false);
      setDragDistance(0);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Match with CSS transition duration (800ms)
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="our-work">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <h2>Our Recent Work</h2>
          <p>Transforming ideas into digital excellence. Here's a glimpse of our latest projects.</p>
        </div>

        <div className="project-showcase">
          <div className="project-navigation">
            <button 
              className="nav-arrow prev-arrow" 
              onClick={prevProject} 
              aria-label="Previous project"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div 
              ref={projectDisplayRef}
              className={`project-display ${isDragging || Math.abs(dragDistance) > 0 ? 'is-dragging' : ''}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {(isDragging || Math.abs(dragDistance) > 0) && (
                <div 
                  className="drag-indicator"
                  style={{
                    transform: `translateX(${dragDistance > 0 ? '10px' : '-10px'})`,
                    opacity: Math.min(Math.abs(dragDistance) / 100, 1)
                  }}
                >
                  <img src={LogoSymbol} alt="" />
                </div>
              )}
              
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`project-card ${index === currentProject ? 'active' : ''}`}
                  data-index={index % 2 === 0 ? 'even' : 'odd'}
                  onTransitionEnd={() => index === currentProject && setIsTransitioning(false)}
                  style={{
                    transform: index === currentProject && isDragging 
                      ? `translateX(${-touchDistance}px)` 
                      : undefined
                  }}
                >
                  <div className="card-inner">
                    <div className="project-content">
                      <div className="project-details">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="categories-container">
                          {project.categories.map((cat, catIndex) => (
                            <span key={catIndex} className="category" data-category={cat}>
                              {cat}
                            </span>
                          ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                      </div>
                      <div 
                        className="project-image-container"
                        onClick={() => handleProjectClick(project.url)}
                      >
                        <div className="project-image-wrapper">
                          <img src={project.image} alt={project.title} className="project-image" />
                          <div className="image-overlay">
                            <span>View Project</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="nav-arrow next-arrow" 
              onClick={nextProject} 
              aria-label="Next project"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <div className="project-counter">
            <span className="current">{currentProject + 1}</span>
            <span className="separator">/</span>
            <span className="total">{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork; 