import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Service card data for mapping
  const serviceCards = [
    {
      id: 1,
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      iconSrc: "/mobile-app-perspective-matte.png",
      isActive: false,
    },
    {
      id: 2,
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      iconSrc: "/code-perspective-matte-2.png",
      isActive: true,
    },
    {
      id: 3,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      iconSrc: "/dashboard-perspective-matte.png",
      isActive: false,
    },
    {
      id: 4,
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      iconSrc: "/code-perspective-matte-2.png",
      isActive: false,
    },
  ];

  return (
    <section className="w-full py-6 md:py-8 lg:py-9 bg-shadelight-background border-y border-graygray-300">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headings-headings-h2 font-[number:var(--headings-headings-h2-font-weight)] text-graygray-900 text-2xl md:text-3xl lg:text-[length:var(--headings-headings-h2-font-size)] tracking-[var(--headings-headings-h2-letter-spacing)] leading-[32px] md:leading-[40px] lg:leading-[var(--headings-headings-h2-line-height)] mb-8 md:mb-10 lg:mb-12">
          Services we offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-10">
          {serviceCards.map((card) => (
            <a href="/service" key={card.id}>
              <Card
                className={`rounded-[7px] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  card.isActive ? "shadow-card-shadow" : "shadow-card-shadow-lite"
                }`}
              >
                <CardContent className="pt-6 md:pt-8 lg:pt-9 pl-4 pr-4 pb-6">
                  <div className="flex flex-col gap-4 md:gap-5">
                    <div className="flex flex-col gap-4 md:gap-5">
                      <div
                        className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-[58px] lg:h-[58px] bg-[url(/ellipse-1-5.svg)] bg-[100%_100%] ${!card.isActive && card.id === 1 ? "opacity-50" : ""}`}
                      >
                        {card.iconSrc && (
                          <img
                            className="w-6 h-6 md:w-8 md:h-8 lg:w-[34px] lg:h-[34px] absolute top-2 left-2 md:top-2.5 md:left-2.5 lg:top-3 lg:left-3 object-cover"
                            alt={card.title}
                            src={card.iconSrc}
                          />
                        )}
                      </div>

                      <h4
                        className={`w-full max-w-[271px] font-headings-headings-h4 font-[number:var(--headings-headings-h4-font-weight)] text-base md:text-lg lg:text-[length:var(--headings-headings-h4-font-size)] tracking-[var(--headings-headings-h4-letter-spacing)] leading-[var(--headings-headings-h4-line-height)] ${
                          card.isActive
                            ? "bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                            : "text-graygray-800"
                        }`}
                      >
                        {card.title}
                      </h4>
                    </div>

                    <p
                      className={`w-full font-paragraphs-default font-[number:var(--paragraphs-default-font-weight)] text-sm md:text-base lg:text-[length:var(--paragraphs-default-font-size)] tracking-[var(--paragraphs-default-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--paragraphs-default-line-height)] [font-style:var(--paragraphs-default-font-style)] ${
                        card.isActive ? "text-graygray-700" : "text-graygray-600"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mb-4 lg:hidden">
          {[1, 2, 3, 4, 5].map((_dot, index) => (
            <button
              key={`dot-${index}`}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 ${index === 2
                ? "w-4 h-4 md:w-[18px] md:h-[18px] rounded-full border-2 border-solid border-white bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]"
                : "w-3 h-3 md:w-[13px] md:h-[13px] rounded-full border border-solid border-gray-300 hover:border-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
