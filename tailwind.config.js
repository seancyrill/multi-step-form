/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Marine-blue": "hsl(var(--Marine-blue) / <alpha-value>)",
        "Purplish-blue": "hsl(var(--Purplish-blue) / <alpha-value>)",
        "Pastel-blue": "hsl(var(--Pastel-blue) / <alpha-value>)",
        "Light-blue": "hsl(var(--Light-blue) / <alpha-value>)",
        "Strawberry-red": "hsl(var(--Strawberry-red) / <alpha-value>)",
        "Cool-gray": "hsl(var(--Cool-gray) / <alpha-value>)",
        "Light-gray": "hsl(var(--Light-gray) / <alpha-value>)",
        Magnolia: "hsl(var(--Magnolia) / <alpha-value>)",
        Alabaster: "hsl(var(--Alabaster) / <alpha-value>)",
        White: "hsl(var(--White) / <alpha-value>)",
      },
      fontFamily: {
        body: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
