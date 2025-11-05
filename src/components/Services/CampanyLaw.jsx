import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import ServiceStatueImg from '../../assets/images/Service-Company-Law.png';

export default function CompanyLaw() {
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
            Trusted Advisors in
          </h3>
          <div className="inline-block">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Company Law & Corporate <br/>Compliance
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
              We are experienced legal professionals specializing in Company and Corporate Law, offering expert assistance to clients in Pakistan and abroad. Our commitment lies in providing strategic legal solutions, ensuring compliance, and resolving complex business challenges efficiently and professionally.
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
                Assisting with incorporation, documentation, and regulatory compliance.
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
                  <strong>Business Dispute Resolution:</strong><br />
                  Providing expert legal support for resolving internal and external business conflicts
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
                  <strong>Corporate Governance:</strong><br />
                  Ensuring your company operates with transparency, accountability, and legal compliance.
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
                  <strong>Mergers & Acquisitions:</strong><br />
                  Offering professional guidance to navigate structural, legal, and transactional complexities.
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