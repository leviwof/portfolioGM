import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Container } from '../layout'
import { Button, Card, Eyebrow, Reveal, Tag } from '../ui'

/**
 * Case-study section renderers.
 *
 * Each case study in src/data/caseStudies.js is an ordered array of
 * `{ type, ... }` blocks. <CaseSection /> dispatches each block to the
 * matching renderer below, so pages stay data-driven and every project can
 * omit any section it has no honest content for.
 *
 * Shared rhythm: full-width hairline divider + generous vertical padding,
 * a constrained heading column, then the section body.
 */

function SectionShell({ eyebrow, title, lead, children }) {
  return (
    <section className="scroll-mt-24 border-t border-ink-border/60 py-14 sm:py-20">
      <Container>
        {(eyebrow || title || lead) && (
          <Reveal>
            <div className="max-w-2xl">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && <h2 className="mt-4 text-display-lg text-white">{title}</h2>}
              {lead && <p className="mt-4 text-lg leading-relaxed text-slate-300">{lead}</p>}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}

function AccentDot() {
  return (
    <span
      aria-hidden
      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
      style={{ background: 'var(--case-accent)' }}
    />
  )
}

function Overview({ eyebrow, title, lead, paragraphs = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      {paragraphs.length > 0 && (
        <Reveal delay={80}>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-slate-400">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      )}
    </SectionShell>
  )
}

function Points({ eyebrow, title, lead, points = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {points.map((pt, i) => (
          <Reveal key={i} delay={i * 40}>
            <div className="flex gap-3">
              <AccentDot />
              <p className="leading-relaxed text-slate-300">{pt}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function Role({ eyebrow, title, lead, groups = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      {groups.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <Card className="h-full p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                  {g.label}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-slate-300">
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </SectionShell>
  )
}

function Numbered({ eyebrow, title, lead, items = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 40}>
            <div className="flex gap-4">
              <span
                className="font-mono text-sm font-semibold tabular-nums"
                style={{ color: 'var(--case-accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-white">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function Challenges({ eyebrow, title, lead, items = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 60}>
            <Card className="h-full p-6">
              <h3 className="font-display text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{it.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function Flow({ eyebrow, title, lead, steps = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <ol className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((s, i) => (
          <Reveal as="li" key={s} delay={i * 60} className="flex items-center gap-3">
            <div className="rounded-xl border border-ink-border bg-ink-card/50 px-4 py-3 text-sm text-slate-200">
              <span className="mr-2 font-mono text-xs" style={{ color: 'var(--case-accent)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {s}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="hidden shrink-0 text-slate-600 sm:block" aria-hidden />
            )}
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  )
}

function Value({ eyebrow, title, lead, points = [], message }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-4">
          {points.map((pt, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="flex gap-3">
                <Check size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--case-accent)' }} />
                <p className="leading-relaxed text-slate-300">{pt}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {message && (
          <Reveal delay={120}>
            <blockquote
              className="rounded-card border border-ink-border bg-ink-card/50 p-6 text-lg font-medium leading-relaxed text-white"
              style={{ borderLeftColor: 'var(--case-accent)', borderLeftWidth: '3px' }}
            >
              {message}
            </blockquote>
          </Reveal>
        )}
      </div>
    </SectionShell>
  )
}

function Principle({ eyebrow, title, body }) {
  return (
    <section className="scroll-mt-24 border-t border-ink-border/60 py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <blockquote
              className="mt-6 pl-5 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl"
              style={{ borderLeftColor: 'var(--case-accent)', borderLeftWidth: '3px' }}
            >
              {title}
            </blockquote>
            {body && <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">{body}</p>}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Outcome({ eyebrow, title, lead, status, points = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-8 flex flex-col gap-6">
        {status && (
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-ink-border bg-ink-card/50 px-3 py-1 text-xs font-medium text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--case-accent)' }} />
            {status}
          </span>
        )}
        <ul className="max-w-2xl space-y-3">
          {points.map((pt, i) => (
            <Reveal as="li" key={i} delay={i * 50} className="flex gap-3">
              <AccentDot />
              <span className="leading-relaxed text-slate-300">{pt}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  )
}

function TechStack({ eyebrow, title, lead, groups = [] }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <div className="mt-10 space-y-6">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 50}>
            <div className="flex flex-col gap-3 border-t border-ink-border/40 pt-5 sm:flex-row sm:items-baseline sm:gap-6">
              <p className="w-32 shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function Live({ eyebrow, title, lead, product, desc, href, label }) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} lead={lead}>
      <Reveal delay={80}>
        <Card className="mt-10 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {product && (
              <p className="font-display text-lg font-semibold text-white">{product}</p>
            )}
            {desc && (
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{desc}</p>
            )}
          </div>
          {href && (
            <Button href={href} target="_blank" rel="noopener noreferrer" className="shrink-0">
              {label}
              <ArrowUpRight size={16} />
            </Button>
          )}
        </Card>
      </Reveal>
    </SectionShell>
  )
}

const RENDERERS = {
  overview: Overview,
  points: Points,
  role: Role,
  numbered: Numbered,
  challenges: Challenges,
  flow: Flow,
  value: Value,
  principle: Principle,
  outcome: Outcome,
  techStack: TechStack,
  live: Live,
}

/**
 * CaseSection — dispatches one data block to its renderer. Unknown types are
 * skipped rather than throwing, so the data can evolve ahead of the UI.
 */
export default function CaseSection({ section }) {
  const Renderer = RENDERERS[section.type]
  if (!Renderer) return null
  return <Renderer {...section} />
}
