import React from "react";
import CreonPass from "./components/CreonPass";
import HeroSection from "./components/HeroSection";
import OurMissionSection from "./components/OurMissionSection";
import ProfitingThroughSection from "./components/ProfitingThroughSection";
import BenefitsSection from "./components/BenefitsSection";
import MarketSection from "./components/MarketSection";

const HomeTemplate = () => {
  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
};

export default HomeTemplate;

const DesktopView = () => {
  return (
    <div className="hidden xl:flex flex-1 flex-col">
      <HeroSection />
      <CreonPass />
      <ProfitingThroughSection />
      <OurMissionSection />
      <BenefitsSection />
      <MarketSection />
    </div>
  );
};

const MobileView = () => {
  return (
    <div className="xl:hidden flex flex-1 flex-col">
      <HeroSection />
      <CreonPass />
      <ProfitingThroughSection />
      <OurMissionSection />
      <BenefitsSection />
      <MarketSection />
    </div>
  );
};
