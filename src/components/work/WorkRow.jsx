import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '../ui'
import { WorkCard } from './WorkCard'

/**
 * WorkRow — all projects in a single horizontal row that scrolls sideways
 * (scroll-snap). Swipe on touch; arrow buttons + edge fades on desktop.
 * Each card reveals with a fast, staggered scroll-in.
 */
export function WorkRow({ items }) {
  const trackRef = useRef(null)

  const scrollByViewport = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Edge fades hint that the row continues */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-ink to-transparent sm:block" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-ink to-transparent sm:block" />

      <ul
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Selected work projects — scroll horizontally"
        className="focus-ring flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth rounded-card pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((project, i) => (
          <li key={project.id} className="w-[86vw] max-w-[340px] shrink-0 snap-start sm:w-[340px]">
            <Reveal delay={i * 70} className="h-full">
              <WorkCard project={project} variant="compact" />
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Desktop scroll controls */}
      <div className="mt-5 hidden items-center justify-end gap-2 md:flex">
        <button
          type="button"
          onClick={() => scrollByViewport(-1)}
          aria-label="Scroll to previous projects"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border bg-ink-light/40 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByViewport(1)}
          aria-label="Scroll to next projects"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-border bg-ink-light/40 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default WorkRow
