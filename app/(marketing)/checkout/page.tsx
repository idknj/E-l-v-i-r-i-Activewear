"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link
          href="/collections/core"
          className="inline-block bg-[#a38b70] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#cbb899] transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 space-y-10">
      <h1 className="text-3xl font-semibold text-center">Checkout</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-white/10 pb-3"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-white/60">
                R{item.price} × {item.quantity}
              </p>
            </div>
            <p className="font-medium">
              R{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6 flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>R{total.toFixed(2)}</span>
      </div>

      <button
        onClick={() => alert("Payment integration coming soon!")}
        className="w-full bg-[#a38b70] text-black py-3 rounded-md font-semibold hover:bg-[#cbb899] transition"
      >
        Proceed to Payment
      </button>

      <button
        onClick={clearCart}
        className="w-full border border-white/20 text-white/70 text-xs py-2 rounded-md hover:bg-white/10 transition"
      >
        Clear Cart
      </button>
    </div>
  );
}
