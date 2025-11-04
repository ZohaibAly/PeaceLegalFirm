import React from 'react';
import { theme } from '../../constants/theme';
import evidenceImg from '../assets/images/Evidence.png';
import analysisImg from '../assets/images/analysis.png';
import selectionImg from '../assets/images/selection.png';
import trialImg from '../assets/images/cases-done.png';

const PeaceLawTimeline = () => {
const timelineData = [
  {
    week: '(Week 01)',
    title: 'Evidence',
    subtitle: 'Evidence Collection',
    description:
      'A successful defense starts with detailed evidence collection. We coordinate with forensic experts to gather, preserve, and review all material carefully, ensuring a solid foundation for a strong defense case.',
    image: evidenceImg,
  },
  {
    week: '(Week 02)',
    title: 'Analysis',
    subtitle: 'Case Analysis',
    description:
      'We work closely with attorneys to analyze each charge and piece of evidence. Our process identifies gaps in the prosecution’s claims and builds clear, effective defense strategies for our clients.',
    image: analysisImg,
  },
  {
    week: '(Week 03)',
    title: 'Selection & Preparation',
    subtitle: 'Selection & Preparation',
    description:
      'We partner with skilled forensic and psychology experts, preparing them to deliver accurate, convincing testimony. Their insight strengthens the defense and helps simplify complex details in court.',
    image: selectionImg,
  },
  {
    week: '(Week 04)',
    title: 'Trial',
    subtitle: 'Trial or Negotiation',
    description:
      'We assist counsel in preparing strong arguments and witness plans. With extensive courtroom experience, we ensure your defense is presented confidently during trial or any negotiation.',
    image: trialImg,
  },
];


  return (
    <div className="w-full relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/TimeLineVideo.mp4" type="video/mp4" />
      </video>
      
      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Heading */}
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16"
          style={{ fontFamily: theme.fonts.heading }}
        >
          <span className="text-white">Peace Law </span>
          <span style={{ color: theme.colors.secondary }}>Timeline</span>
        </h2>

        {/* Timeline Items */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-center">
              {/* Timeline Card */}
              <div className="w-full sm:w-[280px] lg:w-[300px] text-center">
                {/* Week Number */}
                <p 
                  className="text-gray-400 text-sm mb-2"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {item.week}
                </p>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-6"
                  style={{ 
                    color: theme.colors.secondary,
                    fontFamily: theme.fonts.heading 
                  }}
                >
                  {item.title}
                </h3>

                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center bg-black">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* Subtitle */}
                <h4 
                  className="text-xl font-semibold text-white mb-4"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p 
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeaceLawTimeline;