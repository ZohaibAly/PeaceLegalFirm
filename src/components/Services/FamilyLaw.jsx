import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import ServiceStatueImg from '../../assets/images/Service-Family-Law.png';

export default function FamilyLaw() {
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
            Expert Legal Services in
          </h3>
          <div className="inline-block">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Family Law Solutions
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
              We are an experienced legal team that helps clients with Family Law matters in Pakistan and overseas. We provide professional and personalized legal support to ensure the best possible solutions for your issues.
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
                  <strong>Divorce & Khula Cases:</strong><br />
               Legal guidance and representation for fair settlements and smooth proceedings.
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
                  <strong>Child Custody & Guardianship:</strong><br />
                  Protecting parental rights and securing the best interests of your child.
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
                  <strong>Maintenance & Financial Disputes:</strong><br />
                  Ensuring fair financial support and resolving property related concerns.
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
                  <strong>Legal Assistance for Overseas Pakistanis:</strong><br />
                  Providing trusted representation for family law matters from abroad.
                </div>
              </li>
              <p   style={{
                  fontFamily: theme.fonts.body,
                  color: theme.colors.primary,
                }}>If you are looking for an experienced and reliable lawyer to solve your legal issues, feel free to contact us.</p>
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