import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.redirect(
    new URL(
      "/checkout/success",
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
  );
}
