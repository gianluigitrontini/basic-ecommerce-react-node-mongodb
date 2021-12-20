module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeIn: 'fadeIn 0.25s ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
      }),
      boxShadow: {
        classic: '0 0 15px rgba(0,0,0,0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
