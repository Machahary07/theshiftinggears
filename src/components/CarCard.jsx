import React from "react";
import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="bg-black/40 border-4 border-red-600 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition hover:bg-red-600">
      <img
        src={car.image}
        alt={car.model}
        loading="lazy"
        className="w-full h-52 object-cover"
      />
      <div className="p-1">
        <h3 className="text-xl font-semibold">
          {car.make} {car.model}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          {car.yom} • {car.fuel} • {car.ownership}
        </p>
        <Link
          to={`/car/${car.id}`}
          className="inline-block mt-4 px-4 py-2 border border-white text-black rounded-lg hover:bg-gray-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
