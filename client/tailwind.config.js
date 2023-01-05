/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
        colors: {
            firstBackground: "#82AAE3",
            loginTextColor:"#BFEAF5",
        },
    },
  },
  plugins: [],
}
