// Lightweight Solana wallet helpers using browser extension APIs
// (window.phantom, window.solana, window.backpack, window.solflare)
// No @solana/web3.js or @solana/wallet-adapter required.

export interface SolanaWalletInfo {
  name: string;
  key: string; // how we access it on window
  color: string;
  homepage: string;
}

export const SUPPORTED_WALLETS: SolanaWalletInfo[] = [
  {
    name: "Phantom",
    key: "phantom",
    color: "#AB9FF2",
    homepage: "https://phantom.app",
  },
  {
    name: "Solflare",
    key: "solflare",
    color: "#FC7227",
    homepage: "https://solflare.com",
  },
  {
    name: "Backpack",
    key: "backpack",
    color: "#E33E3F",
    homepage: "https://backpack.app",
  },
];

declare global {
  interface Window {
    phantom?: { solana?: SolanaProvider };
    solana?: SolanaProvider;
    backpack?: SolanaProvider;
    solflare?: SolanaProvider;
  }
}

interface SolanaProvider {
  isPhantom?: boolean;
  isSolflare?: boolean;
  publicKey?: { toString(): string; toBytes(): Uint8Array };
  connect(): Promise<{ publicKey: { toString(): string; toBytes(): Uint8Array } }>;
  disconnect(): Promise<void>;
  signMessage(
    message: Uint8Array,
    encoding: string
  ): Promise<{ signature: Uint8Array }>;
}

export function getProvider(walletKey: string): SolanaProvider | null {
  if (typeof window === "undefined") return null;
  if (walletKey === "phantom") {
    return window.phantom?.solana ?? window.solana ?? null;
  }
  if (walletKey === "solflare") {
    return (window as unknown as Record<string, SolanaProvider>).solflare ?? null;
  }
  if (walletKey === "backpack") {
    return (window as unknown as Record<string, SolanaProvider>).backpack ?? null;
  }
  return null;
}

export function isWalletInstalled(walletKey: string): boolean {
  return getProvider(walletKey) !== null;
}

export async function connectWallet(
  walletKey: string
): Promise<string> {
  const provider = getProvider(walletKey);
  if (!provider) {
    throw new Error(`${walletKey} wallet not installed.`);
  }
  const resp = await provider.connect();
  return resp.publicKey.toString();
}

export async function signWalletMessage(
  walletKey: string,
  message: string
): Promise<{ publicKey: string; signature: string }> {
  const provider = getProvider(walletKey);
  if (!provider || !provider.publicKey) {
    throw new Error("Wallet not connected.");
  }
  const msgBytes = new TextEncoder().encode(message);
  const { signature } = await provider.signMessage(msgBytes, "utf8");
  // Base58-encode the signature
  const { default: bs58 } = await import("bs58");
  const signatureB58 = bs58.encode(signature);
  const pubKey = provider.publicKey.toString();
  return { publicKey: pubKey, signature: signatureB58 };
}
