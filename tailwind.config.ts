import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "zuume-rough": ["Zuume Rough", "sans"],
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        primaryText: "#ffffff",
        "border-col": "#b47b58",
        secondaryText: "#d1c5c5",
      },
      backgroundColor: {
        "background-fill": "#000",
        "secondary-bg": "#bf0514",
        "background-main": "#400101",
      },
    },
  },
  plugins: [],
};
export default config;
