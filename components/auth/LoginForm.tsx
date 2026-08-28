"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login data:", data);
    toast.success("Welcome back, Athlete!", {
      description: "Signed into your Crossthenics account.",
      style: {
        background: "#0a0a0e",
        border: "1px solid rgba(255, 69, 0, 0.5)",
        color: "#ffffff",
      },
    });
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-3xl glass-dark p-8 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-all"
      >
        {/* Header with HUGE WHITE TYPOGRAPHY */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full glass-pill-red px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#FF4500] mb-3">
            <Sparkles size={12} />
            <span>Athlete Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white leading-none">
            ATHLETE <span className="text-electric-red">ACCESS</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
            Sign in to access your orders, saved gear & VIP drops.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="athlete@domain.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                aria-invalid={!!errors.email}
                className={cn(
                  "glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600",
                  errors.email && "border-red-500 focus:ring-red-500/40"
                )}
              />
              <Mail size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={!!errors.password}
                className={cn(
                  "glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600",
                  errors.password && "border-red-500 focus:ring-red-500/40"
                )}
              />
              <Lock size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
            )}

            <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="rounded border-white/20 bg-white/10 text-[#FF4500] focus:ring-0"
                />
                <span>Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-[#FF4500] hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-electric-red group/btn mt-2 flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-wider"
          >
            <span>{isSubmitting ? "Authenticating..." : "Sign In"}</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Footer Link Navigation */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <p>
            New athlete?{" "}
            <Link
              href="/auth/signup"
              className="font-bold text-[#FF4500] hover:underline transition-colors"
            >
              Create Account
            </Link>
          </p>
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
}
