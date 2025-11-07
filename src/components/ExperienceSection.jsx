import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";
import ExpSection from "../assets/images/ExpSectionImg.png";
import BusAlly from "../assets/images/business-ally.png";
import CasesImg from "../assets/images/cases-done.png";
import AwardImg from "../assets/images/awards-win.png";

const ExperienceSection = () => {
  const stats = [
    {
      icon: BusAlly,
      number: "210+",
      label: "Business Ally",
    },
    {
      icon: CasesImg,
      number: "5000+",
      label: "Cases Done",
    },
    {
      icon: AwardImg,
      number: "35+",
      label: "Awards Win",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.secondary }}
          ></div>
          <b>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              10 Years Of Experience In
              <br />
              Legal{" "}
              <span style={{ color: theme.colors.secondary }}>Cases Field</span>
            </h1>
          </b>
          <p
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-8"
            style={{ fontFamily: theme.fonts.body }}
          >
            Peace Law offer deep expertise and proven results in handling
            complex legal cases, delivering reliable and effective solutions
            tailored to your needs.
          </p>
          <Link to="/Get-Free-Consultation">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-sm md:text-base uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
              style={{
                backgroundColor: theme.colors.secondary,
                fontFamily: theme.fonts.body,
              }}
            >
              GET FREE CONSULTATION
            </button>
          </Link>
        </div>

        {/* Orange Stats Card with Actual Background Image */}
        <div
          className="relative rounded-3xl overflow-hidden py-8 px-8 md:px-12 md:py-12 -mb-40 md:-mb-40 z-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white"
          style={{
            backgroundImage: `url(${ExpSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center min-w-40 max-w-[360px]">
                <div className="mb-3">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto"
                  />
                </div>

                <h2
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2"
                  style={{ fontFamily: theme.fonts.heading }}
                >
                  {stat.number}
                </h2>

                <p
                  className="text-sm md:text-base lg:text-lg"
                  style={{ fontFamily: theme.fonts.body }}
                >
                  {stat.label}
                </p>
              </div>

              {/* Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-24 bg-white opacity-30 self-center"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
