import React from 'react';
import { theme } from '../../constants/theme';
import AboutImg from '../assets/images/AboutPageImg.png';

const OurStory = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1150px] mx-auto">
        <div className="flex flex-wrap-reverse items-center gap-12 lg:gap-16">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <img 
                src={AboutImg}
                alt="Peace International Law Firm" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-6/12">
            <h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Our Story
            </h2>

            <div 
              className="space-y-6 text-gray-700 leading-relaxed"
              style={{
                fontFamily: theme.fonts.body,
              }}
            >
              <p>
                At Peace International Law Firm, we are committed to delivering professional, result-driven, and client focused legal services across Pakistan and abroad. Based in Lahore, our firm comprises a team of experienced lawyers who specialize in diverse areas of law, including Criminal, Civil, Family, Corporate, Property, and Banking Law.
              </p>

              <p>
                Our mission is simple: to protect your rights, uphold justice, and provide strategic legal solutions that bring clarity and confidence to every client we represent. With a reputation built on integrity, dedication, and excellence, we ensure that every case is handled with the utmost professionalism and personal attention.
              </p>

              <p>
                We take pride in serving both local and overseas Pakistanis, offering clear communication, trusted representation, and effective results in every legal matter. Whether you are facing a legal challenge or seeking preventive legal advice, Peace International Law Firm is your trusted partner at every step of the legal process.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;