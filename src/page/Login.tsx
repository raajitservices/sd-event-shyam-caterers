import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/admin"), 1000);
    } catch (err: any) {
      setError(true);
      setMsg("❌ Login failed: " + err.message);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 overflow-hidden px-4">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-32 w-96 h-96 bg-fuchsia-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-30 animate-ping" />

      {/* Heading */}
      <header className="absolute top-8 text-center text-white select-none">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          SD Event & Shyam Catering
        </h1>
        <p className="text-sm md:text-lg font-medium mt-2">
          Crafting Memorable Moments
        </p>
        <span className="text-xs tracking-wider font-semibold">
          ADMIN PANEL
        </span>
      </header>

      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-20 px-8 py-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Admin Login</h2>
          {msg && (
            <p
              className={`text-sm font-medium transition-colors ${
                error ? "text-red-100" : "text-green-100"
              }`}
            >
              {msg}
            </p>
          )}
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/70 text-gray-800 placeholder-gray-600 focus:ring-4 focus:ring-fuchsia-300 focus:outline-none"
          required
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/70 text-gray-800 placeholder-gray-600 focus:ring-4 focus:ring-fuchsia-300 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-semibold tracking-wide hover:brightness-110 hover:shadow-xl active:scale-95 transition"
        >
          Login
        </button>

        <p className="text-center text-white/80 text-sm mt-6 select-none">
          &copy; {new Date().getFullYear()} SD Event & Shyam Catering
        </p>
      </form>
    </main>
  );
}
