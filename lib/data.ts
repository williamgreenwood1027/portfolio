export const profile = {
  name: "William Greenwood",
  firstName: "William",
  title: "Senior Software Engineer",
  subtitle: "Senior Software Engineer · Full Stack",
  location: "Albuquerque, NM, US",
  email: "williamgreenwood1027@gmail.com",
  phone: "+1 (601) 651-7172",
  phoneHref: "tel:+16016517172",
  github: "https://github.com/williamgreenwood1027",
  resume: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/William-Greenwood-Resume.pdf`,
};

export const roles = [
  "Senior Software Engineer",
  "Full Stack Developer",
  "Distributed Systems Architect",
  "AI / RAG Workflow Engineer",
  "Cloud & Platform Engineer",
];

export const heroChips = ["Senior Software Engineer", "Full Stack Developer", "AI / RAG Engineer", "11+ Years"];

export const stats = [
  { value: 11, suffix: "+", label: "Years engineering production software" },
  { value: 40, suffix: "%", label: "Higher system throughput on enterprise platforms" },
  { value: 99.5, suffix: "%", decimals: 1, label: "Platform uptime on distributed systems" },
  { value: 43, suffix: "%", label: "Operational efficiency gain from AI workflows" },
  { value: 80, suffix: "%", label: "Test coverage driven with Jest & Cypress" },
];

export const expertise = [
  { title: "Distributed Systems", text: "fault-tolerant, event-driven platforms on Kafka, Redis, PostgreSQL and Kubernetes." },
  { title: "Platform Modernization", text: "decomposing Rails monoliths into Go microservices behind clean, backward-compatible API contracts." },
  { title: "Production AI", text: "LLM integration, RAG pipelines, vector databases and AI workflow automation with FastAPI." },
  { title: "Cloud & DevOps", text: "AWS, Azure and GCP migrations, Terraform, CI/CD and observability that cuts MTTR." },
  { title: "Modern Frontend", text: "React, Next.js and TypeScript with fast, type-safe, component-driven UIs." },
];

export const profileFacts: [string, string][] = [
  ["Location", "Albuquerque, NM, US"],
  ["Experience", "11+ years"],
  ["Focus", "Backend · Cloud · AI"],
  ["Education", "B.S. Software Engineering"],
  ["Status", "Open to new roles"],
];

export const services = [
  {
    icon: "server",
    title: "Backend & Distributed Systems",
    text: "High-throughput services and APIs in Go, Java, Python and Rails: REST, GraphQL and gRPC, built to stay up under heavy load.",
    tags: ["Go", "Kafka", "gRPC", "PostgreSQL"],
  },
  {
    icon: "bot",
    title: "AI Solutions & Automation",
    text: "Production LLM workflows using RAG, vector search and FastAPI that take manual operations off people's plates and show measurable results.",
    tags: ["LLMs", "RAG", "FastAPI", "Vertex AI"],
  },
  {
    icon: "code",
    title: "Full Stack & Cloud",
    text: "Fast React and Next.js front ends on cloud-native infrastructure across AWS, Azure and GCP, delivered through automated CI/CD.",
    tags: ["Next.js", "TypeScript", "Kubernetes", "Terraform"],
  },
] as const;

export const stack: Record<string, string[]> = {
  Languages: ["Go", "Python", "Java", "TypeScript", "JavaScript", "Ruby", "SQL", "C++", "C", "PHP", "HTML/CSS"],
  Backend: ["Ruby on Rails", "Spring Boot", "FastAPI", "Django", "Flask", "Node.js", "Laravel", "REST", "GraphQL", "gRPC"],
  Frontend: ["React", "Next.js", "Vue", "Tailwind CSS", "TypeScript", "Jest", "Cypress"],
  "Data & Messaging": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Kafka", "Schema Design", "Query Optimization", "Caching"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Cloud Run", "Cloud Functions", "Cloud SQL", "Pub/Sub", "BigQuery", "Docker", "Kubernetes", "Terraform", "Linux", "GitHub Actions", "Azure DevOps"],
  "AI & Automation": ["LLM Integration", "RAG Applications", "Vector Databases", "Prompt Engineering", "Vertex AI", "AI Workflow Automation"],
};

export type Project = {
  art: "graph" | "micro" | "rag" | "chart";
  badge: string;
  metric: string;
  metricLabel: string;
  title: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    art: "graph",
    badge: "AI · Simulation",
    metric: "4 yrs",
    metricLabel: "2022 – 2026",
    title: "Multi-Domain AI/ML Tactical Simulator",
    summary: "Backend services and data pipelines tying simulation tools, data services and visualization apps into one platform.",
    points: [
      "Java and Python services and REST APIs linking simulation, data and visualization layers",
      "Pipelines for large simulation outputs, pairing compute-heavy jobs with persistent storage",
      "Async processing for long-running computations, so the UI stays responsive",
    ],
    tags: ["Java", "Python", "C++", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    art: "micro",
    badge: "Platform · Backend",
    metric: "+40%",
    metricLabel: "throughput",
    title: "Monolith to Go Microservices Modernization",
    summary: "Led the move of enterprise Rails monoliths to a service-oriented architecture without breaking a single existing consumer.",
    points: [
      "Pulled Go microservices out behind well-defined, backward-compatible API contracts",
      "REST and GraphQL APIs on a hardened gRPC service layer",
      "Raised throughput 40% across Go, Java and Python platforms",
    ],
    tags: ["Go", "Ruby on Rails", "gRPC", "GraphQL", "REST"],
  },
  {
    art: "rag",
    badge: "AI · Automation",
    metric: "+43%",
    metricLabel: "ops efficiency",
    title: "AI Operations Automation (RAG)",
    summary: "Brought production AI workflows into the company, using retrieval-augmented generation to automate manual operational work.",
    points: [
      "Python and FastAPI services orchestrating LLM APIs with retrieval over internal knowledge",
      "Took over repetitive manual operations and raised team efficiency 43%",
      "Designed for production with observability, guardrails and secure configuration",
    ],
    tags: ["Python", "FastAPI", "LLM APIs", "RAG", "Vector DB"],
  },
  {
    art: "chart",
    badge: "Infrastructure · Reliability",
    metric: "99.5%",
    metricLabel: "uptime",
    title: "Fault-Tolerant Event Platform & Cloud Migration",
    summary: "Removed critical bottlenecks across distributed systems, then moved workloads to cloud-native infrastructure on AWS and Azure.",
    points: [
      "Event-driven architecture on Kafka, Redis, PostgreSQL and Kubernetes",
      "Cut API latency 12% and lowered infrastructure spend",
      "Centralized logging and metrics cut MTTR 17%; CI/CD saves about an hour per deploy",
    ],
    tags: ["Kafka", "Kubernetes", "AWS", "Azure", "GitHub Actions"],
  },
];

/** Bullet text supports **bold** spans. */
export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Stellar Science",
    location: "Albuquerque, NM",
    period: "Jan 2022 — Aug 2026",
    bullets: [
      "Raised system throughput **40%** across enterprise backend platforms in Go, Java and Python to handle high-volume workloads.",
      "Led the move from Rails monoliths to a service-oriented architecture, pulling out Go microservices behind well-defined, **fully backward-compatible** API contracts.",
      "Architected fault-tolerant distributed systems on Kafka, Redis, PostgreSQL and Kubernetes, raising platform uptime to **99.5%**.",
      "Introduced production AI workflows with Python, FastAPI, LLM APIs and RAG, raising operational efficiency **43%**.",
      "Delivered highly available REST and GraphQL APIs on a gRPC service layer, hardening inter-service communication and security.",
      "Led database tuning and cloud-native migrations across AWS and Azure, cutting API latency **12%** and lowering infrastructure spend.",
      "Streamlined release engineering with GitHub Actions and Azure DevOps, saving **about an hour** per deployment.",
      "Set up centralized logging, monitoring and metrics, cutting mean time to resolution **17%**.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Noventum Custom Software",
    location: "Albuquerque, NM",
    period: "Jul 2018 — Dec 2021",
    bullets: [
      "Shipped full-stack features in React, Node.js and TypeScript and shrank the frontend bundle **40%** for faster page loads.",
      "Built type-safe API layers that reduced integration defects and cut API data overhead **60%**.",
      "Created a modular Tailwind CSS component system that sped up frontend delivery by **17 days**.",
      "Tuned PostgreSQL access and Redis caching, reducing database load **20%** during traffic spikes.",
      "Expanded Jest and Cypress automation to **80%** code coverage, strengthening production stability.",
      "Worked with product owners to turn user feedback into iterative, shippable releases during rapid sprints.",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "Maya Virtual",
    location: "Albuquerque, NM",
    period: "Sep 2015 — May 2018",
    bullets: [
      "Built core backend applications from scratch in Java, Python and Ruby on Rails as business requirements changed.",
      "Exposed secure REST APIs for data exchange with several high-priority third-party partners.",
      "Hardened core services with enterprise-grade authentication, input validation and proactive error handling.",
      "Modeled server-side data with strict integrity guarantees and efficient storage access patterns.",
      "Found and fixed performance bottlenecks through query optimization and better data-access patterns.",
      "Mentored junior engineers and raised team standards with thorough code reviews and TDD.",
    ],
  },
];

export const assistantKB: { keys: string[]; answer: string }[] = [
  { keys: ["skill", "stack", "tech", "language", "know", "tools"], answer: "William's core stack:\n• Languages: Go, Python, Java, TypeScript, Ruby, SQL, C++\n• Backend: Rails, Spring Boot, FastAPI, Django, Node.js, gRPC, GraphQL\n• Frontend: React, Next.js, Vue, Tailwind CSS\n• Data: PostgreSQL, Redis, Kafka, Elasticsearch, MongoDB\n• Cloud: AWS, Azure, GCP, Docker, Kubernetes, Terraform" },
  { keys: ["experience", "work history", "career", "job", "company", "companies", "background", "years"], answer: "11+ years of experience:\n• Senior Software Engineer, Stellar Science (2022–2026)\n• Software Engineer, Noventum Custom Software (2018–2021)\n• Backend Software Engineer, Maya Virtual (2015–2018)\n\nHighlights: +40% throughput, 99.5% uptime, −17% MTTR." },
  { keys: ["ai", "llm", "rag", "machine", "ml", "gpt", "vector", "genai"], answer: "William builds production AI workflows with Python, FastAPI, LLM APIs and retrieval-augmented generation (RAG). At Stellar Science this work automated manual operations and raised efficiency 43%. William also worked on a Multi-Domain AI/ML Tactical Simulator." },
  { keys: ["project", "portfolio", "built", "build", "case"], answer: "Featured projects:\n• Multi-Domain AI/ML Tactical Simulator\n• Rails monolith to Go microservices (+40% throughput)\n• AI Operations Automation with RAG (+43% efficiency)\n• Fault-tolerant event platform (99.5% uptime)\n\nScroll to “Featured Projects” for details." },
  { keys: ["available", "hire", "hiring", "open", "freelance", "opportunit", "remote", "relocat"], answer: "Yes! William is open to new senior engineering opportunities in backend, full-stack, platform or AI engineering. The fastest way to reach William is williamgreenwood1027@gmail.com." },
  { keys: ["contact", "email", "phone", "reach", "call", "touch"], answer: "📧 williamgreenwood1027@gmail.com\n📞 +1 (601) 651-7172\n📍 Albuquerque, NM, US\n\nYou can also use the contact form at the bottom of the page." },
  { keys: ["education", "degree", "university", "college", "study", "school"], answer: "B.S. in Software Engineering, New Mexico State University (Las Cruces, NM), 2011–2015." },
  { keys: ["cloud", "aws", "azure", "gcp", "devops", "kubernetes", "docker", "terraform", "ci"], answer: "Cloud and DevOps: AWS, Azure and GCP (Cloud Run, Pub/Sub, BigQuery, Vertex AI), Docker, Kubernetes, Terraform, GitHub Actions and Azure DevOps. William led cloud-native migrations that cut API latency 12% and lowered infrastructure costs." },
  { keys: ["frontend", "react", "next", "ui", "typescript", "tailwind"], answer: "On the frontend William works in React, Next.js and TypeScript. At Noventum, William shrank bundle size 40%, cut API data overhead 60% with type-safe layers, and built a Tailwind component system that saved 17 days of delivery time." },
  { keys: ["location", "where", "based", "live"], answer: "William is based in Albuquerque, New Mexico, US." },
  { keys: ["resume", "cv", "download"], answer: "You can download William's résumé with the “Download CV” button in the top navigation." },
  { keys: ["github", "code", "repo"], answer: "William's GitHub: github.com/williamgreenwood1027" },
  { keys: ["hi", "hello", "hey", "yo"], answer: "Hello! 👋 Ask me about William's skills, experience, AI work, projects or availability." },
];

export const assistantSuggestions = ["What are your skills?", "Tell me about your experience", "AI work?", "Are you available?"];
