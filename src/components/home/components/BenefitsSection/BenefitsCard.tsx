import React from "react";
import Image from "next/image";

import BodyText from "@/components/typography/BodyText";
import Heading3 from "@/components/typography/Heading3";
import Heading4 from "@/components/typography/Heading4";

type BenefitsCardProps = {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  isComingSoon?: boolean;
};

export const BenefitsCard = ({
  title,
  subtitle,
  image,
  content,
  isComingSoon,
}: BenefitsCardProps) => {
  return (
    <div className="w-full min-w-[308px] flex flex-col gap-3 xl:gap-6 bg-tertiary rounded-md h-[616px] xl:h-[659px] py-[20px] xl:py-[30px] relative">
      {isComingSoon ? (
        <span className="px-[6px] py-[3px] rounded-full text-xs leading-[13.2px] font-satoshi-bold uppercase bg-white absolute right-[5%] top-[-10px]">
          Coming soon
        </span>
      ) : (
        ""
      )}
      <div className="w-full flex flex-col gap-2 xl:gap-4 px-[30px] min-h-[90px] xl:min-h-[120px]">
        <Heading3>{title}</Heading3>
        <Heading4 className="gradient text-gradient">{subtitle}</Heading4>
      </div>
      <div className="w-full pr-[20px] xl:pr-[30px]">
        <div className="overflow-hidden rounded-e-md h-[234px]">
          <div
            className={`transform-all relative w-full h-full hover:scale-[1.1]`}
          >
            <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <BodyText className="px-[20px] xl:px-[30px]">{content}</BodyText>
    </div>
  );
};
