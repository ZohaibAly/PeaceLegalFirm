import React from 'react';
import { Check } from 'lucide-react';
import { theme } from '../../constants/theme';
import CeoImage from '../assets/images/CEO-Image.png';

const CEOMessage = () => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-4 py-22">
      {/* ✅ keep layout same, apply flex column until 800px */}
      <div className="flex flex-col gap-0 items-center justify-center custom800:flex-row custom800:items-start custom800:justify-start">
        {/* LEFT: Image + Badge + About */}
        <div className="w-full custom800:w-1/2 order-1 flex flex-col items-center custom800:items-start">
          <div className="relative block w-full custom800:w-auto max-w-none mx-0">
            <img 
              src={CeoImage}
              alt="CEO Rana Almaas"
              className="w-auto h-auto"
            />
          </div>

          <a 
            href="#about-lawyer"
            className="inline-block mt-4 text-base font-semibold hover:underline"
            style={{ 
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary 
            }}
          >
            About Lawyer
          </a>
          
          <h3 
            className="text-2xl custom800:text-3xl font-bold mt-1"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Rana Almaas
          </h3>
          
          <p 
            className="text-gray-600 mt-1 text-sm"
            style={{ fontFamily: theme.fonts.body }}
          >
            LLB, LLM, MA Political Science
          </p>
          
          <p 
            className="text-gray-600 text-sm"
            style={{ fontFamily: theme.fonts.body }}
          >
            CEO – Peace International Law Firm
          </p>
        </div>

        {/* RIGHT: CEO Message Heading, Paragraphs, Features */}
        <div className="w-full custom800:w-1/2 order-2">
          <h2 
            className="text-3xl custom800:text-5xl font-bold mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            CEO Message
          </h2>
          
          <div 
            className="space-y-3 text-gray-700 leading-relaxed text-sm custom800:text-base"
            style={{ fontFamily: theme.fonts.body }}
          >
            <p>
             Peace International law firm One a dream has been structured into a reality. This has taken an enduring over 11 years of conviction and untiring efforts to see it grow into a leading Law Firm with one of biggest market clientage within the country especially in Lahore and abroad. The Firm has seen transformation from conventional to state of art and highly Mechanized & scientific Litigation.
            </p>
            
            <p>
              Its an Era of Scientific achievement, where hearts and minds are controlled by machines but significance of Law is essence of all Eras till infinite, as per current Era is concerned we stand firm to maintain our composure through expeditious & dedicated services to our clients, we feel relaxed when we busy working hard.
            </p>
            
            <p>
              Peace law firm is cleansed from Bossy atmosphere and its administrative affairs are controlled with sense of responsibility and realization of each member of Team. Peace law is Primarily a legal Research Institute/Organization thus each and every brief of case is considered as research material and all efforts and struggles are use to achieve successful results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold text-gray-800 text-sm"
                style={{ fontFamily: theme.fonts.body }}
              >
                Modern approach
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold text-gray-800 text-sm"
                style={{ fontFamily: theme.fonts.body }}
              >
                Ethical commitment
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold text-gray-800 text-sm"
                style={{ fontFamily: theme.fonts.body }}
              >
                Research-driven practice
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme.colors.secondary }}
              >
                <Check className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold text-gray-800 text-sm"
                style={{ fontFamily: theme.fonts.body }}
              >
                Collaborative culture
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ custom media query for 800px */}
      <style >{`
        @media (min-width: 800px) {
          .custom800\\:flex-row { flex-direction: row !important; }
          .custom800\\:items-start { align-items: flex-start !important; }
          .custom800\\:justify-start { justify-content: flex-start !important; }
          .custom800\\:w-1\\/2 { width: 50% !important; }
          .custom800\\:max-w-none { max-width: none !important; }
          .custom800\\:mx-0 { margin-left: 0 !important; margin-right: 0 !important; }
          .custom800\\:text-3xl { font-size: 1.875rem !important; }
          .custom800\\:text-5xl { font-size: 3rem !important; }
          .custom800\\:text-base { font-size: 1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default CEOMessage;
