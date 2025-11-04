import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { theme } from '../../constants/theme';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-center overflow-hidden">
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

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Bottom Shadow Gradient - YE NAYA ADD KIYA */}
      <div 
        className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)',
          zIndex: 5
        }}
      ></div>

      {/* Content - Centered */}
      <div className="relative z-10 w-full px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className="font-bold mb-6 leading-tight"
            style={{
              fontFamily: theme.fonts.heading,
              color: 'white',
              fontSize: 'clamp(2rem,5vw, 5rem)',
             
            }}
          >
            Peace <span style={{ color: theme.colors.secondary }}>International Law</span>
            <br />
            <span style={{ fontFamily: theme.fonts.heading }}>& Consulting Firm</span>
          </h1>

          {/* Subheading */}
          <p 
            className="leading-relaxed mb-8 mx-auto max-w-2xl"
            style={{
              fontFamily: theme.fonts.body,
              color: 'white',
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'
            }}
          >
            Empowering clients worldwide with expert legal counsel and strategic consulting solutions that uphold justice, integrity, and peace.
          </p>

          {/* CTA Button */}
          <Link 
            to="/Contact-us"
            className="inline-flex items-end space-x-3 px-8 py-4 rounded-sm transition-all duration-300 group"
            style={{
              backgroundColor: theme.colors.secondary,
              color: 'white',
              fontFamily: theme.fonts.body,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.secondary;
            }}
          >
            <span className="font-semibold tracking-wide uppercase">Get Free Consultation</span>
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;