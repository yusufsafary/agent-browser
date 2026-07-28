"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 pb-8">
      {docsNav.map((section) => (
        <div key={section.title}>
          <h4 className="text-[11px] font-semibold text-[#4B4B60] uppercase tracking-widest mb-2 px-2">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? "text-[#00E5CC] bg-[#00E5CC10] font-medium"
                        : "text-[#9090A8] hover:text-[#F0F0FF] hover:bg-[#1A1A2E]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
