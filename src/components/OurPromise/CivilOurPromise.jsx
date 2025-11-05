import { theme } from "../../../constants/theme";
import { Link } from "react-router-dom";
import PromiseBgImg from "../../assets/images/PromiseSectionBg.png";
import CaseIcon from "../../assets/images/case.png";
import SupportIcon from "../../assets/images/support.png";
import ApproachIcon from "../../assets/images/approach.png";

export default function CivilOurPromise() {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = theme.colors.secondary;
    e.currentTarget.style.borderColor = theme.colors.secondary;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.borderColor = "white";
  };

  return (
    <section
      className="w-full h-auto relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${PromiseBgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 mt-8"
          style={{
            fontFamily: theme.fonts.heading,
          }}
        >
          <span style={{ color: theme.colors.secondary }}>Our Promise</span>
          <span className="text-white"> to You</span>
        </h2>

        {/* Button */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full border-2 text-white font-medium text-sm md:text-base transition-all duration-300"
            style={{
              fontFamily: theme.fonts.body,
              borderColor: "white",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            MORE ABOUT US
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {/* Card 01 */}
          <div
            className="w-[320px] p-6 rounded-lg"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <h3
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: "#4A4A4A",
              }}
            >
              01
            </h3>
            <div className="text-center">
              <img
                src={CaseIcon}
                alt="Case Icon"
                className="w-20 h-20 mx-auto mb-6"
              />
              <h4
                className="text-lg font-semibold mb-3 text-white"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
                Honesty and Transparency:
              </h4>
              <p
                className="text-sm text-white/90 leading-relaxed"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
                Clear communication and ethical guidance in every step.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div
            className="w-[320px] p-6 rounded-lg"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <h3
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: "#4A4A4A",
              }}
            >
              02
            </h3>
            <div className="text-center">
              <img
                src={SupportIcon}
                alt="Case Icon"
                className="w-20 h-20 mx-auto mb-6"
              />
              <h4
                className="text-lg font-semibold mb-3 text-white"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
                Client-Centered Approach:
              </h4>
              <p
                className="text-sm text-white/90 leading-relaxed"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
                We treat your case as our own, ensuring full support throughout.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div
            className="w-[320px] p-6 rounded-lg"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <h3
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: "#4A4A4A",
              }}
            >
              03
            </h3>
            <div className="text-center">
              <img
                src={ApproachIcon}
                alt="Case Icon"
                className="w-20 h-20 mx-auto mb-6"
              />
              <h4
                className="text-lg font-semibold mb-3 text-white"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
               Strong Legal Advocacy:
              </h4>
              <p
                className="text-sm text-white/90 leading-relaxed"
                style={{
                  fontFamily: theme.fonts.body,
                }}
              >
                Dedicated to achieving the best possible outcome for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
