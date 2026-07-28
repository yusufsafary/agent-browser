import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Demo user store - in production replace with real DB
const DEMO_USERS = [
  {
    id: "1",
    email: "demo@agentbrowser.dev",
    password: "demo123",
    name: "Demo User",
  },
  {
    id: "2",
    email: "admin@agentbrowser.dev",
    password: "admin123",
    name: "Admin User",
  },
];

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? "agent-browser-secret-key-change-me",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = DEMO_USERS.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password
        );
        if (!user) return null;
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
    CredentialsProvider({
      id: "solana-wallet",
      name: "Solana Wallet",
      credentials: {
        publicKey: { label: "Public Key", type: "text" },
        signature: { label: "Signature", type: "text" },
        message: { label: "Message", type: "text" },
        walletName: { label: "Wallet", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.publicKey || !credentials?.signature) return null;
        try {
          // Verify Solana signature
          const nacl = (await import("tweetnacl")).default;
          const bs58 = await import("bs58");

          const publicKeyBytes = bs58.default.decode(credentials.publicKey);
          const signatureBytes = bs58.default.decode(credentials.signature);
          const messageBytes = new TextEncoder().encode(credentials.message);

          const isValid = nacl.sign.detached.verify(
            messageBytes,
            signatureBytes,
            publicKeyBytes
          );

          if (!isValid) return null;

          const shortKey = `${credentials.publicKey.slice(0, 4)}...${credentials.publicKey.slice(-4)}`;

          return {
            id: credentials.publicKey,
            email: `${credentials.publicKey}@wallet.solana`,
            name: `${credentials.walletName ?? "Wallet"} (${shortKey})`,
            image: null,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
};
