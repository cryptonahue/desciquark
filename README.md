# 🧬 DeSci Quark

**Plataforma educativa para "Blockchain Fundamentals and Advanced Tools for Scientists using Cardano"**

Una landing page moderna y multiidioma construida con Astro, diseñada para introducir a científicos y académicos al mundo de la ciencia descentralizada (DeSci) a través de blockchain y Cardano.

## ✨ Características

- 🌍 **Soporte multiidioma** - Español e Inglés completamente soportados
- 📱 **Diseño responsive** - Optimizado para todos los dispositivos
- 🎨 **Diseño moderno** - Estilo Bento con efectos Glassmorphism
- 🎥 **Contenido multimedia** - Videos embebidos y galería de oradores
- 📝 **Sistema de pre-registro** - Integración con formularios Tally
- ⚡ **Rendimiento optimizado** - Construido con Astro para máxima velocidad
- 🔍 **SEO optimizado** - Meta tags y estructura semántica

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v5.7.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.3.5
- **Interactividad**: [React](https://react.dev/) v19.1.0
- **Lenguaje**: TypeScript v5.8.3
- **Gestión de paquetes**: PNPM
- **Despliegue**: Vercel

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18 o superior)
- PNPM (v8 o superior)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/desciquark.git
cd desciquark

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Visita `http://localhost:4321` para ver el proyecto en desarrollo.

### Scripts Disponibles

```bash
pnpm dev       # Inicia el servidor de desarrollo
pnpm build     # Construye el proyecto para producción
pnpm preview   # Previsualiza la build de producción
pnpm start     # Alias para 'pnpm dev'
```

## 📁 Estructura del Proyecto

```
desciquark/
├── public/                 # Archivos estáticos
│   ├── icons/             # Iconos SVG
│   ├── images/            # Imágenes y assets
│   │   ├── companies/     # Logos de empresas colaboradoras
│   │   └── speakers/      # Fotos de oradores
│   └── speaker/           # Documentación de oradores
├── src/
│   ├── components/        # Componentes Astro y React
│   │   ├── PreRegister/   # Componentes de pre-registro
│   │   └── SocialMedia/   # Componentes de redes sociales
│   ├── content/           # Contenido estructurado
│   │   └── speakers/      # Perfiles de oradores (ES/EN)
│   ├── i18n/             # Configuración de internacionalización
│   ├── layouts/          # Layouts base
│   ├── pages/            # Páginas del sitio
│   │   ├── [lang]/       # Páginas dinámicas por idioma
│   │   ├── en/           # Páginas en inglés
│   │   └── es/           # Páginas en español
│   └── styles/           # Estilos globales
├── trash/                # Archivos temporales (ignorado por git)
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
└── vercel.json          # Configuración de despliegue
```

## 🌍 Internacionalización

El proyecto soporta español (por defecto) e inglés:

- **Español**: `/` (raíz)
- **Inglés**: `/en/`

Las traducciones se gestionan a través de:
- `src/i18n/ui.ts` - Diccionario de traducciones
- `src/i18n/utils.ts` - Utilidades de i18n

## 🎯 Funcionalidades Principales

### 🏠 Landing Page
- Hero section con video promocional
- Resumen del curso y objetivos
- Contenido del curso con acordeones interactivos
- Galería de oradores con perfiles detallados
- Sección de comunidad y FAQ
- Call-to-action para pre-registro

### 👥 Sistema de Oradores
- Perfiles bilingües almacenados en `src/content/speakers/`
- Imágenes optimizadas y responsive
- Información detallada de cada orador

### 📝 Pre-registro
- Formularios Tally integrados por idioma
- Páginas dedicadas: `/pre-registro` y `/en/pre-registration`
- Información de beneficios para early adopters

## 🎨 Diseño y UI/UX

- **Paleta de colores**: Gradientes modernos con tonos azules y morados
- **Tipografía**: System fonts optimizadas para legibilidad
- **Componentes**: Modulares y reutilizables
- **Animaciones**: Transiciones suaves y micro-interacciones
- **Accesibilidad**: Implementación de mejores prácticas

## 🚀 Despliegue

El proyecto está configurado para despliegue automático en Vercel:

```bash
pnpm build  # Genera archivos optimizados en /dist
```

La configuración de despliegue se encuentra en `vercel.json`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas sobre el curso o la plataforma, contáctanos a través de nuestros canales oficiales.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**🧬 DeSci Quark** - Democratizando el acceso a la ciencia descentralizada a través de la educación blockchain.