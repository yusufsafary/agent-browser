import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Configuration" };

export default function ConfigurationPage() {
  return (
    <>
      <h1>Configuration</h1>
      <p>
        Create an <code>agent-browser.json</code> file to set persistent
        defaults instead of repeating flags on every command.
      </p>

      <h2>Config file locations</h2>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Location</th>
            <th>Scope</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 (lowest)</td>
            <td><code>~/.agent-browser/config.json</code></td>
            <td>User-level defaults</td>
          </tr>
          <tr>
            <td>2</td>
            <td><code>./agent-browser.json</code></td>
            <td>Project-level overrides</td>
          </tr>
          <tr>
            <td>3</td>
            <td><code>AGENT_BROWSER_*</code> env vars</td>
            <td>Override config values</td>
          </tr>
          <tr>
            <td>4 (highest)</td>
            <td>CLI flags</td>
            <td>Override everything</td>
          </tr>
        </tbody>
      </table>

      <h2>Example config</h2>
      <CodeBlock
        code={`{
  "$schema": "https://agentbrowser.dev/schema.json",
  "headed": true,
  "proxy": "http://localhost:8080",
  "profile": "./browser-data",
  "userAgent": "my-agent/1.0",
  "hideScrollbars": false,
  "ignoreHttpsErrors": true
}`}
        language="json"
        label="agent-browser.json"
      />

      <h2>All options</h2>
      <table>
        <thead>
          <tr>
            <th>Config Key</th>
            <th>CLI Flag</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["headed", "--headed", "boolean", "false"],
            ["headless", "--headless", "boolean", "true"],
            ["proxy", "--proxy <url>", "string", "—"],
            ["profile", "--profile <path>", "string", "—"],
            ["userAgent", "--user-agent <ua>", "string", "Chrome default"],
            ["hideScrollbars", "--hide-scrollbars", "boolean", "true"],
            ["ignoreHttpsErrors", "--ignore-https-errors", "boolean", "false"],
            ["timeout", "--timeout <ms>", "number", "30000"],
            ["viewport", "--viewport <WxH>", "string", "1280x720"],
            ["slowMo", "--slow-mo <ms>", "number", "0"],
          ].map(([key, flag, type, def]) => (
            <tr key={key}>
              <td><code>{key}</code></td>
              <td><code>{flag}</code></td>
              <td>{type}</td>
              <td>{def}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Environment variables</h2>
      <p>
        Each config key maps to an <code>AGENT_BROWSER_*</code> environment
        variable using SCREAMING_SNAKE_CASE:
      </p>
      <CodeBlock
        code={`AGENT_BROWSER_HEADED=true
AGENT_BROWSER_PROXY=http://localhost:8080
AGENT_BROWSER_PROFILE=./browser-data
AGENT_BROWSER_TIMEOUT=60000`}
        label=".env or shell"
      />

      <h2>Custom config path</h2>
      <CodeBlock
        code={`agent-browser --config ./ci-config.json open example.com
AGENT_BROWSER_CONFIG=./ci-config.json agent-browser open example.com`}
      />

      <h2>Session-level config</h2>
      <p>
        Flags passed at session open time apply to that session only and
        override the config file:
      </p>
      <CodeBlock
        code={`agent-browser open --headed --viewport 1920x1080 https://example.com
agent-browser open --proxy http://myproxy:8080 https://example.com`}
      />
    </>
  );
}
