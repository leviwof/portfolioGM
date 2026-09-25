import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Reveal — fades/slides children in the first time they scroll into view.
 * Fast and subtle by design. Falls back to visible immediately when the
 * observer is unavailable or the user prefers reduced motion (the motion-safe
 * variants also neutralise the transition in that case).
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, children, ...props }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(() => prefersReduced())

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      className={cn(
        'motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out',
        shown ? 'opacity-100 translate-y-0' : 'motion-safe:translate-y-4 motion-safe:opacity-0',
        className,
      )}
      style={shown ? undefined : { transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
