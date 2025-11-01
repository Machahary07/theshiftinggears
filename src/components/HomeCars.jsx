import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function RelatedCars({ currentCarId }) {
  const related = cars.filter((c) => c.id !== currentCarId).slice(0, 3);

  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Explore Premium 2nd Hand Cars</h2>
        <Link to="/inventory" className="text-black hover:text-red-600">
          View All →
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {related.map((car) => (
          <Link
            key={car.id}
            to={`/car/${car.id}`}
            className="bg-red-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
          >
            <img
              src={car.image}
              alt={car.model}
              className="h-64 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-lg font-medium text-black">
                {car.make} {car.model}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
