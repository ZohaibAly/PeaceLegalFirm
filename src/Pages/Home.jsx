import React from "react";
import HeroSection from "../components/HeroSection";
// import ConsultationForm from '../components/ConsultationForm';
import CEOProfile from "../components/CEOProfile";
import PracticeAreas from "../components/PracticeAreas";
import PracticeAreasSlider from "../components/PracticeAreasSlider";
import LegalHeroSection from "../components/LegalHeroSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <ConsultationForm/> */}
      <CEOProfile/>
      <PracticeAreas/>
      <PracticeAreasSlider/>
      <LegalHeroSection/>
    </>
  );
};

export default HomePage;
