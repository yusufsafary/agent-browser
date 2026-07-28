import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To",
  description:
    "Step-by-step guides for common AGENT BROWSER tasks — login flows, scraping, form automation, and more.",
};

const guides = [
  {
    id: "basic-navigation",
    title: "Basic navigation and snapshots",
    level: "Beginner",
    color: "#10B981",
    steps: [
      {
        title: "Open a URL",
        code: `agent-browser open https://example.com`,
        note: "This launches Chrome and navigates to the URL. Chrome starts automatically on first use.",
      },
      {
        title: "Take a snapshot",
        code: `agent-browser snapshot`,
        note: "Returns a compact accessibility tree. Each element gets a ref like @e1, @e2 for deterministic targeting.",
      },
      {
        title: "Interact using refs",
        code: `agent-browser click @e3
agent-browser fill @e5 "hello@world.com"
agent-browser press Enter`,
        note: "Refs from the snapshot are stable within the same page load. Take a new snapshot after navigation.",
      },
      {
        title: "Take a screenshot",
        code: `agent-browser screenshot output.png`,
        note: "Saves the current viewport as a PNG. Full-page screenshots use --full flag.",
      },
      {
        title: "Close the session",
        code: `agent-browser close`,
        note: "Closes the active tab. Use --all to close all sessions.",
      },
    ],
  },
  {
    id: "login-flow",
    title: "Automating a login flow",
    level: "Intermediate",
    color: "#F97316",
    steps: [
      {
        title: "Navigate to login page",
        code: `agent-browser open https://app.example.com/login`,
        note: "Start with a fresh session for authentication flows.",
      },
      {
        title: "Fill credentials",
        code: `agent-browser snapshot
agent-browser fill @e2 "your@email.com"
agent-browser fill @e3 "yourpassword"`,
        note: "Always take a snapshot first so you have the correct refs for the current page.",
      },
      {
        title: "Submit the form",
        code: `agent-browser click @e4
# or
agent-browser press Enter`,
        note: "After clicking submit, wait for navigation before taking the next snapshot.",
      },
      {
        title: "Save session for reuse",
        code: `agent-browser open https://app.example.com/login --session myapp
# after login completes:
# session "myapp" now carries the auth cookies`,
        note: "Named sessions persist auth state across multiple agent runs.",
      },
    ],
  },
  {
    id: "data-extraction",
    title: "Extracting data from pages",
    level: "Intermediate",
    color: "#7C3AED",
    steps: [
      {
        title: "Read page as clean text",
        code: `agent-browser read https://example.com/article`,
        note: "Fetches and returns agent-readable text without launching Chrome. Great for articles and docs pages.",
      },
      {
        title: "Get specific element text",
        code: `agent-browser snapshot
agent-browser get text @e7`,
        note: "Returns the text content of a specific element identified by its ref.",
      },
      {
        title: "Get element attributes",
        code: `agent-browser get attr @e2 href
agent-browser get attr @e5 data-id`,
        note: "Useful for extracting URLs, data attributes, and other metadata.",
      },
      {
        title: "Run custom JavaScript",
        code: `agent-browser eval "document.querySelectorAll('h2').length"
agent-browser eval "window.__NEXT_DATA__"`,
        note: "Evaluate arbitrary JS in the page context and get the result back.",
      },
    ],
  },
  {
    id: "mcp-integration",
    title: "Using the MCP server",
    level: "Advanced",
    color: "#00E5CC",
    steps: [
      {
        title: "Start the MCP server",
        code: `agent-browser mcp`,
        note: "Starts an MCP stdio server that exposes all browser commands as tools to any MCP-compatible agent.",
      },
      {
        title: "Configure Claude Desktop",
        code: `{
  "mcpServers": {
    "agent-browser": {
      "command": "agent-browser",
      "args": ["mcp"]
    }
  }
}`,
        note: "Add this to your Claude Desktop config at ~/Library/Application Support/Claude/claude_desktop_config.json",
      },
      {
        title: "Configure Cursor",
        code: `{
  "mcp": {
    "servers": {
      "agent-browser": {
        "command": "agent-browser",
        "args": ["mcp"]
      }
    }
  }
}`,
        note: "Add to your .cursor/mcp.json or Cursor settings.",
      },
    ],
  },
];

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            How-to Guides
          </h1>
          <p className="text-base sm:text-lg text-[#9090A8] leading-relaxed">
            Step-by-step guides for the most common AGENT BROWSER tasks.
            Start with Basic Navigation if you are new.
          </p>
        </div>

        {/* Guide list nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {guides.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1A1A2E] bg-[#0D0D14] text-xs text-[#9090A8] hover:text-[#F0F0FF] hover:border-[#2A2A3E] transition-colors"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: g.color }}
              />
              {g.title}
            </a>
          ))}
        </div>

        {/* Guides */}
        <div className="space-y-16">
          {guides.map((guide) => (
            <section key={guide.id} id={guide.id}>
              <div className="flex items-center gap-3 mb-6">
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#F0F0FF]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {guide.title}
                </h2>
                <span
                  className="text-xs px-2 py-0.5 rounded-full border font-medium"
                  style={{
                    color: guide.color,
                    borderColor: `${guide.color}40`,
                    background: `${guide.color}10`,
                  }}
                >
                  {guide.level}
                </span>
              </div>

              <div className="space-y-6">
                {guide.steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div
                        className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-[#050508] flex-shrink-0"
                        style={{ background: guide.color, borderColor: guide.color }}
                      >
                        {i + 1}
                      </div>
                      {i < guide.steps.length - 1 && (
                        <div
                          className="w-px flex-1 mt-2"
                          style={{ background: `${guide.color}30` }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <h3
                        className="font-semibold text-[#F0F0FF] text-sm mb-2"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {step.title}
                      </h3>
                      <CodeBlock code={step.code} />
                      {step.note && (
                        <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Docs link */}
        <div className="mt-16 p-6 rounded-xl border border-[#1A1A2E] bg-[#0D0D14] text-center">
          <p className="text-[#9090A8] text-sm mb-4">
            Looking for the full command reference or configuration options?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/docs/commands"
              className="w-full sm:w-auto px-5 py-2 text-sm bg-[#00E5CC] text-[#050508] font-semibold rounded-lg hover:bg-[#00c9b3] transition-all"
            >
              Command Reference
            </a>
            <a
              href="/docs/configuration"
              className="w-full sm:w-auto px-5 py-2 text-sm border border-[#1A1A2E] text-[#F0F0FF] rounded-lg hover:border-[#2A2A3E] transition-all"
            >
              Configuration
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
