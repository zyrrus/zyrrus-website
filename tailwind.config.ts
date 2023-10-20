import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      screens: {
        sm: "540px",
      },
    },
    extend: {
      colors: {
        neutral: {
          50: "#fefefe", // (Dark theme) primary text | (Light theme) bg
          100: "#f5f5f5", // (Light theme) card depth 0, display text
          150: "#ededed", // (Light theme) display text
          200: "#e5e5e5", // (Light theme) borders, card depth 1
          300: "#d4d4d4",
          400: "#a3a3a3", // (Dark theme) secondary text, icons
          500: "#737373",
          600: "#525252", // (Light theme) secondary text, icons
          700: "#404040", // (Dark theme) borders
          800: "#262626", // (Light theme) primary button fill | (Dark theme) bg
          850: "#1e1e1e", // (Dark theme) display text, card depth 0
          900: "#171717", // (Light theme) primary text, card depth 1
        },
      },
      fontSize: {
        display: "12.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "cutout-depth-0": "0px 25px 15px 0px rgba(0, 0, 0, 0.25) inset",
        "cutout-depth-1":
          "0px 25px 15px 0px rgba(0, 0, 0, 0.25) inset, 0px 48px 15px 0px rgba(0, 0, 0, 0.15) inset",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchComponents, addUtilities, theme }) {
      matchComponents({
        "display-text": (value) => ({
          position: "relative",
          "&:before": {
            content: value,
            position: "absolute",
            fontWeight: "800",
            fontSize: theme("fontSize.display"),
            lineHeight: "1",
            letterSpacing: "0.09em",
            left: "-17.5rem",
            top: "0",
            transform: "translateY(-50%)",
            zIndex: "-30",
            overflow: "clip",
            "@apply text-neutral-150/95": {},
            "@apply dark:text-neutral-700/90": {},
          },
        }),
      });

      addUtilities({
        ".text-primary": {
          color: theme("colors.neutral.900"),
          "@apply dark:text-neutral-50": {},
        },
        ".text-secondary": {
          color: theme("colors.neutral.600"),
          "@apply dark:text-neutral-400": {},
        },
        // Background elevation surface (0 is base, 1 is card, ...)
        ".bg-0": {
          backgroundColor: theme("colors.neutral.50"),
          "@apply dark:bg-neutral-800": {},
        },
      });
    }),
  ],
};
