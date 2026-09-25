import { CaseStudyPage } from '../components/case-study'
import { caseStudies } from '../data/caseStudies'

/** FirstHuman case study — /work/firsthuman */
export default function FirstHumanCaseStudy() {
  return <CaseStudyPage data={caseStudies.firsthuman} />
}
