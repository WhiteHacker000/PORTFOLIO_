# Portfolio Website - React + Vite

A modern portfolio website built with React, Vite, and component-based CSS modules.

## 🚀 Features

- ⚡️ React 18 with Vite for lightning-fast development
- 🎨 Component-based CSS modules (no Tailwind)
- 📱 Fully responsive design
- 🌙 Dark neon theme with custom CSS variables
- ✨ Smooth animations and transitions
- 🎯 TypeScript support
- 📦 Clean folder structure

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   └── Navigation.module.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCard.module.css
│   │   └── ProjectsShowcase/
│   │       ├── ProjectsShowcase.tsx
│   │       └── ProjectsShowcase.module.css
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── App.module.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
│   └── (images and assets)
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

## 🏃‍♂️ Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

## 🎨 CSS Architecture

This project uses **CSS Modules** for component-scoped styling:

- Each component has its own `.module.css` file
- Global styles and CSS variables are in `src/styles/globals.css`
- No Tailwind or utility-first CSS
- All styles are vanilla CSS with modern features

### CSS Variables

The project uses CSS custom properties (variables) for theming:

```css
:root {
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.95 0 0);
  --primary: oklch(0.7 0.25 200);    /* Neon cyan */
  --accent: oklch(0.65 0.3 320);     /* Neon magenta */
  /* ... more variables */
}
```

## 📝 Component Structure

Each component follows this pattern:

```
ComponentName/
├── ComponentName.tsx       # Component logic
└── ComponentName.module.css # Component styles
```

Import and use:

```tsx
import styles from './ComponentName.module.css'

export default function ComponentName() {
  return <div className={styles.container}>...</div>
}
```

## 🔧 Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **CSS Custom Properties** - Theming

## 📄 License

MIT License - feel free to use this project for your own portfolio!
