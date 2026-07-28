"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Eye, EyeOff, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import {
  SUPPORTED_WALLETS,
  connectWallet,
  signWalletMessage,
  isWalletInstalled,
} from "@/lib/solana";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [tab, setTab] = useState<"email" | "wallet">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [walletLoading, setWalletLoading] = useState<string | null>(null);
  const [connectedPubKey, setConnectedPubKey] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [installedWallets, setInstalledWallets] = useState<string[]>([]);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    // Check which wallets are installed in the browser
    const checkWallets = () => {
      const installed = SUPPORTED_WALLETS.filter((w) =>
        isWalletInstalled(w.key)
      ).map((w) => w.key);
      setInstalledWallets(installed);
    };
    checkWallets();
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid email or password.");
      } else {
        router.replace("/dashboard");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleConnectWallet = async (walletKey: string) => {
    setError("");
    setWalletLoading(walletKey);
    try {
      const pubKey = await connectWallet(walletKey);
      setConnectedPubKey(pubKey);
      setSelectedWallet(walletKey);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Connection failed.";
      setError(msg.includes("not installed")
        ? `${walletKey} wallet not detected. Install it first.`
        : "Failed to connect wallet. Please try again.");
    } finally {
      setWalletLoading(null);
    }
  };

  const handleWalletSignIn = async () => {
    if (!connectedPubKey || !selectedWallet) return;
    setError("");
    setWalletLoading("signing");
    try {
      const nonceRes = await fetch("/api/nonce");
      const { message } = await nonceRes.json();
      const { publicKey, signature } = await signWalletMessage(selectedWallet, message);
      const res = await signIn("solana-wallet", {
        publicKey,
        signature,
        message,
        walletName: selectedWallet.charAt(0).toUpperCase() + selectedWallet.slice(1),
        redirect: false,
      });
      if (res?.error) {
        setError("Signature verification failed. Please try again.");
        setConnectedPubKey(null);
        setSelectedWallet(null);
      } else {
        router.replace("/dashboard");
      }
    } catch {
      setError("Signing was cancelled or failed. Please try again.");
    } finally {
      setWalletLoading(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-[#00E5CC]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,204,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative z-10 p-6">
        <Logo size="sm" />
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-[#1A1A2E] bg-[#0D0D14] p-6 sm:p-8">
            <div className="mb-6">
              <h1
                className="text-xl font-bold text-[#F0F0FF] mb-1"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Sign in to AGENT BROWSER
              </h1>
              <p className="text-sm text-[#6B7280]">
                Access the dashboard and your browser sessions.
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-1 p-1 rounded-lg bg-[#0A0A12] border border-[#1A1A2E] mb-6">
              <button
                onClick={() => setTab("email")}
                className={`flex-1 py-1.5 text-sm rounded-md font-medium transition-all ${
                  tab === "email"
                    ? "bg-[#1A1A2E] text-[#F0F0FF]"
                    : "text-[#6B7280] hover:text-[#9090A8]"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setTab("wallet")}
                className={`flex-1 py-1.5 text-sm rounded-md font-medium transition-all ${
                  tab === "wallet"
                    ? "bg-[#1A1A2E] text-[#F0F0FF]"
                    : "text-[#6B7280] hover:text-[#9090A8]"
                }`}
              >
                Solana Wallet
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-[#EF444410] border border-[#EF444430] text-[#EF4444] text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Email form */}
            {tab === "email" && (
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#9090A8] mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#1A1A2E] bg-[#0A0A12] text-[#F0F0FF] text-sm placeholder-[#4B4B60] focus:outline-none focus:border-[#00E5CC50] focus:ring-1 focus:ring-[#00E5CC30] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#9090A8] mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="w-full px-3 py-2.5 pr-10 rounded-lg border border-[#1A1A2E] bg-[#0A0A12] text-[#F0F0FF] text-sm placeholder-[#4B4B60] focus:outline-none focus:border-[#00E5CC50] focus:ring-1 focus:ring-[#00E5CC30] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B4B60] hover:text-[#9090A8] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#00E5CC] text-[#050508] font-semibold rounded-lg hover:bg-[#00c9b3] disabled:opacity-60 disabled:cursor-not-allowed transition-all text-sm"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? "Signing in..." : "Sign in"}
                </button>

                <div className="p-3 rounded-lg border border-[#1A1A2E] bg-[#0A0A12]">
                  <p className="text-xs text-[#6B7280] font-medium mb-1">
                    Demo credentials
                  </p>
                  <div className="space-y-0.5 font-mono text-xs text-[#9090A8]">
                    <div>demo@agentbrowser.dev / demo123</div>
                    <div>admin@agentbrowser.dev / admin123</div>
                  </div>
                </div>
              </form>
            )}

            {/* Wallet tab */}
            {tab === "wallet" && (
              <div className="space-y-4">
                <p className="text-sm text-[#9090A8] leading-relaxed">
                  Connect your Solana wallet and sign a message to authenticate.
                  Your private key never leaves your device.
                </p>

                {!connectedPubKey ? (
                  <div className="space-y-2">
                    {SUPPORTED_WALLETS.map((wallet) => {
                      const installed = installedWallets.includes(wallet.key);
                      const isLoading = walletLoading === wallet.key;
                      return (
                        <button
                          key={wallet.key}
                          onClick={() => handleConnectWallet(wallet.key)}
                          disabled={isLoading || !!walletLoading}
                          className="w-full flex items-center justify-between p-3 rounded-lg border border-[#1A1A2E] bg-[#0A0A12] hover:border-[#2A2A3E] disabled:opacity-60 disabled:cursor-not-allowed transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ background: wallet.color }}
                            />
                            <span className="text-sm font-medium text-[#F0F0FF]">
                              {wallet.name}
                            </span>
                            {!installed && (
                              <span className="text-xs text-[#4B4B60]">
                                not installed
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin text-[#00E5CC]" />
                            ) : installed ? (
                              <span className="text-xs text-[#00E5CC]">
                                Connect
                              </span>
                            ) : (
                              <a
                                href={wallet.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs text-[#6B7280] hover:text-[#9090A8] flex items-center gap-1"
                              >
                                Install
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </button>
                      );
                    })}
                    <p className="text-xs text-[#4B4B60] text-center">
                      Any Solana-compatible wallet works if detected by the
                      browser.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-[#00E5CC30] bg-[#00E5CC08]">
                      <span className="w-2 h-2 rounded-full bg-[#00E5CC]" />
                      <span className="text-xs font-mono text-[#00E5CC]">
                        {connectedPubKey.slice(0, 8)}...
                        {connectedPubKey.slice(-8)}
                      </span>
                      <span className="ml-auto text-xs text-[#6B7280]">
                        {selectedWallet}
                      </span>
                    </div>
                    <button
                      onClick={handleWalletSignIn}
                      disabled={walletLoading === "signing"}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#00E5CC] text-[#050508] font-semibold rounded-lg hover:bg-[#00c9b3] disabled:opacity-60 transition-all text-sm"
                    >
                      {walletLoading === "signing" && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      {walletLoading === "signing"
                        ? "Signing message..."
                        : "Sign in with Wallet"}
                    </button>
                    <button
                      onClick={() => {
                        setConnectedPubKey(null);
                        setSelectedWallet(null);
                      }}
                      className="w-full text-xs text-[#6B7280] hover:text-[#9090A8] transition-colors"
                    >
                      Use a different wallet
                    </button>
                  </div>
                )}
              </div>
            )}

            <p className="text-xs text-[#4B4B60] text-center mt-6">
              By signing in you agree to our{" "}
              <Link
                href="/cookies#terms"
                className="text-[#9090A8] hover:text-[#F0F0FF] transition-colors"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/cookies#privacy"
                className="text-[#9090A8] hover:text-[#F0F0FF] transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
