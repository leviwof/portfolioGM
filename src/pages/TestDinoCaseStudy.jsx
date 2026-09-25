import { CaseStudyPage } from '../components/case-study'
import { caseStudies } from '../data/caseStudies'

/** TestDino case study — /work/testdino */
export default function TestDinoCaseStudy() {
  return <CaseStudyPage data={caseStudies.testdino} />
}
