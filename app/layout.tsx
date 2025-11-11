import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

// ✅ Font setup with CSS variables
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

// ✅ Enhanced SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.elviri.com"), // your domain (update before deployment)
  title: {
    default: "Elviri Sportsware – Premium Activewear",
    template: "%s | Elviri Sportsware",
  },
  description:
    "Minimal, high-performance activewear engineered for comfort, confidence and motion. Designed in South Africa.",
  keywords: [
    "Elviri Sportsware",
    "activewear South Africa",
    "gym clothing",
    "athleisure",
    "luxury sportswear",
    "performance leggings",
  ],
  openGraph: {
    title: "Elviri Sportsware – Premium Activewear",
    description:
      "Minimal, high-performance activewear engineered for comfort and motion.",
    url: "https://www.elviri.com",
    siteName: "Elviri Sportsware",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Elviri Sportsware Brand Banner",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elviri Sportsware",
    description:
      "Luxury activewear for every move – crafted for style and performance.",
    images: ["/images/og-banner.jpg"],
    creator: "@elviri", // optional
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} scroll-smooth`}
    >
      <body className={`${lato.className} ${montserrat.className}`}>
        <CartProvider>
          {/* ===== Header ===== */}
          <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
            <nav className="container flex h-16 items-center justify-between">
              {/* Brand Logo */}
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Elviri Sportsware Logo"
                  className="h-7 md:h-9 object-contain"
                />
              </Link>

              {/* Nav Links */}
              <div className="flex items-center gap-4 text-sm text-white/80">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/collections/core">Collections</Link>
                {/* ✅ Cart Drawer Trigger */}
                <CartDrawer />
              </div>
            </nav>
          </header>

          {/* ===== Page Content ===== */}
          <main className="container py-10">{children}</main>

          {/* ===== Footer ===== */}
          <footer className="border-t border-white/10 mt-20">
            <div className="container py-8 text-sm text-white/70">
              © {new Date().getFullYear()} Elviri Sportsware ·{" "}
              <Link className="underline" href="/policies/privacy">
                Privacy
              </Link>{" "}
              ·{" "}
              <Link className="underline" href="/policies/terms">
                Terms
              </Link>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
