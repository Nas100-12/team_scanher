// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#16308C",
          purple: "#977DF1",
          blueGray: "#7383BA",
          coral: "#FB8484",
          pink: "#FFCBCB",
        },
      },
      fontFamily: {
        display: ["Fugaz One", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
