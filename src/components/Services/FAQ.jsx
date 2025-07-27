import React, { useState } from 'react';
import '../../styles/Services/FAQ.css';
import BlurEffect from '../../assets/Blur.png';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What is Landzy?', answer: 'Landzy is an AI-powered SaaS platform for email marketing and automation.' },
  { question: 'What services can I get from Landzy', answer: 'You can get automated email campaigns, analytics, and integration with other tools.' },
  { question: 'Do you service for all size businesses?', answer: 'Yes, Landzy is designed for startups, SMEs, and large enterprises.' },
  { question: 'Does your solution integrate with other software and tool?', answer: 'Yes, Landzy integrates with a wide range of third-party tools and platforms.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="faq-section">
      <img src={BlurEffect} alt="" className="faq-blur-top" />
      <motion.h2 
        className="faq-heading"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        Frequently Asked Question
      </motion.h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item${openIndex === idx ? ' open' : ''}`}> 
            <button className="faq-question" onClick={() => toggle(idx)}>
              <span>{faq.question}</span>
              <span className="faq-arrow">&#9660;</span>
            </button>
            <div className="faq-answer" style={{ display: openIndex === idx ? 'block' : 'none' }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
