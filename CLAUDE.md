# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio application using the App Router architecture, TypeScript, and Tailwind CSS v4. The project was bootstrapped with create-next-app and uses React 19.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000 with hot reload
- `npm run build` - Create production build
- `npm start` - Run production server (requires build first)
- `npm run lint` - Run ESLint (only the command, no auto-fix configured)

## Architecture

### Next.js App Router Structure
- Uses Next.js App Router (not Pages Router) with `app/` directory
- `app/layout.tsx` - Root layout with Geist font configuration (sans and mono variants)
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS v4 and custom CSS variables

### Styling Approach
- **Tailwind CSS v4** via PostCSS plugin (`@tailwindcss/postcss`)
- Uses Tailwind's new `@theme inline` directive for custom design tokens
- CSS custom properties for theming (--background, --foreground)
- Automatic dark mode support via `prefers-color-scheme`
- Font variables defined: `--font-geist-sans` and `--font-geist-mono`

### TypeScript Configuration
- Path alias: `@/*` maps to root directory
- Strict mode enabled
- JSX transform: `react-jsx` (automatic runtime)
- Module resolution: `bundler`

### ESLint Configuration
- Uses new flat config format (eslint.config.mjs)
- Extends Next.js recommended configs: `core-web-vitals` and `typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Implementation Details

### Font Loading
Fonts are loaded via `next/font/google` (Geist and Geist_Mono) and applied through CSS variables in the root layout. When modifying fonts, update both the import and the className in layout.tsx.

### Image Optimization
Uses Next.js `Image` component for automatic optimization. Static assets are in `public/` and referenced with absolute paths (e.g., `/next.svg`).

### Dark Mode
Dark mode is CSS-based using media queries, not JavaScript. The `dark:` Tailwind variants work automatically with system preferences.
