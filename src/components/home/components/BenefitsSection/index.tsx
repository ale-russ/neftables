"use client";

import React from "react";

import WrapperPadding from "@/components/wrappers/WrapperPadding";
import {
  benefitsCardData,
  benefitsCardDataLG,
} from "../../constants/benefits-data";
import { BenefitsCard } from "./BenefitsCard";

const BenefitsSection = () => {
  return (
    <section className="w-full flex min-h-[100vh] bg-black py-10 relative">
      <WrapperPadding className="w-full flex justify-center items-center">
        <div className="w-full max-w-app-w z-0 pb-[100px] xl:pb-2">
          <div className="hidden xl:flex gap-6">
            {benefitsCardData.map((data, index) => (
              <BenefitsCard key={index} {...data} />
            ))}
          </div>
          <div className="xl:hidden w-[calc(100vw-30px)] md:w-[calc(100vw-65px)] overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 py-4">
              {benefitsCardDataLG.map((data, index) => (
                <BenefitsCard key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </WrapperPadding>
    </section>
  );
};

export default BenefitsSection;
