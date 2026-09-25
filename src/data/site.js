/**
 * Single source of truth for identity, positioning, and links.
 * Update these here rather than hard-coding them across sections.
 */
export const site = {
  name: 'Ganesh Mishra',
  role: 'Full-Stack Engineer',
  // Client-facing positioning for international founders, CTOs, and agencies.
  positioning: 'Full-Stack Engineer who takes web products from idea to production.',
  email: 'ganeshkemoap123@gmail.com',
  location: 'Mumbai, India',
  resumeFile: 'Ganesh_Mishra_Resume.pdf',
  links: {
    portfolio: 'https://portfolio-ganesh-mishra.vercel.app/',
    github: 'https://github.com/leviwof',
    linkedin: 'https://www.linkedin.com/in/ganeshmishra-dev/',
  },
}

/**
 * Global navigation model.
 * Links point at the section anchors the page will expose; keep the set small
 * and client-oriented (what I do / proof / who I am), and the CTA singular.
 */
export const nav = {
  logo: 'GANESH MISHRA',
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ],
  cta: { label: "Let's Work Together", href: '#contact' },
}

export default site
