"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Logo } from "./logo";
import { mainNav } from "@/lib/nav";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";

export function Header() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1A2E] bg-[#050508]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <Logo size="sm" />

        {/* Center: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-[#9090A8] hover:text-[#F0F0FF] transition-colors rounded-md hover:bg-[#1A1A2E]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#0D0D14] border border-[#1A1A2E] rounded-lg text-[#00E5CC] hover:border-[#00E5CC] transition-colors"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="p-1.5 text-[#6B7280] hover:text-[#EF4444] transition-colors rounded-md hover:bg-[#1A1A2E]"
                title="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-1.5 text-sm font-medium bg-[#00E5CC] text-[#050508] rounded-lg hover:bg-[#00c9b3] transition-colors"
            >
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden p-2 text-[#9090A8] hover:text-[#F0F0FF] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1A1A2E] bg-[#0D0D14] px-4 py-4 space-y-1">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm text-[#9090A8] hover:text-[#F0F0FF] hover:bg-[#1A1A2E] rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-[#1A1A2E]">
            {session ? (
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-[#00E5CC] hover:bg-[#1A1A2E] rounded-md transition-colors"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <button
                  onClick={() => { signOut({ callbackUrl: "/" }); setMobileOpen(false); }}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-[#EF4444] hover:bg-[#1A1A2E] rounded-md transition-colors w-full"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium bg-[#00E5CC] text-[#050508] rounded-lg text-center hover:bg-[#00c9b3] transition-colors"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
