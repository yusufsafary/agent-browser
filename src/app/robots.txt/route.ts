export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://agentbrowser.dev/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
