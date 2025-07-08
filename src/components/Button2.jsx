import React from 'react';

const Button2 = ({ children, onClick, className = '', href, target, rel, ...rest }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target || '_self'}
        rel={rel}
        className={`button button-secondary ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`button button-secondary ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button2; 