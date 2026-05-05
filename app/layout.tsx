import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Denlux Dental — Smile with Confidence",
  description:
    "Denlux Dental is a modern dental clinic run by two certified dentists. We provide general dentistry, cosmetic procedures, and preventive care with state-of-the-art equipment.",
  keywords: [
    "dental clinic",
    "dentist",
    "dental care",
    "teeth whitening",
    "implants",
    "root canal",
    "dental hygiene",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
