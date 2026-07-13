import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react'
import profilePhoto from './assets-profile.jpg'

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

const skillGroups = [
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'NestJS', 'Socket.io', 'PHP', 'Java', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices'] },
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Redux', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Flutter'] },
  { title: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Redis'] },
  { title: 'Cloud & DevOps', skills: ['AWS', 'AWS EC2', 'Microsoft Azure', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD pipelines', 'PM2'] },
  { title: 'Security & Integration', skills: ['JWT', 'RBAC', 'Razorpay', 'Firebase', 'LLM integration', 'Cybersecurity awareness', 'Git', 'Linux', 'Shell scripting', 'Kafka'] },
]

const experience = [
  {
    company: 'Zenzio Technologies', role: 'Full Stack Developer', duration: 'Apr 2025 — Present', location: '—',
    bullets: [
      'Developed and maintained scalable web applications using React.js, Node.js, NestJS, and TypeScript.',
      'Designed REST APIs for restaurant management, order processing, customer management, and admin operations, with JWT-based RBAC.',
      'Built product features spanning orders, menus, offers, delivery tracking, analytics, and payments, including Razorpay and Firebase integrations.',
      'Implemented GitHub Actions CI/CD pipelines and deployed applications to AWS EC2 with PM2 while improving API performance and stability.',
    ],
  },
  {
    company: 'HDFC ERGO', role: 'AI and Automation Engineer', duration: 'May 2025 — Nov 2025', location: 'Bhandup, Mumbai',
    bullets: [
      'Contributed to the onboarding system, helping make customer verification 25% faster while strengthening KYC compliance.',
      'Worked with 5+ cross-functional teams to deliver scalable KYC solutions ahead of deadlines and improve project efficiency by 20%.',
      'Reduced onboarding errors by 30% through proactive monitoring, testing, and workflow optimization.',
    ],
  },
  {
    company: 'Niyogin Fintech Ltd', role: 'Full-Stack Web Developer', duration: 'May 2023 — Apr 2025', location: 'Vidyavihar, Mumbai',
    bullets: [
      'Built the Niyoblu loan platform, streamlining loan access and onboarding for 100,000 users.',
      'Engineered end-to-end microservices that increased loan approval rates by 15% and user engagement by 30% within six months.',
      'Implemented CI/CD pipelines that reduced deployment time by 40% and enabled faster product iterations.',
    ],
  },
]

const projects = [
  { name: 'AI Loan Dashboard', description: 'AI-assisted loan decisions and real-time notifications that improved approval efficiency by 15%.', tags: ['React', 'Node.js', 'Docker', 'CI/CD'] },
  { name: 'Investment Dashboard', description: 'Real-time portfolio tracking and interactive analytics, built for speed and continuous availability.', tags: ['React', 'Node.js', 'Microservices', 'Docker'] },
  { name: 'AI Chatbot', description: 'Customer support automation that cut response time by 50% while improving the user experience.', tags: ['Node.js', 'React', 'AI integration', 'Docker'] },
]

function Github({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.15v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>
}

function Linkedin({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.37 3.5a2.18 2.18 0 1 1 0 4.36 2.18 2.18 0 0 1 0-4.36ZM3.49 9.5h3.76V21H3.49V9.5Zm5.93 0h3.6v1.57h.05c.5-.95 1.73-1.96 3.56-1.96 3.81 0 4.51 2.51 4.51 5.77V21h-3.75v-5.42c0-1.29-.03-2.96-1.81-2.96-1.8 0-2.08 1.41-2.08 2.87V21H9.42V9.5Z" /></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled || open ? 'border-b border-slate-800 bg-ink/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="focus-ring rounded text-lg font-semibold tracking-tight text-white" aria-label="Ganesh Mishra, home">GM<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring rounded text-sm text-slate-400 transition-colors hover:text-white">{item}</a>)}</div>
        <button type="button" onClick={() => setOpen(!open)} className="focus-ring rounded-md p-2 text-slate-300 md:hidden" aria-expanded={open} aria-label="Toggle menu">{open ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {open && <div className="shell border-t border-slate-800 py-3 md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-sm text-slate-300 hover:bg-slate-800/60 hover:text-white">{item}</a>)}</div>}
    </header>
  )
}

function SocialLink({ href, label, children }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="focus-ring rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">{children}</a>
}

function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-ink">
      <Header />
      <main>
        <section className="shell flex min-h-[90vh] items-center pb-20 pt-32 sm:pb-24 sm:pt-40">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_360px] lg:gap-24">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-sm font-medium text-slate-400"><span className="h-px w-8 bg-accent" /> Hello, I’m Ganesh</p>
              <h1 className="text-5xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Backend &amp;<br /><span className="text-slate-400">Full-Stack Engineer.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">I build scalable web applications and high-performance, AI-enabled products with JavaScript, Node.js, React, and cloud-native tools.</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={`${import.meta.env.BASE_URL}Ganesh_Mishra_Resume.pdf`} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-300">View Resume <ArrowUpRight size={16} /></a>
                <a href="#contact" className="focus-ring inline-flex items-center rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-800/50">Get in Touch</a>
                <div className="ml-1 flex items-center"><SocialLink href="https://github.com/leviwof" label="GitHub"><Github size={20} /></SocialLink><SocialLink href="https://www.linkedin.com/in/ganeshmishra-dev/" label="LinkedIn"><Linkedin size={20} /></SocialLink></div>
              </div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              <div className="h-64 w-64 overflow-hidden rounded-full border border-slate-700 bg-slate-800 p-1.5 sm:h-72 sm:w-72 lg:h-80 lg:w-80"><img src={profilePhoto} alt="Ganesh Mishra" className="h-full w-full rounded-full object-cover object-[50%_24%]" /></div>
              <div className="absolute bottom-5 right-0 rounded-full border border-slate-700 bg-ink px-3 py-1.5 text-xs font-medium text-slate-300 shadow-xl"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent" />Open to work</div>
            </div>
          </div>
        </section>

        <section id="about" className="section"><div className="shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div><p className="eyebrow">01 — About</p><h2 className="section-title">A practical engineer,<br className="hidden lg:block" /> focused on outcomes.</h2></div>
          <div><p className="text-xl leading-9 text-slate-300">I’m a full-stack software engineer with 3+ years of experience building scalable web applications. My work spans JavaScript, Node.js, React, Docker, and CI/CD—from fintech platforms to AI-enabled workflows. I care about reliable systems, thoughtful collaboration, and improvements users can actually feel.</p>
            <div className="mt-8 flex flex-wrap gap-3">{['3+ Years Experience', '100,000 Users Served', '40% Faster Deployments'].map((stat) => <span key={stat} className="rounded-full border border-slate-700 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-300">{stat}</span>)}</div>
          </div>
        </div></section>

        <section id="skills" className="section"><div className="shell">
          <p className="eyebrow">02 — Skills</p><h2 className="section-title">Tools I use to ship.</h2><p className="section-copy">A broad toolkit across product interfaces, APIs, infrastructure, and data.</p>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group) => <div key={group.title} className="border-t border-slate-700 pt-5"><h3 className="mb-4 font-semibold text-white">{group.title}</h3><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}</div>
        </div></section>

        <section id="experience" className="section"><div className="shell">
          <p className="eyebrow">03 — Experience</p><h2 className="section-title">Where I’ve made an impact.</h2>
          <div className="relative mt-14 ml-2 border-l border-slate-700/80 pl-8 sm:ml-3 sm:pl-12">{experience.map((job, index) => <article key={job.company} className={`${index !== experience.length - 1 ? 'pb-14 sm:pb-16' : ''} relative`}>
            <span className="absolute -left-[2.34rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink sm:-left-[3.34rem]" />
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start"><div><h3 className="text-xl font-semibold text-white">{job.company}</h3><p className="mt-1 text-slate-300">{job.role}</p></div><div className="text-sm leading-6 text-slate-500 md:text-right"><p>{job.duration}</p><p>{job.location}</p></div></div>
            {job.bullets.length > 0 ? <ul className="mt-5 max-w-3xl space-y-3 text-[15px] leading-7 text-slate-400">{job.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-slate-500" />{bullet}</li>)}</ul> : <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">Role details are intentionally limited to the information available in the current resume.</p>}
          </article>)}</div>
        </div></section>

        <section id="projects" className="section"><div className="shell">
          <p className="eyebrow">04 — Projects</p><h2 className="section-title">Selected work.</h2><p className="section-copy">Products built to improve decisions, visibility, and customer experience.</p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.name} className="group flex min-h-72 flex-col rounded-xl border border-slate-700/80 bg-slate-900/30 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/60">
            <div className="flex items-start justify-between"><span className="text-sm font-medium text-slate-500">0{index + 1}</span><a href="https://github.com/leviwof" target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub placeholder`} className="focus-ring rounded-md p-1.5 text-slate-500 transition-colors hover:text-white"><Github size={19} /></a></div>
            <h3 className="mt-8 text-xl font-semibold text-white">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">{project.tags.map((tag) => <span key={tag} className="text-xs font-medium text-slate-500">{tag}</span>)}</div>
          </article>)}</div>
        </div></section>

        <section id="contact" className="section"><div className="shell"><div className="rounded-2xl border border-slate-700/80 bg-slate-900/30 px-6 py-12 sm:px-12 sm:py-16">
          <p className="eyebrow">05 — Contact</p><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Let’s build something useful.</h2><p className="mt-5 text-slate-400">Open to full-time roles and freelance projects.</p></div>
            <div className="flex flex-col items-start gap-3 text-sm sm:flex-row sm:flex-wrap lg:flex-col lg:items-end"><a href="mailto:ganesh.stack21@gmail.com" className="focus-ring inline-flex items-center gap-2 rounded text-slate-300 hover:text-accent"><Mail size={17} />ganesh.stack21@gmail.com</a><a href="https://www.linkedin.com/in/ganeshmishra-dev/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded text-slate-300 hover:text-accent"><Linkedin size={17} />LinkedIn</a><a href="https://github.com/leviwof" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded text-slate-300 hover:text-accent"><Github size={17} />GitHub</a></div>
          </div>
        </div></div></section>
      </main>
      <footer className="border-t border-slate-800 py-8"><div className="shell flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>Built by Ganesh Mishra · {new Date().getFullYear()}</p><div className="flex gap-1"><SocialLink href="https://github.com/leviwof" label="GitHub"><Github size={18} /></SocialLink><SocialLink href="https://www.linkedin.com/in/ganeshmishra-dev/" label="LinkedIn"><Linkedin size={18} /></SocialLink></div></div></footer>
    </div>
  )
}

export default App
