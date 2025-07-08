import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CaseStudiesSection = (): JSX.Element => {
  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      description: "A brief description of the first case study.",
      imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Case Study 2",
      description: "A brief description of the second case study.",
      imageSrc: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Case Study 3",
      description: "A brief description of the third case study.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-8 md:mb-12">Our Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={study.imageSrc} alt={study.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-700">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};