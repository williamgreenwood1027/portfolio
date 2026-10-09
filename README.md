# William Greenwood — Portfolio

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
npm start        # serve the production build
```

## Editing content

All résumé content lives in [`lib/data.ts`](lib/data.ts): profile, stats, skills, projects, experience and assistant answers.
The downloadable résumé is [`public/William-Greenwood-Resume.pdf`](public/William-Greenwood-Resume.pdf).

## Deploy

The site is fully static and deploys to [Vercel](https://vercel.com/new) with zero configuration: import this repository and click **Deploy**.

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
