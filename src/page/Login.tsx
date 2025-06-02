import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase"; // Ensure this path is correct

/**
 * An eye‑catching login screen for SD Event & Shyam Catering.
 * – Glassmorphism card floating over a hero image
 * – Built with Tailwind CSS utility classes only
 * – Displays inline success / error messages (no console spam)
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  /** Handle form submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("Login successful! Redirecting…");
      setTimeout(() => navigate("/admin"), 1000);
    } catch (err: any) {
      setMsg("Login failed: " + err.message);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-24 w-80 h-80 rounded-full bg-fuchsia-300 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-purple-400 opacity-30 blur-3xl animate-ping" />

      {/* Hero heading */}
      <header className="absolute top-10 text-center text-white px-4 select-none">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide">
          SD Event & Shyam Catering
        </h1>
        <p className="mt-2 text-base md:text-lg font-medium">
          Crafting Memorable Moments with Style &amp; Perfection ADMIN-PANAL
        </p>
      </header>

      {/* Glassmorphic card */}
      <form
        onSubmit={handleSubmit}
        className="w-full mt-10 max-w-[420px] px-8 py-10 backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl shadow-2xl space-y-6 animate-fade-in"
      >
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-white">Admin Login</h2>
          {msg && (
            <p
              className={`text-sm font-medium transition-colors ${
    /* message color */
    ""}`}>
              {msg}
            </p>
          )}
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur placeholder-gray-600 text-gray-800 focus:ring-4 focus:ring-fuchsia-300 focus:outline-none"
          required
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur placeholder-gray-600 text-gray-800 focus:ring-4 focus:ring-fuchsia-300 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold tracking-wide hover:brightness-110 active:scale-95 transition"
        >
          Login
        </button>
         <p className="text-center text-raaj-blue text-sm select-none">
          &copy; {new Date().getFullYear()}   SD Event & Shyam Catering. All rights reserved.
        </p>
      </form>
    </main>
  );
}
