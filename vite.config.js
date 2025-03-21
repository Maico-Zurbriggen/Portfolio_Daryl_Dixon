import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/pending_task/', // Base URL para GitHub Pages 
  build: { 
    rollupOptions: { 
      output: { 
        entryFileNames: '[name].js', 
        chunkFileNames: '[name].js', 
        assetFileNames: '[name][extname]', 
      }, 
    }, 
  }, 
});