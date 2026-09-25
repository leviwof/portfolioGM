import { cn } from '../../lib/cn'

/**
 * Eyebrow — the small mono label that sits above a section title.
 * Minimal by design: a short accent rule + uppercase mono text (no pill).
 */
export default function Eyebrow({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent',
        className,
      )}
      {...props}
    >
      <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
      {children}
    </span>
  )
}
