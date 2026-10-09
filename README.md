# William Greenwood — Portfolio

**[williamgreenwood1027.github.io/portfolio](https://williamgreenwood1027.github.io/portfolio/)**

Personal portfolio of **William Greenwood**, Senior Software Engineer & Full Stack Developer.

Built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**: a dark, space-themed design with an animated galaxy background, glassmorphism cards, and a built-in portfolio assistant.

## Features

- Animated canvas galaxy and starfield with mouse parallax
- Typing role animation, scroll-reveal sections and animated impact counters
- Portfolio Assistant chat that answers questions from résumé data (no external API)
- Technology stack marquee and grouped skill cards
- Featured project cards with animated SVG diagrams
- Expandable career timeline
- Contact form (opens the visitor's mail client)
- Responsive layout with a mobile drawer menu, scroll progress bar and back-to-top button
- Respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # preview the static build in ./out
```

## Editing content

All résumé content lives in [`lib/data.ts`](lib/data.ts): profile, stats, skills, projects, experience and assistant answers.
The downloadable résumé is [`public/William-Greenwood-Resume.pdf`](public/William-Greenwood-Resume.pdf).

## Deploy

**Live:** https://williamgreenwood1027.github.io/portfolio/

Every push to `main` builds a static export and deploys it to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It also deploys to [Vercel](https://vercel.com/new) with zero configuration.

## Project structure

```
app/
  layout.tsx       # metadata, fonts
  page.tsx         # page sections
  globals.css      # theme and styles
components/        # Galaxy, Nav, Assistant, Experience, ...
lib/data.ts        # all portfolio content
public/            # résumé PDF, favicon
```
