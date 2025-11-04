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
        { text: "Our Lawyers", href: "/contact-us" },
        { text: "Get Free Consultation", href: "/faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Company Law", href: "/category/pet-supplies" },
        {
          text: "Family Law",
          href: "/category/beauty-and-personal-care",
        },
        {
          text: "Criminal Law",
          href: "/category/electronics-and-accessories",
        },
        { text: "Civil Law", href: "/category/automotive-and-tools" },
      ],
    },
  ],

  // newsletter copy (optional)
  newsletter: {
    placeholder: "Enter your email",
    buttonText: "Stay Informed",
    action: "/contact-us",
  },
  contactEmail: "Ranaalmasadv@gmail.com",

  copyright: `Peace Legal Firm ${new Date().getFullYear()}`,
};
