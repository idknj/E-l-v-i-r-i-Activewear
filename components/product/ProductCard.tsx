"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  colors: { name: string; image: string }[];
}

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const mainImage = product.colors[0]?.image;

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#a38b70]/40 transition-all duration-500 ease-out"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Product image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            sizes="(min-width:768px) 33vw, 100vw"
            className={`object-cover transition-transform duration-700 ease-out ${
              hovered ? "scale-105 brightness-[1.05]" : "scale-100"
            }`}
          />
        </div>

        {/* Text area */}
        <div className="p-4 space-y-1">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-white/60 text-xs">R{product.price}</p>
        </div>

        {/* Overlay “View Product” fade-in */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white text-xs uppercase tracking-wide transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          View Product
        </div>
      </div>
    </Link>
  );
}
