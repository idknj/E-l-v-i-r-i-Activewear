"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import products from "../../../data/products.json"; // ✅ correct depth
import { useCart } from "../../context/CartContext"; // ✅ correct depth

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  // Ensure the id is a string to match your JSON ids
  const productId = params?.id?.toString();
  const product = products.find((p: any) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] ?? null,
  );

  if (!product) {
    return (
      <section className="max-w-5xl mx-auto py-16 px-6">
        <p className="text-center text-white/70">Product not found.</p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.push("/collections")}
            className="bg-[#a38b70] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#cbb899] transition"
          >
            Back to Collections
          </button>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} – ${selectedColor?.name ?? ""}`,
      price: product.price,
      image:
        selectedColor?.image ??
        product.colors?.[0]?.image ??
        "/images/placeholder.png",
    });
    router.push("/cart");
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-white/60 text-sm hover:text-white transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Product image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={
              selectedColor?.image ||
              product.colors?.[0]?.image ||
              "/images/placeholder.png"
            }
            alt={product.name}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Product info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>

          <p className="text-white/70 text-sm max-w-md">
            Premium {product.category.toLowerCase()} engineered for comfort,
            flexibility, and performance.
          </p>

          <p className="text-xl font-semibold">R{product.price}</p>

          {/* Color selector */}
          {Array.isArray(product.colors) && product.colors.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-white/70">Available Colors:</p>
              <div className="flex gap-3">
                {product.colors.map((color: any) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full overflow-hidden border transition ${
                      selectedColor?.name === color.name
                        ? "border-[#a38b70] scale-110"
                        : "border-white/10 hover:border-[#a38b70]"
                    }`}
                    aria-label={color.name}
                    title={color.name}
                  >
                    <Image
                      src={color.image}
                      alt={color.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
