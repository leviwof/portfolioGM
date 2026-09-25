import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/layout'
import { Button } from '../components/ui'

/**
 * Zenzio case-study route (/work/zenzio).
 * Route structure only — the detailed case-study content is intentionally
 * deferred to a later prompt. This is a lightweight placeholder shell.
 */
export default function ZenzioCaseStudy() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <header className="border-b border-ink-border/60">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="focus-ring font-display text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            Ganesh Mishra
          </a>
          <a
            href="/#work"
            className="focus-ring inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Back to work
          </a>
        </Container>
      </header>

      <main>
        <Container className="py-24 sm:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Case Study · Production Engineering
          </p>
          <h1 className="mt-4 text-display-xl text-white">Zenzio</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            Multi-platform food delivery ecosystem.
          </p>
          <p className="mt-8 max-w-2xl leading-relaxed text-slate-400">
            A detailed case study is in progress — the architecture, order and delivery
            workflows, real-time tracking, and the operational tooling behind Zenzio. Check
            back shortly.
          </p>
          <div className="mt-10">
            <Button href="/#work" variant="secondary">
              Back to Selected Work
            </Button>
          </div>
        </Container>
      </main>
    </div>
  )
}
