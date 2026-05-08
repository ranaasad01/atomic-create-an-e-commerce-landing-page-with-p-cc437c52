export const dynamic = "force-dynamic";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Promo Banner */}
      <div className="bg-orange-500 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          🎉 Free shipping on orders over $50 &nbsp;|&nbsp; Use code{" "}
          <span className="font-bold underline underline-offset-2">LUMSHOP10</span>{" "}
          for 10% off your first order
        </p>
      </div>

      {/* Category Highlights */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Electronics", emoji: "🎧", color: "bg-blue-50 hover:bg-blue-100", text: "text-blue-700" },
              { name: "Clothing", emoji: "👕", color: "bg-purple-50 hover:bg-purple-100", text: "text-purple-700" },
              { name: "Home", emoji: "🏠", color: "bg-amber-50 hover:bg-amber-100", text: "text-amber-700" },
              { name: "Sports", emoji: "🏃", color: "bg-green-50 hover:bg-green-100", text: "text-green-700" },
              { name: "Beauty", emoji: "✨", color: "bg-pink-50 hover:bg-pink-100", text: "text-pink-700" },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#products"
                className={"flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer " + cat.color}
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className={"text-sm font-semibold " + cat.text}>{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-gray-100 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
              { icon: "🔒", title: "Secure Payment", desc: "256-bit SSL encryption" },
              { icon: "💬", title: "24/7 Support", desc: "Always here to help" },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="text-2xl">{badge.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{badge.title}</p>
                  <p className="text-xs text-gray-500">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid />
      <Newsletter />
    </>
  );
}
