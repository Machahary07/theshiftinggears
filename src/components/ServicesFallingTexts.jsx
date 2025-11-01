import React, { useEffect, useRef } from "react";
import FallingText from "../components/FallingTexts"

export default function ServicesFallingText() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 🧠 Wait a tick for the canvas to mount
    const timer = setTimeout(() => {
      const canvas = containerRef.current?.querySelector("canvas");
      if (canvas) {
        canvas.style.background = "transparent";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center items-center py-12 px-4"
      style={{ overflow: "hidden" }}
    >
      <div className="relative w-full max-w-5xl h-[220px]">
        <FallingText
          text={`We specialize in Modification, Detailing, Bodyshop, Rentals, Exchange, and Insurance Renewal services to keep your vehicle looking and running its best.`}
          highlightWords={[
            "Modification",
            "Detailing",
            "Bodyshop",
            "Rentals",
            "Exchange",
            "Insurance",
            "Renewal",
          ]}
          highlightClass="text-cyan-500 font-bold"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.5}
          fontSize="1.8rem"
          mouseConstraintStiffness={0.9}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
