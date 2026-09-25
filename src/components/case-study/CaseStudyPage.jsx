import { useEffect } from 'react'
import CaseTopBar from './CaseTopBar'
import CaseHero from './CaseHero'
import CaseSection from './CaseSections'
import CaseFooterNav from './CaseFooterNav'

// Project brand hue → hex, mirroring ProjectCover. Exposed to the subtree as
// the --case-accent CSS variable so section renderers can accent themselves
// without relying on runtime-generated Tailwind classes.
const HUE = {
  emerald: '#10B981',
  cyan: '#06B6D4',
  indigo: '#6366F1',
  purple: '#A855F7',
  amber: '#F59E0B',
}

/**
 * CaseStudyPage — renders a full case study from its data object. Pages under
 * src/pages/ are thin wrappers that pass the matching entry from caseStudies.
 */
export default function CaseStudyPage({ data }) {
  const accent = HUE[data.accent] || HUE.emerald

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${data.title} — Ganesh Mishra`
    return () => {
      document.title = 'Ganesh Mishra'
    }
  }, [data.title])

  return (
    <div className="min-h-screen bg-ink text-slate-100" style={{ '--case-accent': accent }}>
      <CaseTopBar />
      <main id="main">
        <CaseHero data={data} />
        {data.sections.map((section, i) => (
          <CaseSection key={`${section.type}-${i}`} section={section} />
        ))}
        <CaseFooterNav slug={data.slug} />
      </main>
    </div>
  )
}
