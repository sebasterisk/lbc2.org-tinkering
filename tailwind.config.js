/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'yellow': {
        100: '#facc7d',
        200: '#F0A500',
      },
      'blue': {
        'placeholder': '#33475690',
        50: '#cacde3',
        100: '#b9b8ff',
        200: '#5e7ccf',
        300: '#2144a7',
        400: '#0e2872',
        500: '#091a4b',
        600: '#04133a',
        700: '#020c27',
        800: '#000010',
        900: '#000004',
      },
      'error': '#FF0000',
    },
    borderWidth: {
      default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        'cursor': '25px'
    },
    fontFamily: {
      sans: ['Source Code Pro', 'Ubuntu Mono', 'sans-serif']
    },
    extend: {
      dropShadow: {
        'dark': '0 3px 2px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 8px rgba(17, 0, 255, 0.50)',
      },
      textColor: {
        'transparent': 'transparent',
      },
      width: {
        '120': '30rem',
      }
    },
  },
  plugins: [],
}

