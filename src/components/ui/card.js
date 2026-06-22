import React from 'react';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent };