import React, { useEffect, useState, useRef } from "react";

const services = [
  { id: 1, title: "Modification", img: "/services/modification.jpg" },
  { id: 2, title: "Detailing", img:    "/services/detailing.jpg" },
  { id: 3, title: "Workshop", img:     "/services/workshop.jpg" },
  { id: 4, title: "Bodyshop", img:     "/services/bodyshop.jpg" },
  { id: 5, title: "Rentals", img:      "/services/rentals.jpg" },
  { id: 6, title: "Baratees", img:     "/services/baratees.jpg" },
  { id: 7, title: "Sale", img:         "/services/sale.jpg" },
  { id: 8, title: "Purchases", img:    "/services/purchase.jpg" },
  { id: 9, title: "Exchange", img:     "/services/exchange.jpg" },
  { id: 10, title: "Re-Finance", img:  "/services/refinance.jpg" },
  { id: 11, title: "Insurance Renewal", img: "/services/insurance.jpg" },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const autoRef = useRef(null);

  // Adjust cards per view on resize
  useEffect(() => {
    const calcPerView = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    calcPerView();
    window.addEventListener("resize", calcPerView);
    return () => window.removeEventListener("resize", calcPerView);
  }, []);

  const maxIndex = Math.max(0, services.length - perView);

  // Auto-slide
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(autoRef.current);
  }, [perView, maxIndex]);

  const handlePrev = () =>
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const handleNext = () =>
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const slideWidthPercent = 100 / perView;

  return (
    <div
      className="relative overflow-hidden w-full max-w-7xl mx-auto"
      onMouseEnter={() => clearInterval(autoRef.current)}
      onMouseLeave={() => {
        clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
      }}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / services.length)}%)`,
          width: `${(services.length * 100) / perView}%`,
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-none flex justify-center"
            style={{ width: `${100 / services.length}%` }}
          >
            <div className="flex flex-col items-center p-4 w-full max-w-[400px]">
              <div className="w-full rounded-lg overflow-hidden bg-gray-800">
                <img
                  src={service.img}
                  alt={service.title}
                  onError={(e) => {
                    e.currentTarget.src = "/vite.svg";
                  }}
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-center text-white">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
