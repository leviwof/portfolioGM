import vendingKioskImg from '../assets/vending_kiosk.jpg'
import ayurvedicWebImg from '../assets/ayurvedic_web.jpg'
import aiLoanImg from '../assets/ai_loan.jpg'
import investmentDashImg from '../assets/investment_dash.jpg'
import aiChatbotImg from '../assets/ai_chatbot.jpg'

/**
 * Project catalog.
 *
 * NOTE for the redesign: `displayUrl` for projects without a real `liveUrl`
 * (ai-loan-dashboard, investment-dashboard, ai-chatbot) currently shows a
 * placeholder address in the browser-chrome mockup. For an honest, client-
 * facing positioning these should become real repo/case-study links or the
 * fake address bar should be dropped when the Projects section is rebuilt.
 */
export const projects = [
  {
    id: 'vending-kiosk',
    name: 'Vending Machine Kiosk UI',
    subtitle: 'Touchscreen Ordering & Kiosk Telemetry Interface',
    description: 'High-responsiveness digital vending kiosk interface engineered for automated snack & beverage ordering. Features live product grid, touch-optimized interaction model, real-time cart state calculation, and sleek commercial kiosk telemetry UI.',
    image: vendingKioskImg,
    liveUrl: 'https://vending-ui-six.vercel.app/kiosk',
    githubUrl: 'https://github.com/leviwof',
    category: 'Web & Kiosk Apps',
    featured: true,
    badge: 'Live Kiosk App',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    displayUrl: 'vending-ui-six.vercel.app/kiosk',
    tags: ['React', 'Vite', 'Touchscreen UI', 'State Machine', 'Tailwind CSS', 'Kiosk Telemetry'],
    highlights: [
      'Touch-optimized digital menu grid with fast category filtering',
      'Real-time order cart state calculation & tactile item selection',
      'High-contrast UI designed for commercial hardware displays',
    ],
  },
  {
    id: 'ayurvedic-web',
    name: 'Ayurvedic Healthcare & E-Commerce Platform',
    subtitle: 'Holistic Herbal Wellness & Consultation Portal',
    description: 'Full-featured web application for Ayurvedic wellness products and consultation services. Includes interactive product catalog, natural remedy assessments, appointment booking UI, and modern responsive e-commerce storefront.',
    image: ayurvedicWebImg,
    liveUrl: 'https://ayurvedic-web-ui.vercel.app/',
    githubUrl: 'https://github.com/leviwof',
    category: 'Web & Kiosk Apps',
    featured: true,
    badge: 'Live E-Commerce App',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    displayUrl: 'ayurvedic-web-ui.vercel.app',
    tags: ['React', 'Tailwind CSS', 'Healthcare UI', 'E-Commerce', 'REST APIs', 'Responsive Web'],
    highlights: [
      'Curated organic herbal catalog with detailed modal views',
      'Interactive wellness consultation & remedy finder UI',
      'Seamless mobile-first responsive shopping experience',
    ],
  },
  {
    id: 'ai-loan-dashboard',
    name: 'AI Loan Approval & Credit Assessment Dashboard',
    subtitle: 'Fintech Credit Decisioning & Underwriting Platform',
    description: 'AI-assisted loan decision engine and automated notification platform. Streamlined underwriting workflows and risk assessment, boosting approval efficiency by 15% across 100,000+ customer records.',
    image: aiLoanImg,
    liveUrl: null,
    githubUrl: 'https://github.com/leviwof',
    category: 'AI & Fintech',
    featured: true,
    badge: 'Fintech Platform',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    displayUrl: 'niyoblu.fintech.internal/loans',
    tags: ['React', 'Node.js', 'Docker', 'Microservices', 'CI/CD', 'Fintech'],
    highlights: [
      'Real-time automated credit risk scoring pipeline',
      'Interactive visual decision analytics for underwriters',
      'High-scale microservices processing 100k+ customer accounts',
    ],
  },
  {
    id: 'investment-dashboard',
    name: 'Real-Time Investment & Portfolio Dashboard',
    subtitle: 'High-Frequency Asset & Stock Analytics UI',
    description: 'Real-time portfolio tracking platform with live streaming graphs, market sentiment feeds, and interactive asset breakdown built for continuous high availability and instant responsiveness.',
    image: investmentDashImg,
    liveUrl: null,
    githubUrl: 'https://github.com/leviwof',
    category: 'AI & Fintech',
    featured: false,
    badge: 'Analytics UI',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    displayUrl: 'portfolio.analytics.dev',
    tags: ['React', 'Node.js', 'WebSockets', 'Microservices', 'Tailwind CSS'],
    highlights: [
      'Live streaming candlestick stock analytics charts',
      'Portfolio asset allocation pie & performance trend tracking',
    ],
  },
  {
    id: 'ai-chatbot',
    name: 'Automated AI Customer Support Chatbot',
    subtitle: 'LLM Powered Support & Ticket Automation',
    description: 'Intelligent conversational assistant that reduced customer response times by 50%. Integrated LLM prompt engineering, automated intent recognition, and smooth escalation fallbacks.',
    image: aiChatbotImg,
    liveUrl: null,
    githubUrl: 'https://github.com/leviwof',
    category: 'AI & Fintech',
    featured: false,
    badge: 'AI Assistant',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    displayUrl: 'support.ai-bot.internal',
    tags: ['Node.js', 'React', 'LLM Integration', 'Docker', 'Tailwind CSS'],
    highlights: [
      '50% reduction in customer support response latency',
      'Context-aware knowledge base lookup and intelligent ticket routing',
    ],
  },
]

export default projects
