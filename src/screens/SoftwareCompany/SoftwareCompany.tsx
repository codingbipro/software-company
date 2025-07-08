import { Card } from "../../components/ui/card";
import { MobileMenu } from "../../components/ui/mobile-menu";
import { ScrollToTop } from "../../components/ui/scroll-to-top";
import { AnimatedSection } from "../../components/ui/animated-section";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const SoftwareCompany = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    "About us",
    "Services",
    "Case Studies",
    "Blog",
    "How it Works",
    "Hire",
    "Contact",
  ];

  // Client logos
  const clientLogos = [
    { src: "/hd.png", alt: "Hd", width: "107px", height: "80px" },
    { src: "/logo-9.png", alt: "Logo", width: "136px", height: "81px" },
    { src: "/logo8.png", alt: "Logo", width: "101px", height: "80px" },
    { src: "/logo5.png", alt: "Logo", width: "215px", height: "80px" },
    { src: "/logo-7.png", alt: "Logo", width: "215px", height: "80px" },
    { src: "/logo9.png", alt: "Logo", width: "215px", height: "80px" },
    { src: "/logo-6.png", alt: "Logo", width: "215px", height: "80px" },
    { src: "/logo3.png", alt: "Logo", width: "19px", height: "80px" },
  ];

  // Development approach cards
  const approachCards = [
    {
      title: "UX Driven Engineering",
      icon: "/rocket-perspective-matte.png",
      iconAlt: "Rocket perspective",
      iconWidth: "34px",
      iconHeight: "35px",
      top: "353px",
      left: "148px",
    },
    {
      title: "Developing Shared Understanding",
      icon: "/code-perspective-matte-2.png",
      iconAlt: "Code perspective",
      iconWidth: "36px",
      iconHeight: "37px",
      top: "352px",
      left: "777px",
    },
    {
      title: "Proven Experience and Expertise",
      icon: "/heart-rate-perspective-matte.png",
      iconAlt: "Heart rate",
      iconWidth: "30px",
      iconHeight: "30px",
      top: "620px",
      left: "150px",
    },
    {
      title: "Security & Intellectual Property (IP)",
      icon: "/shield-perspective-matte.png",
      iconAlt: "Shield perspective",
      iconWidth: "40px",
      iconHeight: "40px",
      top: "613px",
      left: "779px",
    },
    {
      title: "Code Reviews",
      icon: "/success-perspective-matte.png",
      iconAlt: "Success perspective",
      iconWidth: "30px",
      iconHeight: "30px",
      top: "879px",
      left: "150px",
    },
    {
      title: "Quality Assurance & Testing",
      icon: "/padlock-perspective-matte.png",
      iconAlt: "Padlock perspective",
      iconWidth: "29px",
      iconHeight: "30px",
      top: "878px",
      left: "784px",
    },
  ];

  // Tech stack tabs
  const techStackTabs = [
    "Backend",
    "Frontend",
    "Databases",
    "CMS",
    "CloudTesting",
    "DevOps",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Navigation Bar */}
        <header className="w-full fixed top-0 left-0 z-50 bg-basewhite shadow-shadow-nav-shadown">
          <div className="flex w-full items-center justify-between px-4 md:px-6 lg:px-[25px] py-2.5 max-w-7xl mx-auto">
            <div className="flex items-center relative">
              <a href="/" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <img
                  className="relative w-[120px] h-[39px] md:w-[150px] md:h-[49px] lg:w-[180px] lg:h-[59px]"
                  alt="Brand logo"
                  src="/brand-logo-1.svg"
                />
              </a>
              <div className="absolute top-4 left-[48px] md:top-5 md:left-[60px] lg:top-6 lg:left-[73px] [font-family:'Inspiration',Helvetica] font-normal text-black text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal whitespace-nowrap">
                Ik developers
              </div>
            </div>

            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="flex items-center justify-between px-0 py-2.5 gap-2">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <a
                      href={item === 'Brand logo' || item === 'Ik developers' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
                      onClick={(e) => {
                        if (item === 'Brand logo' || item === 'Ik developers') {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          const targetId = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
                          const targetElement = document.querySelector(targetId);
                          if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <div className="relative w-fit mt-[-1.00px] font-headings-headings-h6 font-[number:var(--headings-headings-h6-font-weight)] text-graygray-700 text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[var(--headings-headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-headings-h6-font-style)]">
                        {item}
                      </div>
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <MobileMenu navItems={navItems} />
          </div>
        </header>

        {/* Main Content Sections */}
        <main>
          {/* Hero Banner Section */}
          <AnimatedSection animation="fadeIn">
            <HeroBannerSection />
          </AnimatedSection>

          {/* About Us Section with Video */}
          <AnimatedSection animation="slideUp" delay={200}>
            <section id="about-us" className="relative">
            <AboutUsSection />
            <div className="hidden lg:block w-[401px] h-[360px] lg:w-[501px] lg:h-[410px] xl:w-[601px] xl:h-[460px] absolute top-[620px] lg:top-[720px] xl:top-[820px] right-[53px] lg:right-[83px] xl:right-[103px] bg-[url(/rectangle-8.svg)] bg-cover bg-[50%_50%]">
              <div className="h-full bg-[#00000003] rounded-[20px] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] flex items-center justify-center">
                <div className="relative w-[58px] h-[58px] lg:w-[68px] lg:h-[68px] xl:w-[78px] xl:h-[78px] transition-transform duration-300 hover:scale-110">
                  <div className="relative h-full rounded-[50%]">
                    <div className="absolute w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 top-[15px] left-[15px] bg-white rounded-full" />
                    <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff6e] rounded-[50%] hover:bg-[#ffffff9e]" />
                    <img
                      className="absolute w-[48px] h-[48px] lg:w-[54px] lg:h-[54px] xl:w-[58px] xl:h-[58px] top-1.5 left-1.5 lg:top-2 lg:left-2 xl:top-2.5 xl:left-2.5"
                      alt="Play circle fill"
                      src="/play-circle-fill.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            </section>
          </AnimatedSection>

          {/* Hero Section with Decorative Elements */}
          <AnimatedSection animation="slideUp" delay={300}>
            <section id="hero" className="relative w-full mt-16">
            <div className="hidden lg:block absolute w-[52px] h-[52px] lg:w-[62px] lg:h-[62px] xl:w-[72px] xl:h-[72px] top-0 left-[475px] lg:left-[575px] xl:left-[675px] rounded-[50%] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
            <div className="hidden lg:block absolute w-[52px] h-[52px] lg:w-[62px] lg:h-[62px] xl:w-[72px] xl:h-[72px] top-[402px] lg:top-[502px] xl:top-[602px] left-[197px] lg:left-[247px] xl:left-[297px] rounded-[50%] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

            <HeroSection />

            <div className="hidden lg:block absolute w-[164px] h-3.5 top-[365px] lg:top-[465px] xl:top-[565px] right-[53px] lg:right-[103px] xl:right-[153px]">
              <div className="left-0 text-graygray-500 absolute top-[-7px] font-headings-headings-h6 font-[number:var(--headings-headings-h6-font-weight)] text-sm lg:text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[var(--headings-headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-headings-h6-font-style)]">
                01
              </div>
              <div className="left-[145px] text-brandprimary-bg absolute top-[-7px] font-headings-headings-h6 font-[number:var(--headings-headings-h6-font-weight)] text-sm lg:text-[length:var(--headings-headings-h6-font-size)] tracking-[var(--headings-headings-h6-letter-spacing)] leading-[var(--headings-headings-h6-line-height)] whitespace-nowrap [font-style:var(--headings-headings-h6-font-style)]">
                05
              </div>
              <div className="absolute w-[111px] h-[3px] top-[5px] left-[26px] bg-graygray-300">
                <div className="w-[18px] h-[3px] bg-brandprimary-bg" />
              </div>
            </div>
            </section>
          </AnimatedSection>

          {/* Client Logos Section */}
          <AnimatedSection animation="slideUp" delay={400}>
            <section id="services" className="relative w-full mt-16">
            <div className="w-full">
              <div className="flex flex-col items-start gap-5 mx-auto max-w-7xl px-4 md:px-6">
                <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                <div className="w-full max-w-[412px] [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                  <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                    Meet the People <br />
                  </span>
                  <span className="font-[number:var(--headings-headings-h2-font-weight)] leading-[35px] md:leading-[45px] lg:leading-[var(--headings-headings-h2-line-height)] font-headings-headings-h2 [font-style:var(--headings-headings-h2-font-style)] tracking-[var(--headings-headings-h2-letter-spacing)] text-2xl md:text-3xl lg:text-[length:var(--headings-headings-h2-font-size)]">
                    We are Working With
                  </span>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="hidden lg:block absolute w-[52px] h-[52px] lg:w-[62px] lg:h-[62px] xl:w-[72px] xl:h-[72px] top-0 right-[320px] lg:right-[370px] xl:right-[420px] rounded-[50%] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

                <div className="w-full bg-[#f6f6f9] py-16">
                  <Separator className="w-full" />

                  <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-[54px] py-8 md:py-12 lg:py-16 px-4 overflow-x-auto">
                    {clientLogos.map((logo, index) => (
                      <img
                        key={index}
                        className="object-cover flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-auto lg:h-auto"
                        alt={logo.alt}
                        src={logo.src}
                        style={{ 
                          width: window.innerWidth >= 1024 ? logo.width : 'auto',
                          height: window.innerWidth >= 1024 ? logo.height : 'auto'
                        }}
                      />
                    ))}
                  </div>

                  <Separator className="w-full" />
                </div>

                <div className="hidden lg:flex absolute top-0 right-0 items-start gap-[22px]">
                  <img
                    className="w-[45px] h-[45px]"
                    alt="Btn left"
                    src="/btn-left.svg"
                  />
                  <img
                    className="w-[133px] h-[133px] mt-[-30px]"
                    alt="Btn right"
                    src="/btn-right.svg"
                  />
                </div>
              </div>
            </div>
            </section>
          </AnimatedSection>

          {/* Client Feedback Section */}
          <AnimatedSection animation="slideUp" delay={500}>
            <section id="case-studies" className="relative w-full">
            <ClientFeedbackSection />
            </section>
          </AnimatedSection>

          {/* Portfolio Section with Newsletter and CTA */}
          <AnimatedSection animation="slideUp" delay={600}>
            <section id="blog" className="relative w-full">
            <div className="w-full bg-[#f6f6f9]">
              <Separator className="w-full" />

              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute w-[194px] h-[282px] top-[7px] right-[372px] rotate-[-175.85deg]">
                  <div className="relative w-[213px] h-[293px] -top-px left-[-19px]">
                    <img
                      className="absolute w-[173px] h-[269px] top-[19px] left-[9px] rotate-[175.85deg]"
                      alt="Vector"
                      src="/vector-1-1.svg"
                    />
                    <img
                      className="absolute w-[45px] h-[45px] top-0.5 left-[167px] rotate-[175.85deg]"
                      alt="Arrow right s line"
                      src="/arrow-right-s-line-5.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-36 h-[209px] top-2 left-[147px] rotate-[-64.62deg]">
                  <div className="relative w-[263px] h-[281px] top-[-27px] left-[-74px]">
                    <img
                      className="absolute w-[222px] h-[186px] top-[47px] left-5 rotate-[64.62deg] hidden lg:block"
                      alt="Vector"
                      src="/vector-1-2.svg"
                    />
                    <img
                      className="absolute w-[43px] h-[43px] top-[23px] left-[179px] rotate-[64.62deg] hidden lg:block"
                      alt="Arrow right s line"
                      src="/arrow-right-s-line-3.svg"
                    />
                  </div>
                </div>

                <div className="hidden lg:block absolute w-[18px] h-[18px] top-[210px] left-[377px] rounded-[9px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

                {/* Section title */}
                <div className="flex flex-col items-center gap-5 pt-16 pb-8 mx-auto">
                  <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                  <div className="w-full max-w-[474px] px-4 [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                    <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                      Our recent <br />
                    </span>
                    <span className="font-bold leading-[35px] md:leading-[45px] lg:leading-[55px]">
                      {" "}
                      Case studies{" "}
                    </span>
                  </div>
                </div>

                {/* Newsletter Section */}
                <NewsletterSection />

                {/* Call To Action Section */}
                <CallToActionSection />

                {/* Portfolio Section */}
                <PortfolioSection />

                <div className="flex items-start gap-3 justify-center md:justify-end p-4 md:p-6">
                  <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-headings-headings-h4 font-[number:var(--headings-headings-h4-font-weight)] text-transparent text-base md:text-lg lg:text-[length:var(--headings-headings-h4-font-size)] tracking-[var(--headings-headings-h4-letter-spacing)] leading-[var(--headings-headings-h4-line-height)] [font-style:var(--headings-headings-h4-font-style)]">
                    Read more case studies
                  </div>
                  <img
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-[27px] lg:h-[27px]"
                    alt="Arrow right s line"
                    src="/arrow-right-s-line-4.svg"
                  />
                </div>
              </div>

              <Separator className="w-full" />
            </div>
            </section>
          </AnimatedSection>

          {/* Development Approach Section */}
          <AnimatedSection animation="slideUp" delay={700}>
            <section id="how-it-works" className="relative w-full bg-[#f6f6f9]">
            <Separator className="w-full" />

            <div className="flex flex-col items-center gap-5 pt-16 pb-8">
              <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
              <div className="w-full max-w-[474px] px-4 [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                  Our design and
                  <br />
                </span>
                <span className="font-bold leading-[35px] md:leading-[45px] lg:leading-[55px]">
                  development approach
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-4 max-w-7xl mx-auto px-4 md:px-6 pb-16">
              {approachCards.map((card, index) => (
                <Card
                  key={index}
                  className="h-auto md:h-[200px] lg:h-[237px] bg-graygray-50 border border-solid border-[#e7daec]"
                >
                  <div className="flex items-start gap-4 md:gap-6 lg:gap-[25px] p-6 md:p-8 lg:p-[58px_33px]">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-[59px] lg:h-14 rounded-[10px] flex-shrink-0">
                      <img
                        className="absolute object-cover w-8 h-8 md:w-10 md:h-10 lg:w-auto lg:h-auto"
                        alt={card.iconAlt}
                        src={card.icon}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <div className="w-full max-w-[453px] mt-[-1.00px] font-headings-headings-h4 font-[number:var(--headings-headings-h4-font-weight)] text-graygray-900 text-base md:text-lg lg:text-[length:var(--headings-headings-h4-font-size)] tracking-[var(--headings-headings-h4-letter-spacing)] leading-[var(--headings-headings-h4-line-height)] [font-style:var(--headings-headings-h4-font-style)]">
                        {card.title}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Separator className="w-full" />
            </section>
          </AnimatedSection>

          {/* Great Software Section */}
          <AnimatedSection animation="slideUp" delay={800}>
            <section id="hire" className="relative w-full mt-16">
            <div className="flex flex-col items-center gap-5 mb-8">
              <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
              <div className="w-full max-w-[474px] px-4 [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                  Way of building
                  <br />
                </span>
                <span className="font-bold leading-[35px] md:leading-[45px] lg:leading-[55px]">Great Software</span>
              </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
              <div className="relative">
                {/* Decorative elements */}
                <div className="hidden lg:block absolute w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 top-[13px] right-[280px] lg:right-[330px] xl:right-[380px] rounded-[32.24px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(255,239,94,1)_0%,rgba(247,147,111,1)_100%)]" />
                <div className="hidden lg:block absolute w-[25px] h-[25px] lg:w-[28px] lg:h-[28px] xl:w-[31px] xl:h-[31px] top-[390px] lg:top-[440px] xl:top-[490px] right-[180px] lg:right-[205px] xl:right-[230px] rounded-[15.68px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                <div className="hidden lg:block absolute w-[23px] h-[23px] lg:w-[26px] lg:h-[26px] xl:w-[29px] xl:h-[29px] top-[490px] lg:top-[540px] xl:top-[590px] right-[484px] lg:right-[534px] xl:right-[584px] rounded-[14.41px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                <div className="hidden lg:block absolute w-[55px] h-[55px] lg:w-[63px] lg:h-[63px] xl:w-[71px] xl:h-[71px] top-[841px] lg:top-[941px] xl:top-[1041px] left-[27px] lg:left-[52px] xl:left-[77px] rounded-[35.58px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(255,239,94,1)_0%,rgba(247,147,111,1)_100%)]" />
                <div className="hidden lg:block absolute w-8 h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 top-[1411px] lg:top-[1511px] xl:top-[1611px] right-[272px] lg:right-[322px] xl:right-[372px] rounded-[21.84px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(255,239,94,1)_0%,rgba(247,147,111,1)_100%)]" />
                <div className="hidden lg:block absolute w-[33px] h-[33px] lg:w-[36px] lg:h-[36px] xl:w-[39px] xl:h-[39px] top-[950px] lg:top-[1050px] xl:top-[1150px] right-[137px] lg:right-[162px] xl:right-[187px] rounded-[19.47px] rotate-[35.02deg] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />

                {/* Team Section */}
                <TeamSection />
              </div>
            </div>
            </section>
          </AnimatedSection>

          <Separator className="w-full mt-16" />

          {/* Tech Stack Section */}
          <AnimatedSection animation="slideUp" delay={900}>
            <section id="contact" className="relative w-full mt-16">
            <div className="flex flex-col items-center gap-[38px]">
              <div className="flex flex-col items-center gap-5">
                <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                <div className="w-full max-w-[474px] px-4 [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                  <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                    Our
                    <br />
                  </span>
                  <span className="font-[number:var(--headings-headings-h2-font-weight)] leading-[35px] md:leading-[45px] lg:leading-[var(--headings-headings-h2-line-height)] font-headings-headings-h2 [font-style:var(--headings-headings-h2-font-style)] tracking-[var(--headings-headings-h2-letter-spacing)] text-2xl md:text-3xl lg:text-[length:var(--headings-headings-h2-font-size)]">
                    Tech Stack
                  </span>
                </div>
              </div>

              <Tabs defaultValue="Backend" className="w-full max-w-5xl">
                <TabsList className="flex items-start gap-4 md:gap-8 lg:gap-[60px] justify-center bg-transparent flex-wrap">
                  {techStackTabs.map((tab, index) => (
                    <TabsTrigger
                      key={index}
                      value={tab}
                      className={`relative ${index === 0 ? "bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]" : "text-graygray-900"} font-paragraphs-para-1 font-[number:var(--paragraphs-para-1-font-weight)] text-sm md:text-base lg:text-[length:var(--paragraphs-para-1-font-size)] tracking-[var(--paragraphs-para-1-letter-spacing)] leading-[var(--paragraphs-para-1-line-height)] [font-style:var(--paragraphs-para-1-font-style)]`}
                    >
                      {tab}
                      {index === 0 && (
                        <div className="absolute w-[20px] md:w-[23px] lg:w-[25px] h-[3px] top-6 md:top-7 left-1/2 transform -translate-x-1/2 rounded-[3px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-4 mt-8 px-4">
                <div className="flex justify-center">
                  <div className="w-[70px] h-[42px] md:w-[82px] md:h-[49px] lg:w-[94px] lg:h-[57px] bg-[url(/group-3.png)] bg-[100%_100%] relative">
                    <img
                      className="absolute w-4 h-[18px] md:w-[18px] md:h-[20px] lg:w-5 lg:h-[23px] top-[10px] md:top-[12px] lg:top-[13px] left-[18px] md:left-[22px] lg:left-[25px]"
                      alt="Group"
                      src="/group-4.png"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-[75px] h-10 md:w-[87px] md:h-12 lg:w-[100px] lg:h-14"
                    alt="Group"
                    src="/group-5.png"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 object-cover"
                    alt="Kisspng mysqli php"
                    src="/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0-1.png"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-[100px] h-[56px] md:w-[133px] md:h-[75px] lg:w-[166px] lg:h-[94px]"
                    alt="Java"
                    src="/java.svg"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="relative w-[49px] h-[49px] md:w-[57px] md:h-[57px] lg:w-[65px] lg:h-[65px]">
                    <img
                      className="absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 top-0 left-px"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-[43px] h-10 md:w-[50px] md:h-12 lg:w-[57px] lg:h-14 top-[7px] md:top-[8px] lg:top-[9px] left-0"
                      alt="Group"
                      src="/group-6.png"
                    />
                    <img
                      className="absolute w-[18px] h-[7px] md:w-5 md:h-2 lg:w-6 lg:h-[9px] top-[31px] md:top-[36px] lg:top-[41px] left-[16px] md:left-[18px] lg:left-[21px]"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-4 px-4">
                <div className="flex justify-center">
                  <div className="relative w-[98px] h-[23px] md:w-[114px] md:h-[27px] lg:w-[130px] lg:h-[31px]">
                    <img
                      className="absolute w-[61px] h-[22px] md:w-[71px] md:h-[26px] lg:w-[81px] lg:h-[30px] top-0 left-[29px] md:left-[34px] lg:left-[39px]"
                      alt="Vector"
                      src="/vector-3.svg"
                    />
                    <div className="absolute w-[22px] h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] top-px left-0">
                      <img
                        className="absolute w-[17px] h-[16px] md:w-[20px] md:h-[19px] lg:w-[23px] lg:h-[22px] top-0 left-0"
                        alt="Group"
                        src="/group-7.png"
                      />
                      <img
                        className="absolute w-[17px] h-[16px] md:w-[20px] md:h-[19px] lg:w-[23px] lg:h-[22px] top-1.5 md:top-2 left-1.5 md:left-2"
                        alt="Group"
                        src="/group-8.png"
                      />
                    </div>
                    <img
                      className="absolute w-1 h-[2px] md:w-1.5 md:h-[2.5px] lg:w-1.5 lg:h-[3px] top-[2px] md:top-[2.5px] lg:top-[3px] left-[93px] md:left-[108px] lg:left-[124px]"
                      alt="Group"
                      src="/group-9.png"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-[100px] h-[56px] md:w-[133px] md:h-[75px] lg:w-[166px] lg:h-[94px]"
                    alt="Ruby on rails"
                    src="/rubyonrails.svg"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="relative w-[35px] h-[47px] md:w-[40px] md:h-[55px] lg:w-[46px] lg:h-[63px]">
                    <div className="relative h-[63px]">
                      <img
                        className="absolute w-[35px] h-6 md:w-[40px] md:h-7 lg:w-[46px] lg:h-8 top-[23px] md:top-[27px] lg:top-[31px] left-0"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                      <img
                        className="absolute w-[5px] h-1 top-[31px] left-0"
                        alt="Vector"
                        src="/vector-2.svg"
                      />
                      <img
                        className="absolute w-px h-px top-[34px] left-px"
                        alt="Vector"
                        src="/vector-12.svg"
                      />
                      <img
                        className="absolute w-px h-px top-[33px] left-0"
                        alt="Vector"
                        src="/vector-14.svg"
                      />
                      <img
                        className="absolute w-[7px] h-2 top-1 left-px"
                        alt="Vector"
                        src="/vector-9.svg"
                      />
                      <img
                        className="absolute w-2 h-[9px] top-1 left-px"
                        alt="Vector"
                        src="/vector-5.svg"
                      />
                      <img
                        className="absolute w-[7px] h-2 top-[3px] left-9"
                        alt="Vector"
                        src="/vector-15.svg"
                      />
                      <img
                        className="absolute w-[42px] h-[60px] top-[3px] left-1"
                        alt="Group"
                        src="/group-10.png"
                      />
                      <img
                        className="absolute w-px h-px top-[33px] left-[45px]"
                        alt="Vector"
                        src="/vector-8.svg"
                      />
                      <img
                        className="absolute w-px h-px top-[33px] left-[45px]"
                        alt="Vector"
                        src="/vector-13.svg"
                      />
                      <img
                        className="absolute w-[39px] h-[62px] top-0 left-1"
                        alt="Vector"
                        src="/vector-7.svg"
                      />
                      <img
                        className="absolute w-[39px] h-[62px] top-0 left-1"
                        alt="Vector"
                        src="/vector-10.svg"
                      />
                      <img
                        className="absolute w-[26px] h-3 top-[3px] left-[9px]"
                        alt="Vector"
                        src="/vector-6.svg"
                      />
                      <img
                        className="absolute w-[27px] h-3 top-[3px] left-[9px]"
                        alt="Vector"
                        src="/vector-11.svg"
                      />
                      <img
                        className="absolute w-[3px] h-1 top-[18px] left-[23px]"
                        alt="Vector"
                        src="/vector-16.svg"
                      />
                      <img
                        className="absolute w-[3px] h-[5px] top-[18px] left-[22px]"
                        alt="Vector"
                        src="/vector-19.svg"
                      />
                      <img
                        className="absolute w-[15px] h-[13px] top-[9px] left-3"
                        alt="Vector"
                        src="/vector-18.svg"
                      />
                      <img
                        className="absolute w-[3px] h-[5px] top-[18px] left-5"
                        alt="Vector"
                        src="/vector-20.svg"
                      />
                      <img
                        className="absolute w-[9px] h-1 top-[15px] left-[18px]"
                        alt="Vector"
                        src="/vector-17.svg"
                      />
                      <img
                        className="absolute w-2.5 h-1.5 top-[13px] left-[18px]"
                        alt="Group"
                        src="/group-11.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    className="w-[120px] h-[32px] md:w-[160px] md:h-[43px] lg:w-[201px] lg:h-[54px] object-cover"
                    alt="Mon"
                    src="/mon-1.png"
                  />
                </div>
              </div>
            </div>
            </section>
          </AnimatedSection>

          {/* Testimonials Section */}
          <AnimatedSection animation="slideUp" delay={1000}>
            <section id="testimonials" className="relative w-full mt-16">
            <div className="flex flex-col items-center gap-5 mb-8">
              <div className="w-[69px] h-[5px] bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)]" />
              <div className="w-full max-w-[474px] px-4 [font-family:'Inter',Helvetica] font-normal text-graygray-900 text-2xl md:text-3xl lg:text-[35px] text-center tracking-[0] leading-[28px] md:leading-[35px] lg:leading-[35px]">
                <span className="leading-[35px] md:leading-[45px] lg:leading-[55px]">
                  How development <br />
                </span>
                <span className="font-[number:var(--headings-headings-h2-font-weight)] leading-[35px] md:leading-[45px] lg:leading-[var(--headings-headings-h2-line-height)] font-headings-headings-h2 [font-style:var(--headings-headings-h2-font-style)] tracking-[var(--headings-headings-h2-letter-spacing)] text-2xl md:text-3xl lg:text-[length:var(--headings-headings-h2-font-size)]">
                  through Alcaline works
                </span>
              </div>
            </div>

            <TestimonialsSection />
            </section>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection animation="slideUp" delay={1100}>
            <FeaturesSection />
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection animation="slideUp" delay={1200}>
            <ServicesSection />
          </AnimatedSection>
        </main>

        {/* Footer */}
        <AnimatedSection animation="fadeIn" delay={1300}>
          <footer className="w-full">
          <div className="relative">
            <FooterSection />
            <div className="absolute w-[98px] top-[43px] left-[100px] md:left-[120px] lg:left-[142px] [font-family:'Inspiration',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Ik developers
            </div>
          </div>
          </footer>
        </AnimatedSection>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
};
