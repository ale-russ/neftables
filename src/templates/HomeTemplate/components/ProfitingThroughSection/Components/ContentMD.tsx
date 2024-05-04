import React from "react";

import BodyText from "@/components/typography/BodyText";
import Heading4 from "@/components/typography/Heading4";
import VideoAnimation from "@/components/videos/VideoAnimation";

export const ContentMD = () => {
  return (
    <div className="xl:hidden flex flex-col lg:flex-row w-full gap-8 py-6">
      <div className="w-full lg:w-3/5 h-[176px] sm:h-[262px] md:h-[362px] lg:h-[493px] relative rounded-md overflow-hidden">
        <VideoAnimation src="/videos/ceron-logo.mp4" />
      </div>
      <div className="w-full lg:w-2/5 flex flex-col gap-4 items-center justify-center py-6 lg:px-6 border-tertiary border-b-[1px] border-t-[1px] lg:border-t-0 lg:border-b-0 lg:border-l-[1px] lg:border-r-[1px]">
        <Heading4 className="text-left w-full">
          A Dynamic Business Model for Sustainable Growth and Community
          Engagement
        </Heading4>
        <BodyText>
          At Creon, we merge AI tools with the crypto and NFT markets,
          leveraging a dynamic business model to generate profits. Our
          commitment to innovation and decentralization allows us to strengthen
          our market position and foster a sustainable ecosystem. We empower our
          community, ensuring transparency and actively involving NFT holders in
          our success.
        </BodyText>
      </div>
    </div>
  );
};
