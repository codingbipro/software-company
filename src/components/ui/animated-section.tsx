import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight";
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  const animationClasses = {
    fadeIn: isIntersecting 
      ? "opacity-100 transform translate-y-0" 
      : "opacity-0 transform translate-y-4",
    slideUp: isIntersecting 
      ? "opacity-100 transform translate-y-0" 
      : "opacity-0 transform translate-y-8",
    slideLeft: isIntersecting 
      ? "opacity-100 transform translate-x-0" 
      : "opacity-0 transform translate-x-8",
    slideRight: isIntersecting 
      ? "opacity-100 transform translate-x-0" 
      : "opacity-0 transform -translate-x-8"
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};