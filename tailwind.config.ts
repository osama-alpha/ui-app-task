import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        secondary: "#171717",
      },
    },
    fontFamily: {
      sans: "var(--font-geist-sans), sans-serif",
      mono: "var(--font-geist-mono), monospace",
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
