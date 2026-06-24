"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // API call goes here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md  p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.25)]">
      <div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Let&apos;s Start your Fitness Journey with Crossthenics</h1>
          <p className="text-gray-500 mt-2">
            Create your account
          </p>
        </div>
        <label className="block mb-2 text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-orange-500 focus:ring-2  focus:ring-orange-200 required"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="********"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black text-white py-2 cursor-pointer transition-all duration-300 hover:text-black hover:bg-orange-500 hover:scale-110"
      >
        Create Account
      </button>
      <div className="flex flex-row justify-between">
        <p>
          Already have account ?
          <Link href="/login" className="text-red-800 cursor-pointer hover:text-orange-500">
           Log-In
          </Link>
        </p>
        <Link href="/" className="text-black cursor-pointer hover:text-orange-500">
           Back to Home
          </Link>
      </div>
      <div>
        
      </div>
    </form>
  );
}
