import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // Configuración para i18n
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  // Configuración para SEO
  site: 'https://desciquark.com',
  server: {
    port: 3002,
    host: true
  },
  // Excluir rutas de archivos estáticos
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
});
