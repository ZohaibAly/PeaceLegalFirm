import React from "react";
import ContactInfoSection from "../components/ContactInfoSection";
import Breadcrumb from "../components/Breadcrumb";
import ContactFormSection from "../components/ContactFormSection";
import CourthouseBackground from "../components/CourthouseBackground";
const ContactPage = () => {
  return (
    <>
    <Breadcrumb/>
    <ContactInfoSection/>
    <CourthouseBackground/>
    <ContactFormSection/>
    </>
  );
};

export default ContactPage;