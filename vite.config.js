import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio_Daryl_Dixon/', // Ruta base para GitHub Pages
  build: {
    cssCodeSplit: true, // Mantén los CSS divididos
    rollupOptions: {
      input: {
        main: 'index.html',
        historia: 'historia.html',
        habilidades: 'habilidades.html',
        experiencias: 'experiencias.html',
        proyectos: 'proyectos.html',
        contacto: 'contacto.html',
        navegacion: 'navegacion.html',
        footer: 'footer.html',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
