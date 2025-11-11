export const metadata = {
  title: "Core Collection | Elviri Activewear Essentials",
  description:
    "Shop Elviri’s Core Collection — timeless activewear pieces combining luxury comfort and effortless performance for every move.",
};

"use client";

import { useState } from "react";
import products from "../../data/products.json";
import { ProductCard } from "../../components/product/ProductCard";

const categories = ["All", "Tops", "Bottoms", "Sets", "Accessories"];

export default function CollectionsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter(
          (p: any) =>
            p.category?.toLowerCase() === active.toLowerCase()
        );

  return (
    <section className="space-y-12 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-semibold">
          Explore Our Collections
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Premium activewear engineered for performance, comfort, and confidence.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              active === c
                ? "bg-[#a38b70] text-black border-[#a38b70]"
                : "border-white/20 text-white/80 hover:border-[#a38b70] hover:text-[#a38b70]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
