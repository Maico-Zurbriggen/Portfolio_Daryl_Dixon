import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
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