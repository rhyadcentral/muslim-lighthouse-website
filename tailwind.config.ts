import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        // Display: classical Roman inscriptional serif — calm, architectural, premium
        display: ['Marcellus', 'Georgia', 'serif'],
        'display-sc': ['"Marcellus SC"', 'Georgia', 'serif'],
        // Body / UI: warm humanist grotesque
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── Brand palette (OKLCH; tokens are bare "L C H" so alpha modifiers work) ──
        ink: "oklch(var(--ink) / <alpha-value>)",
        "ink-soft": "oklch(var(--ink-soft) / <alpha-value>)",
        "ink-mute": "oklch(var(--ink-mute) / <alpha-value>)",
        teal: "oklch(var(--teal) / <alpha-value>)",
        "teal-deep": "oklch(var(--teal-deep) / <alpha-value>)",
        "teal-bright": "oklch(var(--teal-bright) / <alpha-value>)",
        navy: "oklch(var(--navy) / <alpha-value>)",
        "navy-deep": "oklch(var(--navy-deep) / <alpha-value>)",
        brass: "oklch(var(--brass) / <alpha-value>)",
        "brass-deep": "oklch(var(--brass-deep) / <alpha-value>)",
        paper: "oklch(var(--paper) / <alpha-value>)",
        "paper-2": "oklch(var(--paper-2) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)",
        "line-strong": "oklch(var(--line-strong) / <alpha-value>)",

        // ── shadcn semantic tokens ──
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 5px)",
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      boxShadow: {
        soft: "0 1px 2px oklch(var(--ink) / 0.04), 0 8px 24px -12px oklch(var(--ink) / 0.10)",
        lift: "0 2px 4px oklch(var(--ink) / 0.04), 0 24px 48px -20px oklch(var(--ink) / 0.18)",
        ring: "0 0 0 1px oklch(var(--line) / 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "rise": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "beam": {
          "0%, 100%": { opacity: "0.35", transform: "translateX(-50%) scaleY(1)" },
          "50%": { opacity: "0.6", transform: "translateX(-50%) scaleY(1.06)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.24s ease-out",
        "accordion-up": "accordion-up 0.24s ease-out",
        "rise": "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "spin-slow": "spin-slow 60s linear infinite",
        "beam": "beam 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
