import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const dims = { sm: 28, md: 36, lg: 48 }[size];
  const textSize = { sm: "text-sm", md: "text-lg", lg: "text-2xl" }[size];

  return (
    <Link href="/" className="flex items-center gap-2.5 group select-none">
      {/* Logo mark */}
      <div
        className="relative flex-shrink-0"
        style={{ width: dims, height: dims }}
      >
        <svg
          width={dims}
          height={dims}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Browser window outer frame */}
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            rx="7"
            fill="#050508"
            stroke="#00E5CC"
            strokeWidth="1.5"
          />
          {/* Top bar */}
          <rect
            x="1"
            y="1"
            width="34"
            height="9"
            rx="7"
            fill="#0D0D14"
          />
          <rect x="1" y="7" width="34" height="3" fill="#0D0D14" />
          {/* Dots */}
          <circle cx="7" cy="5.5" r="1.5" fill="#EF4444" />
          <circle cx="12" cy="5.5" r="1.5" fill="#F59E0B" />
          <circle cx="17" cy="5.5" r="1.5" fill="#10B981" />
          {/* Address bar */}
          <rect
            x="20"
            y="3.5"
            width="12"
            height="4"
            rx="2"
            fill="#1A1A2E"
          />
          {/* "A" letterform in viewport */}
          <path
            d="M11 26L15.5 14H20.5L25 26"
            stroke="#00E5CC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 22H23"
            stroke="#00E5CC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Scan line accent */}
          <line
            x1="1"
            y1="19"
            x2="35"
            y2="19"
            stroke="#7C3AED"
            strokeWidth="0.5"
            strokeDasharray="2 3"
            opacity="0.5"
          />
        </svg>
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 12px rgba(0,229,204,0.4)",
          }}
        />
      </div>
      {/* Wordmark */}
      {showText && (
        <span
          className={`${textSize} font-bold tracking-tight text-[#F0F0FF] font-display leading-none`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          AGENT<span className="text-[#00E5CC]">.</span>BROWSER
        </span>
      )}
    </Link>
  );
}
