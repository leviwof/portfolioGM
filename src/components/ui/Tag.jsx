import { cn } from '../../lib/cn'

/**
 * Tag — small technology/keyword chip. Neutral by default.
 */
export default function Tag({ as: Tag = 'span', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-1 rounded-md border border-ink-border/70 bg-ink-light/40 px-2.5 py-1 text-xs font-medium text-slate-300',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
