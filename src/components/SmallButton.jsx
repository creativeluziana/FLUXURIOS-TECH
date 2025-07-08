import React from 'react';
import '../styles/SmallButton.css';

const SmallButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`small-button ${className}`}
    >
      {children}
    </button>
  );
};

export default SmallButton; 