import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        img: "img 1s ease-in-out",
        intro: "intro 0.3s forwards ease-in-out",
        marker: "marker 4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
