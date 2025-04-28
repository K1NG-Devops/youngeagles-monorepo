const sharedConfig = require('../../packages/ui/tailwind.config.js');
const { theme, ...rest } = sharedConfig;

module.exports = {
  ...sharedConfig,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    ...sharedConfig.content,
  ],
}




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//     theme: {
//       extend: {},
//     },
//     plugins: [require('daisyui')],
//   }

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "../../ui/components/**/*.{js,jsx}" // <-- so it picks up your shared Navbar
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
