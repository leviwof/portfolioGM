import { useState } from 'react'

import { cn } from '../../lib/cn'
import { moreWork, moreWorkFilters } from '../../data/moreWork'
import { MoreWorkCard } from './MoreWorkCard'

/**
 * MoreWorkGrid — a filterable, editorial archive grid.
 *
 * Filtering is instant and client-side: the active category swaps the visible
 * set with no reload. Cards re-key on the active filter so the matching set
 * fades in gently (motion-safe only) — a single, calm entrance, not a
 * choreographed reshuffle. Feature cards span two columns; `grid-flow-row-dense`
 * backfills the gaps so the layout stays tidy as items come and go.
 */
export function MoreWorkGrid() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? moreWork : moreWork.filter((p) => p.filter === active)

  return (
    <div>
      {/* Filter bar — horizontally scrollable on small screens */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {moreWorkFilters.map((f) => {
          const on = active === f
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f)}
              className={cn(
                'focus-ring shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                on
                  ? 'border-accent bg-accent text-white'
                  : 'border-ink-border bg-ink-card/40 text-slate-400 hover:border-slate-600 hover:text-white',
              )}
            >
              {f}
            </button>
          )
        })}
      </div>

      {/* Editorial grid */}
      <div className="mt-10 grid grid-flow-row-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <div
            key={`${active}-${project.id}`}
            className={cn(
              'motion-safe:animate-fade-up',
              project.size === 'feature' && 'sm:col-span-2 lg:col-span-2',
            )}
          >
            <MoreWorkCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoreWorkGrid
