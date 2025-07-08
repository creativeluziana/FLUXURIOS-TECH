import React from 'react';

const Button1 = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`button button-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button1; 