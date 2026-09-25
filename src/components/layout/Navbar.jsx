import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import Button from '../ui/Button'
import { nav } from '../../data/site'
import { cn } from '../../lib/cn'

/**
 * Navbar — the global top navigation.
 * Transparent over the hero, then settles onto a hairline surface on scroll.
 * Desktop shows the links + primary CTA; mobile collapses to a clean panel.
 * Content (logo, links, CTA) is sourced from `nav` in data/site.js.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Settle the bar onto a surface once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the mobile menu is open: lock scroll, close on Escape or desktop resize.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-ink-border/60 bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20" aria-label="Primary">
          {/* Wordmark */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="rounded-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink sm:text-[0.95rem]"
          >
            {nav.logo}
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href={nav.cta.href} size="sm">
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-ink-border bg-ink-card/40 p-2 text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu — scrim + panel, below the bar (h-16) */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-x-0 bottom-0 top-16 z-40 bg-ink-dark/60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="mobile-menu"
        className={cn(
          'absolute inset-x-0 top-16 z-40 border-b border-ink-border/60 bg-ink/95 backdrop-blur-md transition-all duration-300 md:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-ink-border/60 pt-5">
            <Button href={nav.cta.href} size="lg" className="w-full" onClick={() => setOpen(false)}>
              {nav.cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
