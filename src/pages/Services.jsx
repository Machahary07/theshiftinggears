import React from "react";
import ServicesCarousel from "../components/ServicesCarousel";
import ServicesFallingText from "../components/ServicesFallingTexts";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">What We Offer</h1>

      {/* ✅ Carousel Section */}
      <div className="max-w-7xl w-full">
        <ServicesCarousel />
        
      </div>
      <ServicesFallingText />
    </div>
  );
}
