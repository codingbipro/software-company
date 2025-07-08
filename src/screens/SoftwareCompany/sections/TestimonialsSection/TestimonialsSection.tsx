import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Resource card data for mapping
  const resourceCards = [
    {
      imageSrc: "/rectangle-10-2.svg",
      imageWidth: "w-[219px]",
    },
    {
      imageSrc: "/rectangle-10.svg",
      imageWidth: "w-[254px]",
    },
    {
      imageSrc: "/rectangle-10-4.svg",
      imageWidth: "w-[254px]",
    },
    {
      imageSrc: "/rectangle-10-1.svg",
      imageWidth: "w-[254px]",
    },
    {
      imageSrc: "/rectangle-10-3.svg",
      imageWidth: "w-[219px]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[66px] w-full py-8 md:py-12 lg:py-16 px-4">
      {/* Section header */}
      <div className="flex flex-col items-center gap-4 md:gap-5">
        {/* Decorative gradient bar */}
        <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

        {/* Section title */}
        <h2 className="w-full max-w-[474px] [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center leading-[32px] md:leading-[40px] lg:leading-[55px]">
          <span>Featured</span> <br />
          <span className="font-bold">Resources</span>
        </h2>
      </div>

      {/* Resource cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-[60px] w-full max-w-7xl">
        {resourceCards.map((card, index) => (
          <Card key={index} className="flex flex-col border-none shadow-none">
            <CardContent className="flex flex-col items-start p-0 gap-5">
              {/* Card image */}
              <img
                className="w-full h-[140px] md:h-[160px] lg:h-[175px] object-cover rounded-md"
                alt="Resource thumbnail"
                src={card.imageSrc}
              />

              {/* Card title */}
              <div className="w-full min-h-[60px] md:min-h-[75px]">
                <div className="w-full font-headings-headings-h6 font-[number:var(--headings-headings-h6-font-weight)] text-graygray-800 text-sm md:text-base lg:text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--headings-headings-h6-line-height)]">
                  How to Build a Scalable Application up to 1 Million Users on
                  AWS
                </div>
              </div>

              {/* Read more link */}
              <div className="flex items-center justify-start lg:justify-end gap-3 lg:gap-[15px] self-start lg:self-end">
                <div className="font-headings-headings-h6 font-[number:var(--headings-headings-h6-font-weight)] text-brandprimary-bg text-sm md:text-base lg:text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[var(--headings-headings-h6-line-height)] whitespace-nowrap">
                  Read More
                </div>
                <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
