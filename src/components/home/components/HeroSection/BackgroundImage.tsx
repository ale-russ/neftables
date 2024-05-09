import React from "react";
import Image from "next/image";

import VideoAnimation from "@/components/videos/VideoAnimation";

export const BackgroundImage = () => {
  return (
    <div className="relative w-full flex-1">
      <VideoAnimation src="/videos/main-background-video.mp4" />
      <Image
        src="/images/hero-video-blur.webp"
        alt=""
        fill
        className="bg-[linear-gradient(0deg,_rgba(5,12,26,1)_0%,_rgba(58,132,239,1)_40%,_rgba(176,32,255,1)_100%)] mix-blend-soft-light"
      />
    </div>
  );
};
