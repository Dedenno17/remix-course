import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: {
          10: "#e7cffe",
          50: "#dcbcfb",
          100: "#ca97fc",
          200: "#b779f4",
          300: "#a85ff0",
          400: "#8f42dd",
          500: "#8d34e6",
          600: "#8021e0",
          700: "#690fc3",
          800: "#4e0596",
        },
        secondary: {
          50: "hsl(24, 93%, 83%)",
          100: "hsl(24, 91%, 75%)",
          200: "hsl(24, 96%, 68%)",
          300: "hsl(24, 96%, 61%)",
          400: "hsl(24, 96%, 53%)",
          500: "hsl(24, 100%, 50%)",
          600: "hsl(22, 90%, 50%)",
        },
      },
      animation: {
        "fade-in-blur": "fadeInBlur 1s ease-out forwards",
      },
      keyframes: {
        fadeInBlur: {
          "0%": { opacity: "0", filter: "blur(1rem)" },
          "100%": { opacity: "1" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
