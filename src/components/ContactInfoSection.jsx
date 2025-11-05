import React from "react";
import { theme } from "../../constants/theme";

import HeadOfficeIcon from "../assets/images/Head-office.png";
import OfficeHoursIcon from "../assets/images/office-hours.png";
import EmailSupportIcon from "../assets/images/email-support.png";
import LetsTalkIcon from "../assets/images/lets-talk.png";

const ContactInfoSection = () => {
  const contactData = [
    {
      icon: HeadOfficeIcon,
      title: "Head Office",
      line1: "Peace International Law Firm",
      line2: "Mazang 4 Near Family hospital High",
      line3: "Court Lahore",
    },
    {
      icon: OfficeHoursIcon,
      title: "Office Hours",
      line1: "Monday to friday: 9am - 5pm",
      line2: "Saturday: 10am-2pm",
      line3: "Sunday: Closed",
    },
    {
      icon: EmailSupportIcon,
      title: "Email Support",
      line1: "Ranaalmasadv@gmail.com",
      line2: "For more information visit our WhatsApp",
      line3: "",
    },
    {
      icon: LetsTalkIcon,
      title: "Let's Talk",
      line1: "+92 42 37362400",
      line2: "+92 301 4448260",
      line3: "",
    },
  ];

  return (
    <div
      className="w-full min-h-[380px] flex flex-wrap items-center justify-center py-12 px-4 gap-8"
      style={{ backgroundColor: theme.colors.secondary }}
    >
      {contactData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-white max-w-[280px] px-6 py-8"
        >
          {/* Icon */}
          <div className="mb-6">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Title */}
          <h3
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            {item.title}
          </h3>

          {/* Content Lines */}
          <div
            className="text-sm leading-relaxed space-y-1"
            style={{ fontFamily: theme.fonts.body }}
          >
            {item.line1 && <p>{item.line1}</p>}
            {item.line2 && <p>{item.line2}</p>}
            {item.line3 && <p>{item.line3}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfoSection;
