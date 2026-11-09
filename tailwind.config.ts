import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F1EFE9",
        ink: "#17262B",
        "ink-dark": "#0E1517",
        honey: "#C68A3E",
        "honey-light": "#D79A4C",
        sage: "#51776B",
        "sage-light": "#6FA08F",
        line: "#D8D3C7",
        "line-dark": "#2A3A3D",
        "night-bg": "#121B1E",
        "night-text": "#EDEAE2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
