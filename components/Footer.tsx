import Link from "next/link";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Globe as Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    Shop: ["Electronics", "Clothing", "Home & Living", "Sports", "Beauty"],
    Company: ["About Us", "Careers", "Press", "Blog"],
    Support: ["Help Center", "Returns", "Shipping Info", "Contact Us"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Lum<span className="text-orange-500">Shop</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Your one-stop destination for quality products at unbeatable prices.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-orange-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LumShop. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span>Accepted payments:</span>
            {["Visa", "MC", "PayPal", "Apple Pay"].map((method) => (
              <span
                key={method}
                className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-md font-medium"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
