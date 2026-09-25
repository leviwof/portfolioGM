import { ArrowUpRight } from 'lucide-react'

import { Card } from '../ui'
import { cn } from '../../lib/cn'
import { SiteThumb } from './SiteThumb'

/**
 * MoreWorkCard — a compact archive card: web-preview placeholder, name,
 * category (on the preview), short description, and a "View Project" CTA that
 * opens the live site in a new tab. Deliberately lighter than a Selected Work
 * card — no positioning line, no tag row, smaller type.
 *
 * `size: 'feature'` upgrades the card to a wider, side-by-side banner on large
 * screens; every other card is a standard stacked tile.
 */
export function MoreWorkCard({ project }) {
  const { title, description, url, category, mark, size } = project
  const feature = size === 'feature'

  return (
    <Card
      as="article"
      interactive
      className={cn('group flex h-full flex-col overflow-hidden', feature && 'lg:flex-row')}
    >
      <div
        className={cn(
          'relative shrink-0',
          feature ? 'aspect-[16/10] lg:aspect-auto lg:w-1/2' : 'aspect-[16/10]',
        )}
      >
        <SiteThumb title={title} url={url} category={category} mark={mark} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3
          className={cn(
            'font-display font-semibold text-white',
            feature ? 'text-lg sm:text-xl' : 'text-base',
          )}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

        <div className="pt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
          >
            View Project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </Card>
  )
}

export default MoreWorkCard
