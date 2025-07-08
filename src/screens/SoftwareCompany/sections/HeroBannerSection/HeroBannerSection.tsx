import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 gap-8 lg:gap-0">
      <div className="flex flex-col items-start gap-8 md:gap-12 lg:gap-[75px] w-full lg:w-1/2">
        <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-7">
          <p className="w-full max-w-[531px] font-paragraphs-default-lg font-[number:var(--paragraphs-default-lg-font-weight)] text-graygray-700 text-base md:text-lg lg:text-[length:var(--paragraphs-default-lg-font-size)] tracking-[var(--paragraphs-default-lg-letter-spacing)] leading-[28px] md:leading-[32px] lg:leading-[var(--paragraphs-default-lg-line-height)] [font-style:var(--paragraphs-default-lg-font-style)]">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
        </div>

        <Button className="px-6 py-3 md:px-8 md:py-4 lg:px-[30px] lg:py-[19px] bg-[#3d63e9] rounded-[5px] shadow-btn-shadow">
          <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-graygray-50 text-sm md:text-base lg:text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)]">
            Let&apos;s get started!
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
        <div className="w-full max-w-[400px] h-[300px] md:max-w-[500px] md:h-[400px] lg:max-w-[614px] lg:h-[546px] bg-[url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
      </div>
    </section>
  );
}