import { useState } from 'react'
import {
  ArrowUpRight, Mail, X, Sparkles, Monitor, Cpu,
  Check, Copy, Eye, Lock, Cloud,
} from 'lucide-react'

import { GithubIcon, LinkedinIcon } from './components/icons'
import { Navbar, Container } from './components/layout'
import { Button } from './components/ui'
import { skillGroups } from './data/skills'
import { experience } from './data/experience'
import { projects } from './data/projects'

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
      {/* Skip link — first focusable element for keyboard/AT users. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-dark"
      >
        Skip to content
      </a>

      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <Navbar />

      <main id="main" className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <Container className="pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-48">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* Message */}
              <div className="max-w-2xl animate-fade-up">
                <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink-border bg-ink-card/50 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for freelance &amp; contract work
                </span>

                <h1 className="text-display-2xl text-white">
                  I build web products that are{' '}
                  <span className="text-accent">ready for real users.</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                  I&apos;m <span className="font-semibold text-white">Ganesh Mishra</span>, a Full-Stack
                  Engineer with 3+ years of experience building production systems across fintech,
                  food delivery, SaaS, and business applications.
                </p>

                <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                  From APIs and databases to polished React interfaces and cloud deployment, I can
                  take a product from idea to production.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#work" size="lg" className="w-full sm:w-auto">
                    View Selected Work
                    <ArrowUpRight size={18} />
                  </Button>
                  <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                    Let&apos;s Work Together
                  </Button>
                </div>

                <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                  React / Next.js · Node.js / NestJS · PostgreSQL · AWS / Azure
                </p>
              </div>

              {/* Technical detail — a code panel, not a portrait */}
              <div
                className="relative animate-fade-up lg:justify-self-end"
                style={{ animationDelay: '0.12s' }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 -z-10 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(148,163,184,0.18) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                    maskImage: 'radial-gradient(closest-side, black, transparent)',
                    WebkitMaskImage: 'radial-gradient(closest-side, black, transparent)',
                  }}
                />
                <div className="animate-float overflow-hidden rounded-card-lg border border-ink-border/70 bg-ink-card/60 shadow-card backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-ink-border/60 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-slate-600/70" />
                    <span className="h-3 w-3 rounded-full bg-slate-600/70" />
                    <span className="h-3 w-3 rounded-full bg-slate-600/70" />
                    <span className="ml-3 font-mono text-xs text-slate-500">api/checkout/route.js</span>
                  </div>
                  <div className="overflow-x-auto whitespace-pre p-5 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">
                    <div><span className="text-brand-purple">export async function</span> <span className="text-brand-cyan">POST</span>(req) {'{'}</div>
                    <div>  <span className="text-brand-purple">const</span> order = <span className="text-brand-purple">await</span> <span className="text-brand-cyan">createOrder</span>(req)</div>
                    <div>  <span className="text-brand-purple">await</span> payments.<span className="text-brand-cyan">charge</span>(order)   <span className="text-slate-500">// Stripe · Razorpay</span></div>
                    <div>  <span className="text-brand-purple">await</span> db.orders.<span className="text-brand-cyan">insert</span>(order)</div>
                    <div>  <span className="text-brand-purple">return</span> <span className="text-brand-cyan">Response</span>.json(order, {'{'} status: <span className="text-brand-emerald">201</span> {'}'})</div>
                    <div>{'}'}<span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent align-middle" aria-hidden="true" /></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
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
