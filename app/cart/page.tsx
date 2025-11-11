"use client";

export const metadata = {
  title: "Your Cart | E l v i r i Activewear Checkout",
  description:
    "Review the items in your cart before checkout. Experience minimalist, high-performance activewear built for your daily motion.",
};

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center space-y-6">
          <p className="text-white/60">Your cart is currently empty.</p>
          <Link
            href="/collections"
            className="bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-white/60">
                      R{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-semibold">
              Subtotal: <span className="text-[#a38b70]">R{subtotal}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="border border-white/20 text-white/70 text-xs py-2 px-4 rounded-md hover:bg-white/10 transition"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                className="bg-[#a38b70] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#cbb899] transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
