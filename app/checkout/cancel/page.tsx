"use client";

export const metadata = {
  title: "Payment Canceled | E l v i r i Activewear",
  description:
    "Your payment was not completed. Don’t worry — your items are still in your cart. You can try again anytime.",
};

import Link from "next/link";

export default function CancelPage() {
  return (
    <section className="max-w-3xl mx-auto py-24 text-center space-y-8">
      <div className="text-6xl">⚠️</div>
      <h1 className="text-3xl font-semibold">Payment Canceled</h1>
      <p className="text-white/70 max-w-md mx-auto">
        It looks like your payment was canceled or not completed. Don’t worry —
        your cart items are still saved if you’d like to try again.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/checkout"
          className="bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition"
        >
          Try Again
        </Link>
        <Link
          href="/collections"
          className="border border-white/20 text-white/80 font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
