/**
 * More Work — a secondary, curated archive of additional projects.
 *
 * Deliberately lighter than Selected Work: no case studies, no invented
 * metrics, no claimed stacks, no client/revenue/user claims.
 *
 * Honesty rules for this file:
 *  - `url` is the real, live deployment; the CTA opens it in a new tab.
 *  - `category` is a plain descriptive label; `filter` maps it to one of the
 *    section's filter buckets (All / Product / Frontend / SaaS / Tools /
 *    Experiments).
 *  - No screenshots are fabricated — cards render a clean web-preview
 *    placeholder (SiteThumb) keyed to the project's monogram + real domain.
 *  - `size: 'feature'` marks the two cards allowed slightly more prominence.
 *
 * NOTE: "Sales Research & Lead Management" was intentionally omitted — no live
 * URL exists yet. Add an entry with a real `url` to include it.
 */
export const moreWorkFilters = ['All', 'Product', 'Frontend', 'SaaS', 'Tools', 'Experiments']

export const moreWork = [
  {
    id: 'billing-receipt',
    title: 'Billing & Receipt Management',
    mark: 'BR',
    category: 'Business SaaS',
    filter: 'SaaS',
    description:
      'A business application for generating, storing, and managing billing receipts through a structured web interface.',
    url: 'https://billing-receipt-frontend.vercel.app/',
    size: 'feature',
  },
  {
    id: 'smart-vending',
    title: 'Smart Vending Fleet',
    mark: 'SV',
    category: 'Product UI',
    filter: 'Product',
    description:
      'A modern vending interface designed around product selection, kiosk interaction, and operational workflows.',
    url: 'https://vending-ui-six.vercel.app/kiosk',
    size: 'feature',
  },
  {
    id: 'aegis',
    title: 'Aegis',
    mark: 'Ae',
    category: 'Interactive Product',
    filter: 'Experiments',
    description:
      'An interactive browser-based game experience focused on engaging gameplay and responsive user interaction.',
    url: 'https://aegis-game-three.vercel.app/',
  },
  {
    id: 'thumbnail-generator',
    title: 'AI Thumbnail Generator',
    mark: 'AI',
    category: 'AI Tool',
    filter: 'Tools',
    description:
      'A tool designed to simplify the process of creating visual thumbnails for digital content.',
    url: 'https://thumbnail-generator-front-4ti6.vercel.app/',
  },
  {
    id: 'loan-management',
    title: 'Loan Management System',
    mark: 'LM',
    category: 'Fintech',
    filter: 'SaaS',
    description:
      'A financial workflow interface focused on managing loan-related processes and user interactions.',
    url: 'https://loan-managment-system-alpha.vercel.app/login',
  },
  {
    id: 'job-portal',
    title: 'Job Portal',
    mark: 'JP',
    category: 'Product',
    filter: 'Product',
    description:
      'A job discovery and application interface designed around browsing opportunities and managing the job-seeking experience.',
    url: 'https://job-portal-frontend-ruddy-beta.vercel.app/',
  },
  {
    id: 'newsletter-platform',
    title: 'Newsletter Platform',
    mark: 'NP',
    category: 'SaaS',
    filter: 'SaaS',
    description:
      'A clean interface for managing newsletter-focused content and communication workflows.',
    url: 'https://newsletter-frontend-2cyg.vercel.app/',
  },
  {
    id: 'tour-planner',
    title: 'Tour Planner',
    mark: 'TP',
    category: 'Product',
    filter: 'Product',
    description:
      'A travel planning experience designed around organizing and exploring trip information.',
    url: 'https://tour-plan-1.vercel.app/',
  },
  {
    id: 'user-management',
    title: 'User Management',
    mark: 'UM',
    category: 'Business Tool',
    filter: 'Tools',
    description:
      'A straightforward user management interface demonstrating structured CRUD workflows and data interaction.',
    url: 'https://user-crud-frontend-gray.vercel.app/',
  },
  {
    id: 'stanford-experience',
    title: 'Stanford Experience',
    mark: 'SE',
    category: 'Frontend',
    filter: 'Frontend',
    description:
      'A frontend-focused project exploring structured information presentation and modern responsive interface design.',
    url: 'https://stanford-frontend-hwov.vercel.app/',
  },
]

export default { moreWork, moreWorkFilters }
