import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

export async function GET() {
  const nonce = randomBytes(32).toString("hex");
  const message = `Sign this message to authenticate with AGENT BROWSER.\n\nNonce: ${nonce}\nTimestamp: ${new Date().toISOString()}`;
  return NextResponse.json({ nonce, message });
}
