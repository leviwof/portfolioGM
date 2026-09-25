import { useEffect } from 'react'

/**
 * useDocumentMeta — client-side <title> and meta description management for
 * this SPA. Sets the document title (and, when provided, the existing
 * `<meta name="description">` content) on mount, and restores the previous
 * values on unmount so navigating between routes never leaves a stale title.
 *
 * The static tags in index.html remain the source of truth for crawlers that
 * don't execute JS; this only improves the in-app experience and JS-aware
 * link unfurlers.
 */
export function useDocumentMeta({ title, description } = {}) {
  useEffect(() => {
    const prevTitle = document.title
    if (title) document.title = title

    let metaEl = null
    let prevDesc = null
    if (description) {
      metaEl = document.querySelector('meta[name="description"]')
      if (metaEl) {
        prevDesc = metaEl.getAttribute('content')
        metaEl.setAttribute('content', description)
      }
    }

    return () => {
      document.title = prevTitle
      if (metaEl && prevDesc != null) metaEl.setAttribute('content', prevDesc)
    }
  }, [title, description])
}

export default useDocumentMeta
