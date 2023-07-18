/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "paint-pattern": "url('/paint-pattern.png')",
        "team-image":
          "linear-gradient(90deg,#000000 50%,rgba(246,103,31,0.7) 50%),url('/team-gathered-in-office.jpg') ",
        "team-image-mobile":
          "linear-gradient(180deg,#000000 50%,rgba(246,103,31,0.9) 50%),url('/team-gathered-in-office.jpg')",
      },
      fontFamily: {
        archivo: ["Archivo", "Helvetica", "Arial", "Lucida", "sans-serif"],
      },
      colors: {
        brand: "#f6f2ea",
        marketing: "rgb(84, 79, 255)",
      },
    },
    plugins: [],
  },
};
