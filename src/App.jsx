import { useEffect, useState } from 'react'
import {
  ArrowUpRight, Mail, Menu, X, Sparkles, Monitor, Cpu,
  Check, Copy, Eye, Zap, ChevronRight, Lock, Globe, Cloud,
} from 'lucide-react'

import profilePhoto from './assets-profile.jpg'
import { GithubIcon, LinkedinIcon } from './components/icons'
import { navItems } from './data/site'
import { skillGroups } from './data/skills'
import { experience } from './data/experience'
import { projects } from './data/projects'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-800/80 bg-ink/90 backdrop-blur-xl shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="focus-ring group flex items-center gap-3 rounded-lg text-xl font-bold tracking-tight text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 font-extrabold text-slate-950 shadow-md shadow-teal-500/20 transition-transform group-hover:scale-105">
            GM
          </span>
          <div className="flex flex-col">
            <span className="text-base font-extrabold leading-tight tracking-tight text-white">
              Ganesh Mishra<span className="text-accent">.</span>
            </span>
            <span className="text-[11px] font-medium text-slate-400">Full-Stack Engineer</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="focus-ring rounded-md text-sm font-medium text-slate-300 transition-colors hover:text-accent"
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:ganesh.stack21@gmail.com"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-accent transition-all hover:bg-teal-500/20 hover:border-teal-500/50"
          >
            <Mail size={14} /> Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="focus-ring rounded-lg border border-slate-800 bg-slate-900/60 p-2.5 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="shell border-t border-slate-800/80 bg-slate-950/95 py-4 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-accent"
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:ganesh.stack21@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-slate-950"
            >
              <Mail size={16} /> Contact Ganesh
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function ProjectCard({ project, onPreviewModal }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-teal-500/10">
      {/* Realistic Browser Window Top Bar Frame */}
      <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-sm shadow-red-500/50" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-sm shadow-amber-500/50" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-sm shadow-emerald-500/50" />
        </div>
        <div className="flex max-w-[240px] sm:max-w-[320px] flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/90 px-3 py-1 text-xs text-slate-400">
          <Lock size={12} className="text-emerald-400 shrink-0" />
          <span className="truncate font-mono text-[11px] text-slate-300">{project.displayUrl}</span>
        </div>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          )}
        </div>
      </div>

      {/* Project Image Frame Showcase */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

        {/* Floating Category Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${project.badgeColor}`}>
            <Sparkles size={12} />
            {project.badge}
          </span>
        </div>

        {/* Action Overlay Button */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-300 hover:scale-105"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <button
              onClick={() => onPreviewModal(project)}
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md hover:border-slate-500 hover:bg-slate-800"
            >
              <Eye size={14} /> Details
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-400">{project.subtitle}</p>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400 transition-colors hover:border-slate-700 hover:text-white shrink-0"
              aria-label="View on GitHub"
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300/90">
          {project.description}
        </p>

        {/* Key Highlights */}
        {project.highlights && (
          <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('All')
  const [copied, setCopied] = useState(false)
  const [selectedProjectModal, setSelectedProjectModal] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText('ganesh.stack21@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <div id="top" className="min-h-screen bg-ink text-slate-100 selection:bg-accent/30 selection:text-white">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="shell flex min-h-[92vh] items-center pb-16 pt-32 sm:pb-24 sm:pt-40">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
                </span>
                <span>Open for Full-Time &amp; High-Impact Roles</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building High-Scale <br />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Full-Stack &amp; Web Apps.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
                Hi, I’m <strong className="font-semibold text-white">Ganesh Mishra</strong>—a Full-Stack Developer with 3+ years of experience engineering high-performance web applications, interactive kiosks, AI integrations, and resilient backend microservices.
              </p>

              {/* Action CTA Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}Ganesh_Mishra_Resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 transition-all hover:bg-teal-300 hover:shadow-teal-500/40 hover:scale-105"
                >
                  View Resume <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#projects"
                  className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-teal-500/50 hover:bg-slate-800"
                >
                  Explore Live Projects <ChevronRight size={16} />
                </a>

                <div className="flex items-center gap-1.5 pl-1">
                  <a
                    href="https://portfolio-ganesh-mishra.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-slate-400 transition-all hover:border-teal-500/50 hover:text-accent"
                    aria-label="Live Portfolio Website"
                    title="https://portfolio-ganesh-mishra.vercel.app/"
                  >
                    <Globe size={20} />
                  </a>
                  <a
                    href="https://github.com/leviwof"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-slate-400 transition-all hover:border-slate-700 hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ganeshmishra-dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-slate-400 transition-all hover:border-slate-700 hover:text-white"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>

              {/* Stat Chips */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-800/80 pt-8 max-w-xl">
                <div>
                  <div className="text-2xl font-extrabold text-white sm:text-3xl">3+</div>
                  <div className="text-xs text-slate-400 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-accent sm:text-3xl">100k+</div>
                  <div className="text-xs text-slate-400 mt-1">Users Served</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-indigo-400 sm:text-3xl">40%</div>
                  <div className="text-xs text-slate-400 mt-1">Faster Deployments</div>
                </div>
              </div>
            </div>

            {/* Profile Avatar Card with Glowing Frame */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950">
                  <img
                    src={profilePhoto}
                    alt="Ganesh Mishra"
                    className="h-full w-full object-cover object-[50%_22%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Skill Chips */}
                <div className="absolute -bottom-3 -left-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-xl">
                  <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                  Full-Stack Architecture
                </div>

                <div className="absolute -top-3 -right-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-xl flex items-center gap-2">
                  <Zap size={14} className="text-amber-400" /> React &amp; Node.js Expert
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="eyebrow">01 — About Me</span>
              <h2 className="section-title">
                A pragmatic developer driven by performance &amp; user experience.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-300/90">
                I specialize in building full-stack applications that combine high-availability backend microservices with sleek, intuitive user interfaces. My software engineering journey spans fintech platforms, automated AI workflows, e-commerce applications, and touchscreen kiosk solutions.
              </p>
              <p className="text-base leading-relaxed text-slate-400">
                Whether creating custom REST/GraphQL APIs with Node.js &amp; NestJS, designing modern UI interfaces in React &amp; Tailwind CSS, or deploying containers to AWS with CI/CD automation, I emphasize clean architecture, robust security, and real business outcomes.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <Monitor className="mb-2 text-accent" size={24} />
                  <h4 className="font-semibold text-white text-sm">Frontend UI/UX</h4>
                  <p className="mt-1 text-xs text-slate-400">React, Next.js, Tailwind, Interactive Kiosks</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <Cpu className="mb-2 text-indigo-400" size={24} />
                  <h4 className="font-semibold text-white text-sm">Backend &amp; APIs</h4>
                  <p className="mt-1 text-xs text-slate-400">Node.js, NestJS, REST, GraphQL, Microservices</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <Cloud className="mb-2 text-purple-400" size={24} />
                  <h4 className="font-semibold text-white text-sm">DevOps &amp; Cloud</h4>
                  <p className="mt-1 text-xs text-slate-400">AWS EC2, Docker, CI/CD Actions, PM2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - HIGHLIGHT OF PORTFOLIO */}
        <section id="projects" className="section">
          <div className="shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow">02 — Featured Work</span>
                <h2 className="section-title">Selected Live Projects.</h2>
                <p className="section-copy">
                  Explore production web applications, interactive touchscreen kiosk interfaces, and AI platforms with live links and realistic device mockups.
                </p>
              </div>

              {/* Category Tabs Filter */}
              <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-1.5 backdrop-blur-md">
                {['All', 'Web & Kiosk Apps', 'AI & Fintech'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-accent text-slate-950 shadow-md shadow-teal-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/80'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Projects Grid */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreviewModal={setSelectedProjectModal}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="shell">
            <span className="eyebrow">03 — Technical Stack</span>
            <h2 className="section-title">Tools &amp; Frameworks.</h2>
            <p className="section-copy">
              A comprehensive technical stack across web interfaces, backend microservices, databases, cloud DevOps, and security integrations.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const GroupIcon = group.icon
                return (
                  <div
                    key={group.title}
                    className="glass-card flex flex-col p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${group.color}`}>
                        <GroupIcon size={20} />
                      </div>
                      <h3 className="font-bold text-white text-base">{group.title}</h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="shell">
            <span className="eyebrow">04 — Career Journey</span>
            <h2 className="section-title">Where I’ve Made Impact.</h2>

            <div className="relative mt-14 ml-3 border-l-2 border-slate-800 pl-8 sm:ml-4 sm:pl-12 space-y-12">
              {experience.map((job, index) => (
                <article key={job.company} className="relative group">
                  <span className="absolute -left-[2.55rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-ink sm:-left-[3.55rem]">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{job.company}</h3>
                          {job.badge && (
                            <span className="rounded-full bg-teal-500/10 border border-teal-500/30 px-3 py-0.5 text-xs font-semibold text-accent">
                              {job.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-base font-medium text-slate-300">{job.role}</p>
                      </div>

                      <div className="text-xs font-medium text-slate-400 sm:text-right">
                        <p className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1 text-slate-300">
                          {job.duration}
                        </p>
                        <p className="mt-1 text-slate-400">{job.location}</p>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300/90">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <div className="shell">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-teal-500/5">
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

              <span className="eyebrow">05 — Get In Touch</span>

              <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Let’s build something extraordinary together.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                    Whether you have an upcoming project, a full-time role, or want to discuss full-stack &amp; AI architectures, feel free to reach out directly.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={copyEmail}
                    className="focus-ring flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:border-teal-500/50 hover:bg-slate-800"
                  >
                    <span className="flex items-center gap-2">
                      <Mail size={18} className="text-accent" />
                      ganesh.stack21@gmail.com
                    </span>
                    {copied ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-accent">
                        <Check size={14} /> Copied!
                      </span>
                    ) : (
                      <Copy size={16} className="text-slate-400" />
                    )}
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/ganeshmishra-dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-slate-950 shadow-md shadow-teal-500/20 transition-all hover:bg-teal-300 hover:scale-105"
                    >
                      <LinkedinIcon size={18} /> Connect on LinkedIn
                    </a>
                    <a
                      href="https://github.com/leviwof"
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 text-slate-300 transition-all hover:border-slate-700 hover:text-white"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 bg-slate-950/80 backdrop-blur-md">
        <div className="shell flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Ganesh Mishra. Designed &amp; Engineered with React &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://portfolio-ganesh-mishra.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              Portfolio
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://github.com/leviwof" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://www.linkedin.com/in/ganeshmishra-dev/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a href="mailto:ganesh.stack21@gmail.com" className="hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* DETAILS MODAL */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute right-4 top-4 rounded-lg bg-slate-800 p-2 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-white">{selectedProjectModal.name}</h3>
            <p className="mt-1 text-sm text-accent">{selectedProjectModal.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{selectedProjectModal.description}</p>
            
            {selectedProjectModal.highlights && (
              <div className="mt-6 border-t border-slate-800 pt-4">
                <h4 className="text-xs font-semibold uppercase text-slate-400">Key Highlights</h4>
                <ul className="mt-2 space-y-2 text-xs text-slate-300">
                  {selectedProjectModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={14} className="text-accent" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
