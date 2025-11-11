"use client";

import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="relative flex items-center">
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

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#a38b70] text-black text-xs font-semibold rounded-full px-1.5">
          {count}
        </span>
      )}
    </div>
  );
}
