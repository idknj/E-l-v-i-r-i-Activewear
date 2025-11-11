"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ import Link
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {/* Cart toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293A1 1 0 007 17h12m0 0a2 2 0 11-4 0m4 0a2 2 0 104 0M7 17a2 2 0 104 0m-4 0a2 2 0 11-4 0"
          />
        </svg>
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#a38b70] text-black text-xs font-semibold rounded-full px-1.5">
            {items.reduce((sum, i) => sum + i.quantity, 0)}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f0f] border-l border-white/10 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 && (
            <p className="text-white/60 text-sm text-center">
              Your cart is empty.
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-xs text-white/60">
                  R{item.price} × {item.quantity}
                </p>
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

        {items.length > 0 && (
          <div className="p-4 border-t border-white/10 space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span>Total</span>
              <span>R{total.toFixed(2)}</span>
            </div>

            {/* ✅ Checkout link */}
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block text-center w-full bg-[#a38b70] text-black font-semibold py-2 rounded-md hover:bg-[#cbb899] transition"
            >
              Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full border border-white/20 text-white/70 text-xs py-2 rounded-md hover:bg-white/10 transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
