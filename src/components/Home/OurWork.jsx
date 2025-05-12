import React from 'react';
import '../../styles/OurWork.css';
import landzyImage from '../../assets/landzy.png';

const OurWork = () => {
  const projects = [
    {
      title: "Landzy Real Estate",
      category: "Web Platform",
      image: landzyImage,
      description: "Modern real estate platform for property management and listings"
    },
    {
      title: "Landzy Property Hub",
      category: "Mobile App",
      image: landzyImage,
      description: "Mobile application for seamless property browsing and management"
    },
    {
      title: "Landzy Admin Dashboard",
      category: "Web Application",
      image: landzyImage,
      description: "Comprehensive admin panel for real estate management"
    },
    {
      title: "Landzy Agent Portal",
      category: "Web & Mobile",
      image: landzyImage,
      description: "Dedicated platform for real estate agents and brokers"
    }
  ];

  return (
    <section className="our-work">
      <div className="container">
        <div className="section-header">
          <h2>Our Recent Work</h2>
          <p>Transforming ideas into digital excellence. Here's a glimpse of our latest projects.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="view-project">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork; 