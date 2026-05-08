"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5">
              <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Summer Sale — Up to 40% Off</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Discover Products
                <br />
                <span className="text-orange-500">You&apos;ll Love</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                Shop thousands of curated products across electronics, fashion, home, sports, and beauty — all with fast shipping and easy returns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: "50K+", label: "Products" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "Free", label: "Shipping $50+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700">
                <img
                  src="https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UF894,1000_QL80_.jpg"
                  alt="Featured headphones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700">
                <img
                  src="https://i.ebayimg.com/images/g/ImEAAOSwZ91gbdVi/s-l1200.jpg"
                  alt="Yoga mat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-gray-700">
                <img
                  src="https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500"
                  alt="Leather watch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-700">
                <img
                  src="https://geekandgorgeous.us/cdn/shop/files/C-Glow-web.jpg?crop=center&height=2048&v=1705591084&width=2048"
                  alt="Beauty serum"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
