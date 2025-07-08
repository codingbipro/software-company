import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

// Team section data for reusability
const teamSectionData = [
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    testimonial:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    avatarSrc: "/ellipse-185.png",
    name: "Jeewa markram",
    position: "CEO",
    imageSrc: "/rectangle-17.png",
    imagePosition: "right",
  },
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    testimonial:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    avatarSrc: "/ellipse-185-1.png",
    name: "Jeewa markram",
    position: "CEO",
    imageSrc: "/rectangle-18.png",
    imagePosition: "left",
  },
  {
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    testimonial:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    avatarSrc: "/ellipse-185-2.png",
    name: "Jeewa markram",
    position: "CEO",
    imageSrc: "/rectangle-19.png",
    imagePosition: "right",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-24 py-6 md:py-8 w-full">
      {teamSectionData.map((item, index) => (
        <div
          key={`team-section-${index}`}
          className={`flex w-full items-center justify-between gap-6 md:gap-8 lg:gap-4 flex-col ${item.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-6">
              <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
                <h3 className="font-headings-headings-h3 font-[number:var(--headings-headings-h3-font-weight)] text-graygray-900 text-xl md:text-2xl lg:text-[length:var(--headings-headings-h3-font-size)] tracking-[var(--headings-headings-h3-letter-spacing)] leading-[28px] md:leading-[32px] lg:leading-[var(--headings-headings-h3-line-height)] [font-style:var(--headings-headings-h3-font-style)]">
                  {item.title}
                </h3>

                <div className="flex flex-col items-start gap-2.5 w-full">
                  <p className="font-paragraphs-para-1 font-[number:var(--paragraphs-para-1-font-weight)] text-graygray-800 text-base md:text-lg lg:text-[length:var(--paragraphs-para-1-font-size)] tracking-[var(--paragraphs-para-1-letter-spacing)] leading-[24px] md:leading-[28px] lg:leading-[var(--paragraphs-para-1-line-height)] [font-style:var(--paragraphs-para-1-font-style)]">
                    {item.description}
                  </p>

                  <div className="flex flex-col items-start gap-4 md:gap-5 mt-2">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-[3px] h-16 md:h-20 lg:h-[87px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] flex-shrink-0" />
                      <p className="bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-light italic text-transparent text-sm md:text-base leading-[24px] md:leading-[28px] lg:leading-[30px]">
                        {item.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Avatar className="w-8 h-8 md:w-10 md:h-10 lg:w-[41px] lg:h-[41px]">
                  <AvatarImage src={item.avatarSrc} alt={item.name} />
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-[5px]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-graygray-900 text-sm md:text-base leading-normal">
                    {item.name}
                  </span>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-graygray-600 text-xs md:text-[13px] leading-normal">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-2 lg:order-none">
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-48 md:h-64 lg:h-auto object-cover rounded-md"
                alt="Team illustration"
                src={item.imageSrc}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
