/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "400px",
      sm: "600px",
      md: "728px",
      lg: "984px",
    },
    extend: {
      colors: {
        bg: "#151515",
        mix: "#ffffff88",
        fg: "#ffffff",
        "gruv-red": "#EA6962",
        "gruv-yel": "#E78A4E",
        "gruv-grn": "#A9B665",
        "gruv-cya": "#89B482",
        "gruv-blu": "#7DAEA3",
        "gruv-mag": "#D3869B",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
