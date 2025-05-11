import React, { useState } from 'react';
import '../styles/Navbar.css';
import SmallButton from './SmallButton';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          FLUXURIOUS TECH.
        </a>

        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="menu-icon" />
          ) : (
            <HiMenu className="menu-icon" />
          )}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <SmallButton>Login</SmallButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
