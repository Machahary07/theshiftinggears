// components/BaraatisCarousel.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import baraatisData from "../data/baraatis";

const VehicleCard = ({ vehicle }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
    <div className="relative h-44 sm:h-52 md:h-60 lg:h-64 bg-gray-100">
      <img
        src={vehicle.image}
        alt={vehicle.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          // local fallback so you're not forced to see the external placeholder
          e.currentTarget.src = "/vite.svg";
        }}
      />
    </div>

    <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 uppercase leading-tight">
        {vehicle.title}
      </h3>

      <div className="space-y-1 mb-3">
        {vehicle.price && (
          <div className="text-lg md:text-xl font-semibold text-red-600">
            {vehicle.price}
          </div>
        )}
        {vehicle.priceAlt && (
          <div className="text-sm md:text-base text-purple-800">
            {vehicle.priceAlt}
          </div>
        )}
        {vehicle.perDay && (
          <div className="text-xs md:text-sm text-gray-600">
            {vehicle.perDay}
          </div>
        )}
      </div>

      {vehicle.colors && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {vehicle.colors.map((color, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-700"
            >
              {color}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto space-y-1 text-xs text-gray-600">
        {vehicle.serviceHours && <div>• {vehicle.serviceHours}</div>}
        {vehicle.fuelNote && <div>• {vehicle.fuelNote}</div>}
      </div>
    </div>
  </div>
);

const Carousel = ({ category, vehicles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    setCardsPerView(getCardsPerView());
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, vehicles.length - cardsPerView);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600 tracking-wide">
        {category}
      </h2>

      {/* clip horizontal overflow and keep arrows inside the viewport */}
      <div className="relative flex items-center overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 sm:p-3 shadow-lg transition-all"
          aria-label="Previous"
        >
          <ChevronLeft
            className={`w-5 h-5 sm:w-6 sm:h-6 ${
              currentIndex === 0 ? "text-black" : "text-red-600"
            }`}
          />
        </button>

        {/* Cards */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out -mx-3"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / cardsPerView)
              }%)`,
            }}
          >
            {vehicles.map((vehicle, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{
                  // exact percent width so translate% matches slide width
                  width: `${100 / cardsPerView}%`,
                  boxSizing: "border-box" // ensure padding is included in percent width
                }}
              >
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
           </div>
         </div>
 
         {/* Right Arrow */}
         <button
           onClick={handleNext}
           disabled={currentIndex >= maxIndex}
           className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 sm:p-3 shadow-lg transition-all"
           aria-label="Next"
         >
           <ChevronRight
             className={`w-5 h-5 sm:w-6 sm:h-6 ${
               currentIndex >= maxIndex ? "text-black" : "text-red-600"
             }`}
           />
         </button>
       </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-red-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function BaraatisCarouselPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-2 sm:px-4 lg:px-8 overflow-x-hidden">
      <div className="max-w-[95vw] mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-red-600">
          Baraatis Vehicle Rentals
        </h1>
        <p className="text-center text-black mb-12 text-lg">
         
        </p>

        {baraatisData.map((collection, idx) => (
          <Carousel
            key={idx}
            category={collection.category}
            vehicles={collection.vehicles}
          />
        ))}
      </div>
    </div>
  );
}
