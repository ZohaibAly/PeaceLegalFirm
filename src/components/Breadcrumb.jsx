import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { theme } from "../../constants/theme";
import BreadcrumbBg from "../assets/images/BreadCrumb.png";

const Breadcrumb = () => {
  const location = useLocation();

  // Get page name from pathname
  const getPageName = () => {
    const path = location.pathname;

    // Remove leading slash and split by /
    const segments = path.split("/").filter((segment) => segment);

    if (segments.length === 0) return "Home";

    // Get last segment
    const lastSegment = segments[segments.length - 1];

    // Convert to readable format
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageName = getPageName();

  // Don't show breadcrumb on home page
  if (location.pathname === "/") return null;

  return (
    <div
      className="relative w-full h-[500px] flex items-end justify-center pt-32 pb-20"
      style={{
        backgroundImage: `url(${BreadcrumbBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0"></div>

      {/* Breadcrumb content */}
      <div className="relative z-10 text-center pb-8">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            color: "white",
            fontFamily: theme.fonts.heading,
          }}
        >
          {pageName}
        </h1>

        <div className="flex items-center justify-center space-x-2">
          <Link
            to="/"
            className="hover:underline transition-all duration-300"
            style={{
              color: "white",
              fontFamily: theme.fonts.body,
            }}
          >
            Home
          </Link>

          <ChevronRight size={16} style={{ color: theme.colors.secondary }} />

          <span
            style={{
              color: theme.colors.secondary,
              fontFamily: theme.fonts.body,
              fontWeight: "500",
            }}
          >
            {pageName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
