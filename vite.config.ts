import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // En GitHub Pages se aloja en /holding-capara/; en Render o local usa './'
  base: process.env.GITHUB_ACTIONS ? '/holding-capara/' : './',
  plugins: [
    // Tailwind CSS v4 nativo: sin PostCSS, motor Oxide (Rust)
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,       // nunca inline images
    target: 'esnext',           // output moderno, sin transpilación innecesaria
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
})
