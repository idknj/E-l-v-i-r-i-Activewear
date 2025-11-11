"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// --- Create context ---
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- Provider component (wraps your app) ---
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage (persistent cart)
  useEffect(() => {
    const storedCart = localStorage.getItem("elviri_cart");
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch {
        console.error("Failed to parse saved cart data");
      }
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("elviri_cart", JSON.stringify(items));
  }, [items]);

  // ✅ Add item (or increase quantity)
  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove single item
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("elviri_cart");
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// --- Hook to access the cart anywhere in the app ---
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
