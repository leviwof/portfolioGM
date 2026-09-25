import { cn } from '../../lib/cn'

const tones = {
  accent: 'border-accent/30 bg-accent-soft text-accent',
  neutral: 'border-ink-border bg-ink-light/50 text-slate-300',
  success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
}

/**
 * Badge — status/label pill (e.g. "Current Role", "Available").
 */
export default function Badge({ tone = 'accent', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
