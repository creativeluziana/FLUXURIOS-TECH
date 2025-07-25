import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button2 from '../components/Button2.jsx';
import '../styles/AboutUs.css';
import BlurImage from '../assets/Blur.png';
import BottomPattern from '../assets/bottom_pattern.png';
import AboutUsHeroImage from '../assets/AboutUsHero.png';
import TeamWorkImage from '../assets/TeamWork.png';

const AboutUs = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "7 Days", label: "Average Delivery" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="about-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <img src={BlurImage} alt="Blur" className="about-blur-top" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Who We Are
            </h1>
            <p className="hero-subtitle">
              A creative tech team building smart digital solutions.
            </p>
            <p className="hero-description">
              We design and develop web experiences that help businesses grow and ideas come to life.
            </p>
            <div className="hero-buttons">
              <Button2 to="/contact">Start Your Project</Button2>
              <Button2 to="/projects">View Our Work</Button2>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <img src={AboutUsHeroImage} alt="About Us Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-header">
            <h2 className="section-title">"Innovation happens when people from different backgrounds work together."</h2>
            <p className="section-subtitle">
              — Reid Hoffman, Co-founder of LinkedIn
            </p>
          </div>
          <div className="team-image">
            <img src={TeamWorkImage} alt="Teamwork" />
          </div>
        </div>
      </section>

      <img src={BottomPattern} alt="Bottom Pattern" className="about-bottom-pattern" />
      <Footer />
    </div>
  );
};

export default AboutUs; 