import React from 'react';
import { theme } from '../../constants/theme';

// Import your background image here - adjust the path as needed
import bgImage from '../assets/images/LegalHeroImage.png';

const LegalHeroSection = () => {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background Image */}
      <img 
        src={bgImage} 
        alt="Legal Background" 
        className="w-full h-[90vh] object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl py-12 md:py-16 lg:py-20 text-white md:text-left text-center">
            {/* Small Orange Text */}
            <p 
              className="text-sm sm:text-base mb-3 sm:mb-4"
              style={{ 
                color: theme.colors.secondary,
                fontFamily: theme.fonts.body
              }}
            >
              Why Peace International Law Firm is the
            </p>
            
            {/* Main Heading */}
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Right Partner for Your Legal Needs
            </h1>
            
            {/* Bullet Points */}
            <ul className="space-y-4 sm:space-y-5 md:space-y-6 list-none mb-8">
              {/* First Bullet */}
              <li className="md:text-left text-center">
                <div>
                  <span 
                    className="font-bold text-base sm:text-lg"
                    style={{ 
                      color: theme.colors.secondary,
                      fontFamily: theme.fonts.body
                    }}
                  >
                    • Reliable Advocacy:
                  </span>
                  <span 
                    className="text-sm sm:text-base md:text-lg ml-1"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    Creativity, logic, and analytical skills define our approach.
                  </span>
                </div>
              </li>
              
              {/* Second Bullet */}
              <li className="md:text-left text-center">
                <div>
                  <span 
                    className="font-bold text-base sm:text-lg"
                    style={{ 
                      color: theme.colors.secondary,
                      fontFamily: theme.fonts.body
                    }}
                  >
                    • Client Care:
                  </span>
                  <span 
                    className="text-sm sm:text-base md:text-lg ml-1"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    We prioritize understanding your needs and building long-term trust.
                  </span>
                </div>
              </li>
            </ul>
            
            {/* Orange Line */}
            <div 
              className="w-32 h-1 md:mx-0 mx-auto"
              style={{ backgroundColor: theme.colors.secondary }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHeroSection;