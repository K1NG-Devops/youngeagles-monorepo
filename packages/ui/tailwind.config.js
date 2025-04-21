// packages/ui/tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // For React apps
    '../../apps/**/*.{js,jsx,ts,tsx}',
    // For Angular apps
    '../../apps/**/*.{html,ts}',
    // Shared packages
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.emerald,
        neutral: colors.gray,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        skydek: {
          primary: '#2563eb', // blue-600
          secondary: '#10b981', // emerald-500
          accent: '#f472b6', // pink-400
          neutral: '#374151', // gray-700
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-content': '#1f2937', // gray-800
        },
      },
      'dark',
      'cupcake',
    ],
    darkTheme: 'dark',
  },
};
