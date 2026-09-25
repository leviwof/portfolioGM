/**
 * Tiny className joiner — filters out falsy values and flattens arrays so
 * primitives can compose conditional classes without pulling in a dependency.
 *
 *   cn('base', condition && 'active', ['a', 'b'])
 */
export function cn(...classes) {
  return classes.flat().filter(Boolean).join(' ')
}

export default cn
