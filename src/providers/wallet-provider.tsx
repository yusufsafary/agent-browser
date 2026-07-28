"use client";

// Lightweight provider - uses window.solana / window.phantom directly.
// No @solana/wallet-adapter needed.

export function WalletProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
