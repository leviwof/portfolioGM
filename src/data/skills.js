import { Terminal, Monitor, Database, Cloud, ShieldCheck } from 'lucide-react'

/**
 * Technical stack grouped by domain. Presented as categorized tags — no
 * percentage/skill bars, per the design direction.
 */
export const skillGroups = [
  {
    title: 'Backend Engineering',
    icon: Terminal,
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Socket.io', 'PHP', 'Java', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Frontend & UI Frameworks',
    icon: Monitor,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Redux', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3', 'Flutter'],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    title: 'Cloud & DevOps Architecture',
    icon: Cloud,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    skills: ['AWS (EC2/S3)', 'Microsoft Azure', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'PM2', 'Nginx'],
  },
  {
    title: 'Security & Integrations',
    icon: ShieldCheck,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    skills: ['JWT Authentication', 'RBAC', 'Razorpay Gateway', 'Firebase Services', 'LLM / OpenAI API', 'Kafka', 'Git', 'Linux / Shell'],
  },
]

export default skillGroups
