/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'sans-serif'],
        'ibm-plex': ['IBM Plex Serif', 'Helvetica', 'sans-serif']

    },
  },
  plugins: [],
}
}