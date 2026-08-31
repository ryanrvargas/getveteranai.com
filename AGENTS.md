# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A basic single-page marketing-style website with sections for a hero, about, features, and contact. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── placeholder.png
├── src
│   ├── routes
│   │   ├── __root.tsx  # Root layout: HTML shell, global styles, page metadata.
│   │   └── index.tsx   # The single home page (/) with hero, about, features, and contact sections.
│   ├── router.tsx       # TanStack Router setup.
│   └── styles.css       # Tailwind entry point + global styles.
├── netlify.toml          # Netlify build command and publish directory.
├── package.json
├── tsconfig.json
└── vite.config.ts        # Vite config: TanStack Start, React, Tailwind, Netlify plugins.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`

To add a new page, create a new file under `src/routes/` (e.g. `src/routes/about.tsx`) exporting a `Route` via `createFileRoute`.

## Conventions

### Styling
- Tailwind CSS utility classes only, no separate CSS files per component
- Global styles and the Tailwind import live in `src/styles.css`

### TypeScript
- Strict mode enabled
- Import paths use the `@/` alias for `src/*`

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```
