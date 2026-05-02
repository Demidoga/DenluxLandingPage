import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
