/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1440px',
      },
      fontFamily: {
        sans: ['SVN-Gilroy', 'sans-serif'],
      },

      colors: {
        'custom-1': '#FCEED5',
        'custom-2': '#FFE7BA',
        neutral: {
          10: '#fdfdfd',
          20: '#00171f',
          40: '#667479',
          60: '#ccd1d2',
          80: '#242b33',
          100: '#00171F',
        },
        primary: {
          'dark-blue': '#003459',
          'dark-blue-40': '#0078cd',
          'dark-blue-60': '#00528c',
          'dark-blue-80': '#002a48',
        },
        secondary: {
          'mon-yellow': '#f7dba7',
          'mon-yellow-40': '#fceed5',
          'mon-yellow-60': '#f1d092',
          'mon-yellow-80': '#eec77e',
        },
        state: {
          'blue-sea': '#00a7e7',
          'green-light': '#34c759',
          'orange-shine': '#ff912c',
          'pink-red': '#ff564f',
        },
      },
      fontSize: {
        small: '14px',
        base: '16px',
        large: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
      },
      boxShadow: {
        1: '0px 4px 28px -2px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
