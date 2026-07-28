import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Server",
  description:
    "Agent Browser includes a built-in MCP stdio server. Configure it with Claude Desktop, Cursor, or any MCP client to give your agent direct browser control via typed tools.",
  alternates: { canonical: "https://agentbrowser.fun/docs/mcp" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/mcp",
    title: "Agent Browser MCP Server",
    description:
      "Configure Agent Browser as an MCP server for Claude Desktop, Cursor, or any MCP-compatible client. All browser commands exposed as typed MCP tools.",
  },
};

export default function McpPage() {
  return (
    <>
      <h1>MCP Server</h1>
      <p>
        AGENT BROWSER includes a built-in MCP (Model Context Protocol) stdio
        server that exposes all browser commands as tools to any MCP-compatible
        AI agent.
      </p>

      <h2>Start the server</h2>
      <CodeBlock code={`agent-browser mcp`} />

      <h2>Configure Claude Desktop</h2>
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
        label="~/Library/Application Support/Claude/claude_desktop_config.json"
      />

      <h2>Configure Cursor</h2>
      <CodeBlock
        code={`{
  "mcp": {
    "servers": {
      "agent-browser": {
        "command": "agent-browser",
        "args": ["mcp"]
      }
    }
  }
}`}
        language="json"
        label=".cursor/mcp.json"
      />

      <h2>Configure any MCP client</h2>
      <p>
        The MCP server uses stdio transport. Point your client at the
        <code>agent-browser mcp</code> command. All browser commands are
        exposed as individual MCP tools with typed parameters.
      </p>

      <h2>Available tools</h2>
      <p>
        The MCP server exposes one tool per browser command:{" "}
        <code>browser_open</code>, <code>browser_snapshot</code>,{" "}
        <code>browser_click</code>, <code>browser_fill</code>,{" "}
        <code>browser_screenshot</code>, and all other commands. The AI agent
        calls them directly; no shell access required on the agent side.
      </p>
    </>
  );
}
