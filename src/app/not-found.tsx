import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="font-mono text-[#00E5CC] text-sm mb-4">Error 404</div>
          <h1
            className="text-4xl font-bold text-[#F0F0FF] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Page not found
          </h1>
          <p className="text-[#9090A8] mb-8 max-w-sm">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 bg-[#00E5CC] text-[#050508] font-semibold rounded-xl hover:bg-[#00c9b3] transition-all text-sm"
            >
              Go home
            </Link>
            <Link
              href="/docs"
              className="px-5 py-2.5 border border-[#1A1A2E] text-[#F0F0FF] rounded-xl hover:border-[#2A2A3E] transition-all text-sm"
            >
              Browse docs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
