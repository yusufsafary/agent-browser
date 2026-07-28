import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Agent Browser sessions carry independent browser state — cookies, localStorage, auth tokens, and open tabs. Use named sessions and profiles to isolate accounts.",
  alternates: { canonical: "https://agentbrowser.fun/docs/sessions" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/sessions",
    title: "Agent Browser Sessions",
    description:
      "Manage named browser sessions and persistent profiles. Each session carries its own cookies, storage, and auth state.",
  },
};

export default function SessionsPage() {
  return (
    <>
      <h1>Sessions</h1>
      <p>
        Sessions are named browser contexts that carry independent state:
        cookies, localStorage, auth tokens, open tabs, and more. Multiple
        sessions can run simultaneously.
      </p>

      <h2>Default session</h2>
      <p>
        Commands without a <code>--session</code> flag use the{" "}
        <code>default</code> session automatically.
      </p>
      <CodeBlock code={`agent-browser open example.com    # uses "default" session`} />

      <h2>Named sessions</h2>
      <CodeBlock
        code={`# Create/open a named session
agent-browser open https://app.example.com/login --session myapp

# Send subsequent commands to the same session
agent-browser snapshot --session myapp
agent-browser click @e3 --session myapp`}
        label="Named sessions"
      />

      <h2>Session list</h2>
      <CodeBlock code={`agent-browser sessions`} />
      <p>
        Lists all active sessions with their current URL and status.
      </p>

      <h2>Profiles</h2>
      <p>
        A <em>profile</em> is a directory that stores persistent browser data
        (cookies, localStorage, extensions, cache). Sessions share a profile
        by default. Use separate profiles to isolate accounts:
      </p>
      <CodeBlock
        code={`agent-browser open https://app.example.com --profile ./profiles/account-a
agent-browser open https://app.example.com --profile ./profiles/account-b`}
      />

      <h2>Session close</h2>
      <CodeBlock
        code={`agent-browser close              # Close active session tab
agent-browser close --all       # Close all sessions`}
      />
    </>
  );
}
