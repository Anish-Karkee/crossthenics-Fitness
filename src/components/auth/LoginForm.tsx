"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(31,38,135,0.25)] backdrop-blur-xl"
    >
      <div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            aria-invalid={!!errors.email}
            className={cn("h-10", errors.email && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          aria-invalid={!!errors.password}
          className={cn("h-10", errors.password && "border-red-500 focus-visible:ring-red-500")}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}

        <div className="mt-3 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-orange-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-black py-2 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-black"
      >
        Login
      </button>

      <div className="flex flex-row justify-between">
        <p>
          Don&apos;t have account ?
          <Link
            href="/auth/signup"
            className="cursor-pointer text-red-900 hover:text-orange-500"
          >
            Sign-UP
          </Link>
        </p>
        <Link href="/" className="cursor-pointer text-black hover:text-orange-500">
          Back to Home
        </Link>
      </div>
    </form>
  );
}
