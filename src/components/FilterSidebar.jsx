import React, { useState, useEffect } from "react";
import { cars } from "../data/cars";

export default function FilterSidebar({ setFilteredCars }) {
  const [filters, setFilters] = useState({
    brand: [],
    fuel: [],
    transmission: [],
    ownership: [],
    color: [],
    model: [],
  });

  // Extract unique values from data
  const brands = [...new Set(cars.map((c) => c.make))];
  const fuels = [...new Set(cars.map((c) => c.fuel))];
  const transmissions = [...new Set(cars.map((c) => c.transmission))];
  const ownerships = [...new Set(cars.map((c) => c.ownership))];
  const colors = [...new Set(cars.map((c) => c.color))];
  const models = [...new Set(cars.map((c) => c.model))];

  // Toggle filter selections
  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  // Filter cars whenever filters change
  useEffect(() => {
    let filtered = cars.filter((car) => {
      return (
        (filters.brand.length === 0 || filters.brand.includes(car.make)) &&
        (filters.fuel.length === 0 || filters.fuel.includes(car.fuel)) &&
        (filters.transmission.length === 0 ||
          filters.transmission.includes(car.transmission)) &&
        (filters.ownership.length === 0 ||
          filters.ownership.includes(car.ownership)) &&
        (filters.color.length === 0 || filters.color.includes(car.color)) &&
        (filters.model.length === 0 || filters.model.includes(car.model))
      );
    });
    setFilteredCars(filtered);
  }, [filters, setFilteredCars]);

  // Reusable section component
  const FilterSection = ({ title, options, category, colorOptions = false }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-2">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleFilterChange(category, option)}
            className={`flex items-center gap-2 cursor-pointer ${
              filters[category].includes(option)
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {colorOptions ? (
              <span
                className="w-4 h-4 rounded-full border border-white"
                style={{ backgroundColor: option.toLowerCase() }}
              ></span>
            ) : (
              <span
                className={`w-4 h-4 border rounded-full ${
                  filters[category].includes(option) ? "bg-white" : ""
                }`}
              ></span>
            )}
            {option}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <aside className="w-72 bg-black/40 p-12 backdrop-blur-md hidden md:block overflow-y-auto h-screen">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      <FilterSection title="Brand" options={brands} category="brand" />
      <FilterSection title="Model" options={models} category="model" />
      <FilterSection title="Fuel Type" options={fuels} category="fuel" />
      <FilterSection title="Transmission" options={transmissions} category="transmission" />
      <FilterSection title="Ownership" options={ownerships} category="ownership" />
      <FilterSection title="Color" options={colors} category="color" colorOptions />
    </aside>
  );
}
