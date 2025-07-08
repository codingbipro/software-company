import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1232px] mx-auto my-8">
      <Card className="flex flex-row overflow-hidden border-0 shadow-none">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            alt="Case study image"
            src="/case-study--image.png"
          />
        </div>

        <CardContent className="w-full md:w-1/2 bg-[#f1f1ff] p-16 flex flex-col justify-between gap-[60px] rounded-r-[30px] border border-solid border-[#e7daec] border-l-0">
          <div className="flex flex-col gap-[30px]">
            <h3 className="font-headings-headings-h3 font-[number:var(--headings-headings-h3-font-weight)] text-graygray-800 text-[length:var(--headings-headings-h3-font-size)] tracking-[var(--headings-headings-h3-letter-spacing)] leading-[var(--headings-headings-h3-line-height)] [font-style:var(--headings-headings-h3-font-style)]">
              Website Design for SCFC Canada
            </h3>

            <p className="font-paragraphs-default font-[number:var(--paragraphs-default-font-weight)] text-graygray-700 text-[length:var(--paragraphs-default-font-size)] tracking-[var(--paragraphs-default-letter-spacing)] leading-[var(--paragraphs-default-line-height)] [font-style:var(--paragraphs-default-font-style)]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
          </div>

          <Button
            variant="link"
            className="w-fit p-0 flex items-center gap-[5px] h-auto"
          >
            <span className="bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] [font-style:var(--button-text-btn-lg-font-style)]">
              Read more
            </span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
