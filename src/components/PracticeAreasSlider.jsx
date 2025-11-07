import React, { useState, useEffect } from 'react';
import { theme } from '../../constants/theme';

// Import images
import CriminalLawImg from '../assets/images/Practice-Criminal-law.png';
import CivilLawImg from '../assets/images/Practice-Civil-Law.png';
import OverSeaLawImg from '../assets/images/Practice-Oversea-Law.png';
import TexationLawImg from '../assets/images/Practice-Texation-Law.png';
import FamilyLawImg from '../assets/images/Practice-Family-Law.png';
import PropertyLawImg from '../assets/images/Practice-Property-Law.png';

const PracticeAreasSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    title: 'Criminal Law',
    mainImage: CriminalLawImg,
    description: 'At Peace International Law & Consulting Firm, our criminal law practice provides robust defense and prosecution services under Pakistan Penal Code (PPC). We represent clients in sessions courts, high courts, and Supreme Court with expertise in handling cases from investigation to appeals.',
    points: [
      'Defense in PPC offenses including murder, theft, and fraud',
      'Bail applications and pre-arrest bail representation',
      'Trial court representation in sessions and magistrate courts',
      'Appeals in High Courts and Supreme Court of Pakistan',
      'White-collar crime and cybercrime defense under PECA'
    ]
  },
  {
    title: 'Civil Law',
    mainImage: CivilLawImg,
    description: 'Our civil law practice covers a wide range of disputes under the Civil Procedure Code (CPC) 1908. We handle contract disputes, property matters, tort claims, and civil litigation in district courts, high courts, and appellate forums across Pakistan.',
    points: [
      'Contract enforcement and breach of contract cases',
      'Civil suits for declaration, injunction, and specific performance',
      'Tort claims including negligence and defamation',
      'Recovery suits and debt collection',
      'Civil appeals and revision petitions in superior courts'
    ]
  },
  {
    title: 'Overseas Pakistani Issues',
    mainImage: OverSeaLawImg,
    description: 'We specialize in legal matters affecting overseas Pakistanis including property disputes, inheritance claims, NADRA documentation, and repatriation issues. Our team provides remote consultation and representation to protect the rights of non-resident Pakistanis.',
    points: [
      'Property disputes and illegal occupation cases for overseas clients',
      'NADRA NICOP, POC, and citizenship documentation',
      'Inheritance and succession matters under Muslim Family Laws',
      'Power of attorney drafting and authentication',
      'Investment disputes and business representation in Pakistan'
    ]
  },
  {
    title: 'Taxation Law',
    mainImage: TexationLawImg,
    description: 'Our taxation law practice provides comprehensive advisory and litigation services under Income Tax Ordinance 2001, Sales Tax Act 1990, and Federal Excise Act. We represent clients before FBR, tax tribunals, and superior courts in tax disputes and compliance matters.',
    points: [
      'Income tax, sales tax, and federal excise advisory',
      'Tax audit defense and assessment appeals',
      'Representation before Commissioner Appeals and ATIR',
      'Tax litigation in High Courts and Supreme Court',
      'Transfer pricing and international taxation matters'
    ]
  },
  {
    title: 'Family Law',
    mainImage: FamilyLawImg,
    description: 'Our family law practice addresses sensitive matters under Muslim Family Laws Ordinance 1961, Guardians and Wards Act, and related legislation. We provide compassionate legal guidance in divorce, custody, maintenance, and inheritance disputes in family courts across Pakistan.',
    points: [
      'Khula, talaq, and divorce proceedings in family courts',
      'Child custody and guardianship matters under Guardians Act',
      'Maintenance and alimony claims (nafaqah)',
      'Inheritance disputes and succession certificates',
      'Domestic violence protection orders and family settlements'
    ]
  },
  {
    title: 'Property Law',
    mainImage: PropertyLawImg,
    description: 'We handle all aspects of property law including title verification, transfer of ownership, land disputes, and property litigation. Our expertise covers matters under Transfer of Property Act 1882, Land Revenue Act, and Punjab Land Records Authority (PLRA) regulations.',
    points: [
      'Title verification and due diligence for property transactions',
      'Sale deeds, gift deeds, and transfer documentation',
      'Property disputes, partition suits, and boundary conflicts',
      'PLRA and land record rectification matters',
      'Real estate litigation and possession recovery suits'
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
