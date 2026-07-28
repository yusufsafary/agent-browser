import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Control",
  description:
    "Block URL patterns, throttle network speed, and inspect traffic with Agent Browser network commands. Perfect for testing agents under slow connections or blocking trackers.",
  alternates: { canonical: "https://agentbrowser.fun/docs/network" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/network",
    title: "Agent Browser Network Control",
    description:
      "Block requests, throttle to slow-3g/4g, and inspect network activity. Full CDP-based network control for browser automation.",
  },
};

export default function NetworkPage() {
  return (
    <>
      <h1>Network Control</h1>
      <p>
        Block requests, throttle network speed, and inspect traffic using the
        network commands.
      </p>

      <h2>Blocking requests</h2>
      <CodeBlock
        code={`agent-browser network block "*.analytics.com"
agent-browser network block "*/ads/*"
agent-browser network block "https://tracker.example.com"`}
      />

      <h2>Unblocking</h2>
      <CodeBlock
        code={`agent-browser network unblock "*.analytics.com"
agent-browser network unblock --all`}
      />

      <h2>Throttling</h2>
      <CodeBlock
        code={`agent-browser network throttle slow-3g
agent-browser network throttle fast-3g
agent-browser network throttle 4g
agent-browser network throttle --reset`}
      />

      <h2>Viewing network activity</h2>
      <p>
        Network activity is visible in the Dashboard network panel, or you can
        stream it:
      </p>
      <CodeBlock code={`agent-browser stream enable\nagent-browser get cdp-url`} />
    </>
  );
}
