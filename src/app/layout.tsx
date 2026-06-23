import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navBar";
import Footer from "@/components/layout/Footer";
import { SearchProvider } from "@/lib/searchContext";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Crossthenics Fitness",
  description: "A clean glassmorphism  homepage.",
  icons: {
    icon: "./favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SearchProvider>
          
        <Navbar />
          {children}
          <Footer />
          <Toaster/>
        </SearchProvider>
      </body>
    </html>
  );
}
