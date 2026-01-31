import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        steel: {
          50: "#F0E9D9",
          100: "#f2eada",
          200: "#f2eadc",
          300: "#c7b8a3",
          400: "#9d8a7a",
          500: "#6b5d4f",
          600: "#697c85",
          700: "#234559",
          800: "#1e3a4a",
          900: "#063248",
          950: "#063248",
        },
        accent: {
          blue: "#063248",
          silver: "#f2eadc",
          cream: "#F0E9D9",
          dark: "#063248",
        },
        border: {
          DEFAULT: "#697c85",
        },
      },
    },
  },
  plugins: [],
};

export default config;

