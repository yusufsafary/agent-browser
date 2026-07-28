import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Install Agent Browser on macOS, Linux, or Windows. Supports npm global install, Homebrew, Cargo, and Docker. Download Chrome for Testing with a single command.",
  alternates: { canonical: "https://agentbrowser.fun/docs/installation" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/installation",
    title: "Install Agent Browser",
    description:
      "Install Agent Browser via npm, Homebrew, Cargo, or Docker. Works on macOS, Linux, and Windows.",
  },
};

export default function InstallationPage() {
  return (
    <>
      <h1>Installation</h1>

      <h2>Global installation (recommended)</h2>
      <p>
        Installs the native Rust binary for maximum performance:
      </p>
      <CodeBlock code={`npm install -g agent-browser
agent-browser install  # Download Chrome from Chrome for Testing (first time)`} />
      <p>
        This is the fastest option - commands run through the native Rust CLI
        directly with sub-millisecond parsing overhead.
      </p>

      <h2>Quick start (no install)</h2>
      <CodeBlock code={`npx agent-browser install   # Download Chrome (first time only)
npx agent-browser open example.com`} />

      <h2>Project installation (local dependency)</h2>
      <p>
        For projects that want to pin the version in <code>package.json</code>:
      </p>
      <CodeBlock code={`npm install agent-browser
npx agent-browser install  # Download Chrome (first time)`} />

      <h2>Homebrew (macOS)</h2>
      <CodeBlock code={`brew install agent-browser
agent-browser install  # Download Chrome (first time)`} />

      <h2>Cargo (Rust)</h2>
      <CodeBlock code={`cargo install agent-browser
agent-browser install  # Download Chrome (first time)`} />
      <p>
        Compiles from source (~2-3 min). Requires Node.js 24+, pnpm 11+, and
        the Rust toolchain from{" "}
        <a href="https://rustup.rs" target="_blank" rel="noopener noreferrer">
          rustup.rs
        </a>
        .
      </p>

      <h2>From source</h2>
      <p>Download the latest release tarball from the <a href="https://agentbrowser.fun/docs/changelog" rel="noopener noreferrer">changelog page</a>, then build:</p>
      <CodeBlock code={`tar -xzf agent-browser-latest.tar.gz
cd agent-browser
pnpm install
pnpm build
pnpm build:native
./bin/agent-browser install
pnpm link --global`} />

      <h2>Linux dependencies</h2>
      <p>On Linux, install system dependencies:</p>
      <CodeBlock code={`agent-browser install --with-deps`} />
      <p>
        This exits nonzero if the package manager cannot install every required
        browser library.
      </p>

      <h2>Updating</h2>
      <p>Upgrade to the latest version:</p>
      <CodeBlock code={`agent-browser upgrade`} />
      <p>
        Detects your installation method (npm, Homebrew, or Cargo) and runs the
        appropriate update command automatically.
      </p>

      <h2>Doctor</h2>
      <p>
        <code>doctor</code> diagnoses your install and auto-cleans stale daemon
        files:
      </p>
      <CodeBlock code={`agent-browser doctor                     # Full diagnosis
agent-browser doctor --offline --quick   # Local-only, fastest (~1s)
agent-browser doctor --fix               # Also run destructive repairs
agent-browser doctor --json              # Structured output`} />

      <h2>Requirements</h2>
      <ul>
        <li>
          <strong>Chrome</strong> - Run{" "}
          <code>agent-browser install</code> to download Chrome from Chrome for
          Testing.
        </li>
        <li>
          <strong>Node.js 24+ and pnpm 11+</strong> - Only needed when
          building from source.
        </li>
        <li>
          <strong>Rust</strong> - Only needed when building from source.
        </li>
      </ul>

      <p>
        Next:{" "}
        <Link href="/docs/commands">Command reference</Link>
      </p>
    </>
  );
}
