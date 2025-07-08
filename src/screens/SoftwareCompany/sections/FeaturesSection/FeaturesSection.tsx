import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Decorative elements data for the button area
  const decorativeElements = [
    {
      position: "top",
      elements: [
        {
          width: "w-[34px]",
          height: "h-[7px]",
          top: "top-[22px]",
          left: "-left-1",
          rotate: "rotate-[-126.94deg]",
        },
        {
          width: "w-8",
          height: "h-[7px]",
          top: "top-3",
          left: "left-[43px]",
          rotate: "-rotate-90",
        },
        {
          width: "w-[35px]",
          height: "h-[7px]",
          top: "top-[22px]",
          left: "left-[88px]",
          rotate: "rotate-[-50.34deg]",
        },
      ],
    },
    {
      position: "bottom",
      elements: [
        {
          width: "w-[34px]",
          height: "h-[7px]",
          top: "top-[22px]",
          left: "-left-1",
          rotate: "rotate-[-126.94deg]",
        },
        {
          width: "w-8",
          height: "h-[7px]",
          top: "top-3",
          left: "left-[43px]",
          rotate: "-rotate-90",
        },
        {
          width: "w-[35px]",
          height: "h-[7px]",
          top: "top-[22px]",
          left: "left-[88px]",
          rotate: "rotate-[-50.34deg]",
        },
      ],
    },
  ];

  return (
    <section className="w-full max-w-[1232px] mx-auto my-8 md:my-12 lg:my-16 px-4">
      <Card className="relative w-full rounded-[20px] p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        <div className="w-full lg:max-w-[531px] mb-6 lg:mb-0">
          <h2 className="font-headings-headings-h2 text-xl md:text-2xl lg:text-[length:var(--headings-headings-h2-font-size)] tracking-[var(--headings-headings-h2-letter-spacing)] leading-[28px] md:leading-[36px] lg:leading-[var(--headings-headings-h2-line-height)] font-[number:var(--headings-headings-h2-font-weight)] [font-style:var(--headings-headings-h2-font-style)] bg-[linear-gradient(225deg,rgba(41,39,46,1)_0%,rgba(39,39,46,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
            Hire the best developers and designers around!
          </h2>
        </div>

        <div className="relative w-full lg:w-auto">
          <Button className="w-full lg:w-[262px] h-12 md:h-14 lg:h-[57px] rounded-[5px] border border-solid border-white bg-[linear-gradient(225deg,rgba(255,198,86,1)_0%,rgba(241,96,99,1)_100%)] text-graygray-50 font-headings-headings-h5 text-sm md:text-base lg:text-[length:var(--headings-headings-h5-font-size)] tracking-[var(--headings-headings-h5-letter-spacing)] leading-[var(--headings-headings-h5-line-height)] font-[number:var(--headings-headings-h5-font-weight)] [font-style:var(--headings-headings-h5-font-style)]">
            Hire Top Developers
          </Button>

          <div className="hidden lg:block absolute w-[89px] h-[141px] lg:w-[119px] lg:h-[191px] top-[-47px] lg:top-[-67px] left-[71px]">
            {decorativeElements.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className={`absolute w-[89px] h-8 lg:w-[119px] lg:h-10 ${group.position === "top" ? "top-0" : "top-[111px] lg:top-[151px]"} left-0`}
              >
                {group.elements.map((element, elementIndex) => (
                  <div
                    key={`element-${groupIndex}-${elementIndex}`}
                    className={`absolute w-6 h-1.5 lg:${element.width} lg:${element.height} ${element.top} ${element.left} rounded-[10px] ${element.rotate} bg-[linear-gradient(225deg,rgba(255,239,94,1)_0%,rgba(247,147,111,1)_100%)]`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};
