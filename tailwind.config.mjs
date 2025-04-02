/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        thin: "#c0c0c0b0",
        vertical: "#fff",
        thickmain: "#fff",
        thicksub: "#fff",
      },
      fontFamily: {
        main: ['Xanh Mono', 'serif'],
        sub: ['JetBrains Mono', 'sans-serif'],
        background: ['Inter', 'serif']
      },
      backgroundImage: {
        'custom-bg': "url('/bg.png')",
      },
      animation: {
        'blink': "blink 0.5s step-end infinite"
      },
      keyframes: {
        blink: {
          "from, to": {
            color: "transparent"
          },
          "50%": {
            color: "black" 
          }
        }
      }
    },
  },
  plugins: [],
};
