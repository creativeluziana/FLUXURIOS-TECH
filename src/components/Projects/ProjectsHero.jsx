import React from 'react';
import '../../styles/Projects/ProjectsHero.css';
import Blur from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';

const ProjectsHero = () => {
  return (
    <main className="main projects-hero-centered projects-hero-fixed-height">
      {/* Decorative Images */}
      <img src={Blur} alt="Blur" className="projects-hero-blur" />
      <img src={BottomPattern} alt="Pattern" className="projects-hero-pattern" />
      <div className="centered-content">
        <h1 className="projects-hero-title-secondary">
          What We've Built.<br />
          <span className="hero-title projects-hero-title">Explore a few recent projects and see why teams choose Fluxurious to move fast and stand out.

</span>
        </h1>
      </div>
    </main>
  );
};

export default ProjectsHero; 