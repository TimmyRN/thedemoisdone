/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082', // Dark purple
        secondary: '#FAF0CA', // Light cream
        primaryDark: '#6A0DAD', // Slightly lighter purple for hover
        accent: '#F4D35E', // Warm yellow
        background: '#F0F4F8', // Very light gray
        textPrimary: '#333333', // Dark gray for text
        textSecondary: '#555555', // Medium gray for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
