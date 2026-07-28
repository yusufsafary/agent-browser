export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/

Sitemap: https://agentbrowser.fun/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
