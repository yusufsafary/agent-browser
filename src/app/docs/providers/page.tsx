import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browser Providers",
  description:
    "Agent Browser supports local Chrome, Browserbase, Browserless, and Amazon Bedrock AgentCore as browser backends. Switch providers with a single flag or config key.",
  alternates: { canonical: "https://agentbrowser.fun/docs/providers" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/providers",
    title: "Agent Browser — Cloud Providers",
    description:
      "Use local Chrome or connect to Browserbase, Browserless, or AWS AgentCore. Switch with --provider flag or config key.",
  },
};

export default function ProvidersPage() {
  return (
    <>
      <h1>Browser Providers</h1>
      <p>
        AGENT BROWSER supports multiple browser backends for running
        automations at scale in the cloud.
      </p>

      <h2>Local (default)</h2>
      <p>
        The default provider runs Chrome locally on your machine. No additional
        configuration required.
      </p>

      <h2>Browserbase</h2>
      <p>
        Run browsers in Browserbase cloud infrastructure. Set your API key:
      </p>
      <pre><code>{`BROWSERBASE_API_KEY=your-key
BROWSERBASE_PROJECT_ID=your-project`}</code></pre>

      <h2>Browserless</h2>
      <p>Browserless cloud or self-hosted Chrome service.</p>
      <pre><code>{`BROWSERLESS_API_KEY=your-key
# or self-hosted:
BROWSERLESS_URL=http://localhost:3000`}</code></pre>

      <h2>AgentCore (AWS)</h2>
      <p>Amazon Bedrock AgentCore browser tool integration.</p>
      <pre><code>{`AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret`}</code></pre>

      <h2>Switching providers</h2>
      <p>
        Use the <code>--provider</code> flag or the <code>provider</code>{" "}
        config key:
      </p>
      <pre><code>{`agent-browser open --provider browserbase https://example.com
agent-browser open --provider browserless https://example.com`}</code></pre>
    </>
  );
}
