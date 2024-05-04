import React from "react";

import BodyText from "@/components/typography/BodyText";
import { ourMissionAccordionData } from "../../../constants/our-mission-data";
import { useOurMission } from "../hooks";
import { AccordionButton } from "./AccordionButton";

export const Accordion = () => {
  const { activeAccordion, handleToggleAccordion } = useOurMission();

  return (
    <ul className={`transform-all w-full h-fit flex flex-col justify-center`}>
      {ourMissionAccordionData.map((data, index) => (
        <li
          key={index}
          className="px-2 py-2 xl:py-4 border-tertiary border-b-[1px]"
          onClick={() => handleToggleAccordion(index)}
        >
          <AccordionButton
            title={data.title}
            open={index === activeAccordion}
            Icon={data.Icon}
          />
          <div
            className={`transform-all overflow-hidden  ${
              index === activeAccordion ? "h-[280px] xl:h-[200px]" : "h-[1px]"
            }`}
          >
            <BodyText
              className={`transform-all pl-[100px] xl:pl-[130px] ${
                index === activeAccordion ? "opacity-100" : "opacity-50"
              }`}
            >
              {data.content}
            </BodyText>
          </div>
        </li>
      ))}
    </ul>
  );
};
