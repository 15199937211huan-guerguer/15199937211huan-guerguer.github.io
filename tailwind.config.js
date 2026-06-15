/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090A",
          900: "#0A0B0D",
          850: "#0E0F12",
          800: "#131418",
          700: "#1A1C21",
          600: "#23262C",
        },
        accent: {
          DEFAULT: "#5EEAD4",
          soft: "#7DD3C4",
          dim: "#2C5A52",
        },
        fg: {
          DEFAULT: "#F4F4F5",
          muted: "#A1A1AA",
          faint: "#6B6F76",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Noto Sans SC"', "sans-serif"],
        sans: ['"Sora"', '"Noto Sans SC"', "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1700px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
