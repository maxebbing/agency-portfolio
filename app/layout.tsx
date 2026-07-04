import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteName = "Max Ebbing — Web Design Studio";
const siteDescription =
  "Editorial, print-inspired web design studio. Self-initiated concept case studies in brand identity and web design.";

export const metadata: Metadata = {
  // NOTE: must be set to the real production URL via NEXT_PUBLIC_SITE_URL
  // when this site is deployed, so that resolved OG/canonical URLs are correct.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    template: "%s — Max Ebbing",
    default: siteName,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
