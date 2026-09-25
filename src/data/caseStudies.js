/**
 * Case-study content for the three featured projects.
 * Every claim here is drawn from the real projects and Ganesh's professional
 * experience — no invented metrics, technologies, or business outcomes.
 * Section arrays are rendered in order by <CaseStudyPage />.
 */

export const caseStudies = {
  zenzio: {
    slug: 'zenzio',
    title: 'Zenzio',
    subtitle: 'Building a connected food delivery ecosystem from the backend up.',
    category: 'Case Study · Production Engineering',
    accent: 'emerald',
    theme: 'delivery',
    seo: {
      title: 'Zenzio | Food Delivery Platform Case Study | Ganesh Mishra',
      description:
        'How Ganesh Mishra architected and built the backend for Zenzio — a multi-platform food delivery ecosystem with real-time order tracking, payments, phone-number masking, and a React admin portal, taken from zero to production.',
    },
    hero: {
      meta: [
        { label: 'Role', value: 'Backend / Full-Stack Engineer' },
        { label: 'Domain', value: 'Food Delivery' },
        { label: 'Status', value: 'Production' },
      ],
      tech: 'NestJS · TypeScript · PostgreSQL · React · Socket.IO · Docker · AWS · Azure',
      live: { href: 'https://zenzio-admin-portal.vercel.app/login', label: 'Explore Zenzio Admin' },
    },
    sections: [
      {
        type: 'overview',
        eyebrow: 'Product Overview',
        title: 'What Zenzio is',
        lead: 'Zenzio is a multi-platform food delivery ecosystem connecting customers, restaurants, delivery executives, and administrators through a connected set of applications and backend services.',
        paragraphs: [
          'I architected and built the backend from scratch for the ecosystem — a Customer App, a Restaurant App, a Delivery Executive App, and an Admin Portal, all sharing a common set of services.',
          'The platform was taken from zero to production within two weeks and was processing 5–15 orders per day during the early rollout.',
          'On the frontend, I developed the React.js Admin Portal modules connected to backend APIs for restaurant, order, delivery-user, offer, banner, and analytics management.',
        ],
      },
      {
        type: 'points',
        eyebrow: 'The Challenge',
        title: 'Multiple participants, one live operation',
        lead: 'Multiple participants in a food delivery operation need to stay synchronized in real time.',
        points: [
          'Customers need order status updates.',
          'Restaurants need to manage incoming orders.',
          'Delivery executives need delivery workflows.',
          'Administrators need operational visibility.',
          'Payments need to connect with order workflows.',
          'Sensitive customer and delivery contact information needs protection.',
          'Multiple applications need to communicate with a common backend.',
        ],
      },
      {
        type: 'role',
        eyebrow: 'My Role',
        title: 'Backend, real-time, integrations, and admin tooling',
        lead: 'Backend architecture, APIs, real-time workflows, integrations, deployment, and React admin tooling.',
        groups: [
          { label: 'Backend', items: ['NestJS', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Authentication & authorization'] },
          { label: 'Real-time', items: ['Socket.IO', 'Live order status', 'Delivery tracking workflows'] },
          { label: 'Integrations', items: ['Razorpay', 'Vodafone virtual-number calling'] },
          { label: 'Infrastructure', items: ['Docker', 'GitHub Actions', 'AWS', 'Azure'] },
          { label: 'Frontend', items: ['React.js Admin Portal'] },
        ],
      },
      {
        type: 'numbered',
        eyebrow: 'What I Built',
        title: 'Systems and capabilities',
        items: [
          { title: 'Multi-platform backend', desc: 'Shared services powering the customer, restaurant, delivery, and admin applications.' },
          { title: 'Order management workflows', desc: 'End-to-end order state, from placement through preparation, dispatch, and completion.' },
          { title: 'Real-time delivery tracking', desc: 'Live delivery and order status pushed to each app through Socket.IO.' },
          { title: 'Payment integration', desc: 'Razorpay wired directly into the order workflow.' },
          { title: 'Phone number masking', desc: 'Vodafone virtual numbers hide customer and executive contact details during order calls.' },
          { title: 'Restaurant administration', desc: 'Admin modules to manage restaurants, their menus, and their orders.' },
          { title: 'Delivery operations', desc: 'Workflows for delivery executives to accept, progress, and complete deliveries.' },
          { title: 'Offers and banner management', desc: 'Admin tooling for promotions and merchandising across the apps.' },
          { title: 'Analytics and operational controls', desc: 'Operational visibility and controls for administrators.' },
        ],
      },
      {
        type: 'points',
        eyebrow: 'Technical Approach',
        title: 'How it fits together',
        lead: 'An event-driven backend keeps four applications working from the same order state.',
        points: [
          'NestJS and TypeScript services over a PostgreSQL data model, exposed as REST APIs.',
          'Socket.IO with event-driven backend design for live order and delivery status.',
          'Razorpay for payments and Vodafone virtual numbers for masked calling.',
          'Dockerised services deployed via GitHub Actions CI/CD across AWS and Azure.',
          'A React.js Admin Portal consuming the same backend APIs.',
        ],
      },
      {
        type: 'challenges',
        eyebrow: 'Engineering Challenges',
        title: 'The hard parts',
        lead: 'The problems that shaped the backend design.',
        items: [
          { title: 'Keeping four apps synchronized', body: 'The customer, restaurant, delivery, and admin applications all act on the same orders, so a single change in order state has to reach every app consistently.' },
          { title: 'Real-time updates', body: 'Order and delivery status needed to move live between participants rather than on a refresh, which pushed the backend toward an event-driven, Socket.IO-based design.' },
          { title: 'Production deployment', body: 'Getting a multi-service system containerised and shipped through CI/CD across both AWS and Azure while the platform went from zero to production in two weeks.' },
          { title: 'Payment and communication integrations', body: 'Wiring Razorpay into the order workflow and integrating Vodafone virtual numbers to mask customer and delivery-executive contact details during calls.' },
        ],
      },
      {
        type: 'outcome',
        eyebrow: 'Outcome',
        title: 'Where it landed',
        status: 'Production',
        points: [
          'Taken from zero to production within two weeks.',
          'Early rollout was processing 5–15 orders per day.',
          'Supported a connected four-application ecosystem.',
        ],
      },
      {
        type: 'techStack',
        eyebrow: 'Technology Stack',
        title: 'What it runs on',
        groups: [
          { label: 'Backend', items: ['NestJS', 'TypeScript', 'PostgreSQL', 'REST APIs'] },
          { label: 'Real-time', items: ['Socket.IO'] },
          { label: 'Integrations', items: ['Razorpay', 'Vodafone virtual numbers'] },
          { label: 'Infrastructure', items: ['Docker', 'GitHub Actions', 'AWS', 'Azure'] },
          { label: 'Frontend', items: ['React.js'] },
        ],
      },
      {
        type: 'live',
        eyebrow: 'Live Product',
        title: 'See it in action',
        product: 'Zenzio Admin Portal',
        desc: 'The admin portal I built on the React.js frontend, connected to the same backend services that power the customer, restaurant, and delivery apps.',
        href: 'https://zenzio-admin-portal.vercel.app/login',
        label: 'Explore Zenzio Admin',
      },
    ],
  },
  testdino: {
    slug: 'testdino',
    title: 'TestDino',
    subtitle: 'Turn a job description into a focused interview preparation plan.',
    category: 'Case Study · AI / SaaS Product',
    accent: 'cyan',
    theme: 'interview',
    isNew: true,
    seo: {
      title: 'TestDino | AI Interview Preparation Product | Ganesh Mishra',
      description:
        'TestDino turns a job description into a focused, personalized interview preparation plan — targeted questions, flashcards, and a day-by-day schedule. Product design and full-stack build by Ganesh Mishra.',
    },
    hero: {
      meta: [
        { label: 'Role', value: 'Product Designer / Full-Stack Engineer' },
        { label: 'Domain', value: 'Interview Preparation' },
        { label: 'Status', value: 'Latest Product' },
      ],
      tech: null,
      live: { href: 'https://testdino.vercel.app/', label: 'Try TestDino' },
    },
    sections: [
      {
        type: 'overview',
        eyebrow: 'Product Overview',
        title: 'What TestDino is',
        lead: 'TestDino is a structured interview preparation system that turns a specific job description into a focused, personalized plan.',
        paragraphs: [
          'Rather than acting as a general-purpose chatbot, TestDino takes the details of a role — the job description and company information — and organizes preparation around that exact opportunity.',
          'From there it generates targeted interview questions, flashcards for recall, and a day-by-day plan, so preparing for an interview becomes a guided workflow instead of an open-ended search.',
        ],
      },
      {
        type: 'points',
        eyebrow: 'The Challenge',
        title: 'Interview prep is overwhelming and generic',
        lead: 'Most candidates prepare without a clear structure for the specific job in front of them.',
        points: [
          'Advice and practice material are usually generic, not tied to the role.',
          'It is hard to know what to focus on for a particular job and company.',
          'Preparation is scattered across questions, notes, and study resources.',
          'There is rarely a clear schedule leading up to the interview date.',
        ],
      },
      {
        type: 'flow',
        eyebrow: 'How It Works',
        title: 'From job post to a plan',
        lead: 'A single, guided path from the role you want to a preparation plan built around it.',
        steps: [
          'Job description & company info',
          'Personalized preparation',
          'Targeted interview questions',
          'Flashcards',
          'Day-by-day plan',
        ],
      },
      {
        type: 'numbered',
        eyebrow: 'Product Experience',
        title: 'What using TestDino feels like',
        items: [
          { title: 'Add the job and company', desc: 'Start by entering the job description and company information for the role you are targeting.' },
          { title: 'Get a tailored preparation plan', desc: 'TestDino builds a preparation plan organized around that specific job instead of generic study material.' },
          { title: 'Practice targeted questions', desc: 'Work through interview questions focused on the role and its requirements.' },
          { title: 'Reinforce with flashcards', desc: 'Key concepts are turned into flashcards for fast, repeatable recall.' },
          { title: 'Follow a day-by-day plan', desc: 'A structured schedule paces preparation across the days leading up to the interview.' },
          { title: 'Stay oriented on one goal', desc: 'Every step keeps preparation focused on the single job the candidate actually wants.' },
        ],
      },
      {
        type: 'value',
        eyebrow: 'Product Value',
        title: 'Why it works',
        points: [
          'Preparation is organized around a specific role, not a generic syllabus.',
          'Interview questions, flashcards, and scheduling live in one connected workflow.',
          'A day-by-day plan turns open-ended studying into concrete daily steps.',
        ],
        message: 'Instead of giving candidates more information, TestDino organizes preparation around the job they actually want.',
      },
      {
        type: 'role',
        eyebrow: 'My Role',
        title: 'Product, workflow, and full-stack',
        lead: 'Product design, frontend engineering, product workflow implementation, and full-stack development.',
      },
      {
        type: 'outcome',
        eyebrow: 'Outcome',
        title: 'Where it landed',
        status: 'Latest Product',
        points: [
          'Designed as a focused SaaS workflow for interview preparation.',
          'Built around a single, guided path from a job description to a plan.',
        ],
      },
      {
        type: 'live',
        eyebrow: 'Live Product',
        title: 'See it in action',
        product: 'TestDino',
        desc: 'The live TestDino product — add a role and walk through the guided preparation workflow.',
        href: 'https://testdino.vercel.app/',
        label: 'Try TestDino',
      },
    ],
  },
  firsthuman: {
    slug: 'firsthuman',
    title: 'FirstHuman',
    subtitle: 'Making digital business experiences simpler.',
    category: 'Case Study · Business Platform',
    accent: 'indigo',
    theme: 'business',
    seo: {
      title: 'FirstHuman | Business Digital Product | Ganesh Mishra',
      description:
        'FirstHuman is a business platform focused on making a modern digital presence simple and approachable. Product design and frontend engineering by Ganesh Mishra.',
    },
    hero: {
      meta: [
        { label: 'Role', value: 'Product Designer / Frontend Engineer' },
        { label: 'Domain', value: 'Business Platform' },
        { label: 'Status', value: 'Live' },
      ],
      tech: null,
      live: { href: 'https://dukaan-digital-phi.vercel.app/', label: 'Explore FirstHuman' },
    },
    sections: [
      {
        type: 'overview',
        eyebrow: 'Product Overview',
        title: 'What FirstHuman is',
        lead: 'FirstHuman is a business platform focused on making digital business experiences simpler and more approachable.',
        paragraphs: [
          'The product is built around a simple idea: businesses should be able to establish a modern digital presence without needing to understand the technology behind it.',
          'The experience prioritizes clarity and accessibility, presenting business information and tools in a way that is easy to understand and easy to act on.',
        ],
      },
      {
        type: 'points',
        eyebrow: 'Positioning',
        title: 'What FirstHuman focuses on',
        lead: 'A digital business experience designed around clarity and ease of use.',
        points: [
          'Simplicity — reducing what a business owner has to think about.',
          'Accessibility — usable by people regardless of technical background.',
          'Modern business presentation — a clean, current way to present a business.',
          'Digital presence — helping businesses show up well online.',
          'Easy-to-understand UX — interfaces that explain themselves.',
        ],
      },
      {
        type: 'principle',
        eyebrow: 'Design Principle',
        title: "Built for people who shouldn't need to understand technology.",
        body: 'The guiding principle behind FirstHuman is that the people using it are running businesses, not managing software. Every screen aims to remove technical friction — no jargon, no configuration overhead — so the product feels approachable to someone who simply wants their business represented well online.',
      },
      {
        type: 'role',
        eyebrow: 'My Role',
        title: 'Design, frontend, and experience',
        lead: 'Product design, frontend development, user experience, and implementation.',
      },
      {
        type: 'outcome',
        eyebrow: 'Outcome',
        title: 'Where it landed',
        points: [
          'Designed as a simple, approachable digital experience for businesses.',
        ],
      },
      {
        type: 'live',
        eyebrow: 'Live Product',
        title: 'See it in action',
        product: 'FirstHuman',
        desc: 'The live FirstHuman experience, focused on a clean and approachable digital presence for businesses.',
        href: 'https://dukaan-digital-phi.vercel.app/',
        label: 'Explore FirstHuman',
      },
    ],
  },
}

export const caseOrder = ['firsthuman', 'zenzio', 'testdino']

export const caseNavItems = caseOrder.map((slug) => ({
  slug,
  title: caseStudies[slug].title,
  category: caseStudies[slug].category,
  subtitle: caseStudies[slug].subtitle,
  href: `/work/${slug}`,
}))

export default caseStudies
