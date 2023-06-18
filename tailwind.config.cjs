const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        container: {
            center: true,
            padding: "1.6rem",
        },
        screens: {
            xs: "400px",
            sm: "550px",
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
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
