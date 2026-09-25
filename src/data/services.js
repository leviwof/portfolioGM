import { Rocket, Server, Wrench, Cloud, Plug } from 'lucide-react'

/**
 * Trust metrics — real, resume-sourced numbers. Do not embellish or add to
 * these; they are presented as quiet credibility indicators, not counters.
 */
export const metrics = [
  { value: '3+', label: 'Years Experience' },
  { value: '100K+', label: 'Users Supported' },
  { value: '30%', label: 'API Latency Reduction' },
  { value: '20%', label: 'Faster Feature Delivery' },
]

/**
 * Services — what a client can hire me to do. Copy leads with the business
 * outcome; the technology is supporting detail, never a logo wall.
 */
export const services = [
  {
    icon: Rocket,
    title: 'Product Development',
    description:
      'Take an idea from zero to a working product — MVPs and production-ready web apps built to put in front of real users.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'A secure, scalable foundation: REST APIs, authentication, databases, and integrations that hold up as your product grows.',
  },
  {
    icon: Wrench,
    title: 'Existing Product Development',
    description:
      'Pick up an existing codebase to fix bugs, ship new features, and improve performance — no rewrite required.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description:
      'Ship reliably with Docker, CI/CD, and production deployment on AWS or Azure, so releases stay fast and low-risk.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    description:
      'Connect your product to what it needs — payments, webhooks, third-party APIs, and real-time communication that just works.',
  },
]
