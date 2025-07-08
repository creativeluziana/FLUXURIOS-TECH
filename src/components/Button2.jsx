import React from 'react';

const Button2 = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`button button-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button2; 