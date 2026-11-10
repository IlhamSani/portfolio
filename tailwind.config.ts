import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-jp)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d5dfe9',
          200: '#a8bdd3',
          300: '#7b9abc',
          400: '#4e78a6',
          500: '#1e3a5f',
          600: '#1a3354',
          700: '#152a45',
          800: '#0f1f33',
          900: '#0a1522',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
    },
  },
  plugins: [],
};

export default config;
