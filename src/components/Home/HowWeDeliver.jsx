import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/Home/HowWeDeliver.css';
import BlurEffect from '../../assets/Blur.png';

const timelineSteps = [
  {
    day: 'DAY 1',
    number: '01',
    title: 'KICKOFF',
    subtitle: 'Project Alignment & Roadmapping',
    description: [
      'We begin with a focused strategy session to align on goals, define scope, and lock in timelines.',
      'From day one, design and development move in parallel — no waiting, no fluff.'
    ]
  },
  {
    day: 'DAY 2',
    number: '02',
    title: 'FOUNDATION',
    subtitle: 'Core Systems & Architecture',
    description: [
      'Setting up the technical infrastructure and core design systems.',
      'Building the foundational components that will power your entire product.'
    ]
  },
  {
    day: 'DAY 3',
    number: '03',
    title: 'ASSEMBLY',
    subtitle: 'Feature Integration & Testing',
    description: [
      'Rapid assembly of features and functionality using our component library.',
      'Continuous testing and optimization for peak performance.'
    ]
  },
  {
    day: 'DAY 4',
    number: '04',
    title: 'LAUNCH',
    subtitle: 'Final Polish & Deployment',
    description: [
      'Thorough testing across devices and final performance optimization.',
      'Deployment preparation and successful launch execution.'
    ]
  }
];

const TimelineStep = ({ step, index }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for day labels
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div ref={sectionRef} className="timeline-step">
      <div className="timeline-marker">
        <motion.span 
          className="day-label"
          style={{ y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {step.day}
        </motion.span>
        <div className="marker-dot"></div>
      </div>
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="step-number">{step.number}</div>
        <div className="step-details">
          <h3>{step.title}</h3>
          <h4>{step.subtitle}</h4>
          {step.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function HowWeDeliver() {
  return (
    <section className="how-we-deliver">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <h2>How We Deliver Fast</h2>
          <p>
            A streamlined, day-by-day build process — engineered for<br />
            speed, clarity, and launch without lag.
          </p>
        </div>

        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 