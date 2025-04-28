import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'  // <-- Import path module

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@youngeagles/ui": path.resolve(__dirname, "../../packages/ui"),
    },
  },
  server: {
    historyApiFallback: true,
  }
})
