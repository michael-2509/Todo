/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "Very-Dark-Blue": "hsl(235, 21%, 11%)",
      "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
      "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
      "Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
      "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
      "Very-Dark-Grayish-Blue": " hsl(233, 14%, 35%)",
      "V-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/assets/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
