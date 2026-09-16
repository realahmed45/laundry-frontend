/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled from the logo: the deep wave blue, the lighter droplet blue,
        // and the leaf green the CTA buttons use.
        brand: {
          blue: '#1B8EF2',
          deep: '#0B63C5',
          dark: '#0A4C9A',
          sky: '#E8F4FE',
          mist: '#F2F8FD',
        },
        leaf: '#3FAF46',
        ink: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
}
