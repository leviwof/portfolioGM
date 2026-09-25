import { cn } from '../../lib/cn'

/**
 * Card — restrained surface primitive.
 * Border + subtle fill + soft shadow. No heavy glassmorphism by default.
 * Pass `interactive` for a gentle hover lift on clickable cards.
 */
export default function Card({
  as: Tag = 'div',
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'rounded-card border border-ink-border/70 bg-ink-card/40 shadow-card',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-ink-card/70 hover:shadow-card-hover',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
