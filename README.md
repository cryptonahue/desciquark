# DeSci Quark

Landing page para el curso "Blockchain Fundamentals and Advanced Tools for Scientists using Cardano".

## Descripción

DeSci Quark es una plataforma educativa dedicada a introducir a científicos y académicos al mundo de la ciencia descentralizada a través de blockchain y Cardano.

## Tecnologías utilizadas

- [Astro](https://astro.build/) v5.7.3
- [Tailwind CSS](https://tailwindcss.com/) para estilizado
- Componentes modulares
- Diseño responsive
- Soporte multiidioma (Español e Inglés)
- SEO optimizado

## Características

- Diseño moderno con estilo Bento y Glassmorphism
- Barra de navegación con selector de idioma
- Hero section con video embebido
- Acordeones para mostrar el contenido del curso
- Sección de FAQ
- Modal de pre-registro
- Diseño completamente responsive

## Desarrollo

### Requisitos previos

- Node.js (versión recomendada: 18 o superior)
- PNPM (versión 8 o superior)

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/yourusername/desciquark.git
   cd desciquark
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

4. Abre tu navegador en `http://localhost:4321`

### Construcción para producción

```bash
pnpm build
```

Los archivos de la build se generarán en la carpeta `dist/`.

## Estructura del proyecto

```
desciquark/
├── public/              # Archivos estáticos
│   ├── images/          # Imágenes
│   └── favicon.svg      # Favicon
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── i18n/            # Configuración de internacionalización
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas del sitio
│   │   ├── en/          # Páginas en inglés
│   │   └── ...          # Páginas en español (raíz)
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind CSS
└── package.json
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
