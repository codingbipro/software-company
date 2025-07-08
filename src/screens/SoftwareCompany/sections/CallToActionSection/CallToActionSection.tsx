import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1232px] h-auto mx-auto my-8">
      <div className="relative flex flex-row h-[416px]">
        {/* Case study image */}
        <div className="relative w-[601px] h-full">
          <img
            className="w-full h-full object-cover"
            alt="Case study image"
            src="/case-study--image-1.png"
          />
        </div>

        {/* Content section */}
        <Card className="flex-1 rounded-[0px_30px_30px_0px] border border-solid border-[#e7daec] bg-[#f0fff7] shadow-none">
          <CardContent className="flex flex-col justify-between h-full p-0">
            <div className="flex flex-col gap-[30px] pt-[66px] px-[143px] pb-0">
              <h3 className="font-headings-headings-h3 font-[number:var(--headings-headings-h3-font-weight)] text-graygray-800 text-[length:var(--headings-headings-h3-font-size)] tracking-[var(--headings-headings-h3-letter-spacing)] leading-[var(--headings-headings-h3-line-height)] [font-style:var(--headings-headings-h3-font-style)]">
                Website Design for SCFC Canada
              </h3>

              <p className="w-full font-paragraphs-default font-[number:var(--paragraphs-default-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-font-size)] tracking-[var(--paragraphs-default-letter-spacing)] leading-[var(--paragraphs-default-line-height)] [font-style:var(--paragraphs-default-font-style)]">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
            </div>

            <div className="flex items-center mb-[66px] ml-[143px]">
              <button className="inline-flex items-center gap-[5px] hover:opacity-80">
                <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                  Read more
                </span>
                <ArrowRightIcon className="w-4 h-4 text-brandprimary-bg" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
