import VideoAnimation from "@/components/videos/VideoAnimation";
import React from "react";

import VideoOverlay from "../../components/VideoOverlay";

export const NFT = () => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <VideoAnimation
          src="/videos/nft-video.mp4"
          className="mix-blend-soft opacity-80"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px]  bg-black shrink-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px] bg-black shrink-0" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
      </div>
      <VideoOverlay />
    </>
  );
};
