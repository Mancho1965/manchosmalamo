"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "mancho1965") {
      router.push("/admin/dashboard");
      return;
    }

    setError("Incorrect username or password.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6f1] px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-center text-4xl font-bold text-[#1f4d2d]">
          MANCHO'S
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Admin Panel
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#1f4d2d]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-[#1f4d2d]"
          />

          {error && (
            <p className="text-center text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#1f4d2d] py-4 font-semibold text-white transition hover:bg-[#173b24]"
          >
            Login
          </button>

        </form>

      </div>
    </main>
  );
}