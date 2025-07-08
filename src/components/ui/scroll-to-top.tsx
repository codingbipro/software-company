import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[linear-gradient(225deg,rgba(247,102,128,1)_0%,rgba(87,0,123,1)_100%)] hover:opacity-90 transition-opacity shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </Button>
      )}
    </>
  );
};