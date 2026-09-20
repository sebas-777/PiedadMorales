// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebas-777.github.io',
  base: '/PiedadMorales',
  vite: {
    plugins: [tailwindcss()]
  }
});