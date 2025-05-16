import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600">{subtitle}</p>
      )}
      <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;