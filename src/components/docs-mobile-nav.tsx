"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DocsSidebar } from "./docs-sidebar";

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden border-b border-[#1A1A2E] bg-[#050508]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm text-[#9090A8]"
      >
        <span>Docs navigation</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-[#1A1A2E] bg-[#0D0D14]">
          <DocsSidebar />
        </div>
      )}
    </div>
  );
}
