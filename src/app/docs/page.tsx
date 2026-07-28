import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Agent Browser documentation — browser automation CLI for agents and LLMs. Covers installation, 50+ commands, sessions, MCP server, snapshots, recording, and network control.",
  alternates: { canonical: "https://agentbrowser.fun/docs" },
  openGraph: {
    url: "https://agentbrowser.fun/docs",
    title: "Agent Browser Documentation",
    description:
      "Full documentation for Agent Browser. Installation, commands, sessions, MCP server, snapshots, recording, Docker, Vercel, and more.",
  },
};

export default function DocsPage() {
  return (
    <>
      <h1>AGENT BROWSER</h1>
      <p>
        Browser automation CLI designed for AI agents. Compact text output
        minimizes context usage. 100% native Rust.
      </p>

      <CodeBlock
        code={`npm install -g agent-browser      # all platforms
brew install agent-browser        # macOS
agent-browser install             # Download Chrome (first time)

# or try without installing
npx agent-browser open example.com`}
        label="Quick install"
      />

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Agent-first:</strong> Compact text output uses fewer tokens
          than JSON, designed for AI context efficiency.
        </li>
        <li>
          <strong>Ref-based:</strong> Snapshot returns accessibility tree with
          refs for deterministic element selection.
        </li>
        <li>
          <strong>Complete:</strong> 50+ commands for navigation, forms,
          screenshots, network, storage, files, tabs, frames, and debugging.
        </li>
        <li>
          <strong>Observable:</strong> Video recording, streaming, debugging,
          profiler, and diffing tools are built in.
        </li>
        <li>
          <strong>Stateful:</strong> Sessions, profiles, auth state, cookies,
          storage, proxy, and security controls support long-running agents.
        </li>
        <li>
          <strong>Cross-platform:</strong> macOS, Linux, and Windows with
          native binaries.
        </li>
      </ul>

      <h2>Example</h2>
      <CodeBlock
        code={`# Navigate and get snapshot
agent-browser open example.com
agent-browser snapshot -i

# Output:
# - heading "Example Domain" [ref=e1]
# - link "More information..." [ref=e2]

# Interact using refs
agent-browser click @e2
agent-browser screenshot page.png
agent-browser close`}
        label="Typical agent flow"
      />

      <h2>Why refs?</h2>
      <p>
        The <code>snapshot</code> command returns a compact accessibility tree
        where each element has a unique ref like <code>@e1</code>,{" "}
        <code>@e2</code>. This provides:
      </p>
      <ul>
        <li>
          <strong>Context-efficient:</strong> Text output uses ~200-400 tokens
          vs ~3000-5000 for full DOM.
        </li>
        <li>
          <strong>Deterministic:</strong> Ref points to exact element from
          snapshot.
        </li>
        <li>
          <strong>Fast:</strong> No DOM re-query needed.
        </li>
        <li>
          <strong>AI-friendly:</strong> LLMs parse text output naturally.
        </li>
      </ul>

      <h2>Architecture</h2>
      <p>Client-daemon architecture for optimal performance:</p>
      <ol>
        <li>
          <strong>Rust CLI:</strong> Parses commands, communicates with daemon.
        </li>
        <li>
          <strong>Native Daemon:</strong> Pure Rust daemon using direct CDP,
          manages Chrome via Chrome DevTools Protocol.
        </li>
      </ol>
      <p>
        The daemon starts automatically and persists between commands.
      </p>

      <h2>Works with</h2>
      <p>
        Claude Code, Cursor, GitHub Copilot, OpenAI Codex, Google Gemini,
        opencode, and any agent that can run shell commands.
      </p>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/installation">Installation guide</Link> - all
          install methods
        </li>
        <li>
          <Link href="/docs/commands">Command reference</Link> - complete list
          of all 50+ commands
        </li>
        <li>
          <Link href="/docs/configuration">Configuration</Link> - persistent
          config file options
        </li>
        <li>
          <Link href="/how-to">How-to guides</Link> - step-by-step recipes
        </li>
      </ul>
    </>
  );
}
