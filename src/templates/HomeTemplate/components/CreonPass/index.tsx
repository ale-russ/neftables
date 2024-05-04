import React from "react";
import Link from "next/link";

import Heading2 from "@/components/typography/Heading2";
import WrapperPadding from "@/components/wrappers/WrapperPadding";
import Heading4 from "@/components/typography/Heading4";
import BodyText from "@/components/typography/BodyText";
import { NFT } from "./components/NFT";

import { ContentVariant1 } from "./components/ContentVariant1";
import { ContentVariant2 } from "./components/ContentVariant2";

const CreonPass = () => {
  return (
    <section className="w-full flex min-h-[100vh] bg-black py-10">
      <WrapperPadding className="w-full flex justify-center">
        <div className="w-full flex flex-col items-center md:flex-row gap-6 max-w-app-w">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <Heading2 className="border-b-[1px] border-b-tertiary py-6">
              creon pass nft
            </Heading2>
            <Heading4 className="gradient text-gradient">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </Heading4>
            <div className="w-full md:hidden h-[485px] relative">
              <NFT />
            </div>
            <ContentVariant1 />
            <ContentVariant2 />
            <Link href="#" className="mt-10">
              <BodyText
                className={`transform-all w-full md:w-[231px] xl:w-[453px] h-[46px] xl:h-[54px] rounded-md overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:to-primary`}
              >
                <span
                  className={`transform-all w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                >
                  Buy Creon Pass
                </span>
                <span
                  className={`transform-all w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                >
                  Buy Creon Pass
                </span>
              </BodyText>
            </Link>
          </div>
          <div className="w-full hidden md:flex flex-1 h-[694px] xl:h-[808px] md:w-1/2 relative rounded-md overflow-hidden">
            <NFT />
          </div>
        </div>
      </WrapperPadding>
    </section>
  );
};

export default CreonPass;
