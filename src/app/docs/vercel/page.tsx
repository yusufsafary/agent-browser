import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Vercel" };

export default function VercelPage() {
  return (
    <>
      <h1>Vercel Deployment</h1>
      <p>
        Run AGENT BROWSER automations inside Vercel Serverless Functions and
        Edge Runtime using the official sandbox package.
      </p>

      <h2>Install the sandbox</h2>
      <CodeBlock code={`npm install @agent-browser/sandbox`} />

      <h2>Example: Vercel function</h2>
      <CodeBlock
        code={`import { createSandbox } from "@agent-browser/sandbox";

export async function GET(request: Request) {
  const sandbox = await createSandbox();

  await sandbox.open("https://example.com");
  const snapshot = await sandbox.snapshot();
  await sandbox.close();

  return Response.json({ snapshot });
}`}
        language="typescript"
        label="app/api/automate/route.ts"
      />

      <h2>Configuration</h2>
      <p>
        The sandbox automatically uses the AGENT BROWSER cloud backend when
        deployed to Vercel. No additional configuration required for basic
        usage.
      </p>
      <CodeBlock
        code={`# Optional: specify a region
AGENT_BROWSER_REGION=iad1

# Optional: custom timeout
AGENT_BROWSER_TIMEOUT=60000`}
        label="Vercel environment variables"
      />
    </>
  );
}
