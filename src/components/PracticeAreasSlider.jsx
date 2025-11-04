import React, { useState, useEffect } from 'react';
import { theme } from '../../constants/theme';

// Import images
import CriminalLawImg from '../assets/images/Criminal law.png';
import ChildCustodyImg from '../assets/images/Child custody.png';
import DomesticImg from '../assets/images/Domestic violence.png';
import CivilUnionImg from '../assets/images/civil union.png';
import BusinessLawImg from '../assets/images/business law.png';
import PropertyCrimeImg from '../assets/images/property crime.png';

const PracticeAreasSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Criminal Law',
      mainImage: CriminalLawImg,
      description: 'At Peace International Law & Consulting Firm, our criminal law practice is dedicated to upholding justice and protecting the rights of individuals facing criminal charges. We provide strategic representation, guiding clients through every stage of the legal process from investigation to trial and appeal with integrity and precision.',
      points: [
        'Expertise in minor to major criminal cases',
        'Comprehensive legal guidance throughout proceedings',
        'Strategic defense and prosecution services',
        'Focus on safeguarding client rights',
        'Commitment to fair, ethical, and just outcomes'
      ]
    },
    {
      title: 'Child Custody',
      mainImage: ChildCustodyImg,
      description: 'Our child custody practice prioritizes the best interests of children while protecting parental rights. We provide compassionate legal guidance through custody disputes, visitation arrangements, and family law matters with sensitivity and expertise.',
      points: [
        'Best interest of child focused approach',
        'Mediation and negotiation services',
        'Custody modification assistance',
        'Parental rights protection',
        'Court representation and advocacy'
      ]
    },
    {
      title: 'Domestic Values',
      mainImage: DomesticImg,
      description: 'We handle domestic matters with care and professionalism, ensuring families receive the legal support they need during challenging times. Our approach combines legal expertise with understanding of family dynamics.',
      points: [
        'Family law consultation',
        'Divorce proceedings assistance',
        'Property settlement guidance',
        'Spousal support matters',
        'Confidential and respectful service'
      ]
    },
    {
      title: 'Civil Union',
      mainImage: CivilUnionImg,
      description: 'Our civil union practice provides comprehensive legal services for partnership agreements, civil unions, and related legal matters. We ensure your rights and interests are protected throughout the process.',
      points: [
        'Partnership agreement drafting',
        'Civil union registration',
        'Rights and obligations clarification',
        'Dissolution proceedings',
        'Property and asset protection'
      ]
    },
    {
      title: 'Business Law',
      mainImage: BusinessLawImg,
      description: 'We provide strategic business law services to help companies navigate complex legal landscapes. From formation to dissolution, our team supports your business growth and protects your interests.',
      points: [
        'Corporate formation and structuring',
        'Contract drafting and review',
        'Regulatory compliance guidance',
        'Business dispute resolution',
        'Mergers and acquisitions support'
      ]
    },
    {
      title: 'Property Crime',
      mainImage: PropertyCrimeImg,
      description: 'Our property crime defense practice offers robust representation for individuals facing property-related criminal charges. We develop strategic defenses and work tirelessly to protect your rights and future.',
      points: [
        'Theft and burglary defense',
        'Property damage cases',
        'Fraud and embezzlement representation',
        'Asset forfeiture defense',
        'Comprehensive case investigation'
      ]
    }
  ];

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full py-12 md:py-20">
      <div className="w-full max-w-[1450px] mx-auto px-4">
        <div className="relative">
          {/* Slider Container */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
            {/* Left: Content */}
            <div className="w-full lg:w-[55%] order-2 lg:order-1">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: theme.fonts.heading }}
              >
                {slides[currentSlide].title}
              </h2>
              
              <p 
                className="text-gray-700 text-sm md:text-base leading-relaxed mb-6"
                style={{ fontFamily: theme.fonts.body }}
              >
                {slides[currentSlide].description}
              </p>

              <ul className="space-y-3">
                {slides[currentSlide].points.map((point, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-sm md:text-base"
                    style={{ fontFamily: theme.fonts.body }}
                  >
                    <span className="text-black font-bold">•</span>
                    <span className="text-gray-800 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image Only */}
            <div className="w-full lg:w-[45%] order-1 lg:order-2 flex justify-center lg:justify-end">
              <img 
                src={slides[currentSlide].mainImage}
                alt={slides[currentSlide].title}
                className="w-auto h-auto object-cover max-w-full"
              />
            </div>
          </div>

          {/* Dots Navigation - same as before */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-8 h-3' 
                    : 'w-3 h-3'
                }`}
                style={{
                  backgroundColor: currentSlide === index 
                    ? theme.colors.secondary 
                    : '#d1d5db'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasSlider;
