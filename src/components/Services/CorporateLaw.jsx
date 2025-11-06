import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import ServiceStatueImg from '../../assets/images/Services-Corporate-Law.png';

export default function CorporateLaw() {
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
      Your Trusted Partners in
          </h3>
          <div className="inline-block">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Corporate Law & NOC Services
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
             We provide comprehensive corporate law solutions to help businesses navigate the complexities of legal compliance, contracts, and corporate governance. Our dedicated team offers strategic legal guidance to ensure your company operates lawfully while maximizing opportunities for growth, stability, and success.
            </p>


            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
            >
              Our Expertise Includes:
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
                  <strong>Company Formation & Registration:</strong><br />
               Assisting with the setup of firms, companies, and societies in compliance with legal requirements.
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
                  <strong>Corporate Governance & Compliance:</strong><br />
                 Ensuring your organization meets all statutory and regulatory obligations.
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
                  <strong>Business Contracts & Agreements:</strong><br />
                  Drafting and reviewing contracts between parties, companies, or individuals to safeguard your interests.
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
                  <strong>Legal Advisory for Businesses:</strong><br />
                  Providing expert legal opinions on corporate structures, policies, and business transactions.
                </div>
              </li>
              <p   style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}>We assist businesses and individuals in obtaining NOCs from relevant government departments to streamline approvals and maintain regulatory compliance.</p>
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