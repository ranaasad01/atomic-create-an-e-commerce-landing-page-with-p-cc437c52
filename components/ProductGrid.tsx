"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hand-picked items across all categories — from everyday essentials to premium finds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 " +
                (activeCategory === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500")
              }
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-md">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
