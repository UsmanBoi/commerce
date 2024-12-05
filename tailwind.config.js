const plugin = require('tailwindcss/plugin');
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    myPink: {
      50: '#FFF3EB',
      100: '#FFF8F0',
      200: '#FFF8F3',
      300: '#EDDDD4',
      400: '#dbd3d8',
      500: '#d8b4a0'
    },
    myblacks: {
      50: '#333A3F',
      100: '#262626'
    },
    secwhite: '#F2F3F4',
    bgCol: '#FFF3EB',
    bgCola: '#FFF8F0',
    txtpri: '#333333',
    txtsec: '#FFF3EB',
    tertiary: '#3A3F44',
    olive: '#606c38',
    myGray: '#5D666F',
    'white-antiflash': '#EFF1F3',
    slateGray: '#3A3F44',
    onyx: '#353839',
    gunMetal: {
      50: '#223843',
      100: '#2C3E50',
      150: '#2C363F',
      // 200: '#606c38',
      // 300: '#606c38'
      200: '#375B6D',
      300: '#223843'
    },
    deepSpace: '#2D2D2D',
    graphite: '#383838',
    charcoal: '#333333',
    charcoal2: '#294451',
    myYellow: {
      500: '#EDAE0A'
    }
  }
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['var(--font-josefinsans)', 'sans-serif'], // Default font
        body: ['var(--font-montserrat)', 'sans-serif'] // For paragraphs
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 40s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
