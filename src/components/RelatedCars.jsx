import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function RelatedCars({ currentCarId }) {
  const related = cars.filter((c) => c.id !== currentCarId).slice(0, 3);

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Related Cars</h2>
        <Link to="/inventory" className="text-gray-300 hover:text-white">View All →</Link>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {related.map((car) => (
          <Link key={car.id} to={`/car/${car.id}`} className="bg-black/40 rounded-xl overflow-hidden">
            <img src={car.image} alt={car.model} className="h-44 w-full object-cover" />
            <div className="p-3">
              <p className="text-lg font-medium">{car.make} {car.model}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
