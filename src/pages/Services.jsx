import React from "react";
import ServicesCarousel from "../components/ServicesCarousel";
import ServicesFallingText from "../components/ServicesFallingTexts";

export default function Services() {
  const financeLogos = [
    "/financelogos/1.png",
    "/financelogos/2.png",
    "/financelogos/3.png",
    "/financelogos/4.png",
    "/financelogos/5.png",
    "/financelogos/6.png",
    "/financelogos/7.png",
    "/financelogos/8.png",
    "/financelogos/9.png",
    "/financelogos/10.png",
    "/financelogos/11.png",
    "/financelogos/12.png",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">What We Offer</h1>

      {/* ✅ Carousel Section */}
      <div className="max-w-7xl w-full">
        <ServicesCarousel />
      </div>

      {/* ✅ Financial Services Section */}
      <div className="max-w-7xl w-full mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
          Financial <span className="text-red-600">Services</span>
        </h2>
        
        {/* Finance Logos Grid - Desktop: 4x3, Tablet: 3x4, Mobile: 2x6 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {financeLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 flex items-center justify-center aspect-square border border-white/10 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards'
              }}
            >
              <img
                src={logo}
                alt={`Finance partner ${index + 1}`}
                className="w-full h-full object-contain opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <ServicesFallingText />
    </div>
  );
}
