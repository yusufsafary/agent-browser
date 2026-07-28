import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commands Reference",
  description:
    "Complete reference for all 50+ Agent Browser commands — navigation, interaction, screenshots, snapshots, network control, storage, tabs, iframes, and debugging.",
  alternates: { canonical: "https://agentbrowser.fun/docs/commands" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/commands",
    title: "Agent Browser Command Reference",
    description:
      "All 50+ Agent Browser commands: open, click, fill, snapshot, screenshot, network block, storage, tabs, and more.",
  },
};

export default function CommandsPage() {
  return (
    <>
      <h1>Commands</h1>
      <p>
        Complete reference for all AGENT BROWSER commands. All commands operate
        on the active browser session unless otherwise noted.
      </p>

      <h2>Core navigation</h2>
      <CodeBlock code={`agent-browser open                    # Launch browser (no navigation)
agent-browser open <url>              # Launch + navigate to URL
agent-browser read [url]              # Fetch agent-readable text
agent-browser click <sel>             # Click element
agent-browser dblclick <sel>          # Double-click element
agent-browser focus <sel>             # Focus element
agent-browser type <sel> <text>       # Type into element
agent-browser fill <sel> <text>       # Clear and fill
agent-browser press <key>             # Press key (Enter, Tab, Control+a)
agent-browser hover <sel>             # Hover over element
agent-browser select <sel> <value>    # Select dropdown option
agent-browser check <sel>             # Check checkbox/radio
agent-browser uncheck <sel>           # Uncheck checkbox
agent-browser scroll <sel> <dir>      # Scroll element (up/down/left/right)
agent-browser drag <src> <dest>       # Drag and drop`} label="Navigation & interaction" />

      <h2>Capturing state</h2>
      <CodeBlock code={`agent-browser screenshot [path]       # Screenshot viewport (PNG)
agent-browser screenshot --full       # Full-page screenshot
agent-browser pdf <path>              # Save page as PDF
agent-browser snapshot                # Accessibility tree with refs
agent-browser snapshot -i             # Interactive compact snapshot
agent-browser eval <js>               # Run JavaScript
agent-browser connect <port|url>      # Connect to browser via CDP
agent-browser stream enable           # Start runtime WebSocket streaming
agent-browser stream status           # Show streaming state
agent-browser stream disable          # Stop streaming
agent-browser close                   # Close browser
agent-browser close --all             # Close all active sessions
agent-browser mcp                     # Start MCP stdio server`} label="Capture & control" />

      <h2>Get info</h2>
      <CodeBlock code={`agent-browser get text <sel>          # Get text content
agent-browser get html <sel>          # Get innerHTML
agent-browser get value <sel>         # Get input value
agent-browser get attr <sel> <attr>   # Get attribute
agent-browser get title               # Get page title
agent-browser get url                 # Get current URL
agent-browser get cdp-url             # Get CDP WebSocket URL
agent-browser get count <sel>         # Count matching elements
agent-browser get box <sel>           # Get bounding box
agent-browser get styles <sel>        # Get computed styles`} label="Get information" />

      <h2>Read agent-friendly text</h2>
      <CodeBlock code={`agent-browser read
agent-browser read https://example.com/article
agent-browser read https://example.com/article --filter overview
agent-browser read https://example.com/article --outline
agent-browser read https://docs.example.com --llms index --filter auth
agent-browser read https://docs.example.com --llms full --filter auth
agent-browser read example.com/article --require-md
agent-browser read https://example.com/article --json`} label="Read command options" />

      <h2>Check state</h2>
      <CodeBlock code={`agent-browser is visible <sel>        # Check if visible
agent-browser is enabled <sel>        # Check if enabled
agent-browser is checked <sel>        # Check if checked`} label="State checks" />

      <h2>Find elements (semantic locators)</h2>
      <CodeBlock code={`agent-browser find role <role> <action> [value]       # By ARIA role
agent-browser find text <text> <action>               # By text content
agent-browser find label <label> <action> [value]     # By label
agent-browser find placeholder <ph> <action> [value]  # By placeholder
agent-browser find alt <text> <action>                # By alt text
agent-browser find title <text> <action>              # By title attr
agent-browser find testid <id> <action> [value]       # By data-testid
agent-browser find first <sel> <action> [value]       # First match`} label="Semantic element finders" />

      <h2>Network</h2>
      <CodeBlock code={`agent-browser network block <pattern>       # Block URL pattern
agent-browser network unblock <pattern>     # Unblock URL pattern
agent-browser network unblock --all         # Remove all blocks
agent-browser network throttle slow-3g      # Throttle network
agent-browser network throttle --reset      # Remove throttle`} label="Network control" />

      <h2>Storage</h2>
      <CodeBlock code={`agent-browser storage get local <key>       # Get localStorage value
agent-browser storage set local <key> <val> # Set localStorage value
agent-browser storage remove local <key>    # Remove localStorage key
agent-browser storage clear local          # Clear all localStorage
agent-browser storage get session <key>    # Same for sessionStorage
agent-browser storage get cookie <name>    # Get cookie value
agent-browser storage set cookie <n> <v>   # Set cookie
agent-browser storage remove cookie <name> # Delete cookie`} label="Storage commands" />

      <h2>Tabs</h2>
      <CodeBlock code={`agent-browser tab list                  # List open tabs
agent-browser tab new [url]             # Open new tab
agent-browser tab switch <index|title>  # Switch active tab
agent-browser tab close [index]         # Close a tab`} label="Tab management" />

      <h2>Selectors</h2>
      <p>
        All commands accept the following selector formats:
      </p>
      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Example</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ref</td>
            <td><code>@e1</code></td>
            <td>From snapshot. Preferred for agents.</td>
          </tr>
          <tr>
            <td>CSS selector</td>
            <td><code>#submit</code></td>
            <td>Standard CSS. Works with any valid selector.</td>
          </tr>
          <tr>
            <td>XPath</td>
            <td><code>//button[@type=&#39;submit&#39;]</code></td>
            <td>Full XPath support.</td>
          </tr>
          <tr>
            <td>Text</td>
            <td><code>text=Submit</code></td>
            <td>Matches by visible text content.</td>
          </tr>
        </tbody>
      </table>

      <p>
        Next: <Link href="/docs/configuration">Configuration</Link>
      </p>
    </>
  );
}
