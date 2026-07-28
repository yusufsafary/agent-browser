import { CodeBlock } from "@/components/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docker",
  description:
    "Run Agent Browser in Docker using the official agentbrowser/agent-browser image. All system Chrome dependencies pre-installed. Includes docker-compose examples.",
  alternates: { canonical: "https://agentbrowser.fun/docs/docker" },
  openGraph: {
    url: "https://agentbrowser.fun/docs/docker",
    title: "Agent Browser in Docker",
    description:
      "Official Docker image with all Chrome dependencies pre-installed. Dockerfile and docker-compose examples included.",
  },
};

export default function DockerPage() {
  return (
    <>
      <h1>Docker</h1>
      <p>Run AGENT BROWSER in a containerized environment.</p>

      <h2>Official image</h2>
      <CodeBlock
        code={`docker pull agentbrowser/agent-browser:latest`}
      />

      <h2>Example Dockerfile</h2>
      <CodeBlock
        code={`FROM agentbrowser/agent-browser:latest

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "agent.js"]`}
        language="dockerfile"
        label="Dockerfile"
      />

      <h2>docker-compose example</h2>
      <CodeBlock
        code={`version: "3.8"
services:
  agent:
    image: agentbrowser/agent-browser:latest
    environment:
      - AGENT_BROWSER_HEADED=false
    volumes:
      - ./screenshots:/app/screenshots
    command: node agent.js`}
        language="yaml"
        label="docker-compose.yml"
      />

      <h2>Linux dependencies</h2>
      <p>
        The official Docker image includes all required system dependencies for
        Chrome on Linux. If you use a custom base image, run:
      </p>
      <CodeBlock code={`agent-browser install --with-deps`} />
    </>
  );
}
