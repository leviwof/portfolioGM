import ayurvedicWebImg from '../assets/ayurvedic_web.jpg'

/**
 * Selected Work — one curated row of six projects, shown uniformly.
 *
 * Honesty rules for this file:
 *  - Every card gets a visual: a real screenshot where one exists, otherwise a
 *    designed thematic cover (`theme`) — never a fabricated screenshot.
 *  - `cta.href` is a real, verified link. All six demo links are live.
 *  - Tech tags are listed ONLY where the real stack is known; omitted otherwise.
 */
export const selectedWork = [
  {
    id: 'zenzio',
    title: 'Zenzio',
    positioning: 'Multi-platform food delivery ecosystem',
    description:
      'A production food delivery ecosystem connecting customers, restaurants, delivery executives, and operations through connected applications and backend services.',
    category: 'Production Engineering',
    accent: 'emerald',
    theme: 'delivery',
    image: null,
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Socket.IO', 'Docker'],
    cta: { label: 'View Case Study', href: '/work/zenzio' },
  },
  {
    id: 'testdino',
    title: 'TestDino',
    positioning: 'Turn a job description into a focused interview prep kit',
    description:
      'Describe the role and TestDino builds a personalized preparation kit: role-specific questions, flashcards, and a day-by-day study plan.',
    category: 'AI / SaaS Product',
    accent: 'cyan',
    theme: 'interview',
    isNew: true,
    image: null,
    liveUrl: 'https://testdino.vercel.app/',
    cta: { label: 'View Case Study', href: '/work/testdino' },
  },
  {
    id: 'firsthuman',
    title: 'FirstHuman',
    positioning: 'Digital products made simple for businesses',
    description:
      'A digital platform focused on helping businesses present, manage, and grow their online presence through simple, accessible experiences.',
    category: 'Business Platform',
    accent: 'indigo',
    theme: 'business',
    image: null,
    liveUrl: 'https://dukaan-digital-phi.vercel.app/',
    cta: { label: 'View Case Study', href: '/work/firsthuman' },
  },
  {
    id: 'ai-learning-assistant',
    title: 'AI Learning Assistant',
    positioning: 'Conversational AI for personalized learning',
    description:
      'An AI-powered learning experience where students interact with an assistant that guides them through concepts in simple, conversational language.',
    category: 'AI Product',
    accent: 'purple',
    theme: 'ai',
    image: null,
    liveUrl: 'https://stanford-frontend-hwov.vercel.app/',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AI API'],
    cta: { label: 'View Project', href: 'https://stanford-frontend-hwov.vercel.app/' },
  },
  {
    id: 'aurevia',
    title: 'Aurevia',
    positioning: 'Premium nature-inspired digital experience',
    description:
      'A premium, nature-inspired web experience built around visual storytelling, refined typography, immersive layouts, and polished interactions.',
    category: 'UI / Product Design',
    accent: 'amber',
    theme: 'nature',
    image: null,
    liveUrl: 'https://aurevia-ui-five.vercel.app/',
    cta: { label: 'View Project', href: 'https://aurevia-ui-five.vercel.app/' },
  },
  {
    id: 'ayurvedic-commerce',
    title: 'Ayurvedic Commerce',
    positioning: 'Modern e-commerce experience for wellness products',
    description:
      'A modern e-commerce interface for discovering and browsing Ayurvedic and wellness products through a clean, approachable shopping experience.',
    category: 'E-commerce UI',
    accent: 'emerald',
    theme: 'wellness',
    image: ayurvedicWebImg,
    liveUrl: 'https://ayurvedic-web-ui.vercel.app/',
    cta: { label: 'View Project', href: 'https://ayurvedic-web-ui.vercel.app/' },
  },
]

export default { selectedWork }
