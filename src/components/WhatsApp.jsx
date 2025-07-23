import React from 'react';
import '../styles/WhatsApp.css';
import Button2 from './Button2';
import WhatsAppImage from '../assets/Whatsapp.png';
import BlurImage from '../assets/Blur.png';

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9372894470';
    const message = encodeURIComponent('Hi Fluxurious Tech! I checked out your website and have a project in mind. Would love to talk about how we can work together.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="start7day-section">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="whatsapp-blur-top" />
      
      <div className="start7day-container">
        <div className="start7day-content">
          <div className="start7day-image">
            <img src={WhatsAppImage} alt="WhatsApp Illustration" />
          </div>
          <div className="start7day-text">
            <h2>Got an Idea? Let's Chat.</h2>
            <p className="subtitle">Skip the forms. Message us directly on WhatsApp and get started today.</p>
            <div className="button-container">
              <Button2 onClick={handleWhatsAppClick}>Start Chat on WhatsApp</Button2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp; 