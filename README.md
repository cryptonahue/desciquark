# 🧬 DeSci Quark

**Educational platform for "Blockchain Fundamentals and Advanced Tools for Scientists using Cardano"**

A modern, multilingual landing page built with Astro, designed to introduce scientists and academics to the world of decentralized science (DeSci) through blockchain and Cardano technology.

## ✨ Features

- 🌍 **Multi-language support** - Full Spanish and English localization
- 📱 **Responsive design** - Optimized for all devices and screen sizes
- 🎨 **Modern design** - Bento-style layout with Glassmorphism effects
- 🎥 **Multimedia content** - Embedded videos and speaker gallery
- 📝 **Pre-registration system** - Integrated Tally forms
- ⚡ **Optimized performance** - Built with Astro for maximum speed
- 🔍 **SEO optimized** - Meta tags and semantic structure

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.7.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.3.5
- **Interactivity**: [React](https://react.dev/) v19.1.0
- **Language**: TypeScript v5.8.3
- **Package Manager**: PNPM
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- PNPM (v8 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/desciquark.git
cd desciquark

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to view the project in development.

### Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm start     # Alias for 'pnpm dev'
```

## 📁 Project Structure

```
desciquark/
├── public/                 # Static assets
│   ├── icons/             # SVG icons
│   ├── images/            # Images and assets
│   │   ├── companies/     # Partner company logos
│   │   └── speakers/      # Speaker photos
│   └── speaker/           # Speaker documentation
├── src/
│   ├── components/        # Astro and React components
│   │   ├── PreRegister/   # Pre-registration components
│   │   └── SocialMedia/   # Social media components
│   ├── content/           # Structured content
│   │   └── speakers/      # Speaker profiles (ES/EN)
│   ├── i18n/             # Internationalization config
│   ├── layouts/          # Base layouts
│   ├── pages/            # Site pages
│   │   ├── [lang]/       # Dynamic language pages
│   │   ├── en/           # English pages
│   │   └── es/           # Spanish pages
│   └── styles/           # Global styles
├── trash/                # Temporary files (git ignored)
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── vercel.json          # Deployment configuration
```

## 🌍 Internationalization

The project supports Spanish (default) and English:

- **Spanish**: `/` (root)
- **English**: `/en/`

Translations are managed through:
- `src/i18n/ui.ts` - Translation dictionary
- `src/i18n/utils.ts` - i18n utilities

## 🎯 Key Features

### 🏠 Landing Page
- Hero section with promotional video
- Course summary and objectives
- Interactive course content with accordions
- Speaker gallery with detailed profiles
- Community section and FAQ
- Call-to-action for pre-registration

### 👥 Speaker System
- Bilingual profiles stored in `src/content/speakers/`
- Optimized and responsive images
- Detailed information for each speaker

### 📝 Pre-registration
- Tally forms integrated by language
- Dedicated pages: `/pre-registro` and `/en/pre-registration`
- Early adopter benefits information

## 🎨 Design & UI/UX

- **Color palette**: Modern gradients with blue and purple tones
- **Typography**: System fonts optimized for readability
- **Components**: Modular and reusable architecture
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: Best practices implementation

## 🚀 Deployment

The project is configured for automatic deployment on Vercel:

```bash
pnpm build  # Generate optimized files in /dist
```

Deployment configuration is located in `vercel.json`.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📧 Contact

For questions about the course or platform, contact us through our official channels.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

**🧬 DeSci Quark** - Democratizing access to decentralized science through blockchain education.