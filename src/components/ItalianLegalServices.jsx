import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../constants/theme';
import StatueImg from '../assets/images/statue.png';
const ItalianLegalServices = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1450px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={StatueImg}
              alt="Lady Justice Statue" 
              className="w-auto h-auto max-w-full object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Italian <span style={{ color: theme.colors.secondary }}>Legal</span>
              <br />
              Services
            </h1>

            <p 
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: theme.fonts.body }}
            >
              We proudly extend our legal expertise beyond borders, offering comprehensive 
              international support tailored to meet the diverse needs of our clients. 
              Our services encompass:
            </p>

            <ul className="space-y-3" style={{ fontFamily: theme.fonts.body }}>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: theme.colors.secondary }}>•</span>
              
                <span className="text-gray-800 font-medium">
                  Family reunification and Nulla-Osta verifications.
                </span>
              
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: theme.colors.secondary }}>•</span>
                <span className="text-gray-800 font-medium">
                  Assistance with work permits and free MBBS degree arrangements.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: theme.colors.secondary }}>•</span>
                <span className="text-gray-800 font-medium">
                  Missing persons verification and accidental insurance claims.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: theme.colors.secondary }}>•</span>
                <span className="text-gray-800 font-medium">
                  Dead body moving arrangements from Italy.
                </span>
              </li>
            </ul>

            <p 
              className="text-gray-600 text-base leading-relaxed"
              style={{ fontFamily: theme.fonts.body }}
            >
              At Peace International Law Firm, we prioritize each client's unique circumstances, 
              focusing on trust, transparency, and personalized service. Our commitment goes beyond 
              legal representation.
            </p>
<Link
           
              to="/About-Us"
              className="inline-block px-8 py-3 text-white font-medium transition-all duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: theme.colors.primary,
                fontFamily: theme.fonts.body 
              }}
            >
              MORE ABOUT US
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalianLegalServices;