import React, { useState } from "react";
import { cars } from "../data/cars";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/CarCard";

export default function Inventory() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [visibleCount, setVisibleCount] = useState(6); // show 6 cars initially

  // cars to display currently
  const displayedCars = filteredCars.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more cars each time
  };

  return (
    <div className="flex min-h-screen bg-black/10 text-white">
      {/* Sidebar */}
      <FilterSidebar setFilteredCars={setFilteredCars} />

      {/* Main grid */}
      <div className="flex-1 p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredCars.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
