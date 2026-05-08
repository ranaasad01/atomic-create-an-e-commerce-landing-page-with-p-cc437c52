"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2">
          {item.name}
        </h3>
        <p className="text-sm font-bold text-gray-900 mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3.5 h-3.5 text-gray-600" />
        </button>
        <span className="w-8 text-center text-sm font-semibold text-gray-900">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-3.5 h-3.5 text-gray-600" />
        </button>
      </div>

      {/* Line Total */}
      <div className="text-right min-w-[70px]">
        <p className="text-sm font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        aria-label={"Remove " + item.name + " from cart"}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
