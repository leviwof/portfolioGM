import { cn } from '../../lib/cn'

/** Bare host for the faux address bar — no protocol, no path. */
function hostOf(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
}

/**
 * SiteThumb — an honest web-preview placeholder, never a fabricated screenshot.
 * A minimal browser frame (dots + the real domain) over a soft dot-grid with
 * the project's monogram. The preview layer zooms slightly on card hover; the
 * category chip sits above the overlay so it stays visible throughout.
 *
 * Hover states key off the nearest ancestor marked `group` (the card).
 */
export function SiteThumb({ title, url, category, mark, className }) {
  return (
    <div className={cn('relative flex h-full w-full flex-col overflow-hidden bg-ink-dark', className)}>
      {/* Accent hairline */}
      <span aria-hidden className="absolute inset-x-0 top-0 z-20 h-0.5 bg-accent/60" />

      {/* Faux browser bar */}
      <div className="relative z-20 flex shrink-0 items-center gap-1.5 border-b border-ink-border/60 bg-ink/60 px-3 py-2 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-slate-600/70" />
        <span className="h-2 w-2 rounded-full bg-slate-600/70" />
        <span className="h-2 w-2 rounded-full bg-slate-600/70" />
        <span className="ml-2 truncate font-mono text-[10px] text-slate-500">{hostOf(url)}</span>
      </div>

      {/* Preview body */}
      <div className="relative flex-1 overflow-hidden">
        {/* Zoom layer: dot-grid + monogram */}
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(148,163,184,0.10) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />
          <div className="flex h-full w-full items-center justify-center">
            <span className="select-none font-display text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl">
              {mark}
            </span>
          </div>
        </div>

        {/* Base gradient + soft accent overlay on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-accent/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Category chip — stays put above the overlay */}
        <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full border border-ink-border bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400 backdrop-blur-sm">
          {category}
        </span>
        <span className="sr-only">{title} preview</span>
      </div>
    </div>
  )
}

export default SiteThumb
