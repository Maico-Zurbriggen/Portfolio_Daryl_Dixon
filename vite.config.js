import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio_Daryl_Dixon/',
  build: { 
    rollupOptions: { 
      input: {
        main: 'index.html',
        historia: 'historia.html',
        habilidades: 'habilidades.html',
        experiencias: 'experiencias.html',
        proyectos: 'proyectos.html',
        contacto: 'contacto.html',
      },
      output: { 
        entryFileNames: '[name].js', 
        chunkFileNames: '[name].js', 
        assetFileNames: '[name][extname]', 
      }, 
    }, 
  }, 
});