import { ArrowUpRight } from 'lucide-react'
import { Container } from '../layout'
import { Button, Reveal } from '../ui'
import { ProjectCover } from '../work'

/**
 * CaseHero — the opening of a case study: category label, title, subtitle,
 * a metadata row (Role / Domain / Status), an optional core-tech line, an
 * optional live CTA, and the project's thematic cover as the visual.
 * The project's brand hue is exposed to descendants via the --case-accent
 * CSS variable, set on the page root by <CaseStudyPage />.
 */
export default function CaseHero({ data }) {
  const { title, subtitle, category, theme, accent, hero } = data
  const { meta = [], tech, live } = hero || {}

  return (
    <section className="relative overflow-hidden">
      {/* Subtle brand-hued glow, kept restrained. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{
          background:
            'radial-gradient(60% 70% at 78% 0%, color-mix(in srgb, var(--case-accent) 16%, transparent) 0%, transparent 70%)',
        }}
      />
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <p
                className="font-mono text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--case-accent)' }}
              >
                {category}
              </p>
              <h1 className="mt-5 text-display-2xl text-white">{title}</h1>
              <p className="mt-4 max-w-xl text-xl leading-relaxed text-slate-300">{subtitle}</p>
            </Reveal>

            {meta.length > 0 && (
              <Reveal delay={80}>
                <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
                  {meta.map((m) => (
                    <div key={m.label}>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-white">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}

            {tech && (
              <Reveal delay={120}>
                <p className="mt-7 max-w-xl font-mono text-xs leading-relaxed text-slate-400">
                  {tech}
                </p>
              </Reveal>
            )}

            {live && (
              <Reveal delay={160}>
                <div className="mt-8">
                  <Button href={live.href} target="_blank" rel="noopener noreferrer">
                    {live.label}
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-card-lg border border-ink-border shadow-card">
              <div className="aspect-[16/10] w-full">
                <ProjectCover theme={theme} accent={accent} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
