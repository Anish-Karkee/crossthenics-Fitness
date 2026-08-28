import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Crossthenics Fitness",
  description: "Sign in or create an account for Crossthenics Fitness",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-red-100 via-white to-red-200 px-4 py-12">
      <div className="pointer-events-none absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}