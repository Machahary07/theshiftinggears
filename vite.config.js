import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react'
            if (
              id.includes('gsap') ||
              id.includes('matter-js') ||
              id.includes('lucide-react')
            )
              return 'vendor_ui'
            return 'vendor'
          }
        },
      },
    },
  },
})
