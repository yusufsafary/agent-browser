"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

export function CodeBlock({ code, language = "bash", label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[#1A1A2E] bg-[#0D0D14]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1A1A2E] bg-[#0A0A12]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] opacity-70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-70" />
          </div>
          {label && (
            <span className="text-xs text-[#4B4B60] font-mono ml-2">{label}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1 rounded text-[#4B4B60] hover:text-[#F0F0FF] transition-colors opacity-0 group-hover:opacity-100"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-[#00E5CC]" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      {/* Code */}
      <pre className="!border-0 !rounded-none !bg-transparent !m-0">
        <code className={`language-${language} !bg-transparent !border-0 !p-0 !text-[#C9D1D9] !text-[0.85rem]`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
