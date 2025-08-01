// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Habilitar imágenes responsivas automáticamente
    responsiveStyles: true,
    layout: 'constrained',
    // Autorizar dominios externos si usas CDNs
    domains: [],
    // Formatos de salida optimizados
    formats: ['webp', 'jpg'],
    // Calidad de compresión
    quality: 85,
  },
});
