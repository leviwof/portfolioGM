import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container } from '../layout'
import { Button, Card, Reveal } from '../ui'
import { caseNavItems } from '../../data/caseStudies'

/**
 * CaseFooterNav — cyclic Previous / Current / Next navigation across the three
 * case studies, followed by the closing "work together" call to action.
 * Sequence comes from caseNavItems (FirstHuman → Zenzio → TestDino).
 */
export default function CaseFooterNav({ slug }) {
  const i = caseNavItems.findIndex((item) => item.slug === slug)
  if (i === -1) return null

  const n = caseNavItems.length
  const prev = caseNavItems[(i - 1 + n) % n]
  const current = caseNavItems[i]
  const next = caseNavItems[(i + 1) % n]

  const cols = [
    { role: 'Previous Project', item: prev, dir: 'prev' },
    { role: 'Current Project', item: current, dir: 'current' },
    { role: 'Next Project', item: next, dir: 'next' },
  ]

  return (
    <section className="scroll-mt-24 border-t border-ink-border/60 py-14 sm:py-20">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {cols.map(({ role, item, dir }) => {
            const isCurrent = dir === 'current'
            return (
              <Reveal key={role}>
                <Card
                  as={isCurrent ? 'div' : 'a'}
                  href={isCurrent ? undefined : item.href}
                  interactive={!isCurrent}
                  className={`flex h-full flex-col p-6 ${
                    isCurrent ? 'bg-ink-card/70' : ''
                  }`}
                >
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    {dir === 'prev' && <ArrowLeft size={13} />}
                    {role}
                    {dir === 'next' && <ArrowRight size={13} />}
                  </span>
                  <span className="mt-3 font-display text-lg font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="mt-1 text-sm text-slate-400">{item.category}</span>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="mt-14 rounded-card-lg border border-ink-border bg-ink-card/40 p-8 text-center sm:p-12">
            <h2 className="text-display-lg text-white">
              Have a product that needs engineering help?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              I take web products from idea to production — backend, frontend, and everything in
              between.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/#contact" size="lg">
                Let&rsquo;s Work Together
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
