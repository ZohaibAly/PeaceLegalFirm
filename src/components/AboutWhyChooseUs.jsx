import React from 'react';
import { theme } from '../../constants/theme';
import AboutPenImg from '../assets/images/PenImgAboutPage.png';

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* Inner Container */}
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Why Choose Us
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.secondary }}
          ></div>
          <p 
            className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
            style={{ fontFamily: theme.fonts.body }}
          >
            Your case deserves dedication and expertise — we provide both, ensuring you receive trusted guidance and strong representation every step of the way.
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
          {/* Connected Cards Container (01, 03, 04) with Background Image */}
          <div 
            className="relative w-full lg:w-auto lg:flex-1 rounded-[2.5rem] overflow-hidden"
            style={{
              backgroundImage: `url(${AboutPenImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0"></div>
            
            {/* Cards Grid - 01, 03, 04 */}
            <div className="relative z-10 flex ">
              {/* Card 01 */}
              <div 
                className="p-8 flex flex-col justify-between min-h-[280px] border-r border-white/10"
                style={{ fontFamily: theme.fonts.body }}
              >
                <div className="text-6xl font-bold text-white/20 mb-4">01</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Experienced Legal Team:
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Skilled advocates with years of courtroom and advisory experience.
                  </p>
                </div>
              </div>

              {/* Spacer for Card 02 on Desktop */}
              <div className="hidden lg:block lg:w-[280px]"></div>
    <div 
            className="w-full lg:w-[320px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-4 rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[300px] shadow-2xl z-20"
            style={{ 
              backgroundColor: theme.colors.secondary,
              fontFamily: theme.fonts.body 
            }}
          >
            <div className="text-7xl font-bold text-black/20 mb-4">02</div>
            <div>
              <h3 className="text-black font-bold text-xl mb-3">
                Comprehensive Legal Services:
              </h3>
              <p className="text-black font-medium text-base leading-relaxed">
                Covering all major fields of law under one roof.
              </p>
            </div>
          </div>
              {/* Card 03 */}
              <div 
                className="p-8 flex flex-col justify-between min-h-[280px] border-r border-white/10"
                style={{ fontFamily: theme.fonts.body }}
              >
                <div className="text-6xl font-bold text-white/20 mb-4">03</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Client-Centered Approach:
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Personalized attention and transparent communication in every case.
                  </p>
                </div>
              </div>

              {/* Card 04 */}
              <div 
                className="p-8 flex flex-col justify-between min-h-[280px]"
                style={{ fontFamily: theme.fonts.body }}
              >
                <div className="text-6xl font-bold text-white/20 mb-4">04</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    Strong Advocacy:
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dedicated to achieving justice with integrity and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 - Orange Highlighted - Overlapping */}
      
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold text-sm md:text-base hover:opacity-90 transition-opacity shadow-lg"
            style={{ 
              backgroundColor: theme.colors.secondary,
              fontFamily: theme.fonts.body 
            }}
          >
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;