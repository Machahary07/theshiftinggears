import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../data/cars";
import RelatedCars from "../components/RelatedCars";
import { Link } from "react-router-dom";

import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize,
  Share2,
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [zoom, setZoom] = useState(1);

  if (!car) return <div className="text-center py-20">Car not found</div>;

  const images = car.images || [];

  const handleImageClick = (index) => {
    setActiveImg(index);
    setModalOpen(true);
    setZoom(1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("🔗 Link copied to clipboard!");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[activeImg];
    link.download = `${car.make}-${car.model}.jpg`;
    link.click();
  };

  return (
    <div className="text-white p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1.2fr] gap-10">
        {/* 🖼️ LEFT SECTION */}
        <div>
          <div className="w-full">
            <img
              src={images[activeImg] || car.image}
              alt={car.model}
              className="rounded-xl w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover object-center cursor-pointer"
              onClick={() => handleImageClick(activeImg)}
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-5 flex flex-wrap gap-3">
            {images.slice(0, showAll ? images.length : 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => handleImageClick(i)}
                className={`h-20 w-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                  activeImg === i ? "border-red-500" : "border-transparent"
                }`}
              />
            ))}

            {/* +X overlay */}
            {images.length > 3 && !showAll && (
              <div
                onClick={() => setShowAll(true)}
                className="h-20 w-20 flex items-center justify-center bg-black/50 text-white text-lg font-semibold rounded-md cursor-pointer"
              >
                +{images.length - 3}
              </div>
            )}
          </div>
        </div>

        {/* 🧾 RIGHT SECTION */}
        <div className="flex flex-col justify-between border border-red-600 rounded-lg p-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              {car.make} {car.model}
            </h1>
            
            {/* Price Display */}
            <p className="text-3xl font-bold text-red-500 mb-6">
              {car.price}
            </p>
            
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li><strong>Registration Year:</strong> {car.yom}</li>
              <li><strong>Ownership:</strong> {car.ownership}</li>
              <li><strong>Insurance:</strong> {car.insurance}</li>
              <li><strong>Fuel Type:</strong> {car.fuel}</li>
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>KMs:</strong> {car.kms}</li>
              <li><strong>Color:</strong> {car.color}</li>
              <li><strong>Model:</strong> {car.model}</li>
              <li><strong>Make:</strong> {car.make}</li>
            </ul>
          </div>

          {/* ✅ Book Now Button */}
          <Link to="/contact">
            <button className="bg-red-600 text-white w-full mt-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* 🔁 Related Cars */}
      <RelatedCars currentCarId={car.id} />

      {/* 🪟 Image Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-9999 px-2 sm:px-4">
          <div className="relative flex flex-col items-center w-full max-w-5xl h-[75vh] sm:h-[80vh] p-2 sm:p-4">
            {/* 🖼️ Image and Arrows */}
            <div className="relative flex items-center justify-center w-full h-full z-10">
              {/* Left arrow */}
              <button
                className="absolute left-2 sm:left-6 text-white p-2 hover:text-red-400 bg-black/40 rounded-full pointer-events-auto"
                onClick={() =>
                  setActiveImg((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                <ArrowLeft size={30} />
              </button>

              {/* Image */}
              <img
                src={images[activeImg]}
                alt=""
                className="max-h-[65vh] sm:max-h-[70vh] max-w-full rounded-xl transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />

              {/* Right arrow */}
              <button
                className="absolute right-2 sm:right-6 text-white p-2 hover:text-red-400 bg-black/40 rounded-full pointer-events-auto"
                onClick={() =>
                  setActiveImg((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ArrowRight size={30} />
              </button>
            </div>

            {/* 🔧 Toolbar (vertical on desktop & tablet) */}
            <div className="absolute md:bottom-12% bottom-6 left-0 right-0 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-6 px-4 z-50">
              {/* Left side: Close, Share, Download */}
              <div className="flex flex-row md:flex-col gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 hover:text-red-400"
                  title="Close"
                >
                  <X size={22} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 hover:text-red-400"
                  title="Copy Link"
                >
                  <Share2 size={22} />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 hover:text-red-400"
                  title="Download"
                >
                  <Download size={22} />
                </button>
              </div>

              {/* Right side: Zoom controls */}
              <div className="flex flex-row md:flex-col gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
                <button
                  onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                  className="p-2 hover:text-red-400"
                  title="Zoom Out"
                >
                  <ZoomOut size={22} />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
                  className="p-2 hover:text-red-400"
                  title="Zoom In"
                >
                  <ZoomIn size={22} />
                </button>
                <button
                  onClick={() => document.documentElement.requestFullscreen()}
                  className="p-2 hover:text-red-400"
                  title="Fullscreen"
                >
                  <Maximize size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
