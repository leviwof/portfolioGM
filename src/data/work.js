import ayurvedicWebImg from '../assets/ayurvedic_web.jpg'

/**
 * Selected Work — a deliberately small, curated set (not the full catalog),
 * grouped so the layout carries visual hierarchy.
 *
 * Honesty rules for this file:
 *  - `image: null` renders a designed brand cover, never a fabricated
 *    screenshot. Drop a real screenshot in ../assets and set `image` to
 *    upgrade a card. Only Ayurvedic ships with a real screenshot today;
 *    FirstHuman, Zenzio, TestDino and Aurevia still need real captures.
 *  - `cta.href: null` means no public link is known yet (rendered as a
 *    non-clickable label, not a broken link). FirstHuman and the AI Learning
 *    Assistant need real URLs.
 *  - Tech tags are listed ONLY where the real stack is known; omitted
 *    otherwise rather than guessed.
 */

// Featured — Zenzio + TestDino lead, FirstHuman prominent.
export const featuredWork = [
  {
    id: 'zenzio',
    title: 'Zenzio',
    positioning: 'Multi-platform food delivery ecosystem',
    description:
      'A production food delivery ecosystem connecting customers, restaurants, delivery executives, and operations through connected applications and backend services.',
    category: 'Production Engineering',
    accent: 'emerald',
    image: null,
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Socket.IO', 'Docker'],
    highlights: [
      'Multi-platform architecture',
      'Order & delivery workflows',
      'Real-time delivery tracking',
      'Payments & admin operations',
    ],
    cta: { label: 'View Case Study', href: '/work/zenzio' },
  },
  {
    id: 'testdino',
    title: 'TestDino',
    positioning: 'Turn a job description into a focused interview prep kit',
    description:
      'Describe the role — a job description, company, and timeline — and TestDino builds a personalized preparation kit: role-specific questions, flashcards, and a day-by-day study plan.',
    category: 'AI / SaaS Product',
    accent: 'cyan',
    isNew: true,
    image: null,
    liveUrl: 'https://testdino.vercel.app/',
    highlights: [
      'Job-description driven prep',
      'Role-specific questions & flashcards',
      'Company research',
      'Day-by-day study plan',
    ],
    cta: { label: 'Try TestDino', href: 'https://testdino.vercel.app/' },
  },
  {
    id: 'firsthuman',
    title: 'FirstHuman',
    positioning: 'Digital products made simple for businesses',
    description:
      'A digital platform focused on helping businesses present, manage, and grow their online presence through simple, accessible experiences.',
    category: 'Business Platform',
    accent: 'indigo',
    image: null,
    highlights: [
      'Business-focused product experience',
      'Simple, accessible UX',
      'Modern responsive interface',
      'International-facing brand direction',
    ],
    cta: { label: 'View Project', href: null },
  },
]

// Product & Interface Work — a SaaS/AI product plus UI craft.
export const productWork = [
  {
    id: 'ai-learning-assistant',
    title: 'AI Learning Assistant',
    positioning: 'Conversational AI for personalized learning',
    description:
      'An AI-powered learning platform where students interact with an AI tutor that explains concepts in simple language and keeps their conversation history.',
    category: 'AI Product',
    accent: 'purple',
    image: null,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AI API'],
    cta: { label: 'View Project', href: null },
  },
  {
    id: 'aurevia',
    title: 'Aurevia',
    positioning: 'Premium nature-inspired digital experience',
    description:
      'A premium, nature-inspired web experience built around visual storytelling, refined typography, immersive layouts, and polished interactions.',
    category: 'UI / Product Design',
    accent: 'amber',
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
    image: ayurvedicWebImg,
    liveUrl: 'https://ayurvedic-web-ui.vercel.app/',
    cta: { label: 'View Project', href: 'https://ayurvedic-web-ui.vercel.app/' },
  },
]

export default { featuredWork, productWork }
