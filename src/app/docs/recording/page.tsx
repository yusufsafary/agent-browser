import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Recording" };

export default function RecordingPage() {
  return (
    <>
      <h1>Recording</h1>
      <p>
        Record browser sessions as video for debugging, demos, and audit logs.
      </p>

      <h2>Start recording</h2>
      <CodeBlock
        code={`agent-browser open https://example.com --record session.mp4`}
      />

      <h2>Stop and save</h2>
      <CodeBlock code={`agent-browser close\n# Recording saved to session.mp4`} />

      <h2>Recording options</h2>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--record &lt;path&gt;</code></td>
            <td>Enable recording, save to path (MP4 or WebM)</td>
          </tr>
          <tr>
            <td><code>--record-fps &lt;n&gt;</code></td>
            <td>Frames per second (default: 30)</td>
          </tr>
          <tr>
            <td><code>--record-quality &lt;n&gt;</code></td>
            <td>Quality 1-100 (default: 80)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
