import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type MissionImageProps = {
  wrapperClass?: string;
  innerBoxClass?: string;
  imageContainer?: string;
};

export const MissionImage = ({
  wrapperClass = "",
  innerBoxClass = "",
  imageContainer = "",
}: MissionImageProps) => {
  return (
    <div
      className={twMerge(
        "w-full z-[-1] overflow-hidden relative",
        wrapperClass
      )}
    >
      <div className={twMerge("absolute ", innerBoxClass)}>
        <div className={twMerge("relative", imageContainer)}>
          <Image
            src={"/images/CREON 1.svg"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};
