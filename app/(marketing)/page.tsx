export const metadata = {
  title: "Elviri Sportsware – Premium Activewear for Every Move",
  description:
    "Explore Elviri’s collection of minimalist, high-performance activewear. Designed in South Africa to elevate your motion, confidence, and comfort.",
};

import Link from "next/link";
import products from "../../data/products.json";
import { ProductCard } from "../../components/product/ProductCard";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-[#f4efe9]/70" />

        {/* Content container */}
        <div className="relative z-10 max-w-5xl px-6 md:px-16 lg:px-24 py-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-black leading-tight max-w-xl">
            Own Your Every Move
          </h1>

          <p className="text-lg text-neutral-800 max-w-md">
            Premium activewear engineered for performance. Squat-proof fabrics, buttery comfort, and inclusive fits.
          </p>

          <div className="pt-4">
            <Link
              href="/collections/new"
              className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-neutral-800 transition"
            >
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-semibold text-center">Featured Essentials</h2>
        <p className="text-center text-white/60 max-w-xl mx-auto">
          Built to move with you — Elviri staples that balance strength, comfort, and design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}