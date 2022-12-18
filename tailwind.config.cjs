/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        desktop: "90.625rem",
        mobile: "20rem",
      },
      minWidth: {
        mobile: "20rem",
      },
      colors: {
        light: "#FFFFFF",
        dark: "#303030",
        exDark: "#141414",
        footer: "hsla(0, 0%, 8%, 1)",
        accent: "#16E0BD",
        accent2: "#1C4B43",
        red: "rgb(237, 44, 73)",
      },
      backgroundImage: {
        services: "url('/src/assets/services-bg.jpg')",
      },
    },
  },
  plugins: [],
};
