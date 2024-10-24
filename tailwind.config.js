const plugin = require('tailwindcss/plugin');
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
  ...defaultColors,
  ...{
    secwhite: '#F2F3F4',
    bgCol: '#FFF3EB',
    bgCola: '#FFF8F0',
    buttonCol: '#FFF8F3',
    txtpri: '#FFF3EB',
    txtsec: '#001',
    tertiary: '#3A3F44',
    // tertiary: '#606c38',
    olive: '#606c38',
    myGray: '#5D666F',
    slateGray: '#3A3F44',
    onyx: '#353839',
    gunMetal: '#2C3E50',
    deepSpace: '#2D2D2D',
    graphite: '#383838',
    charcoal: '#333333',
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
        sans: ['var(--font-geist-sans)']
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
        carousel: 'marquee 60s linear infinite',
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
