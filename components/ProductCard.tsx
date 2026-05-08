"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={
            "w-3.5 h-3.5 " +
            (star <= Math.round(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-gray-300 fill-gray-300")
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColor =
    product.badge === "SALE"
      ? "bg-red-500"
      : product.badge === "NEW"
      ? "bg-emerald-500"
      : product.badge === "HOT"
      ? "bg-orange-500"
      : "bg-gray-700";

  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={"absolute top-3 left-3 " + badgeColor + " text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wide"}
          >
            {product.badge}
          </span>
        )}
        {/* Discount */}
        {discount && (
          <span className="absolute top-3 right-3 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={
            "mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added
              ? "bg-emerald-500 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md hover:shadow-orange-200")
          }
          aria-label={"Add " + product.name + " to cart"}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
