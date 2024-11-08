'use client';

import { useState } from "react";

// Components
import ProductCard from "../../components/card/ProductCard";
import FilterSidebar from "../../components/FilterSidebar";

// Data
import productsData from "../../data/products";

// Types
import { Product, Filter } from "../../types";

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);

  // Extract unique categories from productsData
  const categories = Array.from(new Set(productsData.map(product => product.category)));

  const filterProducts = (filters: Filter) => {
    const filtered = productsData.filter((product) => {
      // Title filter
      const matchesTitle = filters.title
        ? product.title.toLowerCase().includes(filters.title.toLowerCase())
        : true;

      // Category filter
      const matchesCategory = filters.category
        ? product.category === filters.category
        : true;

      // Price range filter
      const matchesPrice =
        filters.priceRange && product.price
          ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
          : true;

      // Rating filter
      const matchesRating =
        filters.rating ? product.rating >= parseFloat(filters.rating) : true;

      // Availability filter
      const matchesAvailability = filters.availability !== undefined
        ? product.availability === filters.availability
        : true;

      return matchesTitle && matchesCategory && matchesPrice && matchesRating && matchesAvailability;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex min-h-screen bg-[#f9f7fb] p-5 text-black">
      {/* Sidebar */}
      <FilterSidebar onFilterChange={filterProducts} filters={{ categories }} />

      {/* Product list */}
      <div className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            route={product.route}
            imageUrl={product.imageUrl}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
