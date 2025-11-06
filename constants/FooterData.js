// src/constants/FooterData.js
export const footerData = {
  brand: "Corey Lucas Distribution",


  description:
    "Peace International law firm One a dream has been structured into a reality. This has taken an enduring over 11 years of conviction and untiring efforts to see it grow into a leading Law Firm with one of biggest market clientage within the country especially in Lahore and abroad.",

  // middle columns
  columns: [
    {
      title: "Quick Menu",
      links: [
        { text: "Home", href: "/" },
        { text: "Services", href: "/products" },
        { text: "Our Lawyers", href: "/Our-Lawyers" },
        { text: "Get Free Consultation", href: "/Get-Free-Consultation" },
      ],
    },
    {
      title: "Practice Areas",
      links: [
        { text: "Company Law", href: "/services/Company-Law" },
        {
          text: "Family Law",
          href: "/services/Family-Law",
        },
        {
          text: "Criminal Law",
          href: "/services/Criminal-Law",
        },
        { text: "Civil Law", href: "/services/Civil-Law" },
      ],
    },
  ],

  // newsletter copy (optional)
  newsletter: {
    placeholder: "Enter your email",
    buttonText: "Stay Informed",
    action: "/Get-Free-Consultation",
  },
  contactEmail: "Ranaalmasadv@gmail.com",

  copyright: `Peace Legal Firm ${new Date().getFullYear()}`,
};
