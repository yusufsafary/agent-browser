import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/header";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
