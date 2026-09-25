import { CaseStudyPage } from '../components/case-study'
import { caseStudies } from '../data/caseStudies'

/** Zenzio case study — /work/zenzio */
export default function ZenzioCaseStudy() {
  return <CaseStudyPage data={caseStudies.zenzio} />
}
