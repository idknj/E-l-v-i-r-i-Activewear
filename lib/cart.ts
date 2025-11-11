'use client';
import { create } from "zustand";

type Item = {
  sku: string;
  title: string;
  price: number;
  qty: number;
  size?: string;
  color?: string;
};

type CartState = {
  items: Item[];
  add: (item: Item) => void;
  remove: (sku: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "elviri_cart_v1";

const load = (): Item[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  add: (item) => {
    const items = get().items.slice();
    const idx = items.findIndex(i => i.sku === item.sku);
    if (idx >= 0) items[idx].qty += item.qty;
    else items.push(item);
    set({ items });
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  remove: (sku) => {
    const items = get().items.filter(i => i.sku !== sku);
    set({ items });
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  clear: () => {
    set({ items: [] });
    if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
  }
}));

if (typeof window !== "undefined") {
  const existing = load();
  if (existing.length) {
    useCartStore.setState({ items: existing });
  }
}
