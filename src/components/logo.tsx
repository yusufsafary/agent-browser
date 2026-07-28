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
          <defs>
            <linearGradient id="ab-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5CC" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="ab-stroke" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5CC" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
            </linearGradient>
            <clipPath id="ab-clip">
              <rect x="2" y="2" width="32" height="32" rx="9" />
            </clipPath>
          </defs>

          {/* Background tile */}
          <rect x="2" y="2" width="32" height="32" rx="9" fill="#0A0A12" />

          {/* Subtle grid texture */}
          <rect x="2" y="2" width="32" height="32" rx="9" fill="url(#ab-grad)" fillOpacity="0.06" />

          {/* Outer border with gradient */}
          <rect x="2" y="2" width="32" height="32" rx="9" stroke="url(#ab-stroke)" strokeWidth="1.2" />

          {/* Left vertical bar — the "l" stem of an agent pointer */}
          <rect x="9" y="10" width="3" height="17" rx="1.5" fill="url(#ab-grad)" />

          {/* Horizontal crossbar (browser address bar metaphor) */}
          <rect x="9" y="10" width="12" height="3" rx="1.5" fill="url(#ab-grad)" />

          {/* Short bottom foot — completes the cursor shape */}
          <rect x="9" y="23.5" width="7" height="3" rx="1.5" fill="url(#ab-grad)" fillOpacity="0.7" />

          {/* Right element — the ">" execution chevron */}
          <path
            d="M20 15 L26 18.5 L20 22"
            stroke="url(#ab-stroke)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Tiny blink dot — cursor pulse */}
          <circle cx="28.5" cy="25.5" r="1.8" fill="#00E5CC" fillOpacity="0.85" />
        </svg>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "0 0 14px rgba(0,229,204,0.35)" }}
        />
      </div>

      {showText && (
        <span
          className={`${textSize} font-bold tracking-tight leading-none`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="text-[#F0F0FF]">agent</span>
          <span
            style={{
              background: "linear-gradient(90deg, #00E5CC, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            browser
          </span>
        </span>
      )}
    </Link>
  );
}
