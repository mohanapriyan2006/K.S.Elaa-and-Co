/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F4C41C',
        primaryHover: '#EAB308',
        brown: '#4A2E12',
        brownDark: '#3A240F',
        mediumBrown: '#6B4226',
        lightBrown: '#A67C52',
        background: '#FAF9F6',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
        yellowSoft: '#FFF4CC',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 35px -20px rgba(74, 46, 18, 0.35)',
      },
    },
  },
  plugins: [],
}

