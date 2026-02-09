"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!name || !email) return alert("Please enter details");

    localStorage.setItem(
      "user",
      JSON.stringify({ name, email })
    );

    router.back(); // return to previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EADBD6]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to MahaYatra
        </h1>

        <input
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-2 mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#8D5B4C] text-white py-2 rounded-lg font-semibold hover:bg-[#73473A]"
        >
          Continue
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          No signup required • Instant access
        </p>
      </div>
    </div>
  );
}
