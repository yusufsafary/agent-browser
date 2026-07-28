import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  Product: [
    { name: "Documentation", href: "/docs" },
    { name: "How To", href: "/how-to" },
    { name: "Changelog", href: "/docs/changelog" },
    { name: "Dashboard", href: "/dashboard" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "mailto:hello@agentbrowser.fun" },
  ],
  Legal: [
    { name: "Cookies", href: "/cookies" },
    { name: "Privacy", href: "/cookies#privacy" },
    { name: "Terms", href: "/cookies#terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1A1A2E] bg-[#050508] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" />
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Browser automation built for AI agents. Native Rust speed, ref-based targeting, Web3-native identity.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9090A8] hover:text-[#F0F0FF] transition-colors"
                      {...(link.href.startsWith("http") || link.href.startsWith("mailto")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#1A1A2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4B4B60]">
            &copy; {new Date().getFullYear()} Agent Browser. Built for the agentic web.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#4B4B60]">
            <span>Powered by</span>
            <span className="text-[#00E5CC] font-mono">Rust</span>
            <span>+</span>
            <span className="text-[#7C3AED] font-mono">Solana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
