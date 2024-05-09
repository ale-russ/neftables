import React from "react";

import WrapperPadding from "@/components/wrappers/WrapperPadding";
import Heading2 from "@/components/typography/Heading2";
import Heading3 from "@/components/typography/Heading3";
import { ContentXL } from "./Components/ContentXL";
import { ContentMD } from "./Components/ContentMD";

const ProfitingThroughSection = () => {
  return (
    <section className="w-full flex min-h-[100vh] bg-black py-10">
      <WrapperPadding className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col gap-4 max-w-app-w">
          <Heading2>Profiting Through</Heading2>
          <Heading3 className="gradient text-gradient text-right">
            AI Innovation & Decentralization
          </Heading3>
          <ContentXL />
          <ContentMD />
        </div>
      </WrapperPadding>
    </section>
  );
};

export default ProfitingThroughSection;
