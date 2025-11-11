# Elviri Sportsware — Minimal E‑commerce Starter (Next.js + TS + Tailwind)

## Quick Start
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy to GitHub + Vercel
```bash
git init
git add .
git commit -m "feat: elviri starter"
# create a repo on GitHub, then:
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```
Import the repo into Vercel and set `NEXT_PUBLIC_SITE_URL` env var.

## Payment Wiring (Placeholder)
Update `app/api/checkout/route.ts` with Paystack/Stripe. Add webhook routes later.
