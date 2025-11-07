import React from 'react';
import { theme } from '../../constants/theme';
import { Link } from 'react-router-dom';
import AboutVideo from '/video/AboutPageVideo.mp4';
const WhyChooseUs = ({ videoSrc }) => {
  const reasons = [
    {
      number: '01',
      title: 'Experienced Legal Team:',
      description: 'Skilled advocates with years of courtroom and advisory experience.'
    },
    {
      number: '02',
      title: 'Comprehensive Legal Services:',
      description: 'Covering all major fields of law under one roof.'
    },
    {
      number: '03',
      title: 'Client-Centered Approach:',
      description: 'Personalized attention and transparent communication in every case.'
    },
    {
      number: '04',
      title: 'Strong Advocacy:',
      description: 'Dedicated to achieving justice with integrity and professionalism.'
    }
  ];

  return (
    <div className="relative w-full min-h-[600px] py-12 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={AboutVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[1500px] mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Why Choose Us
            </h2>
            
            {/* Orange Underline */}
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ backgroundColor: theme.colors.secondary }}
            ></div>
            
            <p 
              className="text-white text-sm md:text-base lg:text-lg max-w-3xl mx-auto"
              style={{ fontFamily: theme.fonts.body }}
            >
              Your case deserves dedication and expertise — we provide both, ensuring you receive trusted guidance and strong representation every step of the way.
            </p>
          </div>

          {/* Cards Grid */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="relative p-6 "
                style={{
                  width: '320px',
                  border: `2px solid ${theme.colors.secondary}`,
                  background: 'transparent',
                  borderRadius: '60px 0 60px 0'
                }}
              >
                {/* Number Circle */}
                <div 
                  className="absolute -top-6 left-2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                  style={{ 
                    backgroundColor: theme.colors.secondary,
                    fontFamily: theme.fonts.body
                  }}
                >
                  {reason.number}
                </div>

                {/* Card Content */}
                <div className="mt-4">
                  <h3 
                    className="text-white font-bold text-base md:text-lg mb-3"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    {reason.title}
                  </h3>
                  <p 
                    className="text-white text-sm md:text-base"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link to='/Get-Free-Consultation'>
            <button 
              className="px-8 py-4 rounded-full font-bold text-white text-sm md:text-base uppercase tracking-wider hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              style={{ 
                backgroundColor: theme.colors.secondary,
                fontFamily: theme.fonts.body
              }}
            >
              GET FREE CONSULTATION
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;