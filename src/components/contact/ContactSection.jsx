import { ArrowUpRight, Mail } from 'lucide-react'

import { Section } from '../layout'
import { Button, Card, Eyebrow, Reveal } from '../ui'
import { GithubIcon, LinkedinIcon } from '../icons'
import { contactMethods, engagements, availabilityText } from '../../data/contact'
import { InquiryForm } from './InquiryForm'

// Map a contact method's `type` to its icon here so the data file stays JSX-free.
const iconFor = { email: Mail, linkedin: LinkedinIcon, github: GithubIcon }

/**
 * ContactSection — the closing "let's work together" moment.
 *
 * Flows top-to-bottom per the brief: a dominant CTA → three real contact
 * methods → the inquiry form beside the engagement options. Subtle and calm,
 * no stock imagery, no invented proof. The primary CTA scrolls to the form.
 */
export function ContactSection() {
  return (
    <Section id="contact">
      {/* 1 — Primary CTA (visually dominant) */}
      <Reveal>
        <div className="relative overflow-hidden rounded-card-lg border border-ink-border/70 bg-ink-card/40 px-6 py-14 text-center shadow-card sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 text-display-lg text-white">
              Have a product that needs engineering help?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Whether you&apos;re building an MVP, extending an existing product, or need ongoing
              engineering support, let&apos;s discuss what you&apos;re building.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#inquiry" size="lg" className="w-full sm:w-auto">
                Let&apos;s Work Together
                <ArrowUpRight size={18} />
              </Button>
              <Button href="#work" variant="secondary" size="lg" className="w-full sm:w-auto">
                View Selected Work
              </Button>
            </div>
            {/* 5 — Availability: static and honest, no real-time signal */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-card/50 px-3.5 py-1.5 text-xs font-medium text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {availabilityText}
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2 — Contact options (three real methods) */}
      <Reveal className="mt-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {contactMethods.map((m) => {
            const Icon = iconFor[m.type]
            return (
              <a
                key={m.type}
                href={m.href}
                {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group focus-ring flex items-center gap-4 rounded-card border border-ink-border/70 bg-ink-card/40 p-5 shadow-card transition-all hover:-translate-y-1 hover:border-slate-600 hover:bg-ink-card/70 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-border bg-ink-light/50 text-accent">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">{m.label}</span>
                  <span className="block truncate text-sm text-slate-400">{m.value}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            )
          })}
        </div>
      </Reveal>

      {/* 3 + 4 — Inquiry form beside the engagement options */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
        <Card id="inquiry" className="scroll-mt-28 p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-white">Start a project inquiry</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Building an MVP, extending an existing product, or need an engineer to own a feature?
            Tell me what you&apos;re working on.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </Card>

        <div className="lg:pt-2">
          <h3 className="font-display text-xl font-semibold text-white">How I Can Work With You</h3>
          <div className="mt-6 space-y-6">
            {engagements.map((e) => (
              <div key={e.no} className="border-l border-ink-border pl-5">
                <span className="font-mono text-xs text-accent">{e.no}</span>
                <h4 className="mt-1 font-display text-base font-semibold text-white">{e.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
