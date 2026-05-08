"use client";

import { useState } from "react";
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-orange-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-8 py-4 rounded-2xl">
            <Check className="w-5 h-5" />
            <span className="font-semibold">You&apos;re subscribed! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-gray-500 text-sm mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
