"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function AdminLoginPage() {
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/admin"
    });
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="admin-card w-full max-w-md">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in to manage MeshkinHost content.
        </p>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <input name="email" type="email" className="input" placeholder="Email" required />
          <input name="password" type="password" className="input" placeholder="Password" required />
          <button className="button-primary" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
