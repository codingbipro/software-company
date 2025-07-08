import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 md:gap-12 lg:gap-[51px] py-8 md:py-10 lg:py-12 w-full px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-start gap-4 md:gap-5">
        {/* Decorative gradient line */}
        <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

        <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-[30px]">
          <h2 className="font-['Inter',Helvetica] text-2xl md:text-3xl lg:text-[35px] text-graygray-900 leading-[32px] md:leading-[40px] lg:leading-[55px] max-w-full lg:max-w-[474px]">
            <span>Leading companies trust us</span>
            <span className="font-bold"> to develop software</span>
          </h2>
        </div>
      </div>

      <Button
        variant="link"
        className="flex items-center justify-start lg:justify-end gap-3 lg:gap-[15px] p-0 text-brandprimary-bg font-headings-headings-h6 text-sm md:text-base lg:text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[var(--headings-headings-h6-line-height)] [font-style:var(--headings-headings-h6-font-style)]"
      >
        See more Informations
        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
      </Button>
    </section>
  );
};
