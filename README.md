# Personal Portfolio Website

A responsive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- Single-page portfolio layout
- Dark/light mode support
- Responsive design and mobile-friendly UI
- Accessible focus states and skip link
- Project list with demo and GitHub links
- Scroll progress indicator

## 🧰 Tech stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS v4

## 📁 Project structure

- `src/` — application source
- `src/components/` — reusable UI and section components
- `src/data/` — portfolio content and site data
- `src/pages/Home.tsx` — main page layout
- `src/index.css` — global styles and Tailwind theme
- `vite.config.ts` — Vite configuration

## 🚀 Getting started

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`

## ⚙️ Scripts

- `npm run dev` — start development server
- `npm run build` — build production site
- `npm run preview` — preview production build
- `npm run format` — format code with `oxfmt`

## ✅ Production checklist

- `vite build` passes
- No TypeScript errors
- Image assets are served from `public/images`
- `index.html` includes canonical URL and social metadata
- `.gitignore` ignores `node_modules` and build output

## 📌 Notes

- Update the canonical URL in `index.html` to the deployed domain.
- The site uses `@tailwindcss/vite` for Tailwind CSS v4 integration.
