import React from 'react';
import { theme } from '../../constants/theme';
import PracticeBg from '../assets/images/practice-bg.png';
import CriminalLawIcon from '../assets/images/Ciminal-Law.png';
import CivilLawIcon from '../assets/images/Civil-Law.png';
import OverSeaLawIcon from '../assets/images/Overseas-Law.png';
import TexationLawIcon from '../assets/images/Taxation-Law.png';
import FamilyLawIcon from '../assets/images/Family-Law.png';
import PropertyLawIcon from '../assets/images/Property-Law.png';

const PracticeAreas = () => {
  const practiceItems = [
    { icon: CriminalLawIcon, title: 'Criminal Law' },
    { icon: CivilLawIcon, title: 'Civil Law' },
    { icon: OverSeaLawIcon, title: ' Overseas Pakistani Issues ( Oblique / loss)' },
    { icon: TexationLawIcon, title: 'Taxation Law' },
    { icon: FamilyLawIcon, title: 'Family Law' },
    { icon: PropertyLawIcon, title: 'Property Law' },
  ];

  return (
    <div 
      className="w-full py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `url(${PracticeBg})`,
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0"></div>
      
      <div className="w-full max-w-[1500px] mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p 
            className="text-sm md:text-base font-bold mb-3 tracking-widest uppercase"
            style={{ 
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary 
            }}
          >
            Fields of Expertise
          </p>
          
          <h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Practice Areas
          </h2>
          <div 
            className="h-1 w-41 mx-auto mb-8"
            style={{
              backgroundColor: theme.colors.secondary,
            }}
          />
          <p 
            className="text-white text-sm md:text-lg leading-relaxed max-w-5xl mx-auto text-center"
            style={{ fontFamily: theme.fonts.body }}
          >
            At Peace Law, we specialize in providing expert legal consulting across a broad range of practice areas. Our team of seasoned professionals delivers strategic guidance and innovative solutions tailored to your unique needs. Whether you require assistance with corporate governance, compliance, dispute resolution, or regulatory matters, we leverage our global expertise and in-depth knowledge to navigate complex legal landscapes effectively. Committed to excellence and dedicated to your success, we offer personalized service to help you achieve your objectives with confidence.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {practiceItems.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center w-32 md:w-36 group cursor-pointer"
            >
              {/* Icon Circle with Enhanced Design */}
              <div className="relative mb-5">
                {/* Outer glow ring */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${theme.colors.secondary}40, transparent 70%)`,
                    transform: 'scale(1.5)'
                  }}
                ></div>
                
                {/* Main circle */}
                <div 
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  style={{
                    border: `4px solid ${theme.colors.secondary}20`,
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 8px ${theme.colors.secondary}10`,
                    background: theme.colors.secondary,
                  }}
                >

                  
                  <img 
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Title with underline effect */}
              <h3 
                className="text-white font-bold text-sm md:text-base relative pb-2"
                style={{ fontFamily: theme.fonts.body }}
              >
                {item.title}
                <span 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: theme.colors.secondary }}
                ></span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;