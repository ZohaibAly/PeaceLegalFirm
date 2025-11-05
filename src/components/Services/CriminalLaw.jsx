import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import ServiceStatueImg from '../../assets/images/Service-Criminal-law.png';

export default function CriminalLaw() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1450px] mx-auto">
        {/* Heading - Always on top */}
        <div className="text-center mb-8">
          <h3 
            className="text-sm md:text-base mb-2"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.secondary,
            }}
          >
            Protecting Your Rights with Expert
          </h3>
          <div className="inline-block">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Criminal Law Representation
            </h1>
            <div 
              className="h-1 w-55 mx-auto mt-5"
              style={{
                backgroundColor: theme.colors.secondary,
              }}
            />
          </div>
        </div>

        {/* Image and Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={ServiceStatueImg} 
              alt="Lady Justice with scales"
              className="w-auto h-auto mx-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <p 
              className="text-sm md:text-base mb-6 leading-relaxed"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.primary,
              }}
            >
              At our Lahore-based law firm, we specialize in Criminal Law, offering trusted legal support to individuals seeking justice. We handle cases in the High Court, providing strategic, results-driven representation to safeguard your rights every step of the way.
            </p>

            <p 
              className="text-sm md:text-base mb-6 leading-relaxed"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.primary,
              }}
            >
              Whether you are dealing with criminal charges, need legal advice, or require court representation, our team is here to assist you every step of the way. Your case is our priority, and we strive to achieve the best possible outcomes for our clients.
            </p>

            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
            >
              Why Clients Trust Us
            </h2>

            <ul className="space-y-4 mb-8">
              <li 
                className="text-sm md:text-base flex items-start gap-2"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}
              >
                <span className="mt-1">•</span>
                <div>
                  <strong>Expert Guidance:</strong><br />
                  Years of experience navigating complex criminal cases.
                </div>
              </li>
              <li 
                className="text-sm md:text-base flex items-start gap-2"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}
              >
                <span className="mt-1">•</span>
                <div>
                  <strong>Strategic Advocacy:</strong><br />
                  Thorough preparation and smart legal planning for every case.
                </div>
              </li>
              <li 
                className="text-sm md:text-base flex items-start gap-2"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}
              >
                <span className="mt-1">•</span>
                <div>
                  <strong>Integrity & Professionalism:</strong><br />
                  Committed to achieving justice with honesty and dedication.
                </div>
              </li>
              <li 
                className="text-sm md:text-base flex items-start gap-2"
                style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}
              >
                <span className="mt-1">•</span>
                <div>
                  <strong>Personalized Support:</strong><br />
                  Your case receives the attention and care it deserves.
                </div>
              </li>
            </ul>

            <Link 
              to="/Get-Free-Consultation"
              className="inline-block px-8 py-3 rounded-full text-white font-medium text-sm md:text-base transition-all hover:opacity-90"
              style={{
                fontFamily: theme.fonts.body,
                backgroundColor: theme.colors.secondary,
              }}
            >
              GET FREE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}