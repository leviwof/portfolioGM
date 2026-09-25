import { useState } from 'react'
import { ArrowUpRight, Mail, Check, Copy } from 'lucide-react'

import { GithubIcon, LinkedinIcon } from './components/icons'
import { Navbar, Container, Section } from './components/layout'
import { Button, Card, Tag, SectionHeading, Reveal } from './components/ui'
import { WorkRow } from './components/work'
import { ExperienceTimeline } from './components/experience'
import { cn } from './lib/cn'
import { metrics, services } from './data/services'
import { selectedWork } from './data/work'
import { technicalFocus } from './data/skills'
import { experience } from './data/experience'
import { aboutParagraphs, capabilities, education } from './data/about'

function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ganesh.stack21@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div id="top" className="min-h-screen bg-ink text-slate-100 selection:bg-accent/30 selection:text-white">
      {/* Skip link — first focusable element for keyboard/AT users. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
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

        {/* TRUST METRICS */}
        <div className="border-t border-ink-border/60 bg-ink-dark/20">
          <Container>
            <div className="grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:gap-y-0">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center px-6 text-center md:border-l md:border-ink-border/60 md:first:border-l-0"
                >
                  <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {m.value}
                  </span>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* SERVICES */}
        <Section id="services">
          <SectionHeading
            eyebrow="Services"
            title="What I Can Help You Build"
            description="Focused engagements across the full stack — each aimed at a real business outcome, not just shipping code."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} interactive className="flex flex-col gap-4 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-border bg-ink-light/50 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Section>

        {/* SELECTED WORK */}
        <Section id="work">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected Work"
              description="A selection of products and systems I've designed, built, and worked on across product engineering, AI, fintech, food delivery, and modern web experiences."
            />
          </Reveal>

          <div className="mt-12">
            <WorkRow items={selectedWork} />
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Building production software"
              description="Across fintech, food delivery, and business platforms."
            />
          </Reveal>
          <ExperienceTimeline items={experience} />
        </Section>

        {/* ABOUT */}
        <Section id="about">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="About"
                title="Full-stack engineering, from idea to production."
              />
            </div>
            <div>
              <div className="space-y-5">
                {aboutParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={cn(
                      'leading-relaxed',
                      i === 0 ? 'text-lg text-slate-200' : 'text-base text-slate-400',
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {capabilities.map((c, i) => (
                  <Card key={c.title} className="p-5">
                    <span className="font-mono text-xs text-slate-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      {c.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* TECHNICAL FOCUS */}
        <Section id="skills">
          <Reveal>
            <SectionHeading
              eyebrow="Technical Focus"
              title="The tools I work with"
              description="Grouped by area so the breadth is easy to scan — no logo walls, no ratings."
            />
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {technicalFocus.map((group, i) => (
              <Reveal key={group.title} delay={i * 60}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education — deliberately compact; kept lighter than Experience. */}
          <div className="mt-16 border-t border-ink-border/60 pt-8">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Education
            </span>
            <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-base font-semibold text-white">
                  {education.degree}
                </h3>
                <p className="text-sm text-slate-400">{education.institution}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                {education.duration}
              </p>
            </div>
          </div>
        </Section>

        {/* TRANSITION CTA */}
        <Section>
          <Reveal>
            <div className="relative overflow-hidden rounded-card-lg border border-ink-border/70 bg-ink-card/40 px-6 py-14 text-center shadow-card sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-display-lg text-white">
                  Need an engineer who can own the implementation?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                  Whether you&apos;re building an MVP, extending an existing product, or need
                  ongoing engineering support, let&apos;s discuss what you&apos;re building.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="#contact" size="lg" className="w-full sm:w-auto">
                    Let&apos;s Work Together
                    <ArrowUpRight size={18} />
                  </Button>
                  <Button href="#work" variant="secondary" size="lg" className="w-full sm:w-auto">
                    View Selected Work
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

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
                      className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-accent/25 transition-all hover:bg-accent-strong hover:scale-105"
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
    </div>
  )
}

export default App
