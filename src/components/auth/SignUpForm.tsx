"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
    formState: { errors },
  } = useForm<SignupFormValues>({ mode: "onSubmit" });

  const onSubmit = (data: SignupFormValues) => {
    if (data.password !== data.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(31,38,135,0.25)] backdrop-blur-xl"
    >
      <div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Let&apos;s Start your Fitness Journey with Crossthenics
          </h1>
          <p className="mt-2 text-gray-500">Create your account</p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Full Name</label>
          <Input
            type="text"
            placeholder="John Doe"
            {...register("fullName", { required: "Full name is required" })}
            aria-invalid={!!errors.fullName}
            className={cn("h-10", errors.fullName && "border-red-500 focus-visible:ring-red-500")}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="example@gmail.com"
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

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <Input
          type="password"
          placeholder="********"
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
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Confirm Password</label>
        <Input
          type="password"
          placeholder="********"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === getValues("password") || "Passwords do not match",
          })}
          aria-invalid={!!errors.confirmPassword}
          className={cn(
            "h-10",
            errors.confirmPassword && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-black py-2 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-black"
      >
        Create Account
      </button>

      <div className="flex flex-row justify-between">
        <p>
          Already have account ?
          <Link href="/auth/login" className="cursor-pointer text-red-900 hover:text-orange-500">
            Log-In
          </Link>
        </p>
        <Link href="/" className="cursor-pointer text-black hover:text-orange-500">
          Back to Home
        </Link>
      </div>
    </form>
  );
}
