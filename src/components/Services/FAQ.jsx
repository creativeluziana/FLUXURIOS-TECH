import React, { useState } from 'react';
import '../../styles/Services/FAQ.css';
import BlurEffect from '../../assets/Blur.png';

const faqs = [
  { question: 'What is Landzy?', answer: 'Landzy is an AI-powered SaaS platform for email marketing and automation.' },
  { question: 'What services can I get from Landzy', answer: 'You can get automated email campaigns, analytics, and integration with other tools.' },
  { question: 'Do you service for all size businesses?', answer: 'Yes, Landzy is designed for startups, SMEs, and large enterprises.' },
  { question: 'Does your solution integrate with other software and tool?', answer: 'Yes, Landzy integrates with a wide range of third-party tools and platforms.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="faq-section">
      <img src={BlurEffect} alt="" className="faq-blur-top" />
      <h2 className="faq-heading">Frequently Asked Question</h2>
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
