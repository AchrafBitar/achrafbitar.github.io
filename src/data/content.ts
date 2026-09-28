// ---------------------------------------------------------------------------
// Single source of truth for every piece of text on the site.
// Edit here, then run `npm run build && npm run deploy`. Nothing else to touch.
// Kept deliberately in step with the CV in /CV_Achraf_Bitar_EN.pdf.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Achraf Bitar',
  initials: 'AB',
  role: 'AI & Machine Learning Engineer',
  subtitle: 'LLM systems and production data pipelines',
  tagline:
    'I build LLM systems and data pipelines that actually reach production, then measure them once they are there.',
  location: 'Lyon, France',
  availability: 'Open to a 6-month end-of-studies internship, March to September 2027',
  workAuth: 'Student visa granted, covering both coursework and the internship',
  email: 'achraf.bitar@etu.ec-lyon.fr',
  linkedin: 'https://www.linkedin.com/in/achrafbitar',
  github: 'https://github.com/AchrafBitar',
  intro:
    'Engineering degree from ENSMR, now finishing an MSc in Data Science at École Centrale de Lyon. ' +
    'I spent four months at ATOZ Services building a GDPR pseudonymisation service and the semantic ' +
    'search that runs on top of it, after a final-year project on the Attijariwafa Bank trading floor ' +
    'working on real-time financial flows. I write both Python and Java, and I take things all the way ' +
    'to deployment.',
};

export const cvs = [
  { label: 'CV — English', href: '/CV_Achraf_Bitar_EN.pdf' },
  { label: 'CV — Français', href: '/CV_Achraf_Bitar_FR.pdf' },
];

export const expertise = [
  {
    title: 'AI & NLP',
    skills: [
      'OpenAI API',
      'Claude API',
      'GLiNER',
      'Presidio',
      'Embeddings (MiniLM-L6)',
      'RAG',
      'Semantic search',
      'Model benchmarking',
    ],
  },
  {
    title: 'Languages & Backend',
    skills: [
      'Python (FastAPI, AsyncIO)',
      'Java (Spring Boot)',
      'SQL',
      'REST APIs',
      'Node.js',
      'Microservices',
    ],
  },
  {
    title: 'Data & Storage',
    skills: [
      'PostgreSQL / pgvector',
      'HNSW indexing',
      'Oracle',
      'SQL Server',
      'Redis',
      'Pandas',
      'NumPy',
      'MongoDB',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3)', 'Docker', 'Git / GitLab CI', 'Linux administration', 'CI/CD pipelines'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Astro'],
  },
  {
    title: 'Practice & Compliance',
    skills: [
      'GDPR',
      'Pseudonymisation',
      'Data minimisation',
      'Technical documentation',
      'Agile (Jira, Confluence)',
    ],
  },
];

export const experience = [
  {
    role: 'AI Developer',
    company: 'ATOZ Services',
    context: 'ATOZ Group, tax and financial advisory (Luxembourg) · Casablanca, Morocco',
    period: 'March 2026 – June 2026',
    bullets: [
      'Built an end-to-end pseudonymisation service for financial documents: PDF text extraction (Poppler), OCR (Tesseract), MiniLM-L6 embeddings, storage and indexing in PostgreSQL/pgvector.',
      'Hybrid PII detection pipeline combining GLiNER for named-entity recognition, regex rules for fixed formats and fuzzy matching for name spelling variants. Tuned to favour recall, since a missed entity costs far more than a false positive.',
      'Removed a synchronous LLM verification layer after measuring it: it multiplied latency by 145 with no improvement to detection KPIs. Moved to an offline check instead, at equal quality.',
      'Switched to an HNSW index on pgvector, which made semantic search fast enough to use interactively across the whole corpus.',
      'Built the internal Spring Boot / Angular application, including a chatbot that guides operators towards GDPR-compliant use of the service.',
      'Benchmarked NLP and embedding models to settle architecture trade-offs. Agile, Jira / Bitbucket / Confluence.',
    ],
  },
  {
    role: 'Software Engineering Intern (final-year project)',
    company: 'Attijariwafa Bank',
    context: 'Trading floor · Casablanca, Morocco',
    period: 'February 2025 – June 2025',
    bullets: [
      'Spring Boot micro-service for real-time monitoring of critical financial flows, pushed over WebSocket at under 100 ms latency.',
      'Ingestion and processing of high-frequency transaction logs, with SQL queries against Oracle.',
      'Containerised deployment with Docker to standardise development and production environments.',
    ],
  },
  {
    role: 'Junior Digitalisation Consultant',
    company: 'Vinci Energies (Exprom)',
    context: 'Rabat, Morocco',
    period: 'June 2024 – September 2024',
    bullets: [
      'Automated purchasing request workflows on Microsoft Power Platform.',
      'Integrated the solution with an existing SQL Server database to keep data consistent with legacy systems.',
      'Removing the manual paper circuits cut request processing time by about 30%.',
    ],
  },
  {
    role: 'Full Stack Developer (Intern)',
    company: 'OQTech',
    context: 'Morocco',
    // No dates shown until they are confirmed. Fill this in and the component
    // renders it automatically; leave it empty and the row simply omits the date.
    period: '',
    bullets: [
      'Configured a Linux (LAMP) server to host a client web application.',
      'Built responsive frontend components in React.js.',
    ],
  },
];

export const education = [
  {
    school: 'École Centrale de Lyon',
    degree: 'MSc Computer Science, Data Science track',
    period: '2026 – 2027',
  },
  {
    school: 'ENSMR, Rabat',
    degree:
      "Engineering degree (Diplôme d'ingénieur d'État), Computer Science & Digital Engineering",
    period: '2022 – 2025',
  },
  {
    school: 'CPGE, Meknès',
    degree: 'MPSI / MP, intensive mathematics and physics',
    period: '2020 – 2022',
  },
];

export const projects = [
  {
    label: 'Experimental · retired',
    title: 'Algorithmic Gold Trading Bot (XAUUSD)',
    description:
      'A personal project I designed, deployed and ran on my own on AWS EC2 for over a year, now retired. ' +
      'It read XAUUSD across three timeframes through GPT-4o-mini and drove four external APIs concurrently ' +
      'with dynamic position sizing. Alert-only by design: it never placed an order itself. Over the period ' +
      'it ran the expectancy stayed positive, but on too short a sample to draw a conclusion from, which is ' +
      'why I stopped rather than scaled it.',
    tags: ['Python', 'AsyncIO', 'AWS EC2', 'GPT-4o-mini', 'MetaTrader 5'],
  },
  {
    label: 'Full stack',
    title: 'ClarityDash — Personal Finance Dashboard',
    description:
      'A MERN-stack personal finance dashboard: transaction tracking, spending breakdowns and charts. ' +
      'Built to practise full-stack work end to end, from the data model through the API to a front end ' +
      'that stays readable on a phone.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Recharts'],
  },
  {
    label: 'Applied NLP',
    title: 'Mindful Messaging Assistant',
    description:
      'A browser extension and desktop app that reads a draft message and suggests calmer, clearer ' +
      'alternatives before you send it. A small experiment in putting a language model somewhere it ' +
      'reduces friction rather than adding it.',
    tags: ['Browser extension', 'NLP', 'LLM API'],
  },
];

export const values = [
  {
    title: 'Math-to-code logic',
    body:
      'Two years of CPGE MPSI/MP left me with the habit of structuring a problem before typing. ' +
      'I would rather spend an hour on the shape of a solution than a day debugging the wrong one.',
  },
  {
    title: 'Measure, then decide',
    body:
      'At ATOZ I removed an LLM verification layer because measuring it showed it multiplied latency ' +
      'by 145 without moving the detection KPIs. Opinions about architecture are cheap. Numbers settle them.',
  },
  {
    title: 'Compliance as a design constraint',
    body:
      'Working on financial documents under GDPR taught me that data protection is something you ' +
      'architect around from the start, not a checklist you satisfy at the end.',
  },
];
