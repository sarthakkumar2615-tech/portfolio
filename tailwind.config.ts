import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", surface: "var(--surface)", fg: "var(--fg)", muted: "var(--muted)", line: "var(--line)", accent: "var(--accent)" },
      fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
