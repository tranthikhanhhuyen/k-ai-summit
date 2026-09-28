/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#071A35',
        'corporate-blue': '#0B5CFF',
        'electric-blue': '#2563EB',
        'very-light-blue': '#F4F8FF',
        'soft-gray': '#F7F9FC',
        'glass': 'rgba(255, 255, 255, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, hsla(228,100%,94%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,96%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(228,100%,94%,1) 0px, transparent 50%)',
        'grid-pattern': 'linear-gradient(to right, #0000000a 1px, transparent 1px), linear-gradient(to bottom, #0000000a 1px, transparent 1px)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
