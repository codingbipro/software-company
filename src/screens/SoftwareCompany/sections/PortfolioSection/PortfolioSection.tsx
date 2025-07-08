import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1232px] mx-auto py-16">
      <div className="flex flex-col md:flex-row w-full relative rounded-[30px] overflow-hidden">
        {/* Left side - Case study image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            alt="Case study image"
            src="/case-study--image-2.png"
          />
        </div>

        {/* Right side - Content */}
        <Card className="w-full md:w-1/2 bg-[#fff4f4] border-[#e7daec] rounded-[0px_30px_30px_0px]">
          <CardContent className="flex flex-col justify-between h-full p-12 gap-[60px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="font-headings-headings-h3 font-[number:var(--headings-headings-h3-font-weight)] text-graygray-800 text-[length:var(--headings-headings-h3-font-size)] tracking-[var(--headings-headings-h3-letter-spacing)] leading-[var(--headings-headings-h3-line-height)] [font-style:var(--headings-headings-h3-font-style)]">
                Website Design for SCFC Canada
              </h3>

              <p className="font-paragraphs-default font-[number:var(--paragraphs-default-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-font-size)] tracking-[var(--paragraphs-default-letter-spacing)] leading-[var(--paragraphs-default-line-height)] [font-style:var(--paragraphs-default-font-style)]">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </p>
            </div>

            <Button
              variant="ghost"
              className="w-fit p-0 flex items-center gap-[5px] hover:bg-transparent"
            >
              <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] [font-style:var(--button-text-btn-lg-font-style)] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                Raed more
              </span>
              <ArrowRightIcon className="w-4 h-4 text-graygray-800" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
