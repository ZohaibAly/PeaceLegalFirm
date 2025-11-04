import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { theme } from '../../constants/theme';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-28">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/HeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability (optional) */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-4xl md:ps-20">
          {/* Main Heading */}
          <h1 
            className="font-bold mb-8 leading-tight"
            style={{
              fontFamily: theme.fonts.heading,
              color: 'white',
              fontSize: 'clamp(2rem, 5vw, 4rem)' // Responsive from 32px to 64px
            }}
          >
            Peace <span style={{ color: theme.colors.secondary }}>International Law</span>
            <br />
            <span style={{ fontFamily: theme.fonts.heading }}>& Consulting Firm</span>
          </h1>

          {/* Orange Border Line with Content */}
          <div className="flex items-start mb-8">
            <div 
              className="w-1 h-20 md:h-24 mr-4 md:mr-6 shrink-0"
              style={{ backgroundColor: theme.colors.secondary }}
            />
            
            {/* Subheading */}
            <p 
              className="leading-relaxed max-w-xl"
              style={{
                fontFamily: theme.fonts.body,
                color: 'white',
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' // Responsive from 14px to 18px
              }}
            >
              Empowering clients worldwide with expert legal counsel and strategic consulting solutions that uphold justice, integrity, and peace.
            </p>
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 border-2 rounded-sm transition-all duration-300 hover:bg-white group"
            style={{
              borderColor: 'white',
              color: 'white',
              fontFamily: theme.fonts.body,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)' // Responsive from 14px to 16px
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = theme.colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            <span className="font-medium tracking-wide">CONTACT US</span>
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
        style={{borderColor: theme.colors.secondary}}>
          <div 
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: theme.colors.secondary }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;