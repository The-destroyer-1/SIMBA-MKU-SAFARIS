import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };