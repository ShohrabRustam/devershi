import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#07111f',
          'bg-soft': '#0f1d31',
          text: '#f5f7fb',
          muted: '#9fb0c8',
          accent: '#7c9cff',
          'accent-2': '#34d399',
          border: 'rgba(255,255,255,0.12)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
