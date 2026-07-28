import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies, Privacy & Terms",
  description:
    "Cookie policy, privacy practices, and terms of service for AGENT BROWSER.",
};

const sections = [
  {
    id: "cookies",
    title: "Cookie Policy",
    updated: "July 2025",
    content: [
      {
        heading: "What are cookies?",
        body: "Cookies are small text files stored on your device when you visit a website. AGENT BROWSER uses a minimal set of cookies required to operate the platform.",
      },
      {
        heading: "Cookies we use",
        body: null,
        table: [
          { name: "next-auth.session-token", purpose: "Authentication session (email login)", expires: "30 days", required: true },
          { name: "next-auth.csrf-token", purpose: "Cross-site request forgery protection", expires: "Session", required: true },
          { name: "__Secure-next-auth.session-token", purpose: "Secure authentication session (HTTPS)", expires: "30 days", required: true },
          { name: "docs-chat-open", purpose: "Remembers whether the docs chat panel is open", expires: "1 year", required: false },
          { name: "docs-chat-width", purpose: "Stores the preferred chat panel width", expires: "1 year", required: false },
        ],
      },
      {
        heading: "Third-party cookies",
        body: "We do not use advertising cookies, tracking cookies from ad networks, or third-party analytics that set cookies. Vercel Analytics and Speed Insights collect performance data using privacy-preserving techniques without setting persistent cookies.",
      },
      {
        heading: "Managing cookies",
        body: "You can delete or block cookies at any time through your browser settings. Blocking required cookies will prevent authentication from working. Blocking optional cookies will cause your UI preferences to reset on each visit.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    updated: "July 2025",
    content: [
      {
        heading: "What we collect",
        body: "When you create an account, we store your email address and a hashed identifier. When you authenticate with a Solana wallet, we store your wallet public key. We do not store passwords in plain text.",
      },
      {
        heading: "How we use your data",
        body: "We use your account information solely to authenticate you and associate your browser sessions with your account. We do not sell your data. We do not share your data with third parties except as required to operate the service (for example, hosting providers).",
      },
      {
        heading: "Browser session data",
        body: "Browser sessions, screenshots, network logs, and other session artifacts are associated with your account and stored temporarily. You can delete sessions at any time from the dashboard.",
      },
      {
        heading: "Analytics",
        body: "We use Vercel Analytics to understand aggregate usage patterns (page views, performance metrics). This data is anonymous and cannot be linked to individual users.",
      },
      {
        heading: "Data retention",
        body: "Account data is retained as long as your account exists. You can request deletion of your account and all associated data at any time by contacting us.",
      },
      {
        heading: "Security",
        body: "Authentication tokens are stored in secure, HttpOnly cookies. Wallet authentication uses cryptographic signature verification — we never see your private key. Session data is encrypted at rest.",
      },
      {
        heading: "Contact",
        body: "For privacy requests, data deletion, or questions about this policy, open an issue on GitHub or contact the maintainers through the repository.",
      },
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    updated: "July 2025",
    content: [
      {
        heading: "Acceptance",
        body: "By using AGENT BROWSER, you agree to these terms. If you do not agree, do not use the service.",
      },
      {
        heading: "Permitted use",
        body: "AGENT BROWSER is provided for lawful automation tasks. You may use it to automate your own accounts, build tools for your own projects, test your own applications, and automate workflows you are authorized to automate.",
      },
      {
        heading: "Prohibited use",
        body: "You may not use AGENT BROWSER to: access accounts you do not own or have authorization to access; circumvent security measures, CAPTCHAs, or rate limits on third-party services in violation of their terms; conduct unauthorized security testing; send spam or conduct phishing campaigns; or violate any applicable law.",
      },
      {
        heading: "Open source license",
        body: "The core AGENT BROWSER CLI is open source software. The source code is available on GitHub under the MIT license. The dashboard, authentication system, and hosted service are proprietary.",
      },
      {
        heading: "Disclaimer",
        body: "AGENT BROWSER is provided \"as is\" without warranty of any kind. We are not liable for any damages resulting from use of the service. You are responsible for the actions your agents take.",
      },
      {
        heading: "Changes",
        body: "We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms. We will note the last updated date above.",
      },
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="mb-10">
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Legal
          </h1>
          <p className="text-[#9090A8]">
            Cookies, privacy, and terms of service for AGENT BROWSER.
          </p>
        </div>

        {/* Section nav */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-[#1A1A2E] bg-[#0D0D14] text-xs text-[#9090A8] hover:text-[#F0F0FF] hover:border-[#2A2A3E] transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-baseline justify-between mb-6 border-b border-[#1A1A2E] pb-4">
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#F0F0FF]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {section.title}
                </h2>
                <span className="text-xs text-[#4B4B60]">
                  Updated {section.updated}
                </span>
              </div>

              <div className="space-y-6 prose">
                {section.content.map((item, i) => (
                  <div key={i}>
                    <h3>{item.heading}</h3>
                    {item.body && <p>{item.body}</p>}
                    {item.table && (
                      <div className="overflow-x-auto mt-3">
                        <table>
                          <thead>
                            <tr>
                              <th>Cookie</th>
                              <th>Purpose</th>
                              <th>Expires</th>
                              <th>Required</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.table.map((row) => (
                              <tr key={row.name}>
                                <td>
                                  <code>{row.name}</code>
                                </td>
                                <td>{row.purpose}</td>
                                <td>{row.expires}</td>
                                <td>
                                  <span
                                    className={`text-xs px-1.5 py-0.5 rounded ${
                                      row.required
                                        ? "text-[#F97316] bg-[#F9731615]"
                                        : "text-[#6B7280] bg-[#1A1A2E]"
                                    }`}
                                  >
                                    {row.required ? "Required" : "Optional"}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
