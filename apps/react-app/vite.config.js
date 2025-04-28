import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbitePlugin from 'flowbite/plugin'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      flowbitePlugin()
    ],
  server: {
    historyApiFallback: true,
  }
})
