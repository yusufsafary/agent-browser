import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { WalletProviderWrapper } from "@/providers/wallet-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentbrowser.dev"),
  title: {
    default: "AGENT BROWSER | Next-Gen Browser Automation for AI",
    template: "%s | AGENT BROWSER",
  },
  description:
    "The fastest, most powerful browser automation platform built exclusively for AI agents. Native Rust speed, multichain identity, zero compromise.",
  keywords: [
    "agent browser",
    "browser automation",
    "AI agents",
    "Solana",
    "web automation",
    "CLI",
    "Rust",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agentbrowser.dev",
    siteName: "AGENT BROWSER",
    title: "AGENT BROWSER | Next-Gen Browser Automation for AI",
    description:
      "The fastest, most powerful browser automation platform built exclusively for AI agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AGENT BROWSER",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGENT BROWSER | Next-Gen Browser Automation for AI",
    description:
      "The fastest, most powerful browser automation platform built exclusively for AI agents.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
