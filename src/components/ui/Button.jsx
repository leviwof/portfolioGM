import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold ' +
  'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50'

const variants = {
  // Solid accent — reserve for the single primary action in a view.
  primary: 'bg-accent text-ink-dark shadow-sm hover:bg-accent-strong active:scale-[0.98]',
  // Bordered surface — the default for secondary actions.
  secondary: 'border border-ink-border bg-ink-card/40 text-white hover:border-slate-600 hover:bg-ink-card',
  // Quiet, borderless.
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
  // Outline with an accent hint on hover.
  outline: 'border border-ink-border text-slate-200 hover:border-accent/50 hover:text-white',
}

const sizes = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
}

/**
 * Button — polymorphic. Renders an <a> when `href` is passed, otherwise a
 * <button>. One place for CTA styling so every call-to-action matches.
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type,
  ...props
}) {
  const Tag = as || (href ? 'a' : 'button')
  const extra = Tag === 'button' ? { type: type || 'button' } : { href }
  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...extra} {...props}>
      {children}
    </Tag>
  )
}
