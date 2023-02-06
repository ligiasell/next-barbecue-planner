/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
      },
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        "2xl": 24,
        "3xl": 28,
        "4xl": 32,
        "5xl": 36,
      },
      fontWeight: {
        light: 400,
        normal: 500,
        medium: 600,
        semibold: 700,
        bold: 800,
      },
      colors: {
        background: {
          DEFAULT: "#FAFAFA",
        },
        primary: {
          DEFAULT: "#FFD836",
        },
        secondary: {
          DEFAULT: "#000",
        },
        gray: {
          DEFAULT: "#F1F1F1",
        },
      },
    },
  },
  plugins: [],
};
