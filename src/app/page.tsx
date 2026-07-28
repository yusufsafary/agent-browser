import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import {
  Zap,
  Shield,
  Globe,
  Terminal,
  Layers,
  Activity,
  ChevronRight,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agent Browser | Browser Automation CLI for Agents & LLMs",
  description:
    "Agent Browser is a native Rust CLI for browser automation. 50+ commands, ref-based snapshots, MCP server, Solana wallet auth. Works with Claude Code, Cursor, and any shell-capable agent.",
  alternates: { canonical: "https://agentbrowser.fun" },
  openGraph: {
    url: "https://agentbrowser.fun",
    title: "Agent Browser | Browser Automation CLI for Agents & LLMs",
    description:
      "Native Rust CLI for browser automation. 50+ commands, ref-based snapshots, MCP server, live dashboard. Works with Claude, Cursor, and any shell-capable agent.",
  },
};

const features = [
  {
    icon: Zap,
    title: "Native Rust Speed",
    desc: "Sub-millisecond CLI parsing. Pure Rust daemon communicates directly over CDP. No Playwright, no Node overhead.",
    color: "#F97316",
  },
  {
    icon: Terminal,
    title: "Agent-First Design",
    desc: "Compact text output minimizes LLM token usage. Ref-based snapshots give AI agents deterministic element targeting.",
    color: "#00E5CC",
  },
  {
    icon: Shield,
    title: "Multichain Identity",
    desc: "Authenticate with Solana wallets (Phantom, Solflare, Backpack) or classic credentials. Web3-native from day one.",
    color: "#7C3AED",
  },
  {
    icon: Globe,
    title: "50+ Commands",
    desc: "Navigation, forms, screenshots, network intercept, storage, files, tabs, iframes, and debugging all built in.",
    color: "#00E5CC",
  },
  {
    icon: Layers,
    title: "Live Dashboard",
    desc: "Real-time session viewer with chat panel, activity feed, console, network inspector, and storage explorer.",
    color: "#7C3AED",
  },
  {
    icon: Activity,
    title: "Full Observability",
    desc: "Video recording, streaming, profiler, DOM diffing, and network control with zero configuration required.",
    color: "#F97316",
  },
];

const installSteps = [
  {
    label: "Install globally",
    code: "npm install -g agent-browser",
  },
  {
    label: "Download Chrome runtime",
    code: "agent-browser install",
  },
  {
    label: "Start automating",
    code: `agent-browser open example.com
agent-browser snapshot
agent-browser click @e1
agent-browser screenshot page.png`,
  },
];

const commandHighlights = [
  "agent-browser open example.com",
  "agent-browser snapshot -i",
  "agent-browser click @e2",
  'agent-browser fill @e3 "hello@world.com"',
  "agent-browser screenshot result.png",
  "agent-browser close",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden flex-1">
        {/* Background effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px]"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,229,204,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.025) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00E5CC30] bg-[#00E5CC08] text-xs font-mono text-[#00E5CC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5CC] animate-pulse" />
              v1.0 - Now with Solana wallet auth
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-[#F0F0FF]">Browser automation</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00E5CC 0%, #7C3AED 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built for AI agents
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#9090A8] text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            The fastest CLI browser automation platform on the planet. Native
            Rust performance, ref-based element targeting, and Web3-native
            identity. From Claude Code to Cursor to any shell-capable agent.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link
              href="/docs/installation"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00E5CC] text-[#050508] font-semibold rounded-xl hover:bg-[#00c9b3] transition-all hover:scale-[1.02] text-sm"
            >
              <Download className="h-4 w-4" />
              Get Started Free
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-[#1A1A2E] text-[#F0F0FF] rounded-xl hover:border-[#00E5CC40] hover:bg-[#00E5CC05] transition-all text-sm"
            >
              Read the Docs
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Terminal demo */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[#1A1A2E] bg-[#0D0D14] shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A2E] bg-[#0A0A12]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
                </div>
                <span className="text-xs text-[#4B4B60] font-mono">
                  agent-browser
                </span>
                <span className="w-14" />
              </div>
              {/* Terminal lines */}
              <div className="p-5 font-mono text-sm space-y-1.5">
                {commandHighlights.map((cmd, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#7C3AED] select-none">$</span>
                    <span className="text-[#00E5CC]">{cmd}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#7C3AED] select-none">$</span>
                  <span className="w-2 h-4 bg-[#00E5CC] animate-pulse opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install section */}
      <section className="py-16 sm:py-20 border-t border-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F0F0FF] mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Up and running in 60 seconds
            </h2>
            <p className="text-[#9090A8] text-sm sm:text-base">
              No configuration needed. No Playwright. No flaky setup.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {installSteps.map((step, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#00E5CC10] border border-[#00E5CC30] text-[#00E5CC] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-xs text-[#6B7280] font-medium uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>
                <CodeBlock code={step.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 border-t border-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F0F0FF] mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Everything your agent needs
            </h2>
            <p className="text-[#9090A8] text-sm sm:text-base max-w-xl mx-auto">
              Designed from scratch for agents running in production. Not a Puppeteer wrapper. Not a headless patch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-5 rounded-xl border border-[#1A1A2E] bg-[#0D0D14] hover:border-[#2A2A3E] transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}15` }}
                  >
                    <Icon
                      className="h-4.5 w-4.5"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-[#F0F0FF] mb-2 text-sm"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#9090A8] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Works with */}
      <section className="py-16 sm:py-20 border-t border-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-[#4B4B60] uppercase tracking-widest mb-8 font-medium">
            Runs everywhere your agent runs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              "Claude Code",
              "Cursor",
              "GitHub Copilot",
              "OpenAI Codex",
              "Google Gemini",
              "opencode",
            ].map((name) => (
              <span
                key={name}
                className="text-sm text-[#6B7280] font-medium px-4 py-2 rounded-lg border border-[#1A1A2E] bg-[#0D0D14]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 border-t border-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-2xl border border-[#1A1A2E] bg-gradient-to-br from-[#0D0D14] to-[#0A0A12] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,229,204,0.06) 0%, transparent 60%)",
              }}
            />
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#F0F0FF] mb-3 relative"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ready to automate at agent speed?
            </h2>
            <p className="text-[#9090A8] mb-8 relative text-sm sm:text-base">
              Install in 60 seconds. Full browser control — navigation, forms, screenshots, network, storage, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative">
              <Link
                href="/login"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#00E5CC] text-[#050508] font-semibold rounded-xl hover:bg-[#00c9b3] transition-all text-sm"
              >
                Create Free Account
              </Link>
              <Link
                href="/docs"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-[#1A1A2E] text-[#F0F0FF] rounded-xl hover:border-[#00E5CC40] transition-all text-sm"
              >
                Browse Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
