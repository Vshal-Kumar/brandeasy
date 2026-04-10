import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#7B1818",
        "maroon-dark": "#5A0F0F",
        gold: "#C8A855",
        "gold-dark": "#A8882F",
        cream: "#F7F1E5",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        cormorant: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
