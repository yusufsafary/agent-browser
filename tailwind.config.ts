import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#00E5CC",
          50: "#e6fffe",
          100: "#b3fffb",
          400: "#00E5CC",
          500: "#00c9b3",
          600: "#00a896",
        },
        violet: {
          DEFAULT: "#7C3AED",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        orange: {
          DEFAULT: "#F97316",
          400: "#fb923c",
          500: "#f97316",
        },
        surface: {
          DEFAULT: "#0D0D14",
          light: "#1A1A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.03) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%)",
        "teal-glow":
          "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,229,204,0.08) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
