"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { signOut } from "next-auth/react";

export function AdminTopBar() {
  return (
    <div className="flex items-center justify-between glass-panel px-8 py-4">
      <p className="text-sm text-slate-300">Admin Control Center</p>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageToggle />
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="btn-outline text-xs"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
