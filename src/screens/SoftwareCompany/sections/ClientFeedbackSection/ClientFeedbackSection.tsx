import React from "react";
import { Button } from "../../../../components/ui/button";

export const ClientFeedbackSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
  };

  // Client data for the profiles
  const clients = [
    {
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      image: "/ellipse-1.png",
      size: "w-20 h-20",
      active: false,
      textSize: "text-sm",
      companyTextSize: "text-[11px]",
      companyTextColor: "text-graygray-300",
    },
    {
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      image: "/ellipse-1-1.png",
      size: "w-[85px] h-[85px]",
      active: false,
      textSize: "text-base",
      companyTextSize: "text-xs",
      companyTextColor: "text-graygray-400",
    },
    {
      name: "Imran Khan",
      company: "Software Engineer",
      image: "/ellipse-1-2.png",
      size: "w-[100px] h-[100px]",
      active: true,
      textSize: "text-lg",
      companyTextSize: "text-sm",
      companyTextColor: "text-black",
    },
    {
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      image: "/ellipse-1-3.png",
      size: "w-[85px] h-[85px]",
      active: false,
      textSize: "text-base",
      companyTextSize: "text-xs",
      companyTextColor: "text-graygray-400",
    },
    {
      name: "Romeena De Silva",
      company: "Janet Cosmetics",
      image: "/ellipse-1-4.png",
      size: "w-20 h-20",
      active: false,
      textSize: "text-sm",
      companyTextSize: "text-[11px]",
      companyTextColor: "text-graygray-300",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-[1280px] relative">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 md:gap-5 mb-8 md:mb-10 lg:mb-12">
            <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
            <h2 className="w-full max-w-[474px] font-['Inter',Helvetica] text-2xl md:text-3xl lg:text-[35px] text-graygray-900 text-center leading-[32px] md:leading-[40px] lg:leading-[55px] px-4">
              <span>Why cutomers love</span>
              <br />
              <span className="font-bold">working with us</span>
            </h2>
          </div>

          {/* Testimonial */}
          <div className="relative w-full max-w-[729px] mb-8 md:mb-12 lg:mb-16 px-4">
            <div className="relative">
              <Button
                variant="ghost"
                className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 p-0 w-10 h-10 rotate-180"
                aria-label="Previous testimonial"
              >
                <img
                  className="w-3.5 h-[23px] rotate-180"
                  alt="Previous"
                  src="/group-1.png"
                />
              </Button>

              <p className="w-full max-w-[535px] mx-auto text-center text-base md:text-lg text-graygray-600 leading-6 md:leading-8 lg:leading-9">
                {testimonial.text}
              </p>

              <Button
                variant="ghost"
                className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 p-0 w-10 h-10"
                aria-label="Next testimonial"
              >
                <img className="w-3.5 h-[23px]" alt="Next" src="/group.png" />
              </Button>
            </div>
          </div>

          {/* Client Profiles */}
          <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-[76px]">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2.5"
              >
                {/* Avatar */}
                <div className={`relative ${client.size}`}>
                  <div
                    className="relative w-[140%] h-[140%] top-[-20%] left-[-20%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${client.image})` }}
                  >
                    <div
                      className={`relative ${client.size} top-[20%] left-[20%] ${client.active ? "bg-shadeprimary-lite-bg shadow-btn-shadow" : "bg-[#e7daec99]"} rounded-full`}
                    />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-5 h-5 object-cover"
                      alt="Star rating"
                      src="/star-perspective-matte-24.png"
                    />
                  ))}
                </div>

                {/* Name and Company */}
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3
                    className={`${client.textSize} font-medium ${client.active ? "text-brandprimary-bg font-bold" : "text-graygray-500"} text-center`}
                  >
                    {client.name}
                  </h3>
                  <p
                    className={`${client.companyTextSize} ${client.companyTextColor} font-normal text-center`}
                  >
                    {client.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Client Profiles */}
          <div className="lg:hidden grid grid-cols-3 gap-4 md:gap-6 w-full max-w-md">
            {clients.slice(1, 4).map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
              >
                {/* Avatar */}
                <div className={`relative w-16 h-16 md:w-20 md:h-20`}>
                  <div
                    className="relative w-[140%] h-[140%] top-[-20%] left-[-20%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${client.image})` }}
                  >
                    <div
                      className={`relative w-16 h-16 md:w-20 md:h-20 top-[20%] left-[20%] ${index === 1 ? "bg-shadeprimary-lite-bg shadow-btn-shadow" : "bg-[#e7daec99]"} rounded-full`}
                    />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="w-3 h-3 md:w-4 md:h-4 object-cover"
                      alt="Star rating"
                      src="/star-perspective-matte-24.png"
                    />
                  ))}
                </div>

                {/* Name and Company */}
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h3
                    className={`text-xs md:text-sm font-medium ${index === 1 ? "text-brandprimary-bg font-bold" : "text-graygray-500"} text-center`}
                  >
                    {client.name}
                  </h3>
                  <p
                    className={`text-xs ${index === 1 ? "text-black" : "text-graygray-400"} font-normal text-center`}
                  >
                    {client.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Mobile) */}
          <div className="lg:hidden w-full flex justify-between items-center mt-6 md:mt-8 px-4">
            <Button variant="ghost" className="p-0" aria-label="Previous">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                alt="Previous"
                src="/btn-left.svg"
              />
            </Button>
            <Button variant="ghost" className="p-0" aria-label="Next">
              <img
                className="w-16 h-16 md:w-20 md:h-20"
                alt="Next"
                src="/btn-right-1.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};