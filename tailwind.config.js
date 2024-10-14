/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: [
        "Roboto",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.75rem" }], // font-size: 10px, line-height: 12px
        xxsxs: ["0.6875rem", { lineHeight: "1.125rem" }], // font-size: 11px, line-height: 18px
        xssm: ["0.8125rem", { lineHeight: "1.25rem" }], // font-size: 13px, line-height: 20px
      },
      margin: {
        25: "6.25rem", // 100px
      },
      width: {
        111: "27.75rem", // 444px
      },
      maxWidth: {
        120: "30rem", // 480px
      },
      borderRadius: {
        smmd: "0.25rem", // 4px
      },
      colors: {
        primary: {
          DEFAULT: "#6C60FE",
          50: "#ffffff",
          100: "#f0efff",
          200: "#e2dfff",
          300: "#d3cfff",
          400: "#c4bfff",
          500: "#b6b0ff",
          600: "#a7a0fe",
          700: "#8980fe",
          800: "#7b70fe",
          900: "#6c60fe",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        background: {
          50: "#F2F3FF",
        },
      },
      screens: {
        xs: "480px",
      },

      typography: () => ({
        DEFAULT: {
          css: {
            ul: {
              listStyleType: "disc",
            },
            ol: {
              listStyleType: "decimal",
            },
          },
        },
      }),
    },
  },
  plugins: [],
};
