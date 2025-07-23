import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Button2 from './Button2';
import BottomPattern from '../assets/bottom_pattern.png';
import BlurImage from '../assets/Blur.png';
import ContactUsImage from '../assets/ContactUs.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="contact-blur-top" />
      
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h1 className="contact-title">Get In Touch With Us</h1>
            <p className="contact-subtitle">
              Ready to start your next project? Let's discuss how we can bring your vision to life with our expert development services.
            </p>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-outer">
              <div className="form-inner">
                <div className="form-content">
                  <div className="form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="company">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="projectType">Select project type</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="web-design">Web Design</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="full-stack">Full Stack Development</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="message">Project Details *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                          rows="5"
                        ></textarea>
                      </div>

                      <div className="form-submit">
                        <Button2 type="submit">Send Message</Button2>
                      </div>
                    </form>
                  </div>

                  <div className="form-image">
                    <img src={ContactUsImage} alt="Contact Us Illustration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="contact-bottom-pattern" />
    </div>
  );
};

export default ContactUs; 