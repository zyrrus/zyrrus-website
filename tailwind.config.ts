import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import { type PluginAPI } from "tailwindcss/types/config";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "588px",
      },
    },
    extend: {
      screens: {
        sm: "588px",
      },
      colors: {
        neutral: {
          50: "#fefefe", // (Dark theme) primary text | (Light theme) bg
          100: "#f5f5f5", // (Light theme) card depth 0, display text
          150: "#ededed", // (Light theme) display text
          200: "#e5e5e5", // (Light theme) borders, card depth 1, code bg
          300: "#d4d4d4", // (Dark theme) code text
          400: "#a3a3a3", // (Dark theme) secondary text, icons
          500: "#737373",
          600: "#525252", // (Light theme) secondary text, icons
          700: "#404040", // (Dark theme) borders, display text (25%) | (Light theme) code text
          750: "#333333", // (Dark theme) card highlight
          800: "#262626", // (Light theme) primary button fill | (Dark theme) bg
          850: "#212121", // (Dark theme) card depth 0
          900: "#171717", // (Dark theme) card depth 1 | (Light theme) primary text
          950: "#131313", // (Dark theme) code bg
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
      transitionTimingFunction: {
        "bounce-up": "cubic-bezier(0.5, 2.5, 0.7, 0.7)",
      },
      typography(theme: PluginAPI["theme"]) {
        return {
          DEFAULT: {
            css: {
              "code::before": { content: "none" },
              "code::after": { content: "none" },
              // Inline code blocks
              "code:not(:is(pre code))": {
                padding: "0.2em 0.4em",
                whiteSpace: "break-spaces",
                fontSize: "85%",
                fontWeight: "400",
                borderRadius: "6px",
                // Light theme
                color: theme("colors.neutral.700"),
                backgroundColor: theme("colors.neutral.200"),
              },
              ".dark code:not(:is(pre code))": {
                color: theme("colors.neutral.300"),
                backgroundColor: theme("colors.neutral.950"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ matchComponents, addUtilities, theme }) {
      matchComponents({
        "display-text": (value) => ({
          position: "relative",
          "&:before": {
            content: value,
            position: "absolute",
            fontWeight: "800",
            fontSize: "min(12.5rem, calc(1.5rem + 10vw))",
            lineHeight: "1",
            letterSpacing: "0.09em",
            left: "clamp(-17.5rem, calc(-43vw + 20rem), 0px)",
            top: "0",
            transform: "translateY(-50%)",
            zIndex: "-30",
            "@apply text-neutral-150": {},
            "@apply dark:text-neutral-700/25": {},
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
        ".bg-1": {
          backgroundColor: theme("colors.neutral.100"),
          "@apply dark:bg-neutral-850": {},
        },
        ".bg-2": {
          backgroundColor: theme("colors.neutral.200"),
          "@apply dark:bg-neutral-900": {},
        },
      });
    }),
  ],
} satisfies Config;
