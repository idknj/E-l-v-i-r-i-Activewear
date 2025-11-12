# Codex Prompt Pack – E l v i r i Activewear

## 1) Generate page scaffold

Build a Next.js App Router page at: <PATH>. The page must:

- export a default React component
- use Tailwind classes consistent with the project (lux dark look)
- include responsive section spacing and container
- include an H1, supporting copy, and a grid for future cards
  Return only the final file contents for <PATH>/page.tsx.

## 2) Create a component

Create a React component at <PATH>/<Name>.tsx with props: <PROPS>. It must:

- be typed with an exported `Props` interface
- use Tailwind and our design tokens (rounded-2xl, border-white/10, bg-white/5)
- be accessible (alt, aria-labels)
  Return only the component code.

## 3) Convert to client component

Convert <PATH> to a client component:

- add "use client"; as the first line
- ensure all hooks and event handlers compile
- do not include `export const metadata`
  Return the full fixed file.

## 4) Move metadata to head.tsx

For <ROUTE>, remove any `export const metadata` from `page.tsx` and create `<ROUTE>/head.tsx` with `<title>` and `<meta name="description">` provided:

- title: <TITLE>
- description: <DESC>
  Return both file contents.

## 5) Make a new collection grid

In `app/collections/page.tsx`, add filtering by category from `data/products.json`. Keep the look consistent. Return the full page.

## 6) Build a product card with hover

At `app/components/product/ProductCard.tsx`, implement a card that:

- uses `next/image` with `fill`
- hover scale and brightness transition
- shows name and price
  Return full file.

## 7) Cart drawer

Create `app/components/CartDrawer.tsx` as a client component:

- toggled by a button with a badge showing total qty
- slides in from the right
- lists items with remove + clear
- shows subtotal and checkout button
  Return full file.

## 8) Fix import paths to aliases

Find imports like `../../..` and convert them to aliased paths per tsconfig. Return the diff or full files changed.

## 9) Add unit types

For data models (Product, CartItem), add TypeScript types and apply across components to remove all `any`. Return updated types + consuming files.

## 10) Payment page mock

Create `app/checkout/page.tsx` as a client component with a customer form and simulated success redirect to `/checkout/success`. Store a summary in localStorage. Return full file.
