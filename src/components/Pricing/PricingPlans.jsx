import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../../styles/Pricing/PricingPlans.css';
import Button2 from '../Button2.jsx';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$59',
      period: '/month',
      description: 'The Basic Plan is perfect for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db'
      ],
      isPopular: false,
      labelColor: 'gray'
    },
    {
      name: 'Popular Plan',
      price: '$149',
      period: '/month',
      description: 'Our Popular Plan is the ultimate choice for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db',
        'Full Stack',
        'Full Stack+Figma',
        'Chatbot',
        'Full Stack+Figma+Chatbot',
        'SEO/GEO',
        'Full Stack+GEO',
        'Full Stack+Figma+GEO',
        'Full Stack+Figma+GEO+Chatbot',
        'All of the Above+Deployment'
      ],
      isPopular: true,
      labelColor: 'purple'
    },
    {
      name: 'Pro Plan',
      price: '$359',
      period: '/month',
      description: 'The Pro Plan is tailored for businesses',
      features: [
        'Figma Design',
        'Frontend',
        'Backend+Db',
        'Chatbot',
        'SEO/GEO',
        'All of the Above+Deployment'
      ],
      isPopular: false,
      labelColor: 'gray'
    }
  ];

  return (
    <div className="pricing-plans">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="pricing-plans-blur-top" />
      
      {/* Header Section */}
      <div className="pricing-plans-header">
        <h2 className="pricing-plans-title">Our Service Packages</h2>
        <p className="pricing-plans-subtitle">
          A seamless build process powered by performance-first code, scalable design systems, and clean delivery.
        </p>
      </div>
      
      <div className="pricing-plans-container">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
          >
            <div className={`plan-label ${plan.labelColor}`}>
              {plan.name}
            </div>
            
            <p className="plan-description">
              {plan.description}
            </p>
            
            <ul className="plan-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <CheckCircle size={20} className="check-icon" />
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button2 to="/contact" className="trial-button">
              Start 7-days Free Trial
            </Button2>
          </div>
        ))}
      </div>
      
      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="pricing-plans-bottom-pattern" />
    </div>
  );
};

export default PricingPlans; 