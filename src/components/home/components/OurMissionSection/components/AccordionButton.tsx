import React from "react";

import DownArrow from "@/components/icons/DownArrow";
import UpArrow from "@/components/icons/UpArrow";
import Heading4 from "@/components/typography/Heading4";

type AccordionButtonProps = {
  title: string;
  open: boolean;
  Icon: React.FC<{ active?: boolean }>;
};

export const AccordionButton = ({
  open,
  title,
  Icon,
}: AccordionButtonProps) => {
  return (
    <div className="w-full flex items-center gap-6 justify-between cursor-pointer py-2 xl:py-4 group">
      <div className="w-full flex items-center gap-6">
        <div className="w-[73px] h-[83px] min-w-[73px]  xl:w-[100px] xl:h-[114px] xl:min-w-[100px]">
          <Icon active={open} />
        </div>
        <div className="w-full flex justify-between">
          <Heading4
            className={`transform-all max-w-[360px] ${
              !open ? "group-hover:text-primary" : ""
            }`}
          >
            {title}
          </Heading4>
          <div className="p-1 xl:p-2">
            {open ? (
              <UpArrow className={!open ? "group-hover:stroke-primary" : ""} />
            ) : (
              <DownArrow
                className={!open ? "group-hover:stroke-primary" : ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
