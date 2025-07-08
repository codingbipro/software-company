import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { icon: <FacebookIcon className="w-3 h-3" />, alt: "Facebook" },
    { icon: <InstagramIcon className="w-[13px] h-[13px]" />, alt: "Instagram" },
    { icon: <TwitterIcon className="w-[13px] h-[13px]" />, alt: "Twitter" },
    { icon: <LinkedinIcon className="w-[11px] h-[11px]" />, alt: "Linkedin" },
  ];

  // Footer links data
  const footerLinks = [
    "About Us",
    "Services",
    "Case Studies",
    "How it works",
    "Blog",
    "Careers",
    "Areas We Serve",
  ];

  return (
    <footer className="relative w-full max-w-[1440px] mx-auto py-6 md:py-8">
      <div className="w-full max-w-[1230px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Logo and company info section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <img
              className="w-[100px] h-[33px] md:w-[123px] md:h-[41px]"
              alt="Brand logo"
              src="/brand-logo.svg"
            />

            <p className="mt-8 md:mt-12 lg:mt-[54px] font-paragraphs-para-1 text-graygray-600 text-sm md:text-base lg:text-[length:var(--paragraphs-para-1-font-size)] tracking-[var(--paragraphs-para-1-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--paragraphs-para-1-line-height)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <img
              className="mt-4 md:mt-6 w-[150px] h-[40px] md:w-[199px] md:h-[53px] object-cover"
              alt="Google page speed"
              src="/google-page-speed-1.png"
            />
          </div>

          {/* Links section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:ml-6">
            <h5 className="font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-graygray-700 text-base md:text-lg lg:text-[length:var(--headings-headings-h5-font-size)] tracking-[var(--headings-headings-h5-letter-spacing)] leading-[var(--headings-headings-h5-line-height)]">
              Links
            </h5>

            <nav className="mt-6 md:mt-8 lg:mt-[41px]">
              <ul className="space-y-1.5 md:space-y-2 font-footer-footer-links text-graygray-600 text-sm md:text-base lg:text-[length:var(--footer-footer-links-font-size)] tracking-[var(--footer-footer-links-letter-spacing)] leading-[var(--footer-footer-links-line-height)]">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-graygray-800 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-5 lg:ml-6">
            <h5 className="font-headings-headings-h5 font-[number:var(--headings-headings-h5-font-weight)] text-graygray-700 text-base md:text-lg lg:text-[length:var(--headings-headings-h5-font-size)] tracking-[var(--headings-headings-h5-letter-spacing)] leading-[var(--headings-headings-h5-line-height)]">
              Contact us
            </h5>

            <p className="mt-6 md:mt-8 lg:mt-[46px] font-paragraphs-para-1 text-graygray-600 text-sm md:text-base lg:text-[length:var(--paragraphs-para-1-font-size)] tracking-[var(--paragraphs-para-1-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--paragraphs-para-1-line-height)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <p className="mt-4 md:mt-6 lg:mt-[30px] font-paragraphs-para-1 text-graygray-600 text-sm md:text-base lg:text-[length:var(--paragraphs-para-1-font-size)] tracking-[var(--paragraphs-para-1-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--paragraphs-para-1-line-height)] whitespace-nowrap">
                +91 9932224243              
            </p>

            {/* Social media icons */}
            <div className="flex items-center space-x-3 md:space-x-4 mt-4 md:mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center w-8 h-8 md:w-[34px] md:h-[34px] bg-graygray-50 rounded-full shadow-[0px_4px_14px_#00000026] hover:bg-graygray-300 transition-colors"
                  aria-label={social.alt}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="mt-8 md:mt-12 lg:mt-16">
        <Separator className="w-full h-px" />
        <div className="flex justify-center mt-4 md:mt-6 lg:mt-8 px-4">
          <p className="font-footer-footer-sm text-graygray-700 text-xs md:text-sm lg:text-[length:var(--footer-footer-sm-font-size)] tracking-[var(--footer-footer-sm-letter-spacing)] leading-[var(--footer-footer-sm-line-height)] text-center">
            © 2025 Copyright by <a className="underline text-blue-400 href font-bold" href="https://codingbipro.netlify.app">codingbipro</a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
