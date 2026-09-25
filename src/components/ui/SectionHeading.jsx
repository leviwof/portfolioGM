import Eyebrow from './Eyebrow'
import { cn } from '../../lib/cn'

/**
 * SectionHeading — composes the eyebrow, title, and lead paragraph with
 * consistent spacing so every section header lines up the same way.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
}) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className={cn('text-display-lg text-white', titleClassName)}>{title}</h2>
      )}
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
