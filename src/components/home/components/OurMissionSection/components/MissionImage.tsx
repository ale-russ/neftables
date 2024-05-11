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
            src={"/images/CREON122.png"}
            fill
            alt=""
            sizes="(min-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};
