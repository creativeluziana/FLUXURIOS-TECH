import React from 'react';
import '../styles/Footer.css';
import FluxLogo from '../assets/IMP/FLUX_LOGO_upscaled.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={FluxLogo} alt="FLUXURIOUS TECH" />
            </div>
            <p className="footer-description">
              Custom digital products, designed with precision and delivered with speed.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: hello@fluxurious.tech</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, Digital City</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Fluxurious Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 