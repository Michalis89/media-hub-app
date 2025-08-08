/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['synthwave', 'dark', 'light', 'cupcake', 'forest'], // ό,τι θέλεις
  },
}
