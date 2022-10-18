/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#0f4c5c",
        "secondary-bg": "#0f4c5c",
        "light-gray": "#F7F7F7",
        "half-transparent": "#f2f6fc",
        "blue-bg": "#216fed",
      },
      colors: {
        "main-color": "#0f4c5c",
        "secondary-color": "#e36414",
        "dark-gray": "#F7F7F7",
        "dark-color": "#333e4b",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
    // require("flowbite/plugin"),
    // require("@tailwindcss/line-clamp"),
  ],
};
