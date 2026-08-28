"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { User, Lock, Mail, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SignupFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: SignupFormValues) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Signup data:", data);
    toast.success("Account created successfully!", {
      description: "Welcome to Crossthenics Fitness.",
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
            <span>Join The Ranks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white leading-none">
            FORGE YOUR <span className="text-electric-red">PROFILE</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
            Create your athlete account for expedited delivery & exclusive drops.
          </p>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Alex Sharma"
                {...register("fullName", { required: "Full name is required" })}
                aria-invalid={!!errors.fullName}
                className={cn(
                  "glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600",
                  errors.fullName && "border-red-500 focus:ring-red-500/40"
                )}
              />
              <User size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
            )}
          </div>

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
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === getValues("password") || "Passwords do not match",
                })}
                aria-invalid={!!errors.confirmPassword}
                className={cn(
                  "glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600",
                  errors.confirmPassword && "border-red-500 focus:ring-red-500/40"
                )}
              />
              <Lock size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-electric-red group/btn mt-2 flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-bold uppercase tracking-wider"
          >
            <span>{isSubmitting ? "Creating Account..." : "Create Account"}</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Footer Link Navigation */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <p>
            Already registered?{" "}
            <Link
              href="/auth/login"
              className="font-bold text-[#FF4500] hover:underline transition-colors"
            >
              Sign In
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
