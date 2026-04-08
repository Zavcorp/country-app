/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // escanea todos los templates Angular
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // aquí se activa DaisyUI
  ],
}
