module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Aileron'],
      heading: ['impactreg'],
    },
    extend: {
      colors: {
        primary: '#5fa425',
        secondary: '#da606c',
        neutralDarkest: '#000',
        neutralLightest: '#ffffff',
        gray: 'rgba(255, 255, 255, 0.6)',
      },
      keyframes: {
        ['bounce-slow']: {
          '0%': {
            transform: 'scale(1,1) translateY(-400%)',
          },
          '10%': {
            transform: 'scale(1.1,0.9) translateY(0)',
          },
          '30%': {
            transform: 'scale(0.9,1.1) translateY(25%)',
          },
          '50%': {
            transform: 'scale(1.05,0.95) translateY(0)',
          },
          '62.5%': {
            transform: 'scale(1,1) translateY(-5%)',
          },
          '75%': {
            transform: 'scale(1,1) translateY(0)',
          },
          '87.5%': {
            transform: 'scale(1,1) translateY(2%)',
          },
          '100%': {
            transform: 'scale(1,1) translateY(0)',
          },
        },
      },
      animation: {
        ['bounce-slow']: 'bounce 1s infinite, bounce-slow 1.5s ease-in-out',
      },
    },
    plugins: [],
  },
}
