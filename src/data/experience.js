/**
 * Professional experience — real roles only, content supplied by the owner.
 * Never fabricate companies, dates, responsibilities, or metrics here.
 *
 * Highlights are curated to 3–5 per role (per the Experience section's design
 * rules); where the owner supplied more, related points are merged rather than
 * dropped so every fact still traces back to real, provided experience.
 */
export const experience = [
  {
    company: 'Zenzio Technologies',
    role: 'Backend Developer',
    location: 'Puducherry, India',
    duration: 'Apr 2026 — Present',
    current: true,
    summary:
      'Architected and built the backend from scratch for a multi-platform food delivery ecosystem connecting customers, restaurants, delivery executives, and administrators.',
    highlights: [
      'Built the backend with NestJS, TypeScript, Python and PostgreSQL — taking the platform from zero to production in two weeks.',
      'Implemented real-time order tracking and live delivery workflows with Socket.IO and an event-driven backend design.',
      'Integrated Razorpay for payments and Vodafone virtual numbers for phone-number masking between users.',
      'Managed Docker-based deployments and GitHub Actions CI/CD across AWS and Azure.',
      'Built React.js admin-portal modules for restaurant, order, delivery-user, offer, banner and analytics management.',
    ],
    tags: ['Food Delivery', 'Backend', 'Real-Time', 'Payments'],
    link: { label: 'View Case Study', href: '/work/zenzio' },
  },
  {
    company: 'Bigiota Analytics LLP',
    role: 'Software Developer',
    location: 'Mumbai, India',
    duration: 'May 2025 — Nov 2025',
    summary:
      'Developed and maintained a full-stack KYC and customer onboarding system for regulated financial workflows using the MERN stack.',
    highlights: [
      'Accelerated customer verification by 25% and reduced onboarding errors by 30% through automated testing, monitoring and workflow optimization.',
      'Executed zero-loss data migrations across environments for critical customer records.',
      'Collaborated with 5+ cross-functional teams and improved delivery efficiency by 20%.',
    ],
    tags: ['Fintech', 'KYC', 'MERN', 'Data Migration'],
  },
  {
    company: 'Niyogin Fintech Ltd',
    role: 'Full-Stack Web Developer',
    location: 'Vidyavihar, Mumbai',
    duration: 'May 2023 — Apr 2025',
    summary:
      'Developed full-stack product features for the Niyoblu loan platform using React.js, Node.js, Express.js, PostgreSQL and REST APIs.',
    highlights: [
      'Built full-stack features for a loan platform supporting 100,000+ users, cutting loan-journey latency by 30%.',
      'Designed backend modules for loan onboarding, approval workflows and partner integrations, with REST APIs for financial workflows and third-party services.',
      'Optimized PostgreSQL queries, indexes and access patterns, and implemented JWT/OAuth authentication and API authorization.',
      'Containerized services with Docker and supported CI/CD with GitHub Actions and Jenkins; built React dashboards and reusable UI components.',
    ],
    tags: ['Fintech', 'Lending', 'APIs', 'PostgreSQL'],
    link: { label: 'View Resume', href: '/Ganesh_Mishra_Resume.pdf', external: true },
  },
]

export default experience
