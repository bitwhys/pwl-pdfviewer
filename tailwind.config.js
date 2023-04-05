const { fontFamily } = require("tailwindcss/defaultTheme")
const { radixToTailwind } = require("./lib/radixToTailwind")
const {
  sand,
  sandDark,
  slate,
  slateDark,
  indigo,
  indigoDark,
  blue,
  blueDark,
  olive,
  oliveDark,
  lime,
  limeDark,
} = require("@radix-ui/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
      colors: {
        neutral: radixToTailwind(slate),
        neutralDark: radixToTailwind(slateDark),
        primary: radixToTailwind(blue),
        primaryDark: radixToTailwind(blueDark),
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
