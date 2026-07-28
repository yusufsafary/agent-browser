import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Agent Browser release history. v1.0 — native Rust CLI, Solana wallet auth, 50+ commands, MCP server, live dashboard, video recording, and Vercel sandbox integration.",
  alternates: { canonical: "https://agentbrowser.fun/docs/changelog" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/changelog",
    title: "Agent Browser Changelog",
    description:
      "Release notes for Agent Browser. Track new features, fixes, and breaking changes across all versions.",
  },
};

const releases = [
  {
    version: "1.0.0",
    date: "July 2025",
    changes: [
      { type: "new", text: "Initial public release with native Rust CLI" },
      { type: "new", text: "Solana wallet multichain authentication (Phantom, Solflare, Backpack)" },
      { type: "new", text: "Live dashboard with session viewer, terminal, and activity feed" },
      { type: "new", text: "50+ commands covering navigation, forms, screenshots, network, storage" },
      { type: "new", text: "MCP stdio server for Claude Desktop, Cursor, and all MCP clients" },
      { type: "new", text: "Video recording and streaming support" },
      { type: "new", text: "Full Vercel sandbox integration via @agent-browser/sandbox" },
      { type: "new", text: "Cross-platform: macOS (ARM64, x64), Linux (ARM64, x64), Windows (x64)" },
    ],
  },
];

const typeColors: Record<string, string> = {
  new: "#10B981",
  fix: "#F97316",
  break: "#EF4444",
  improve: "#7C3AED",
};

export default function ChangelogPage() {
  return (
    <>
      <h1>Changelog</h1>
      <p>All notable changes to AGENT BROWSER are documented here.</p>

      {releases.map((release) => (
        <section key={release.version} className="mb-10">
          <div className="flex items-baseline gap-3 mb-4">
            <h2 className="!mt-0">{release.version}</h2>
            <span className="text-sm text-[#6B7280]">{release.date}</span>
          </div>
          <ul className="space-y-1.5">
            {release.changes.map((change, i) => (
              <li key={i} className="flex items-start gap-2 !mb-0">
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider flex-shrink-0 mt-0.5"
                  style={{
                    color: typeColors[change.type],
                    background: `${typeColors[change.type]}18`,
                  }}
                >
                  {change.type}
                </span>
                <span className="text-[#9090A8] text-sm">{change.text}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
