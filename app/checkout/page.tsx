"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [processing, setProcessing] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields before continuing.");
      return;
    }

    setProcessing(true);

    // Save order summary locally (for testing or confirmation)
    localStorage.setItem(
      "elviri_order",
      JSON.stringify({ customer: form, items, subtotal }),
    );

    // Simulated payment redirect
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <section className="max-w-5xl mx-auto py-16 px-6 text-center space-y-6">
        <p className="text-white/70">Your cart is empty.</p>
        <Link
          href="/collections"
          className="bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-3xl font-semibold">Checkout</h1>

      {/* --- Order Summary --- */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-white/10 pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={70}
                height={90}
                className="rounded-md object-cover"
              />
              <div>
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-white/60">
                  R{item.price} × {item.quantity}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold">
              R{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        <div className="text-right text-lg font-semibold">
          Subtotal: <span className="text-[#a38b70]">R{subtotal}</span>
        </div>
      </div>

      {/* --- Customer Info Form --- */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10"
      >
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-[#a38b70] outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-[#a38b70] outline-none"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:border-[#a38b70] outline-none"
        />

        <div className="flex justify-between items-center pt-4">
          <Link
            href="/cart"
            className="text-sm text-white/60 hover:text-white transition"
          >
            ← Back to Cart
          </Link>

          <button
            type="submit"
            disabled={processing}
            className="bg-[#a38b70] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#cbb899] transition disabled:opacity-50"
          >
            {processing ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </section>
  );
}
