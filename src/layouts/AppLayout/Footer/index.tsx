import React from "react";
import FooterLogo from "@/components/icons/FooterLogo";
import WrapperPadding from "@/components/wrappers/WrapperPadding";
import SocialMediaBox from "../components/SocialMediaBox";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="w-full absolute bottom-0">
      <WrapperPadding className="w-full flex items-center justify-center">
        <div className="w-full max-w-app-w flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-4  md:gap-14 xl:gap-[90px]">
            <p className="text-white">
              © Creon {currentYear}. All rights reserved.
            </p>
            <SocialMediaBox />
          </div>
          <FooterLogo />
        </div>
      </WrapperPadding>
    </footer>
  );
};

export default Footer;
