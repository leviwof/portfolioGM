import { cn } from '../../lib/cn'

/**
 * Container — the single horizontal-rhythm primitive.
 * Centers content, caps width, and applies consistent responsive gutters.
 * Use this instead of ad-hoc `max-w-* mx-auto px-*` wrappers.
 */
export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
