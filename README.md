# portfolioGM

Personal portfolio website for Ganesh Mishra, a Backend & Full-Stack Engineer.

## Tech stack

- React
- Vite
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Project structure

```
src/
  components/
    icons/     Brand icons (GitHub, LinkedIn) not covered by lucide-react
    layout/    Container, Section — the width & vertical-rhythm primitives
    ui/        Button, Card, Tag, Badge, Eyebrow, SectionHeading
  data/        Content, decoupled from presentation:
               site.js, skills.js, experience.js, projects.js
  lib/         cn() className helper
  App.jsx      Page composition (sections)
  index.css    Base typography, reduced-motion, legacy helpers
```

Import primitives via the barrels:

```jsx
import { Container, Section } from './components/layout'
import { Button, Card, SectionHeading } from './components/ui'
```

## Design system

Tokens live in `tailwind.config.js`:

- **Type** — `font-sans` (Inter, body), `font-display` (Plus Jakarta Sans,
  headings), `font-mono` (JetBrains Mono, labels); fluid `text-display-*` scale.
- **Surfaces** — `ink` (backgrounds, borders) + a single restrained `accent`.
- **Layout** — `max-w-container` (1200px), section padding via `<Section>`.
- **Elevation** — soft `shadow-card` / `shadow-card-hover` (no neon glow).

Direction: premium, minimal, strong typography, generous whitespace. Avoid
heavy gradients, glassmorphism, skill bars, and 3D. Prefer the primitives above
over ad-hoc utility clusters for all new sections.

