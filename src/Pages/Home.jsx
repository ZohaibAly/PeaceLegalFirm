import React from "react";
import HeroSection from "../components/HeroSection";
// import ConsultationForm from '../components/ConsultationForm';
import CEOProfile from "../components/CEOProfile";
import PracticeAreas from "../components/PracticeAreas";
import ExperienceSection from "../components/ExperienceSection";
import PracticeAreasSlider from "../components/PracticeAreasSlider";
import LegalHeroSection from "../components/LegalHeroSection";
import ItalianLegalServices from "../components/ItalianLegalServices";
import PeaceTimeLine from '../components/PeaceLawTimeline';
import ContactInfoSection from "../components/ContactInfoSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <ConsultationForm/> */}
      <CEOProfile/>
      <PracticeAreas/>
      <PracticeAreasSlider/>
      <ExperienceSection/>
      <LegalHeroSection/>
      <ItalianLegalServices/>
      <PeaceTimeLine/>
      <ContactInfoSection/>
    </>
  );
};

export default HomePage;
