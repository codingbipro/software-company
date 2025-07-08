import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Service card data for easier mapping
  const serviceCards = [
    {
      id: "1",
      position: "top-0 left-[38px]",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: "3",
      position: "top-0 left-[408px]",
      title: "Tech architecture",
      description:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
    },
    {
      id: "5",
      position: "top-0 left-[798px]",
      title: "Code reviews",
      description:
        "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
    },
    {
      id: "2",
      position: "top-[249px] left-[93px]",
      title: "Sprint planning",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: "4",
      position: "top-[249px] left-[473px]",
      title: "Standups & weekly demos",
      description:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      id: "6",
      position: "top-[249px] left-[863px]",
      title: "Iterative delivery",
      description:
        "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];

  // Line positions for the connecting lines
  const horizontalLine = {
    width: "w-[1182px]",
    height: "h-0.5",
    position: "top-7 left-0",
  };
  const verticalLines = [
    { position: "top-0 left-[180px]" },
    { position: "top-0 left-[550px]" },
    { position: "top-0 left-[940px]" },
    { position: "top-[204px] left-[243px]" },
    { position: "top-[204px] left-[623px]" },
    { position: "top-[204px] left-[1013px]" },
  ];

  return (
    <section className="relative w-full h-auto lg:h-[408px] mx-auto max-w-[1230px] px-4 py-8 lg:py-0">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceCards.map((service) => (
          <Card
            key={`service-mobile-${service.id}`}
            className="w-full rounded-[9px] border border-solid border-[#e7daec] p-5"
          >
            <CardContent className="p-0">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-transparent text-base">
                    #{service.id}
                  </div>
                  <div className="font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-graygray-900 text-base">
                    {service.title}
                  </div>
                </div>
                <div className="text-sm text-graygray-600 leading-5">
                  {service.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
      {/* Connecting lines */}
      <div className="relative w-[1182px] h-[30px] top-[174px]">
        <img
          className={`absolute ${horizontalLine.width} ${horizontalLine.height} ${horizontalLine.position}`}
          alt="Line"
          src="/line-5.svg"
        />

        {verticalLines.slice(0, 3).map((line, index) => (
          <img
            key={`vertical-line-${index}`}
            className={`absolute w-0.5 h-[30px] ${line.position}`}
            alt="Line"
            src="/line-6.svg"
          />
        ))}
      </div>

      {verticalLines.slice(3).map((line, index) => (
        <img
          key={`vertical-line-bottom-${index}`}
          className={`absolute w-0.5 h-[30px] ${line.position}`}
          alt="Line"
          src="/line-6.svg"
        />
      ))}

      {/* Service cards */}
      {serviceCards.map((service) => (
        <Card
          key={`service-${service.id}`}
          className={`absolute w-[299px] h-[159px] ${service.position} rounded-[9px] border border-solid border-[#e7daec]`}
        >
          <CardContent className="p-0">
            <div className="inline-flex flex-col items-start gap-[15px] relative top-[21px] left-5">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-transparent text-[length:var(--headings-headings-h5-font-size)] tracking-[var(--headings-headings-h5-letter-spacing)] leading-[var(--headings-headings-h5-line-height)] [font-style:var(--headings-headings-h5-font-style)]">
                  #{service.id}
                </div>
                <div className="relative w-fit mt-[-1.00px] font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-graygray-900 text-[length:var(--headings-headings-h5-font-size)] tracking-[var(--headings-headings-h5-letter-spacing)] leading-[var(--headings-headings-h5-line-height)] [font-style:var(--headings-headings-h5-font-style)]">
                  {service.title}
                </div>
              </div>
              <div className="relative w-[245px] h-[74px] [font-family:'Inter',Helvetica] font-normal text-graygray-600 text-sm tracking-[-0.07px] leading-5">
                {service.description}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Trophy icon */}
      <img
        className="absolute w-[42px] h-[42px] top-[183px] left-[1188px] object-cover"
        alt="Trophy perspective"
        src="/trophy-perspective-matte.png"
      />
      </div>
    </section>
  );
};
