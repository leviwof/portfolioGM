import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

import { Container } from '../components/layout'
import { Button } from '../components/ui'
import { nav } from '../data/site'

/**
 * NotFound — catch-all 404 for unknown routes (client-side, SPA).
 * Deliberately minimal and on-brand: no fabricated links, just a clear
 * message and a way back home.
 */
export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | Ganesh Mishra'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col bg-ink text-slate-100">
      {/* Ambient glow, matching the site */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <header className="relative z-10">
        <Container className="py-6">
          <a
            href="/"
            className="rounded-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            {nav.logo}
          </a>
        </Container>
      </header>

      <main className="relative z-10 flex flex-1 items-center">
        <Container className="py-20 text-center">
          <span className="font-display text-[5rem] font-bold leading-none text-accent sm:text-[7rem]">
            404
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Page not found.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg" className="w-full sm:w-auto">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
            <Button href="/#work" variant="secondary" size="lg" className="w-full sm:w-auto">
              View Selected Work
            </Button>
          </div>
        </Container>
      </main>
    </div>
  )
}
