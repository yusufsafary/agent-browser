import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsMobileNav } from "@/components/docs-mobile-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | AGENT BROWSER Docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <DocsMobileNav />
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 lg:py-12 flex gap-10">
        <aside className="w-52 flex-shrink-0 hidden lg:block sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto">
          <DocsSidebar />
        </aside>
        <main className="flex-1 min-w-0 max-w-2xl pb-20 prose">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
