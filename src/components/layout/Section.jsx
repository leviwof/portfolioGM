import Container from './Container'
import { cn } from '../../lib/cn'

/**
 * Section — vertical-rhythm primitive.
 * Owns the consistent top/bottom spacing and optional hairline top border,
 * and wraps children in a Container. `full` opts out of the inner Container
 * for sections that manage their own width (e.g. full-bleed hero).
 */
export default function Section({
  id,
  as: Tag = 'section',
  bordered = true,
  full = false,
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      className={cn(
        'scroll-mt-24 py-20 sm:py-28 lg:py-32',
        bordered && 'border-t border-ink-border/60',
        className,
      )}
      {...props}
    >
      {full ? children : <Container className={containerClassName}>{children}</Container>}
    </Tag>
  )
}
