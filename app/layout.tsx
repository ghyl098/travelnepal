import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TravelNepal",
  description: "Explore Nepal's destinations and book your trip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white font-sans text-ink antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}