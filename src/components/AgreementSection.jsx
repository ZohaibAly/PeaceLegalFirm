import React from 'react';
import { theme } from '../../constants/theme';
import AgreementImg from '../assets/images/AgreementPic.png';
const AgreementSection = ({ imageSrc }) => {
  const agreements = [
    "Employment Contracts",
    "Sales & Purchase Contracts",
    "Loan Agreements",
    "Partnership Agreements",
    "Letter of Intent (LOI)",
    "License Agreements"
  ];

  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img 
        src={AgreementImg} 
        alt="Agreement Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            {/* Heading */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Agreement
            </h2>
            
            {/* Orange Underline */}
            <div 
              className="w-32 h-1 mb-8"
              style={{ backgroundColor: theme.colors.secondary }}
            ></div>
            
            {/* Agreement List */}
            <ul className="space-y-4">
              {agreements.map((agreement, index) => (
                <li 
                  key={index}
                  className="flex items-start text-white text-lg md:text-xl"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  <span 
                    className="mr-3 mt-1 shrink-0"
                    style={{ color: theme.colors.secondary }}
                  >
                    ●
                  </span>
                  <span>{agreement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementSection;