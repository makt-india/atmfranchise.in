/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom animations to Tailwind
      animation: {
        'fade-in-up': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up-delay': 'fadeIn 0.6s ease-out 0.3s forwards',
        'pulse-slow': 'pulse-slow-keyframes 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-left': 'fadeInLeft 0.6s ease-out 0.2s forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out 0.2s forwards',
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      // Add keyframes
      keyframes: {
        fadeIn: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-slow-keyframes': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        fadeInLeft: {
          'from': { opacity: 0, transform: 'translateX(-20px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: 0, transform: 'translateX(20px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down': {
          'from': { opacity: 0, transform: 'translateY(-10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: 0, transform: 'translateY(-10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
      },
      // Add custom shadows for the "Glow" effect
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For styling the blog post content
  ],
}