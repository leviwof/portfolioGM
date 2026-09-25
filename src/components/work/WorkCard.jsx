import { ArrowUpRight } from 'lucide-react'
import { Card } from '../ui'
import { cn } from '../../lib/cn'
import { ProjectCover } from './ProjectCover'

// Category accent bar — a single restrained hue per project, nothing louder.
const ACCENT_BAR = {
  emerald: 'bg-brand-emerald/70',
  cyan: 'bg-brand-cyan/70',
  indigo: 'bg-brand-indigo/70',
  purple: 'bg-brand-purple/70',
  amber: 'bg-brand-amber/70',
}

function Domain({ url }) {
  if (!url) return null
  const host = url.replace(/^https?:\/\//, '').replace(/\/+$/, '')
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-ink-border bg-ink/70 px-2.5 py-1 font-mono text-[11px] text-slate-400 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
      {host}
    </span>
  )
}

/**
 * Preview — a real screenshot when one exists, otherwise a designed thematic
 * cover keyed to the project's domain (never a fabricated screenshot). Set
 * `image` in the project data to upgrade any card to a real capture.
 */
function Preview({ project, className }) {
  const { image, title, category, liveUrl, accent = 'emerald', theme } = project
  return (
    <div className={cn('relative overflow-hidden bg-ink-dark', className)}>
      <span aria-hidden className={cn('absolute inset-x-0 top-0 z-10 h-0.5', ACCENT_BAR[accent])} />
      {image ? (
        <img
          src={image}
          alt={`${title} — ${category}`}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectCover theme={theme} accent={accent} />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"
      />
      {liveUrl && (
        <div className="absolute bottom-3 left-3 z-10">
          <Domain url={liveUrl} />
        </div>
      )}
    </div>
  )
}

function Cta({ cta }) {
  if (!cta?.href) {
    return (
      <span
        aria-disabled="true"
        title="Link coming soon"
        className="inline-flex cursor-default items-center gap-1.5 text-sm font-semibold text-slate-500"
      >
        {cta?.label}
        <ArrowUpRight size={16} />
      </span>
    )
  }
  const external = /^https?:/.test(cta.href)
  return (
    <a
      href={cta.href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
    >
      {cta.label}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}

function CategoryRow({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center rounded-full border border-ink-border bg-ink-light/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {project.category}
      </span>
      {project.isNew && (
        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          New
        </span>
      )}
    </div>
  )
}

function Highlights({ items }) {
  if (!items?.length) return null
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((h) => (
        <li
          key={h}
          className="rounded-md border border-ink-border/70 bg-ink/50 px-2.5 py-1 text-xs text-slate-400"
        >
          {h}
        </li>
      ))}
    </ul>
  )
}

function Tags({ items }) {
  if (!items?.length) return null
  return (
    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ink-border/50 pt-5">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-md border border-ink-border bg-ink-light/30 px-2 py-0.5 font-mono text-[11px] text-slate-400"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

/**
 * WorkCard — three proportions so the six projects never read as one
 * repeated grid: `feature` (large), `wide` (full-width banner), `compact`.
 */
export function WorkCard({ project, variant = 'feature' }) {
  const { title, positioning, description, tags, highlights } = project

  if (variant === 'wide') {
    return (
      <Card interactive className="group grid overflow-hidden lg:grid-cols-2">
        <Preview project={project} className="min-h-[220px] lg:min-h-[320px]" />
        <div className="flex flex-col p-7 sm:p-9">
          <CategoryRow project={project} />
          <h3 className="mt-4 font-display text-2xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-accent">{positioning}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">{description}</p>
          <Highlights items={highlights} />
          <Tags items={tags} />
          <div className="mt-auto pt-7">
            <Cta cta={project.cta} />
          </div>
        </div>
      </Card>
    )
  }

  if (variant === 'compact') {
    return (
      <Card interactive className="group flex h-full flex-col overflow-hidden">
        <Preview project={project} className="aspect-[16/10]" />
        <div className="flex flex-1 flex-col p-6">
          <CategoryRow project={project} />
          <h3 className="mt-3 font-display text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-accent">{positioning}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
          <Tags items={tags} />
          <div className="pt-5">
            <Cta cta={project.cta} />
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card interactive className="group flex h-full flex-col overflow-hidden">
      <Preview project={project} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <CategoryRow project={project} />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-accent">{positioning}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{description}</p>
        <Highlights items={highlights} />
        <Tags items={tags} />
        <div className="mt-auto pt-6">
          <Cta cta={project.cta} />
        </div>
      </div>
    </Card>
  )
}

export default WorkCard
