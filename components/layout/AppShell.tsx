"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navBar";
import Footer from "@/components/layout/Footer";
import { SearchProvider } from "@/lib/searchContext";
import { Toaster } from "@/components/ui/sonner";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith("/auth");

  return (
    <SearchProvider>
      {!isAuthRoute && <Navbar />}
      {children}
      {!isAuthRoute && <Footer />}
      <Toaster />
    </SearchProvider>
  );
}
