module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '360px',
      // => @media (min-width: 360px) { ... }

      sm: '425px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1300px',
      // => @media (min-width: 1300px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    extend: {
      fontFamily: {
        openSans: '"Open Sans", sans-serif',
      },
      padding: {
        76: '19rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
