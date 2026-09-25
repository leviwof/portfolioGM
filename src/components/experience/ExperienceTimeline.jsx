import { ArrowUpRight } from 'lucide-react'

import { Reveal, Tag, Badge } from '../ui'
import { cn } from '../../lib/cn'

/**
 * ExperienceTimeline — an editorial, two-column timeline (not a corporate
 * dotted rail). Each role is a numbered entry: a left meta column (dates,
 * company, role, location, optional link) and a wider right column (summary,
 * curated highlights, domain tags). Entries are divided by a single hairline.
 *
 * Desktop uses the full width via the two-column split; on mobile it collapses
 * to a clean vertical stack. Scroll-reveal is applied per entry — never per
 * bullet — so the section animates in calmly.
 */
export function ExperienceTimeline({ items }) {
  return (
    <ol className="mt-14">
      {items.map((job, i) => (
        <Reveal
          as="li"
          key={job.company}
          delay={i * 80}
          className={cn(
            'group grid gap-6 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-12',
            i > 0 && 'border-t border-ink-border/60',
          )}
        >
          {/* Meta rail */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-slate-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500">
                {job.duration}
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {job.company}
                </h3>
                {job.current && <Badge tone="accent">Current</Badge>}
              </div>
              <p className="mt-1 text-base font-medium text-slate-300">{job.role}</p>
              <p className="mt-1 text-sm text-slate-500">{job.location}</p>
            </div>

            {job.link && (
              <a
                href={job.link.href}
                {...(job.link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="focus-ring group/link mt-1 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                {job.link.label}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            )}
          </div>

          {/* Content */}
          <div>
            <p className="text-base leading-relaxed text-slate-300">{job.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {job.highlights.map((h, hi) => (
                <li
                  key={hi}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span
                    className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}

export default ExperienceTimeline
