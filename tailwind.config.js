/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#59C6D2",
        "custom-green": "#23BE0A",
      },
      fontFamily: {
        PlayDis: ["Playfair Display", "serif"],
        Worsens: ["Work Sans", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
