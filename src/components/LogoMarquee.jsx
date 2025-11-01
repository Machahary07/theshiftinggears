import React from "react";
import Marquee from "react-fast-marquee";

export default function LogoMarquee({
  logos = [],
  speed = 100,
  pauseOnHover = true,
  height = 60,
  gap = 75,
}) {
  return (
    <div
      className="w-full bg-red-500 py-4 shadow-md overflow-hidden"
      style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.15)" }}
    >
      <Marquee
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={false}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: `${gap}px`,
            padding: "0 24px",
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
            >
              <img
                src={`/companylogos/${logo}`}
                alt={`Logo ${i + 1}`}
                style={{
                  height: `${height}px`,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
