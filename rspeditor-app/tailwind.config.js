/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#aa3bff',
          light: '#c084fc',
          bg: 'rgba(170, 59, 255, 0.1)',
          border: 'rgba(170, 59, 255, 0.5)',
        },
        text: {
          DEFAULT: '#6b6375',
          heading: '#08060d',
        },
        surface: {
          DEFAULT: '#fff',
          dark: '#16171d',
          code: '#f4f3ec',
          'code-dark': '#1f2028',
        },
        border: {
          DEFAULT: '#e5e4e7',
          dark: '#2e303a',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
