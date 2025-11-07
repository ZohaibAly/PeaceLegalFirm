import React from "react";
import FooterLogo from "../assets/images/website-logo.png";
import { Link } from "react-router-dom";
import { footerData } from "../../constants/FooterData";
import { theme } from "../../constants/theme";
import { useNavigate } from "react-router-dom";
import { Mail, Copyright } from "lucide-react";

const Footer = () => {
  const { logoSrc, description, columns, newsletter, copyright, contactEmail } =
    footerData;
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    navigate(newsletter?.action || "/contact-us");
  };

  return (
    <section className="py-6 bg-linear-to-b sm:pt-20 lg:pt-28">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[1650px]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-25 object-contain mb-4"
              src={logoSrc || FooterLogo}
              alt="Logo"
            />

            <p
              className="text-[16px] leading-relaxed text-gray-700"
              style={{ fontFamily: theme.fonts.body }}
            >
              {description}
            </p>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <p
              className="text-[18px] font-bold tracking-widest uppercase mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              {columns?.[0]?.title || "Company"}
            </p>

            <ul className="space-y-3">
              {(columns?.[0]?.links || []).map((l, i) => (
                <li key={i}>
                  <Link 
                  
                    to={l.href || "/"}
                    className="flex text-[17px] text-gray-700 transition-all duration-200 hover:text-(--hover) hover:translate-x-1"
                    style={{
                      fontFamily: theme.fonts.body,
                      ["--hover"]: theme.colors.secondary,
                    }}
                  >
              
                
                       {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <p
              className="text-[18px] font-bold tracking-widest uppercase mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              {columns?.[1]?.title || "Help"}
            </p>

            <ul className="space-y-3">
              {(columns?.[1]?.links || []).map((l, i) => (
                <li key={i}>
                  <Link
                  
                    to={l.href || "/"}
                    className="flex text-[17px] text-gray-700 transition-all duration-200 hover:text-(--hover) hover:translate-x-1"
                    style={{
                      fontFamily: theme.fonts.body,
                      ["--hover"]: theme.colors.secondary,
                    }}
                  >
                    {l.text}
                  
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Enhanced UI */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pl-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <p
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.primary,
                }}
              >
              Ready to Start Your Project?
              </p>

              <p
                className="text-sm text-gray-600 mb-5"
                style={{ fontFamily: theme.fonts.body }}
              >
                Connect with us! Get updates, insights, and stories from our journey - straight to your inbox.
              </p>
               <p
                className="text-sm text-gray-600 mb-5"
                style={{ fontFamily: theme.fonts.body }}
              >
                Have questions or want to discuss your needs? Reach out to us - w'e here to help you get started.
              </p>

            
            
<Link to='/Get-Free-Consultation'>
                <button
                  type="submit"
                  className="w-full mt-4 px-6 py-3 font-semibold text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  style={{
                    fontFamily: theme.fonts.heading,
                    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
                  }}
                >
                  {newsletter?.buttonText || "Subscribe"}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr className="mt-16 mb-6 border-gray-300" />
        <div className="flex justify-between items-center flex-wrap">
          <p
            className="flex items-center gap-2"
            style={{ fontFamily: theme.fonts.body }}
          >
            <Copyright
              size={18}
              aria-hidden="true"
              style={{ color: theme.colors.primary }}
            />
            {copyright}
          </p>

          <p className="flex items-center gap-1">
            <Mail
              size={18}
              aria-hidden="true"
              style={{ color: theme.colors.primary }}
            />
            <a
              href={`mailto:${contactEmail}`}
              className="text-[13px] md:text-[16px] min-w-60 sm:min-w-[300px] md:min-w-[400px] whitespace-nowrap"
              style={{ fontFamily: theme.fonts.body }}
            >
              {contactEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;