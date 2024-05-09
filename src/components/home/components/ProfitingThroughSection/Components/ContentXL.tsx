import React from "react";

import BodyText from "@/components/typography/BodyText";
import Heading4 from "@/components/typography/Heading4";
import VideoAnimation from "@/components/videos/VideoAnimation";
import VideoOverlay from "../../VideoOverlay";

export const ContentXL = () => {
  return (
    <div className="hidden xl:flex w-full gap-10 py-6">
      <div className="w-2/3 relative rounded-md overflow-hidden">
        <VideoAnimation src="/videos/creon-logo.mp4" />
        <VideoOverlay />
      </div>
      <div className="w-1/3 flex flex-col gap-4 items-center justify-center py-2 px-6 border-l-[1px] border-r-[1px] border-tertiary">
        <Heading4>
          The dynamic community driven business model of the future.
        </Heading4>
        <BodyText>
          At Creon, we blend the power of AI tools with the dynamic crypto and
          NFT markets, utilizing an innovative business model to drive
          profitability. This approach empowers our community, as our NFT and
          token holders directly benefit from the growth and prosperity of the
          Creon network, creating a win-win scenario for both our community and
          for the projects we launch.
        </BodyText>
      </div>
    </div>
  );
};
