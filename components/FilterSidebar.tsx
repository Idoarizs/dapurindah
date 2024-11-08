import React, { useState } from "react";
import { FilterProps } from "../types";

const FilterSidebar: React.FC<FilterProps> = ({ onFilterChange, filters }) => {
  const [priceRange, setPriceRange] = useState<[number, number] | undefined>(undefined);
  const [rating, setRating] = useState<string | undefined>(undefined);
  const [availability, setAvailability] = useState<boolean | undefined>(undefined);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
    onFilterChange({ category: event.target.value });
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [minPrice, maxPrice] = event.target.value.split("-").map(Number);
    setPriceRange([minPrice, maxPrice]);
    onFilterChange({ priceRange: [minPrice, maxPrice] });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
    onFilterChange({ rating: event.target.value });
  };

  const handleAvailabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvailability(event.target.checked);
    onFilterChange({ availability: event.target.checked });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    onFilterChange({ title: event.target.value });
  };

  return (
    <div className="w-1/4 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-pink-600 mb-4">Filters</h2>

      {/* Title Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Search by title"
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">All Categories</option>
          {filters.categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Minimum Rating</label>
        <select
          value={rating}
          onChange={handleRatingChange}
          className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">All Ratings</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="1">1 Star & Up</option>
        </select>
      </div>

      {/* Availability Filter */}
      <div className="mb-4">
        <label className="flex items-center text-sm font-semibold text-gray-700">
          <input
            type="checkbox"
            checked={availability}
            onChange={handleAvailabilityChange}
            className="mr-2 rounded focus:ring-2 focus:ring-pink-400"
          />
          In Stock Only
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
