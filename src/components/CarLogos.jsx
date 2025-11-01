import React from "react";

const logos = [
  "/logos/audi.png",
  "/logos/bmw.png",
  "/logos/benz.png",
  "/logos/ford.png",
  "/logos/toyota.png",
  "/logos/honda.png",
];

export default function CarLogos() {
  return (
    <div className="w-full overflow-hidden bg-black py-3 relative z-50">
      <div className="flex gap-12 animate-scroll whitespace-nowrap justify-center items-center opacity-80">
        {[...logos, ...logos].map((logo, i) => (
          <img key={i} src={logo} alt="car brand" className="h-10 w-auto object-contain" />
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
