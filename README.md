# LijiHR — Marketing Website

> The official marketing website for **LijiHR**, a production-grade multi-tenant HR platform by **Liji Groups**.

Live at **[lishr.in](https://lishr.in)**

---

## Overview

This is the Next.js 16 marketing site for LijiHR. It covers product features, pricing plans, solutions by audience, blog, about, and contact — all statically pre-rendered for maximum performance.

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.2.4 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Lucide React | 1.14.0 |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, features, how it works, pricing, testimonials, CTA |
| `/features` | Full module breakdown — 8 modules, tech stack, platform features |
| `/pricing` | Plans (Free / Basic / Premium / Enterprise), comparison table, FAQs |
| `/solutions` | Audience pages — HR Teams, Agencies, Enterprise |
| `/about` | Mission, values, timeline, Liji Groups |
| `/blog` | Articles on HR ops, engineering, and product updates |
| `/contact` | Contact form, email channels, response times |

---

## Project Structure

```
lijihr/
├── app/
│   ├── page.tsx                  # Home
│   ├── layout.tsx                # Root layout
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── solutions/page.tsx
│   └── components/
│       ├── Navbar.tsx            # Sticky nav with Features + Solutions dropdowns
│       ├── Hero.tsx
│       ├── Features.tsx          # 12-module feature grid
│       ├── Pricing.tsx           # 4-plan pricing cards
│       ├── Stats.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── public/
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

All pages are statically pre-rendered (`○ Static`) — no server required after build.

### Lint

```bash
npm run lint
```

---

## Design System

| Token | Value |
|---|---|
| Primary accent | `red-600` |
| Dark surface | `gray-950` |
| Heading weight | `font-black` (900) |
| Body weight | `font-medium` / `font-bold` |
| Card radius | `rounded-2xl` / `rounded-3xl` |
| Label style | `text-[10px] font-black uppercase tracking-widest` |
| Section padding | `py-24 px-6` |
| Max content width | `max-w-6xl` / `max-w-7xl` |

---

## Key Components

### Navbar
Sticky with scroll-aware transition (transparent on home hero → `bg-white/95` on scroll).  
Mega-menu dropdowns for **Features** (6 items) and **Solutions** (3 items). Fully responsive with a mobile drawer.

### Features Grid (`/features`)
Eight detailed module sections alternating left/right layout, each with a mock UI visual.  
Followed by tech stack cards and platform-wide feature cards (JWT, hexagonal architecture, multi-tenancy, REST API).

### Pricing Page (`/pricing`)
Four-column plan grid — **Free · Basic ($29) · Premium ($79) · Enterprise (Custom)**.  
Nineteen-row feature comparison table and eight FAQs with accurate product-specific answers.

### Solutions Page (`/solutions`)
Three audience sections with anchor links:
- `#hr-teams` — all modules, Free → $79/mo
- `#agencies` — full multi-tenancy, Super Admin panel, tenant isolation mock UI
- `#enterprise` — custom pricing, SLA 99.9%, on-premise, 24/7 support

Side-by-side comparison table across all three audiences.

### Contact Page (`/contact`)
Client component with controlled form state and a success state after submission.  
Three email channels (general / sales / support), response time table, and an enterprise callout card.

---

## Product Context

This site markets **LijiHR** — the HR platform application. The actual app lives at [app.lishr.in](https://app.lishr.in).

| Layer | Stack |
|---|---|
| LijiHR Backend | Java 21 · Spring Boot 3.2.1 · PostgreSQL 16 · JJWT 0.12.3 · iText 5 · Apache POI 5 |
| LijiHR Frontend | React 19.2.0 · Vite 7.2.4 · Redux Toolkit 2.11.2 · Tailwind CSS 4.1.18 · React Router DOM 7 |
| This Website | Next.js 16.2.4 · React 19 · TypeScript 5 · Tailwind CSS 4 |

---

## Deployment

The site builds to fully static output and can be deployed to any static host or Vercel.

```bash
npm run build   # generates .next/
npm run start   # serves the built output
```

For Vercel: connect the repository and deploy with zero configuration — Next.js is auto-detected.

---

## License

Copyright © 2026 **Liji Groups**. All rights reserved.

> A part of **LIJI GROUPS** project — A Liji Groups Product.
