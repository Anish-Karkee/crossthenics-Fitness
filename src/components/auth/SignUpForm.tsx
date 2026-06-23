"use client";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // API call goes here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full max-w-md"
    >
      <div>
        <label className="block mb-2 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Email
        </label>
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
        <label className="block mb-2 text-sm font-medium">
          Password
        </label>
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
    </form>
  );
}