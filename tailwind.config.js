/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#22C55E",
          main: "#22C55E",
          hover: "#16A34A",
          muted: "#166534",
        },
        secondary: "#334155",
        ink: "#070B14",
        surface: {
          light: "#FFFFFF",
          dark: "#1E293B",
        },
        grey: {
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        lift: "0 10px 15px rgba(15, 23, 42, 0.12)",
        glow: "0 0 40px rgba(34, 197, 94, 0.18)",
      },
      backgroundImage: {
        heropattern: "url(/herobgc.jpg)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
