import React from "react";
import { twMerge } from "tailwind-merge";

import BodyText from "@/components/typography/BodyText";

type ContentTextProps = React.PropsWithChildren & {
  className?: string;
};

export const ContentText = ({ children, className = "" }: ContentTextProps) => {
  return (
    <BodyText
      className={twMerge(
        "px-4 py-2 border-[1px] border-tertiary w-fit rounded-md",
        className
      )}
    >
      {children}
    </BodyText>
  );
};
