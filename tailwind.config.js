/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajoutez ici les extensions de fichiers que vous utilisez
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'], // Ajoutez la police Spartan
      },
      boxShadow: {
        'custom': '4px 7px 24px -1px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
