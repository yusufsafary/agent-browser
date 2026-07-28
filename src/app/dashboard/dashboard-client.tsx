"use client";

import { useState } from "react";
import {
  Terminal,
  Activity,
  Globe,
  Database,
  Wifi,
  Layers,
  Play,
  Square,
  Plus,
  RefreshCw,
  ChevronRight,
  Circle,
} from "lucide-react";

interface DashboardClientProps {
  user?: {
    name?: string | null;
    email?: string | null;
  };
}

const mockSessions = [
  {
    id: "session-001",
    name: "Main Session",
    status: "active",
    url: "https://example.com",
    startedAt: "2 min ago",
  },
  {
    id: "session-002",
    name: "Scraper Agent",
    status: "idle",
    url: "about:blank",
    startedAt: "15 min ago",
  },
];

const mockActivity = [
  { id: 1, type: "navigate", msg: "Navigated to https://example.com", time: "0:02" },
  { id: 2, type: "snapshot", msg: "Snapshot: 12 elements", time: "0:05" },
  { id: 3, type: "click", msg: "Clicked @e3 (button[submit])", time: "0:07" },
  { id: 4, type: "fill", msg: 'Filled @e5 with "hello@world.com"', time: "0:09" },
  { id: 5, type: "screenshot", msg: "Screenshot saved: result.png", time: "0:11" },
];

const quickCommands = [
  "agent-browser open example.com",
  "agent-browser snapshot -i",
  "agent-browser screenshot page.png",
  "agent-browser read https://example.com",
  "agent-browser close",
];

export function DashboardClient({ user }: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<"activity" | "console" | "network" | "storage">("activity");
  const [command, setCommand] = useState("");
  const [cmdLog, setCmdLog] = useState<string[]>([
    "$ agent-browser open example.com",
    "  Chrome launched at port 9222",
    "  Navigated to https://example.com",
    "$ agent-browser snapshot",
    "  - heading \"Example Domain\" [ref=e1]",
    "  - paragraph [ref=e2]",
    "  - link \"More information...\" [ref=e3]",
  ]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    setCmdLog((prev) => [...prev, `$ ${cmd}`, "  Command sent to agent..."]);
    setCommand("");
  };

  return (
    <div className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6">
        <h1
          className="text-xl font-bold text-[#F0F0FF] mb-1"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Agent Dashboard
        </h1>
        <p className="text-sm text-[#6B7280]">
          Welcome back, {user?.name ?? "Agent"}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-4">
          {/* Sessions */}
          <div className="rounded-xl border border-[#1A1A2E] bg-[#0D0D14] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A2E]">
              <span className="text-xs font-semibold text-[#9090A8] uppercase tracking-wider">
                Sessions
              </span>
              <button className="flex items-center gap-1 text-xs text-[#00E5CC] hover:text-[#00c9b3] transition-colors">
                <Plus className="h-3 w-3" />
                New
              </button>
            </div>
            <div className="divide-y divide-[#1A1A2E]">
              {mockSessions.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#1A1A2E20] transition-colors cursor-pointer"
                >
                  <Circle
                    className={`h-2 w-2 flex-shrink-0 ${
                      s.status === "active"
                        ? "text-[#10B981] fill-[#10B981]"
                        : "text-[#6B7280] fill-[#6B7280]"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-[#F0F0FF] font-medium truncate">
                      {s.name}
                    </div>
                    <div className="text-xs text-[#4B4B60] truncate">
                      {s.url}
                    </div>
                  </div>
                  <span className="text-xs text-[#4B4B60] flex-shrink-0">
                    {s.startedAt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick commands */}
          <div className="rounded-xl border border-[#1A1A2E] bg-[#0D0D14] overflow-hidden">
            <div className="px-4 py-3 border-b border-[#1A1A2E]">
              <span className="text-xs font-semibold text-[#9090A8] uppercase tracking-wider">
                Quick Commands
              </span>
            </div>
            <div className="divide-y divide-[#1A1A2E]">
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setCommand(cmd)}
                  className="flex items-center gap-2 w-full px-4 py-2.5 hover:bg-[#1A1A2E30] transition-colors text-left group"
                >
                  <ChevronRight className="h-3 w-3 text-[#4B4B60] group-hover:text-[#00E5CC] transition-colors flex-shrink-0" />
                  <span className="text-xs font-mono text-[#9090A8] group-hover:text-[#F0F0FF] transition-colors truncate">
                    {cmd}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Commands Run", value: "247", icon: Terminal, color: "#00E5CC" },
              { label: "Active Sessions", value: "1", icon: Globe, color: "#7C3AED" },
              { label: "Screenshots", value: "18", icon: Layers, color: "#F97316" },
              { label: "Network Reqs", value: "1.2k", icon: Wifi, color: "#10B981" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl border border-[#1A1A2E] bg-[#0D0D14]"
                >
                  <Icon className="h-4 w-4 mb-2" style={{ color: stat.color }} />
                  <div className="text-lg font-bold text-[#F0F0FF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#6B7280]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: terminal + panels */}
        <div className="lg:col-span-2 space-y-4">
          {/* Terminal */}
          <div className="rounded-xl border border-[#1A1A2E] bg-[#0D0D14] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A2E] bg-[#0A0A12]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-70" />
                </div>
                <span className="text-xs text-[#4B4B60] font-mono ml-1">
                  terminal
                </span>
              </div>
              <div className="flex gap-1">
                <button className="p-1 text-[#4B4B60] hover:text-[#F0F0FF] transition-colors rounded">
                  <RefreshCw className="h-3 w-3" />
                </button>
                <button className="p-1 text-[#4B4B60] hover:text-[#EF4444] transition-colors rounded">
                  <Square className="h-3 w-3" />
                </button>
              </div>
            </div>
            {/* Output */}
            <div className="h-40 overflow-y-auto p-4 font-mono text-xs space-y-0.5 bg-[#050508]">
              {cmdLog.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("$")
                      ? "text-[#00E5CC]"
                      : "text-[#9090A8]"
                  }
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-2">
                <span className="text-[#7C3AED]">$</span>
                <span className="w-2 h-3 bg-[#00E5CC] animate-pulse" />
              </div>
            </div>
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-2 border-t border-[#1A1A2E] bg-[#0A0A12]">
              <span className="text-[#7C3AED] font-mono text-sm">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCommand(command);
                }}
                placeholder="agent-browser ..."
                className="flex-1 bg-transparent text-[#F0F0FF] text-sm font-mono placeholder-[#4B4B60] focus:outline-none"
              />
              <button
                onClick={() => handleCommand(command)}
                className="p-1 text-[#00E5CC] hover:text-[#00c9b3] transition-colors"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Info panels */}
          <div className="rounded-xl border border-[#1A1A2E] bg-[#0D0D14] overflow-hidden">
            {/* Tab bar */}
            <div className="flex border-b border-[#1A1A2E] px-4 pt-1 bg-[#0A0A12] overflow-x-auto">
              {(["activity", "console", "network", "storage"] as const).map(
                (t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-3 py-2 text-xs capitalize whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === t
                        ? "border-[#00E5CC] text-[#00E5CC]"
                        : "border-transparent text-[#6B7280] hover:text-[#9090A8]"
                    }`}
                  >
                    {t}
                  </button>
                )
              )}
            </div>

            {/* Tab content */}
            <div className="p-4 h-48 overflow-y-auto">
              {activeTab === "activity" && (
                <div className="space-y-2">
                  {mockActivity.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <span className="text-xs font-mono text-[#4B4B60] flex-shrink-0 pt-0.5">
                        {item.time}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                            item.type === "navigate"
                              ? "bg-[#7C3AED20] text-[#a78bfa]"
                              : item.type === "click"
                              ? "bg-[#00E5CC15] text-[#00E5CC]"
                              : item.type === "fill"
                              ? "bg-[#F9731620] text-[#F97316]"
                              : "bg-[#1A1A2E] text-[#9090A8]"
                          }`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs text-[#9090A8]">{item.msg}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "console" && (
                <div className="font-mono text-xs space-y-1 text-[#9090A8]">
                  <div className="text-[#10B981]">[info] Browser session initialized</div>
                  <div className="text-[#9090A8]">[log] Chrome devtools listening on port 9222</div>
                  <div className="text-[#9090A8]">[log] DOM snapshot captured: 12 nodes</div>
                  <div className="text-[#F59E0B]">[warn] Slow network detected (1.2s TTFB)</div>
                  <div className="text-[#9090A8]">[log] Page fully loaded</div>
                </div>
              )}
              {activeTab === "network" && (
                <div className="space-y-1.5">
                  {[
                    { method: "GET", url: "/", status: 200, time: "120ms" },
                    { method: "GET", url: "/styles.css", status: 200, time: "40ms" },
                    { method: "GET", url: "/favicon.ico", status: 200, time: "15ms" },
                    { method: "POST", url: "/api/track", status: 204, time: "85ms" },
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className={`font-mono px-1.5 py-0.5 rounded text-[10px] ${
                        req.method === "GET" ? "bg-[#10B98120] text-[#10B981]" : "bg-[#7C3AED20] text-[#a78bfa]"
                      }`}>{req.method}</span>
                      <span className="text-[#F0F0FF] font-mono flex-1 truncate">{req.url}</span>
                      <span className="text-[#10B981] font-mono">{req.status}</span>
                      <span className="text-[#6B7280]">{req.time}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "storage" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-semibold uppercase tracking-wider pb-1 border-b border-[#1A1A2E]">
                    <Database className="h-3 w-3" />
                    localStorage
                  </div>
                  {[
                    { key: "theme", value: '"dark"' },
                    { key: "agent-session", value: '"sess_abc123"' },
                    { key: "last-url", value: '"https://example.com"' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-[#F97316] flex-shrink-0">{item.key}</span>
                      <span className="text-[#4B4B60]">:</span>
                      <span className="text-[#00E5CC] truncate">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
