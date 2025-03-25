const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-width": "border-width 3s infinite alternate",
        "background-shine": "background-shine 1s linear infinite"
      },
      "keyframes": {
        "border-width": {
          "from": {
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "width": "200px",
            "opacity": "1"
          }
        },
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      screens: {
        'xs': '480px',
      },
      container: {
        center: true,
        padding: '.5rem',
      },
      fontFamily: {
        'body': ["Roboto", "sans-serif"],
        'heading': ["Nunito", "sans-serif"],
        'nioicon': ["Nioicon"]
      },
      fontSize: {
        'xxs':'11px',
      },
      lineHeight:{
        'tighter' : '1.1',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
      },
      letterSpacing: {
        'snug': '0.01em',
        'relaxed': '0.2em'
      },
      colors: {
        primary:{
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0050cf',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        yellow:{
          50: '#fef8e7',
          100: '#fef8e4',
          200: '#fcebb7',
          300: '#fbe59f',
          400: '#f8d76e',
          500: '#f6ca3e',
          600: '#f4bd0e',
          700: '#c3970b',
          800: '#927108',
          900: '#624c06',
          950: '#312603',
        },
        red:{
          50: '#fdeeed',
          100: '#fceceb',
          200: '#f8cbc8',
          300: '#f6bab5',
          400: '#f19891',
          500: '#ed756c',
          600: '#e85347',
          700: '#ba4239',
          800: '#8b322b',
          900: '#2e110e',
          950: '#2e110e',
        },
        slate:{
          50: '#f5f7fd',
          100: '#ecf2ff',
          200: '#dfe9fe',
          300: '#b6c6e3',
          400: '#8094ae',
          500: '#6e82a5',
          600: '#526484',
          700: '#364a63',
          800: '#203145',
          900: '#1c2b46',
          950: '#131f34',
        },
        gray: {
          50: '#f7fafc',
          100: '#ebeef2',
          200: '#e5e9f2',
          300: '#dbdfea',
          400: '#b7c2d0',
          500: '#8091a7',
          600: '#3c4d62',
          700: '#344357',
          800: '#2b3748',
          900: '#1f2b3a',
          950: '#101924',
          1000: '#0d141d',
        },
      },
      spacing: {
        '0.75': '0.1875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
      }
    },
  },
  plugins: [],
});