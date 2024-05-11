"use client";

import React from "react";

import WrapperPadding from "@/components/wrappers/WrapperPadding";
import Heading3 from "@/components/typography/Heading3";
import { Accordion } from "./components/Accordion";
import { MissionImage } from "./components/MissionImage";

const OurMissionSection = () => {
  return (
    <section className="w-full flex flex-col min-h-[100vh] bg-black py-10">
      <WrapperPadding className="w-full h-full flex justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row gap-0 md:gap-14 max-w-app-w z-10">
          <div className="w-full lg:w-1/2 flex flex-col">
            <Heading3 className="block max-w-[699px]">
              Our vision is to support the innovation of AI blockchain projects{" "}
              <span className="gradient text-gradient">
                while prioritizing communities and democratizing profits
              </span>
            </Heading3>
            <MissionImage
              wrapperClass="h-[182px] lg:h-[377px] xl:h-[450px] mt-[-40px]   lg:block lg:overflow-visible sm:flex sm:flex justify-center items-center sm:mt-20"
              imageContainer="w-[302px] h-[182px] lg:w-[628px] lg:h-[377px] xl:w-[836px] xl:h-[502px] mt-4"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="w-full max-w-[550px]">
              <Accordion />
            </div>
          </div>
        </div>
      </WrapperPadding>
    </section>
  );
};

export default OurMissionSection;
