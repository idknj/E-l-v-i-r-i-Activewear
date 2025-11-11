"use client";

import { useState } from "react";
import products from "../../data/products.json";
import { ProductCard } from "../../components/product/ProductCard";

export default function CollectionsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p: any) => p.category.toLowerCase() === filter);

  const uniqueCategories = [
    "all",
    ...new Set(products.map((p: any) => p.category.toLowerCase())),
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold">Our Collections</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Shop E l v i r i Activewear’s Core Collection — timeless activewear
          pieces combining luxury comfort and effortless performance for every
          move.
        </p>
      </header>

      {/* --- Filter Buttons --- */}
      <div className="flex flex-wrap justify-center gap-3">
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition ${
              filter === cat
                ? "bg-[#a38b70] text-black"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* --- Products Grid --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
