/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-50': '#f0f4ff',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}