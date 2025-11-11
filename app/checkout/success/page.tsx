"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="max-w-3xl mx-auto py-24 text-center space-y-8">
      <div className="text-6xl">🎉</div>
      <h1 className="text-3xl font-semibold">Payment Successful</h1>
      <p className="text-white/70 max-w-md mx-auto">
        Thank you for your purchase! Your order has been received and is now
        being processed. A confirmation email will be sent to you shortly.
      </p>

      <Link
        href="/collections"
        className="inline-block bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
