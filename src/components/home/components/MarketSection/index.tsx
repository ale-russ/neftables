import React from "react";

import WrapperPadding from "@/components/wrappers/WrapperPadding";
import { marketCardData } from "../../constants/market-data";
import FooterBackground from "../FooterBackground";
import { MarketCard } from "./MarketCard";

const MarketSection = () => {
  return (
    <section className="w-full flex min-h-[100vh] relative bg-black">
      <FooterBackground wrapperClass="block" />
      <WrapperPadding className="flex flex-col justify-center items-center w-full z-0  mb-28 lg:mb-10 xl:mb-2">
        <div className="w-[calc(100vw-30px)] md:w-full max-w-app-w overflow-x-auto scrollbar-hide xl:pb-[150px]">
          <div className="w-full flex md:flex-col gap-4 xl:gap-6">
            {marketCardData.map((data, index) => (
              <MarketCard key={index} {...data} />
            ))}
          </div>
        </div>
      </WrapperPadding>
    </section>
  );
};

export default MarketSection;
