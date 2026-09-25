import { site, nav } from './site'

/**
 * Contact + conversion content.
 *
 * Honesty rules (per the brief): no invented client counts, revenue,
 * testimonials, response times, or availability dates. The email/socials are
 * the real ones from data/site.js (the email matches the résumé in /public);
 * a method with no real URL should keep its label and omit `href` rather than
 * inventing one.
 */

// Three real ways to reach out. `type` drives the icon in the component so this
// data file stays free of JSX.
export const contactMethods = [
  {
    type: 'email',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'in/ganeshmishra-dev',
    href: site.links.linkedin,
    external: true,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/leviwof',
    href: site.links.github,
    external: true,
  },
]

// "How I Can Work With You" — the three engagement shapes.
export const engagements = [
  {
    no: '01',
    title: 'Project Build',
    description:
      'For startups and businesses that need a new product, MVP, or specific application built.',
  },
  {
    no: '02',
    title: 'Product Extension',
    description:
      'For existing products that need new features, integrations, bug fixes, or performance improvements.',
  },
  {
    no: '03',
    title: 'Engineering Support',
    description:
      'For teams that need an additional full-stack engineer for ongoing development.',
  },
]

// Inquiry-form select options.
export const budgetOptions = [
  'Under $500',
  '$500 - $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000+',
  'Not sure yet',
]

export const timelineOptions = ['ASAP', '1-4 weeks', '1-3 months', '3+ months', 'Just exploring']

// Static, honest availability line — no real-time "Available now" signal.
export const availabilityText = 'Available for freelance and project-based work.'

// Footer nav mirrors the top nav, plus Contact.
export const footerNav = [...nav.links, { label: 'Contact', href: '#contact' }]
