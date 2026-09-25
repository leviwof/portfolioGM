import { Mail } from 'lucide-react'

import Container from './Container'
import { GithubIcon, LinkedinIcon } from '../icons'
import { site, nav } from '../../data/site'
import { footerNav } from '../../data/contact'

// Real social/contact links only — no invented profiles, no legal-page stubs.
const socials = [
  { label: 'LinkedIn', href: site.links.linkedin, Icon: LinkedinIcon, external: true },
  { label: 'GitHub', href: site.links.github, Icon: GithubIcon, external: true },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail, external: false },
]

/**
 * SiteFooter — minimal, professional close.
 * Brand on the left; section nav + social on the right; a single copyright
 * line beneath. Deliberately quiet: no extra links, no fake legal pages.
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-border/60 bg-ink-dark/30">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="rounded-sm font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              {nav.logo}
            </a>
            <p className="mt-2 text-sm text-slate-500">{site.role}</p>
          </div>

          {/* Section nav + social */}
          <div className="flex flex-col gap-6 sm:items-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
                {footerNav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-ink-border bg-ink-card/40 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-border/50 pt-6">
          <p className="text-xs text-slate-600">© 2026 Ganesh Mishra. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
