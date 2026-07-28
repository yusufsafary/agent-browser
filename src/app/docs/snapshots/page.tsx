import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Snapshots & Refs" };

export default function SnapshotsPage() {
  return (
    <>
      <h1>Snapshots and Refs</h1>
      <p>
        The <code>snapshot</code> command captures a compact accessibility tree
        of the current page and assigns each interactive or content element a
        unique ref like <code>@e1</code>, <code>@e2</code>.
      </p>

      <h2>Taking a snapshot</h2>
      <CodeBlock
        code={`agent-browser snapshot
agent-browser snapshot -i   # Interactive view`}
      />
      <p>Example output:</p>
      <CodeBlock
        code={`- heading "Sign in to GitHub" [ref=e1]
- textbox "Username or email address" [ref=e2]
- textbox "Password" [ref=e3]
- link "Forgot password?" [ref=e4]
- button "Sign in" [ref=e5]`}
        language="text"
        label="Snapshot output"
      />

      <h2>Using refs</h2>
      <p>Refs from the snapshot are used directly in interaction commands:</p>
      <CodeBlock
        code={`agent-browser fill @e2 "user@example.com"
agent-browser fill @e3 "mypassword"
agent-browser click @e5`}
      />

      <h2>Why refs beat CSS selectors for agents</h2>
      <table>
        <thead>
          <tr>
            <th>Approach</th>
            <th>Tokens</th>
            <th>Reliability</th>
            <th>Agent-friendly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Refs (snapshot)</td>
            <td>~200-400</td>
            <td>High</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Full DOM</td>
            <td>~3000-5000</td>
            <td>Medium</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Screenshot + vision</td>
            <td>~800+</td>
            <td>Medium</td>
            <td>Slow</td>
          </tr>
        </tbody>
      </table>

      <h2>Ref validity</h2>
      <p>
        Refs are valid for the current page load. After navigation or a
        dynamic DOM update, take a fresh snapshot before using refs.
      </p>
      <CodeBlock
        code={`agent-browser click @e5         # Submit form
# Page navigates after submit
agent-browser snapshot          # Take new snapshot with new refs
agent-browser get text @e1      # Use refs from NEW snapshot`}
      />
    </>
  );
}
