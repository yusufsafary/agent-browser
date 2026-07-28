import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Quick Start" };

export default function QuickStartPage() {
  return (
    <>
      <h1>Quick Start</h1>
      <p>
        Get AGENT BROWSER running and automate your first page in under 5
        minutes.
      </p>

      <h2>Step 1: Install</h2>
      <CodeBlock code={`npm install -g agent-browser`} />

      <h2>Step 2: Download Chrome</h2>
      <CodeBlock code={`agent-browser install`} />
      <p>
        This downloads Chrome from Chrome for Testing. You only need to do
        this once.
      </p>

      <h2>Step 3: Run your first automation</h2>
      <CodeBlock
        code={`# Open a page
agent-browser open example.com

# Get a snapshot of the page
agent-browser snapshot

# Output:
# - heading "Example Domain" [ref=e1]
# - paragraph [ref=e2]
# - link "More information..." [ref=e3]

# Click the link using its ref
agent-browser click @e3

# Take a screenshot
agent-browser screenshot result.png

# Close the browser
agent-browser close`}
        label="First automation"
      />

      <h2>Step 4: Use in an AI agent</h2>
      <p>
        AGENT BROWSER works with any agent that can run shell commands. For
        Claude Code, Cursor, or similar:
      </p>
      <CodeBlock
        code={`# In your agent's system prompt or tool configuration:
# The agent can run any agent-browser command as a shell command.
# Start by opening a URL, taking a snapshot, then interacting with elements.

agent-browser open https://yourapp.com
agent-browser snapshot
# Let the agent decide what to do with the snapshot output`}
        label="Agent workflow"
      />

      <h2>Step 5: Set up MCP (optional)</h2>
      <p>
        For the best experience with Claude Desktop or Cursor, configure the
        MCP server:
      </p>
      <CodeBlock
        code={`{
  "mcpServers": {
    "agent-browser": {
      "command": "agent-browser",
      "args": ["mcp"]
    }
  }
}`}
        language="json"
        label="Claude Desktop config"
      />

      <p>
        Next steps:
      </p>
      <ul>
        <li>
          <Link href="/docs/commands">Full command reference</Link>
        </li>
        <li>
          <Link href="/how-to">How-to guides</Link> for common patterns
        </li>
        <li>
          <Link href="/docs/configuration">Configuration options</Link>
        </li>
      </ul>
    </>
  );
}
