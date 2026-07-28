import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { WalletProviderWrapper } from "@/providers/wallet-provider";

const BASE_URL = "https://agentbrowser.fun";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Agent Browser | Browser Automation CLI for Agents & LLMs",
    template: "%s | Agent Browser",
  },
  description:
    "Agent Browser is a native Rust CLI for browser automation built for agents and LLMs. 50+ commands, ref-based snapshots, MCP server, Solana wallet auth, and live session dashboard.",
  keywords: [
    "agent browser",
    "browser automation CLI",
    "browser automation for agents",
    "LLM browser automation",
    "MCP browser server",
    "playwright alternative",
    "puppeteer alternative",
    "headless browser CLI",
    "Rust browser automation",
    "Claude browser tool",
    "Cursor browser automation",
    "agent browser tool",
    "web scraping CLI",
    "CDP automation",
    "Solana wallet auth",
    "browser MCP server",
  ],
  authors: [{ name: "Agent Browser" }],
  creator: "Agent Browser",
  publisher: "Agent Browser",
  category: "Developer Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Agent Browser",
    title: "Agent Browser | Browser Automation CLI for Agents & LLMs",
    description:
      "Native Rust CLI for browser automation. 50+ commands, ref-based snapshots, MCP server, and live dashboard. Works with Claude, Cursor, and any shell-capable agent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Browser | Browser Automation CLI for Agents & LLMs",
    description:
      "Native Rust CLI for browser automation. 50+ commands, ref-based snapshots, MCP server, and live dashboard. Works with Claude, Cursor, and any shell-capable agent.",
    site: "@agentbrowser",
    creator: "@agentbrowser",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Agent Browser",
      description:
        "The fastest browser automation platform built for AI agents.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/docs?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Agent Browser",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
      sameAs: ["https://agentbrowser.fun"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: "Agent Browser",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows, macOS, Linux",
      description:
        "Browser automation CLI for AI agents. Native Rust speed, 50+ commands, Solana wallet auth.",
      url: BASE_URL,
      downloadUrl: "https://www.npmjs.com/package/agent-browser",
      softwareVersion: "1.0",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#050508" />
        <meta name="color-scheme" content="dark" />
        <meta name="ory-verify" content="orynth-1901c84d6dfd4c6e8ffd7286bcb3f5d7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050508] text-[#F0F0FF] antialiased">
        <ThemeProvider>
          <AuthProvider>
            <WalletProviderWrapper>{children}</WalletProviderWrapper>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
