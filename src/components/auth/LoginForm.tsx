"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // API call goes here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.25)]">
      <div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Sign in to continue to your account
          </p>
        </div>
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2  focus:ring-orange-200" required
        />
        <div className="flex items-center justify-between text-sm">
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
        className="w-full rounded-lg bg-black text-white py-2 cursor-pointer transition-all duration-300 hover:text-black hover:bg-orange-500 hover:scale-110"
      >
        Login
      </button>
      <div className="flex flex-row justify-between">
        <p>
          Don&apos;t have account ?
          <Link
            href="/auth/signup"
            className="text-red-800 cursor-pointer hover:text-orange-500"
          >
            Sign-UP
          </Link>
        </p>
        <Link href="/" className="text-black cursor-pointer hover:text-orange-500">
           Back to Home
          </Link>
      </div>
    </form>
  );
}

// import OAuth from "../auth/Oauth";

// export default function LoginPage() {
//   return (
//     <div>
//       <OAuth />
//     </div>
//   );
// }
