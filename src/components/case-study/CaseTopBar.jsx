import { ArrowLeft } from 'lucide-react'
import { Container } from '../layout'

/**
 * CaseTopBar — slim sticky header for a case-study route.
 * Wordmark returns home; "Back to work" returns to the Selected Work section.
 */
export default function CaseTopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
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
  )
}
