import React from "react";
import { Link } from "react-router-dom";
import RelatedCars from "../components/HomeCars";
import Services from "../pages/Services";
import Faqs from "../components/Faqs";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
      {/* 🎥 Background video section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/herobg.webm"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 backdrop-blur-[2px] max-w-4xl">
          <h2 className="text-sm tracking-[6px] text-gray-300 uppercase mb-3">
            A Multi Brand Pre-Owned Cars Gallery
          </h2>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            Welcome To <span className="text-red-600">Shifting Gears</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Shifting Gears is a pre-owned car dealership founded by{" "}
            <span className="text-white font-medium">Mr. Raj Jain</span> and{" "}
            <span className="text-white font-medium">Mr. Parmanand Singh</span>.
            The brand serves as a trusted platform to share their deep expertise
            in the automotive world — offering insights, guidance, and reliable
            information to help car enthusiasts make confident decisions when
            buying or selling used vehicles.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/inventory"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Explore Inventory
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 🚗 Car Showcase section (separate, not overlapping the video) */}
      <section className="relative bg-black px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <RelatedCars currentCarId={null} />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Faqs />
        </div>
      </section>
    </div>
  );
}
