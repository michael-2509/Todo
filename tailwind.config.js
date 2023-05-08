/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      "Very-Dark-Blue": "hsl(235, 21%, 11%)",
      "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
      "light-grayish-blue": "hsl(234, 39%, 85%)",
      "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      "dark-grayish-blue": "hsl(234, 11%, 52%)",
      "very-dark-grayish-blue": " hsl(233, 14%, 35%)",
      "V-dark-grayish-blue": "hsl(237, 14%, 26%)",
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('../public/assets/bg-mobile-dark.jpg')",
        "hero-desktop": "url('../public/assets/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
