import React from 'react';
import { theme } from '../../constants/theme';
import TeamBgImage from '../assets/images/PromiseSectionBg.png';
import RanaAlmaasImg from '../assets/images/RanaAlmaasImg.png';
import ZahidKhokharImg from '../assets/images/ZahidKhokharImg.png';
import MJabranImg from '../assets/images/MJabranImg.png';
import MissKanwalImg from '../assets/images/MissKanwalImg.png';
import MissMehwishImg from '../assets/images/MissMehwishImg.png';

const MeetOurTeam = () => {
const teamMembers = [
  { 
    name: 'Rana Almaas', 
    role: '(Lawyer)', 
    image: RanaAlmaasImg, 
    expertise: 'Corporate law, legal consultancy, dispute resolution' 
  },
  { 
    name: 'Zahid Khokhar', 
    role: '(Lawyer)', 
    image: ZahidKhokharImg, 
    expertise: 'Business law, litigation, and regulatory compliance' 
  },
  { 
    name: 'M. Jabran', 
    role: '(Lawyer)', 
    image: MJabranImg, 
    expertise: 'Civil law, property disputes, legal documentation' 
  },
  { 
    name: 'Miss Kanwal', 
    role: '(Lawyer)', 
    image: MissKanwalImg, 
    expertise: 'Family law, conflict mediation, legal advisory' 
  },
  { 
    name: 'Miss Mehwish', 
    role: '(Lawyer)', 
    image: MissMehwishImg, 
    expertise: 'Employment law, corporate governance, legal research' 
  }
];

  return (
    <div 
      className="relative w-full py-12 md:py-16 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${TeamBgImage})`,
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto px-4">
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-18"
          style={{ 
            fontFamily: theme.fonts.heading,
            color: theme.colors.secondary
          }}
        >
          Meet Our Team:
        </h2>

        {/* Orange Card Section */}
        <div 
          className="relative rounded-3xl pt-20 pb-8 px-8 md:px-12"
          style={{ backgroundColor: theme.colors.secondary }}
        >
          {/* Team Members Grid */}
          <div className="flex flex-wrap justify-center gap-11">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-48 md:w-52 lg:w-56 min-h-[300px]"
              >
                {/* Circle Image */}
                <div className="-mt-28 mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="text-center flex flex-col justify-between h-full">
                  <div>
                    <h3 
                      className="text-white text-lg md:text-xl mb-1"
                      style={{ fontFamily: theme.fonts.body, fontWeight: 500 }}
                    >
                      {member.name}
                    </h3>

                    <p 
                      className="text-white text-sm md:text-base mb-4"
                      style={{ fontFamily: theme.fonts.body }}
                    >
                      {member.role}
                    </p>

                    {/* Top Divider */}
                    <div className="w-full h-px bg-white mb-4"></div>

                    {/* Expertise */}
                    <div className="grow flex flex-col justify-between">
                      <p 
                        className="text-white text-xs md:text-sm leading-relaxed px-1"
                        style={{ fontFamily: theme.fonts.body }}
                      >
                        <span className="font-semibold">Expertise:</span><br />
                        {member.expertise}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-10 md:mt-14 text-center">
          <p 
            className="text-white text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: theme.fonts.body }}
          >
            We are committed to providing top-tier legal services tailored to your unique needs. Whether you need assistance with company law, business disputes, or personal legal matters, our team is here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
