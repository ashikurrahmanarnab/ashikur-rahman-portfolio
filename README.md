# Md. Ashikur Rahman — Portfolio

A personal portfolio site for Md. Ashikur Rahman, built around his actual
background: customer support and client relations, running a small business
in Dhaka while studying full-time at North South University.

## About this build

This was deliberately **not** built as a software engineering / AI / data
portfolio. The source resume contains no code, no technical projects, and no
programming skills — it's a customer-support and business-operations
profile. The site is designed and written for that profile honestly:

- No fabricated metrics, stats, or achievements. Every claim on the site
  traces back to something in the original resume.
- The centerpiece is a short case study of a real pricing dispute mentioned
  in the resume, told as situation → approach → outcome, instead of a
  fabricated "project" section.
- Design direction leans into the actual subject matter — calm,
  conversational, a quiet nod to chat-based support — rather than a generic
  dark/GitHub-style developer template.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- `next/font` for self-hosted Google Fonts (Fraunces + IBM Plex Sans) —
  requires internet access on first build to fetch font files
- Dark mode via a `class` strategy toggle, persisted to `localStorage`
- No external APIs, databases, or environment variables

## Project structure

```
app/
  layout.tsx       Root layout, fonts, metadata, dark-mode init script
  page.tsx          Assembles all sections
  globals.css       Base styles, animations, focus states
components/
  Nav.tsx           Sticky nav + theme toggle
  ThemeToggle.tsx   Light/dark mode switch
  Hero.tsx          Headline + chat-bubble motif
  About.tsx         Background, languages, personal note
  Experience.tsx    Role and responsibilities
  CaseStudy.tsx     Featured story: the pricing dispute
  Skills.tsx        Skills, languages, education
  Contact.tsx       Email, phone, LinkedIn, location
  Footer.tsx
```

## Local setup

Requires Node.js 18.18+ and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Content notes

- Contact details, education, and work history are taken directly from the
  provided resume. Update `components/Contact.tsx`, `components/Skills.tsx`,
  and `components/Experience.tsx` if any of these change.
- The site intentionally contains no invented numbers (no "X% satisfaction,"
  no "resolved Y tickets"). If real metrics become available later, add them
  to `CaseStudy.tsx` and `Experience.tsx` rather than inventing placeholders.
