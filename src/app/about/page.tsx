import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Terminal, Zap, Shield, Globe, Github } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About AGENT BROWSER — the next-generation browser automation platform built exclusively for AI agents.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1A2E] bg-[#0D0D14] text-xs text-[#6B7280] mb-6">
            <Terminal className="h-3 w-3 text-[#00E5CC]" />
            About AGENT BROWSER
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built for the agentic web.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00E5CC, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Not as an afterthought.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#9090A8] leading-relaxed">
            AGENT BROWSER started from a simple observation: every major
            browser automation tool was built for humans first, then
            retrofitted for AI. We built ours the other way around.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12 p-6 rounded-xl border border-[#1A1A2E] bg-[#0D0D14]">
          <h2
            className="text-lg font-semibold text-[#F0F0FF] mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our mission
          </h2>
          <p className="text-[#9090A8] leading-relaxed mb-4">
            AI agents are becoming the primary operators of browsers. They
            navigate forms, extract data, interact with complex web apps, and
            automate workflows at scale. The tools they use need to be
            designed for them — compact output, deterministic targeting,
            minimal token overhead, and rock-solid reliability.
          </p>
          <p className="text-[#9090A8] leading-relaxed">
            AGENT BROWSER is a native Rust CLI that communicates directly
            with Chrome over CDP. No Playwright wrapper. No Puppeteer layer.
            No Node overhead in the hot path. Just a fast, predictable
            interface between your agent and the browser.
          </p>
        </section>

        {/* Principles */}
        <section className="mb-12">
          <h2
            className="text-lg font-semibold text-[#F0F0FF] mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Performance first",
                color: "#F97316",
                desc: "Sub-millisecond CLI parsing. The daemon starts automatically and persists between commands to eliminate cold-start overhead.",
              },
              {
                icon: Terminal,
                title: "Compact output",
                color: "#00E5CC",
                desc: "Ref-based snapshots give agents 200-400 tokens of context instead of 3000-5000 for full DOM. Every byte counts at scale.",
              },
              {
                icon: Shield,
                title: "Web3-native identity",
                color: "#7C3AED",
                desc: "Authenticate with Solana wallets across multiple chains. Your sessions are yours — no centralized credential storage.",
              },
              {
                icon: Globe,
                title: "Open by default",
                color: "#10B981",
                desc: "The core tool is open source. We believe the infrastructure AI agents rely on should be inspectable and forkable.",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 rounded-xl border border-[#1A1A2E] bg-[#0D0D14]"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${p.color}18` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: p.color }} />
                  </div>
                  <h3
                    className="font-semibold text-[#F0F0FF] text-sm mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#9090A8] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech */}
        <section className="mb-12 p-6 rounded-xl border border-[#1A1A2E] bg-[#0D0D14]">
          <h2
            className="text-lg font-semibold text-[#F0F0FF] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            How it works
          </h2>
          <div className="space-y-4 text-sm text-[#9090A8] leading-relaxed">
            <p>
              AGENT BROWSER uses a client-daemon architecture. The Rust CLI
              parses your commands and forwards them to a persistent native
              daemon that owns the Chrome session. The daemon communicates
              directly over Chrome DevTools Protocol.
            </p>
            <p>
              The daemon starts automatically on first use and keeps running
              between commands. This means repeated invocations like{" "}
              <code>snapshot</code>, <code>click</code>, and{" "}
              <code>fill</code> don&apos;t pay a process startup cost every
              time.
            </p>
            <p>
              Sessions persist across multiple commands, carry full browser
              state (cookies, storage, auth tokens), and can be named and
              reused across agent runs.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-xl border border-[#1A1A2E] bg-gradient-to-br from-[#0D0D14] to-[#0A0A12]">
          <h2
            className="text-xl font-bold text-[#F0F0FF] mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Join the project
          </h2>
          <p className="text-[#9090A8] text-sm mb-6">
            AGENT BROWSER is open source. Explore the code, open issues, and
            contribute on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/yusufsafary/agent-browser"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F0F0FF] text-[#050508] font-semibold rounded-xl hover:bg-[#D0D0E8] transition-all text-sm"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <Link
              href="/docs"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#1A1A2E] text-[#F0F0FF] rounded-xl hover:border-[#00E5CC40] transition-all text-sm"
            >
              Read the Docs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
