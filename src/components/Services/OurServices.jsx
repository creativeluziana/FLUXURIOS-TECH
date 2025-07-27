import React from 'react';
import '../../styles/Services/OurServices.css';
import { Monitor, Box, Type, Smartphone, FileCode, Globe } from 'lucide-react';
import pattern from '../../assets/whats_under_the_hood_pattern.png';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Drag & Drop Builder',
    description: 'Build your website on the front end and never touch a line of code.',
    icon: Monitor
  },
  {
    title: 'Atomic Design',
    description: 'Modern web development through Atomic Design',
    icon: Box
  },
  {
    title: 'Free Icons and Font',
    description: 'You do not have to purchase additional licenses.',
    icon: Type
  },
  {
    title: 'Responsive Layout',
    description: 'Build websites that look perfect on every device.',
    icon: Smartphone
  },
  {
    title: 'Design File',
    description: 'You can request design file, drop your email now!.',
    icon: FileCode
  },
  {
    title: 'Global Elements',
    description: 'When update a global element, it gets updated throughout your entire website',
    icon: Globe
  }
];

export default function OurServices() {
  return (
    <section className="our-features">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -60, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            A seamless build process powered by performance-first code, scalable design<br />
            systems, and clean delivery — because good tech should feel invisible.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="icon-wrapper">
                  <IconComponent size={32} className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <img src={pattern} alt="" className="bottom-pattern" />
    </section>
  );
} 