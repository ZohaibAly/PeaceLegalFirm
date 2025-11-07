import React from 'react';
import { theme } from '../../constants/theme';
import LawyersImg from '../assets/images/LawyersImg.png';

const OurBestLawyers = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1450px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary 
            }}
          >
            Our Best Lawyers
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <p 
            className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: theme.fonts.body }}
          >
            Great lawyers combine logic, analysis, and creativity to solve problems effectively. At our firm, we pride ourselves on having a team of highly skilled and experienced legal professionals who are dedicated to delivering exceptional results for our clients.
          </p>
        </div>

        {/* Lawyers Image */}
        <div className="w-full">
          <img
            src={LawyersImg}
            alt="Our Best Lawyers"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBestLawyers;