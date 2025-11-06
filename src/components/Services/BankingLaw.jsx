import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import ServiceStatueImg from '../../assets/images/Service-Banking-Law.png';

export default function BankingLaw() {
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
            Your trusted partner in
          </h3>
          <div className="inline-block">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
             Resolving Banking Law Disputes
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
              At Peace International Law Firm, we specialize in Banking Law, offering professional representation in complex financial and regulatory disputes. With extensive experience handling a wide range of banking cases, we provide personalized legal solutions designed to protect your rights and interests.
            </p>


            <h2 
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.secondary,
              }}
            >
             Our Services Include:
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
                  <strong>Bank–Customer Dispute Resolution:</strong><br />
                Representing clients in conflicts involving bank policies, account issues, and financial claims.
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
                  <strong>Loan & Mortgage Matters:</strong><br />
                  Addressing disputes related to lending, repayments, and foreclosure proceedings.
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
                  <strong>Defense Against Unjust Banking Practices:</strong><br />
                  Protecting clients from unlawful recovery actions and unethical financial conduct.
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
                  <strong>Legal Counsel on Banking Regulations:</strong><br />
                  Offering expert guidance on compliance, contracts, and regulatory requirements.
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