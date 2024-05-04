import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import VideoAnimation from "@/components/videos/VideoAnimation";

type FooterBackgroundProps = {
  wrapperClass?: string;
};

const FooterBackground = ({ wrapperClass = "" }: FooterBackgroundProps) => {
  return (
    <div className={twMerge("h-full w-full absolute top-0", wrapperClass)}>
      <div className="w-full h-full absolute top-0 bg-[linear-gradient(180deg,#3d8bff,#ab23ff)] mix-blend-soft-light rotate-180" />
      <VideoAnimation src="/videos/roadmap-video.mp4" />
      <Image src="/images/footer-video-blur.webp" alt="" fill />
    </div>
  );
};

export default FooterBackground;
