/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "fade-out": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          },
        },
      },
      animation:{
        fadeout: 'fade-out 1s ease-out 0.25s 1',
      },
    },
  },
  plugins: [],
};
