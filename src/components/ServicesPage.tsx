import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  Database, 
  Monitor, 
  Cpu, 
  Compass, 
  Layers, 
  Star, 
  Briefcase, 
  Check, 
  Clock, 
  ChevronRight
} from "lucide-react";

interface ServicesPageProps {
  selectedServiceId: string | null;
  // eslint-disable-next-line no-unused-vars
  setSelectedServiceId: (id: string | null) => void;
}

// ─── SERVICES DATA STRUCTURE ──────────────────────────────────────────────────
interface CaseStudy {
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
}

interface Package {
  name: string;
  priceINR: string;
  priceUSD: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string; // for clay-icon styling class
  summary: string;
  exactDefinition: string;
  chips: string[];
  heroVideo?: string; // optional cinematic hero background video
  deliverables: {
    title: string;
    items: string[];
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  packages: Package[];
  projects: CaseStudy[];
  feedback: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  ctaLabel: string;
}

const servicesData: ServiceData[] = [
  {
    id: "geo",
    title: "AI Presence & Discovery",
    subtitle: "Make your business visible inside generative search systems.",
    num: "01",
    icon: Layers,
    color: "blue",
    heroVideo: "https://cdn.jsdelivr.net/gh/MilannSharma/portfolio-images@main/Service%201.mp4",
    summary: "Audit, optimize, and track your brand's presence across ChatGPT, Gemini, Perplexity, Claude, and Copilot — not just legacy search engines.",
    exactDefinition: "AI platforms construct answers using Retrieval-Augmented Generation (RAG) and entity mapping. This service ensures your business is recognized as an authority, structured clearly for LLM ingestion, cited frequently in trust networks, and ranked directly in voice and answer engine interfaces.",
    chips: ["Generative Engine Optimization (GEO)", "Answer Engine Optimization (AEO)", "Entity Wikidata Setup", "Knowledge Graph Mappings", "AI Brand Monitoring & Reputation", "Traditional & Advanced SEO Suite"],
    deliverables: [
      {
        title: "GEO, AEO & Entity Optimization",
        description: "Optimizing content structures for conversational LLM indexing and winning direct answer slots.",
        items: [
          "GEO (Generative Engine Optimization): Audit current visibility across ChatGPT/Gemini/Perplexity for 200+ queries, find gaps, restructure content to match LLM preferences, and build high-trust citation networks.",
          "AEO (Answer Engine Optimization): Target the 'one answer' slot with Answer-First copywriting, comprehensive schema markup (FAQ, HowTo, Product), and Q&A libraries optimized for voice queries.",
          "Entity Optimization: Wikidata entity setup, Wikipedia presence, Google Knowledge Panel verification, Crunchbase/LinkedIn alignment, and founding team/product entity mappings."
        ]
      },
      {
        title: "Reputation, PR & Citation Strategy",
        description: "Monitoring AI statements, correcting hallucinations, and structuring authority content.",
        items: [
          "Knowledge Graph Building: Constructing dynamic brand relationship networks published via structured data.",
          "AI Citation Optimization: Creating original survey data, statistics reports, and long-form authority sheets designed to be cited by LLMs.",
          "AI Brand Monitoring & Reputation: Tracking 500+ query variations, scoring accuracy, and launching correction campaigns to fix fabricated or outdated LLM info.",
          "Competitor AI Displacement: Audit competitor AI recommendations, outline authority gaps, and structure comparison assets to flip recommendations.",
          "Multilingual AI Visibility: Build presence in Hindi, Spanish, Portuguese, French, Baidu AI, and Yandex AI datasets.",
          "AI PR & Training Data Strategy: Seed brand narratives in high-domain-authority publications and platforms included in future training datasets."
        ]
      },
      {
        title: "Traditional & Comprehensive SEO Suite (SEO Boost)",
        description: "Deep technical, off-page, and on-page search optimizations supporting AI Search Optimization (ASEO).",
        items: [
          "Keyword Research & Competitor Analysis",
          "On-Page SEO, Technical SEO & Content SEO",
          "Local SEO & Google Business Profile Optimization",
          "Off-Page SEO, Link Building, Backlink Audit & Cleanup",
          "Internal Linking & Website Speed Optimization (Core Web Vitals)",
          "Mobile SEO, Image SEO & Video SEO",
          "E-commerce, Product Page & Category Page SEO",
          "Landing Page, Blog & Enterprise SEO Suite",
          "Rich Snippet & Schema Markup Implementation",
          "Google Search Console & Google Analytics Setup & Tracking",
          "XML Sitemap, Robots.txt, and Indexing/Crawlability Optimizations",
          "Canonical Tags, Online Reputation Management (ORM)",
          "Location-Based SEO & Citation Building",
          "Google Penalty Recovery, SEO Migration Support & Website Relaunch",
          "Conversion Rate Optimization (CRO) for SEO Traffic",
          "LLM Visibility Tracking & AI Search presence audits"
        ]
      }
    ],
    process: [
      { step: "01", title: "AI Visibility Audit", desc: "Scan 500+ queries across ChatGPT, Gemini, Perplexity to audit baseline citations and competitor recommendations." },
      { step: "02", title: "Entity & Schema Structuring", desc: "Claim panels, construct Wikidata profiles, and deploy complete structured schema tags." },
      { step: "03", title: "Traditional & AVO Seeding", desc: "Deploy technical SEO fixes and publish original high-citation statistics reports to trust directories." },
      { step: "04", title: "Monitoring & Displacement", desc: "Track visibility scores daily, run correction campaigns for LLM drift, and displace competitor slots." }
    ],
    packages: [
      {
        name: "GEO Baseline Audit",
        priceINR: "₹24,999",
        priceUSD: "$299",
        period: "one-time",
        features: [
          "Complete visibility audit across major LLMs",
          "Wikidata / Entity gap assessment",
          "Custom JSON-LD schema generation",
          "Technical SEO crawlability review"
        ]
      },
      {
        name: "AEO + GEO Growth Plan",
        priceINR: "₹74,999",
        priceUSD: "$899",
        period: "month",
        isPopular: true,
        features: [
          "GEO + AEO content restructuring",
          "Wikidata & Wikipedia setup support",
          "Traditional SEO optimization suite",
          "200 search queries monitored monthly",
          "Weekly citation network seeding",
          "AI Mention tracking dashboard"
        ]
      },
      {
        name: "Enterprise Displacement Suite",
        priceINR: "₹1,49,999",
        priceUSD: "$1,799",
        period: "month",
        features: [
          "Continuous multi-LLM monitoring",
          "Competitor recommendation displacement",
          "PR & AI training dataset seeding",
          "Hallucination correction campaigns",
          "Full Multilingual AI optimization",
          "Unlimited queries + custom API access"
        ]
      }
    ],
    projects: [
      {
        title: "AEO Campaign for School ERP Vendor",
        desc: "Restructured product pages, Wikidata parameters, and FAQ nodes to capture direct answer recommendations.",
        metric: "+240%",
        metricLabel: "AI Mention Frequency"
      },
      {
        title: "GEO Strategy for B2B Analytics SaaS Platform",
        desc: "Created highly cited research papers and semantic databases to win competitive recommendation slots.",
        metric: "88%",
        metricLabel: "Answer Slot Ownership"
      }
    ],
    feedback: {
      quote: "Before Nexa, ChatGPT didn't know we existed. Today, ask AI who the top provider in our category is, and our name is recommended first.",
      author: "Vikram Sen",
      role: "VP of Marketing",
      company: "EduManage Systems"
    },
    ctaLabel: "Request AI Visibility Audit"
  },
  {
    id: "agentic",
    title: "AI Agents & Automation",
    subtitle: "Autonomous cognitive systems that handle multi-step tasks.",
    num: "02",
    icon: Cpu,
    color: "green",
    summary: "Deploy autonomous systems that handle support tickets, SDR lead generation, scheduling, invoicing, and HR workflows.",
    exactDefinition: "These are not simple rule-based chatbots. Nexa engineers autonomous agent workflows that understand context, take multi-step actions, make logic decisions, interface with third-party APIs, and only pass tasks to human teams when absolutely necessary.",
    chips: ["Support AI Agents", "Lead Gen SDR Bots", "Voice Agents", "Invoice Automation", "HR & Recruitment Agent", "Multi-Agent Orchestrations"],
    deliverables: [
      {
        title: "Support & Voice Automation Agents",
        description: "Deploying conversational voice and text agents that handle support lifecycles autonomously.",
        items: [
          "Customer Support AI Agent: Resolves returns, refunds, cancellations, and account updates across WhatsApp, Web, Email, and mobile. Supports 50+ languages with 60-80% support cost reduction.",
          "Voice Agent: Phone-based conversational AI (not an IVR menu) that understands inquiries, resolves them in natural conversation, detects sentiment, and auto-escalates. Fit for hospitals, schools, real estate, and retail."
        ]
      },
      {
        title: "SDR Sales & Scheduling Agents",
        description: "Automating outbound prospecting, CRM entries, and meeting bookings.",
        items: [
          "Lead Generation Agent: Works as an autonomous SDR. Extracts leads from LinkedIn/intent signals, checks alignment with ICP, sends personalized outreach drafts, follows up, and books meetings.",
          "Sales Assistant Agent: Pre-call briefings, proposal/quote drafts from meeting notes, CRM logging from call transcripts, and deal risk alerts.",
          "Appointment & Scheduling Agent: Conversational natural language scheduling, multi-party calendar coordination, and WhatsApp reminders."
        ]
      },
      {
        title: "Enterprise Operations & Orchestrations",
        description: "Connecting multiple agents into automated pipelines with zero human handoffs.",
        items: [
          "Invoice & Finance Automation Agent: Reads invoices from PDFs/images, matches POs, flags discrepancies, processes payments, and reconciles ERP records.",
          "HR & Recruitment Agent: Automated resume screening, candidate communications, interview scheduling, policy FAQ lookups, and payroll sync.",
          "Internal Knowledge Agent: Natural language Q&A across databases and drives (SharePoint, Notion, Confluence) with strict role permissions.",
          "Multi-Agent Orchestrations: Pipelines where work flows seamlessly from one agent to the next (e.g. Lead Gen -> Sales Assistant -> Scheduler -> Contract -> Finance Agent)."
        ]
      }
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Analyze business processes, identify repetitive high-cost tasks, and design logical workflow structures." },
      { step: "02", title: "Agent Prompting & RAG", desc: "Build agent prompts, map system guardrails, and wire knowledge database context variables." },
      { step: "03", title: "API Integrations", desc: "Connect agents directly to CRM, ERP, WhatsApp, Gmail, Calendars, and accounting systems." },
      { step: "04", title: "Deployment & Pilot", desc: "Deploy agents in sandboxes, evaluate task completion accuracy, and scale pipelines to autopilot." }
    ],
    packages: [
      {
        name: "Operational Pilot",
        priceINR: "₹39,999",
        priceUSD: "$499",
        period: "month",
        features: [
          "1 custom web/email support agent",
          "Basic database lookup integration",
          "Up to 5,000 automated tasks/mo",
          "Standard email support & logs"
        ]
      },
      {
        name: "Growth Agent Suite",
        priceINR: "₹99,999",
        priceUSD: "$1,199",
        period: "month",
        isPopular: true,
        features: [
          "Up to 3 custom agents (WhatsApp/Voice)",
          "CRM and scheduling integration",
          "Up to 25,000 automated tasks/mo",
          "Dedicated agent monitoring dashboard",
          "4-hour SLA support response"
        ]
      },
      {
        name: "Multi-Agent Enterprise",
        priceINR: "₹2,49,999",
        priceUSD: "$2,999",
        period: "month",
        features: [
          "Infinite custom agent orchestration nodes",
          "Deep custom ERP & API integrations",
          "Unlimited tasks + token cost optimization",
          "Weekly audit log inspections (NexaGuard)",
          "Dedicated solutions engineering team"
        ]
      }
    ],
    projects: [
      {
        title: "Hospital Appointment Voice Agent for Apollo Clinics",
        desc: "Designed phone agent booking patient consultations and triaging local departments in real time.",
        metric: "82%",
        metricLabel: "Inquiries Handled Autonomously"
      },
      {
        title: "WhatsApp & Web Support Agent for D2C Cosmetic Brand",
        desc: "Connected returns processing, tracking codes, and general policies to support customer workflows.",
        metric: "< 3.0s",
        metricLabel: "Average Resolution Time"
      }
    ],
    feedback: {
      quote: "The patient booking agent Nexa built works flawlessly. It handles heavy morning call rushes seamlessly and saves our front-desk hours.",
      author: "Dr. Amit Roy",
      role: "Operations Director",
      company: "Apollo Clinics Bengaluru"
    },
    ctaLabel: "Deploy AI Agents"
  },
  {
    id: "knowledge",
    title: "AI Knowledge Infrastructure",
    subtitle: "Turn scattered company files into a unified intelligence layer.",
    num: "03",
    icon: Database,
    color: "teal",
    summary: "Establish structured knowledge base architectures, RAG pipelines, and private company GPT tools that index your data securely.",
    exactDefinition: "Employees spend hours searching for information across scattered Drives, Notion pages, and Slack threads. Nexa builds the knowledge memory framework—deploying secure RAG pipelines, pgvector configurations, and document chunking systems—to surface clean answers with zero hallucinations.",
    chips: ["Knowledge Base Architecture", "RAG Systems", "Internal Company GPT", "Vector Databases (Pinecone/Qdrant)", "AI-Ready Documentation", "AI Search Portal"],
    deliverables: [
      {
        title: "Taxonomy & Retrieval Systems",
        description: "Structuring information assets and engineering Retrieval-Augmented Generation.",
        items: [
          "Knowledge Base Architecture: Audit documents, wikis, videos, and databases. Design categories, migrate content, apply metadata tags, and define version controls.",
          "RAG System Development: Design chunking strategy, select embedding models, configure hybrid retrieval (combining semantic and keyword search), and deploy re-ranking layers.",
          "Training Data Pipeline: Collect, clean, and annotate data. Generate synthetic data to fill training gaps and configure model versioning pipelines."
        ]
      },
      {
        title: "Internal Search Portals & GPTs",
        description: "Deploying secure, role-restricted search hubs for internal teams.",
        items: [
          "Internal Company GPT: A private, secure AI assistant trained on company databases. Handles SOP lookup, writing assistance, multi-document synthesis, and role-based access.",
          "AI Search Portal: White-label search interface replacing fragmented folders, allowing natural language queries across Drives, Notion, and SharePoint.",
          "Vector Database Implementations: selection and configuration (Pinecone, Weaviate, Qdrant, pgvector), indexing optimization, backups, and tenancy isolation."
        ]
      },
      {
        title: "AI-Ready Documentation Systems",
        description: "Refining human-written instructions into machine-readable structures.",
        items: [
          "Audit standard documentation for layout formatting weaknesses",
          "Convert raw images, logs, and scanned procedures to clean text markdown",
          "Structure SOP decision trees and exceptions clearly for LLM parsers",
          "Optimize API and code documentation for developer AI assistant tools"
        ]
      }
    ],
    process: [
      { step: "01", title: "Information Audit", desc: "Audit all existing documentation, locate scattered files, and identify database formats." },
      { step: "02", title: "Vector Base Setup", desc: "Configure database vectors (Qdrant/Pinecone), select embedding models, and chunk files." },
      { step: "03", title: "RAG Pipeline Build", desc: "Write hybrid semantic search algorithms, connect re-ranking nodes, and set guardrails." },
      { step: "04", title: "Interface Rollout", desc: "Deploy the secure Company GPT search interface, integrate SSO logins, and launch sync scripts." }
    ],
    packages: [
      {
        name: "Pilot RAG Setup",
        priceINR: "₹49,999",
        priceUSD: "$599",
        period: "month",
        features: [
          "RAG search over up to 5 document types",
          "pgvector database deployment",
          "Web portal interface for up to 10 users",
          "Weekly data sync updates"
        ]
      },
      {
        name: "Enterprise Knowledge Base",
        priceINR: "₹1,24,999",
        priceUSD: "$1,499",
        period: "month",
        isPopular: true,
        features: [
          "Pinecone / Qdrant hosting integration",
          "Up to 20 document sources (Drive, Notion, Slack)",
          "Unified Company GPT portal for all staff",
          "SSO / Active Directory user logins",
          "SSO Role-based file permissions",
          "Daily automatic vector syncing"
        ]
      },
      {
        name: "Custom Training Pipeline",
        priceINR: "₹2,99,999",
        priceUSD: "$3,599",
        period: "month",
        features: [
          "Continuous dataset pipeline management",
          "Synthetic data generation & annotation",
          "Fine-tuning models on company records",
          "Weekly automated RAG accuracy scans",
          "Custom API connectors for external apps"
        ]
      }
    ],
    projects: [
      {
        title: "Secure Legal Document Portal for TrustLaw Partners",
        desc: "Unified 15,000 case summaries and agreement records into a private search bot with role-based access.",
        metric: "5 Seconds",
        metricLabel: "Average Search Time"
      },
      {
        title: "Technical SOP Bot for Hind Metal Manufacturing",
        desc: "Structured assembly manuals and voice guidelines, allowing operators to ask troubleshooting queries on the floor.",
        metric: "24%",
        metricLabel: "Reduction in Machine Downtime"
      }
    ],
    feedback: {
      quote: "Our lawyers find case details instantly now. The system search returns exact paragraphs and citations, and our data stays completely secure.",
      author: "Ananya Mehta",
      role: "VP of Technology",
      company: "Hind Metals Group"
    },
    ctaLabel: "Build Knowledge Base"
  },
  {
    id: "build",
    title: "Build Division",
    subtitle: "AI-Native software applications designed and developed from day one.",
    num: "04",
    icon: Monitor,
    color: "purple",
    summary: "Architect web applications, SaaS systems, native mobile apps, and e-commerce ecosystems with generative pipelines integrated from the start.",
    exactDefinition: "Avoid building standard software and bolting on AI later. Nexa's Build Division delivers full-scale systems engineered with integrated similarity search, model endpoints, and cognitive workflows from line one.",
    chips: ["Web Applications", "SaaS Products", "iOS & Android Apps", "E-commerce Ecosystems", "AI Feature Integration", "White-Label AI products", "APIs & Backends"],
    deliverables: [
      {
        title: "Web & SaaS Development",
        description: "High-performance full-stack web products built for scale and multi-tenant hosting.",
        items: [
          "Web Application Development: Full-stack apps using Next.js, React, Node, and Python. Includes native AI search, layout personalization engines, and dynamic forms.",
          "SaaS Product Development: Multi-tenant database separation, Stripe/Razorpay billing, SSO permission roles, feature flags, usage analytics, and onboarding portals.",
          "API & Backend Services: REST & GraphQL API designs, event-driven architectures, real-time data queues, and secure GCP/AWS cloud setups."
        ]
      },
      {
        title: "Mobile App & E-commerce Ecosystems",
        description: "Premium mobile experiences and intelligent commerce architectures.",
        items: [
          "Mobile Application Development: Native Android (Kotlin/Java), iOS (Swift), and Flutter/React Native builds. Integrates on-device offline models, smart camera OCR, and edge inference.",
          "Ecommerce Ecosystem: AI search storefront, native shopping apps, PriceIntel AI (dynamic pricing), NexaPersona (visitor layout optimization), inventory demand prediction, and automated marketing flows."
        ]
      },
      {
        title: "AI Feature Integration & White-Labeling",
        description: "Deploying pre-built modules or integrating intelligence layers into existing stacks.",
        items: [
          "AI Feature Integration: Embed semantic search search-bars, recommendation engines, predictive analytics, and auto-tagging modules into existing applications.",
          "White-Label AI Products: Custom branded deployments of School Management, Hospital Experience, Real Estate Match, HR Tech, and Legal Document AI platforms."
        ]
      }
    ],
    process: [
      { step: "01", title: "System Architecture", desc: "Design data schemas, outline multi-tenant isolation parameters, and wireframe neomorphic mockups." },
      { step: "02", title: "Infrastructure Setup", desc: "Initialize Next.js projects, build server backend schemas, and configure billing gateways." },
      { step: "03", title: "AI Core Deployment", desc: "Configure vector indexes, connect model APIs, and link RAG processing pipelines." },
      { step: "04", title: "QA & Cloud Rollout", desc: "Verify code compilation, audit security layers, deploy to cloud servers, and run speed optimizations." }
    ],
    packages: [
      {
        name: "AI MVP Build",
        priceINR: "₹3,49,999",
        priceUSD: "$4,199",
        period: "one-time",
        features: [
          "Pre-built SaaS template code config",
          "Up to 5 page layouts, full responsive",
          "Stripe/Razorpay checkout integration",
          "Basic LLM prompt integration",
          "6 weeks delivery milestone"
        ]
      },
      {
        name: "Custom SaaS Platform",
        priceINR: "₹7,99,999",
        priceUSD: "$9,599",
        period: "one-time",
        isPopular: true,
        features: [
          "Full custom Next.js/Node.js build",
          "Multi-tenant isolation architecture",
          "SSO & advanced role controls",
          "Vector search & semantic RAG lookup",
          "12 weeks delivery + launch support"
        ]
      },
      {
        name: "Enterprise Architecture",
        priceINR: "₹14,99,999+",
        priceUSD: "$17,999+",
        period: "one-time",
        features: [
          "High-scale platform engineering",
          "Custom model fine-tuning integration",
          "Multi-region GCP/AWS deployment",
          "SOC2 & GDPR compliance scanning",
          "Dedicated engineering manager assigned"
        ]
      }
    ],
    projects: [
      {
        title: "Multi-Tenant Copywriting Platform build for CopyFlow",
        desc: "Built a content generation SaaS scaling to thousands of paying users with Stripe billing systems.",
        metric: "< 120ms",
        metricLabel: "Core Page Load Speed"
      },
      {
        title: "Generative Portal for Real Estate Valuation",
        desc: "Architected a property directory matching buyer vectors dynamically using embedded similarity scores.",
        metric: "₹12M ARR",
        metricLabel: "Revenue Added in 6 Mo"
      }
    ],
    feedback: {
      quote: "Nexa delivered a gorgeous, performant platform. The code is clean, TypeScript rules are strict, and our users are wowed by the AI features.",
      author: "Sarah Jenkins",
      role: "Co-Founder",
      company: "CopyFlow Inc."
    },
    ctaLabel: "Build SaaS Product"
  },
  {
    id: "consulting",
    title: "AI Transformation Consulting",
    subtitle: "Strategic roadmap planning and change management for enterprise AI adoption.",
    num: "05",
    icon: Compass,
    color: "coral",
    summary: "Help large enterprises evaluate opportunities, structure implementation roadmaps, design workflows, and manage change.",
    exactDefinition: "Adopting AI without process redesign produces poor results. Nexa's Transformation Advisory maps manual cost structures, scores automation opportunities, selects vendors, and runs training workshops to align employees.",
    chips: ["Readiness Assessments", "Implementation Roadmaps", "Vendor Advisories", "Workflow Re-engineering", "Change Management", "Industry Strategies"],
    deliverables: [
      {
        title: "AI Readiness & Roadmap Design",
        description: "Auditing data quality, mapping opportunities, and sequencing milestones.",
        items: [
          "AI Readiness Assessment: Comprehensive audit of data stack, capability metrics, and processes. Provides an 8-dimension score report, opportunity matrix, and risk mitigation maps.",
          "AI Implementation Roadmap: A 12-24 month strategic plan sequencing adoption in ROI priority order. Includes budget models, build vs buy analyses, and milestone tracking."
        ]
      },
      {
        title: "Tool selection & Process Design",
        description: "Selecting vendor software and re-engineering department workflows.",
        items: [
          "AI Tool Selection & Vendor Advisory: Requirements gathering across functions, vendor evaluations on capability and total cost of ownership (TCO), and POC testing setups.",
          "AI Workflow Design & Process Re-engineering: Current state time/cost mappings, AI-augmented future state designs, human-AI collaboration mapping, and transition checklists."
        ]
      },
      {
        title: "Change Delivery & Industry Strategies",
        description: "Executive literacy training and specialized sector guidelines.",
        items: [
          "AI Change Management: Executive literacy workshops, role-customized team training sessions, change champion programs, and tool adoption tracking.",
          "Industry-Specific AI Strategy: Specialized consulting for Education (tutoring), Healthcare ( HIPAA clinical operations), Real Estate (lead matching), and Manufacturing & Logistics (IoT, maintenance predictive models)."
        ]
      }
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "Audit existing software databases and document key manual processes across departments." },
      { step: "02", title: "Opportunity Scoring", desc: "Score candidates for automation based on ROI, compute costs, and integration difficulty." },
      { step: "03", title: "Roadmap Construction", desc: "Draft a 12-month implementation timeline, detailing budget projections and build plans." },
      { step: "04", title: "Change Delivery", desc: "Conduct training workshops, publish SOPs, and map performance tracking metrics." }
    ],
    packages: [
      {
        name: "1-Day Strategy Sprint",
        priceINR: "₹99,999",
        priceUSD: "$1,199",
        period: "one-time",
        features: [
          "6-hour workshop with executive team",
          "Initial workflow opportunity assessment",
          "Build vs buy guidance summary",
          "Executive strategy blueprint slide deck"
        ]
      },
      {
        name: "Readiness Assessment",
        priceINR: "₹2,99,999",
        priceUSD: "$3,599",
        period: "one-time",
        isPopular: true,
        features: [
          "Complete audit of data stack & code",
          "Detailed ROI opportunity scoring matrix",
          "Build vs buy financial analysis reports",
          "Security & regulatory risk maps",
          "3 department workflow redesign plans"
        ]
      },
      {
        name: "Enterprise Roadmap & Advisory",
        priceINR: "₹5,99,999+",
        priceUSD: "$7,199+",
        period: "one-time",
        features: [
          "Assessment + 24-month roadmap design",
          "Tool selection vendor advisory matrices",
          "Custom team training workshops (4 sessions)",
          "12 months ongoing roadmap review support",
          "SSO governance & guidelines design"
        ]
      }
    ],
    projects: [
      {
        title: "AI Grading Roadmap for National EdTech System",
        desc: "Designed roadmap introducing virtual tutoring agents and automated grader pipelines in three locations.",
        metric: "₹18M Saved",
        metricLabel: "Operations Cost Reductions"
      },
      {
        title: "Credit Verification RAG for Regional Finance Bank",
        desc: "Evaluated manual loan processing and proposed secure document checking pipelines.",
        metric: "5 Days to 4 Hrs",
        metricLabel: "Verification Loop Speedup"
      }
    ],
    feedback: {
      quote: "Nexa did not just recommend tools; they restructured how our operations flow. The AI literacy workshops they ran had our teams comfortable using agents on day one.",
      author: "Devendra Bhatia",
      role: "COO",
      company: "Unity Finance India"
    },
    ctaLabel: "Book AI Strategy Workshop"
  }
];

export default function ServicesPage({ selectedServiceId, setSelectedServiceId }: ServicesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement | null>(null);

  // Form states for detail view contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Auto-scroll logic if details are selected
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as "instant" });
  }, [selectedServiceId]);

  // Handle Dynamic Sub-routing Sync on click
  const handleSelectService = (id: string | null) => {
    setSelectedServiceId(id);
    if (id) {
      window.location.hash = `#services/${id}`;
    } else {
      window.location.hash = "#services";
    }
  };

  // 3D Card Tilt handler for service cards
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  // Filter Data based on Search query & Category tags
  const filteredServices = servicesData.filter(service => {
    // Category mapping
    const matchesCategory = 
      activeCategory === "all" ||
      (activeCategory === "geo" && service.id === "geo") ||
      (activeCategory === "agentic" && service.id === "agentic") ||
      (activeCategory === "knowledge" && service.id === "knowledge") ||
      (activeCategory === "build" && service.id === "build") ||
      (activeCategory === "consulting" && service.id === "consulting");

    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.subtitle.toLowerCase().includes(query) ||
      service.summary.toLowerCase().includes(query) ||
      service.chips.some(chip => chip.toLowerCase().includes(query)) ||
      service.deliverables.some(d => d.title.toLowerCase().includes(query) || d.description.toLowerCase().includes(query) || d.items.some(i => i.toLowerCase().includes(query))) ||
      service.projects.some(p => p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query))
    );
  });

  const activeService = servicesData.find(s => s.id === selectedServiceId);

  const scrollConfirmContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }, 4000);
  };

  const handleScrollToContact = () => {
    if (contactFormRef.current) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactFormRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Categories helper mapping
  const filterTags = [
    { id: "all", label: "All Services" },
    { id: "geo", label: "AI Presence & Discovery" },
    { id: "agentic", label: "AI Agents & Automation" },
    { id: "knowledge", label: "Knowledge Infra" },
    { id: "build", label: "Build Division" },
    { id: "consulting", label: "AI Consulting" }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-body)] font-sans relative pt-[100px] pb-20 select-none">
      
      {/* Dynamic Aura background shapes */}
      <div className="absolute inset-0 w-full h-[500px] pointer-events-none" style={{ zIndex: 1, background: "radial-gradient(ellipse at 50% 0%, rgba(43,92,230,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-[1240px] mx-auto px-6 text-left relative" style={{ zIndex: 10 }}>
        
        {/* LISTING VIEW */}
        {selectedServiceId === null ? (
          <div className="animate-fadeIn">
            
            {/* Page Header - Video Background Hero with left-to-right dark overlay */}
            <div className="relative w-full overflow-hidden rounded-3xl mb-12 border border-black/10 shadow-[0_15px_35px_rgba(0,0,0,0.12)] min-h-[380px] flex items-center p-8 md:p-12 bg-[#0a0c10]">
              {/* Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
              >
                <source src="https://cdn.jsdelivr.net/gh/MilannSharma/portfolio-images@main/f2c80336-8ac9-4ea0-9658-515672297331.mp4" type="video/mp4" />
              </video>
              
              {/* Minimal blackish shadow gradient fading from left-to-right to expose the video on the right */}
              <div 
                className="absolute inset-0 z-10" 
                style={{ 
                  background: "linear-gradient(to right, rgba(10, 12, 18, 0.9) 0%, rgba(10, 12, 18, 0.75) 40%, rgba(10, 12, 18, 0.3) 75%, transparent 100%)" 
                }} 
              />
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />

              {/* Text Content (high contrast white/slate on dark background) */}
              <div className="relative z-20 max-w-[760px] text-left">
                <span className="eyebrow block mb-3 text-[var(--accent)] font-bold tracking-wider">Our Offerings</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.1] mb-5 tracking-tight" style={{ color: '#ffffff' }}>
                  AI-Native services built for <span className="text-gradient">high-scale authority.</span>
                </h1>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans font-medium max-w-[620px]">
                  We build the software, orchestrate the agents, align the database knowledge, and engineer the AI presence indicators required to help your business win in the generative era.
                </p>
              </div>
            </div>

            {/* SEARCH NAVBAR & FILTER TAGS */}
            <div className="sticky top-[80px] z-[100] bg-[var(--bg-base)]/80 backdrop-blur-md border border-[var(--border-soft)] rounded-2xl p-4 shadow-sm mb-12 flex flex-col gap-4">
              
              {/* Input Search */}
              <div className="relative w-full flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[var(--text-muted)]" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search service requirements... (e.g. RAG, AEO, Next.js, Dynamic Pricing, Support, Swift)"
                  className="w-full bg-[var(--bg-card)] text-[var(--text-primary)] font-sans text-sm font-semibold pl-12 pr-4 py-4 rounded-xl border border-[var(--border-soft)] shadow-[inset_2px_2px_5px_rgba(180,165,148,0.1)] focus:outline-none focus:border-[var(--accent)] transition-all placeholder:text-[var(--text-muted)] placeholder:font-normal"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="absolute right-4 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-base)] hover:bg-slate-200 py-1 px-2.5 rounded-md cursor-pointer transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Tag filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                {filterTags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => setActiveCategory(tag.id)}
                    className={`py-1.5 px-4 text-xs font-bold rounded-full transition-all border whitespace-nowrap cursor-pointer select-none ${
                      activeCategory === tag.id
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-sm"
                        : "bg-[var(--bg-card)] border-[var(--border-soft)] text-[var(--text-muted)] hover:border-gray-400 hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

            </div>

            {/* SERVICE SECTIONS LISTING */}
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 neo-card border border-white">
                <p className="font-serif text-xl text-[var(--text-primary)] font-bold mb-2">No matching services found</p>
                <p className="text-[var(--text-muted)] max-w-sm mx-auto text-sm">
                  We couldn't find any services matching "{searchQuery}". Try searching for categories like "RAG", "Agent", "SaaS", "iOS", or "SEO".
                </p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} 
                  className="btn-primary mt-6 cursor-pointer inline-flex"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={service.id}
                      onClick={() => handleSelectService(service.id)}
                      onMouseMove={handleCardTilt}
                      onMouseLeave={handleCardLeave}
                      className="neo-card p-8 border border-white flex flex-col justify-between cursor-pointer select-none relative group transition-transform duration-300 min-h-[360px]"
                    >
                      <div className="absolute top-4 right-6 font-mono text-[var(--border-soft)] text-4xl font-extrabold select-none">
                        {service.num}
                      </div>

                      <div className="flex flex-col gap-4">
                        {/* Clayicon wrapper */}
                        <div className={`clay-icon ${service.color} shrink-0 shadow-sm`} style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mt-2">
                          {service.title}
                        </h3>

                        <p className="text-[13.5px] text-[var(--text-body)] leading-relaxed font-sans mb-4">
                          {service.summary}
                        </p>
                      </div>

                      <div className="flex flex-col gap-5 pt-4 border-t border-slate-200/50">
                        {/* Chips container */}
                        <div className="flex flex-wrap gap-1.5">
                          {service.chips.slice(0, 3).map((chip, idx) => (
                            <span key={idx} className="glass-chip leading-none text-[10px] font-semibold">
                              {chip}
                            </span>
                          ))}
                          {service.chips.length > 3 && (
                            <span className="text-[10px] font-mono text-[var(--text-muted)] font-bold pt-1.5 pl-0.5">
                              +{service.chips.length - 3} More
                            </span>
                          )}
                        </div>

                        <span className="text-[13px] font-sans font-bold text-[var(--text-accent)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Explore Service Details <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ) : (
          
          /* DETAIL SUBPAGE VIEW */
          activeService && (
            <div className="animate-fadeIn">
              
              {/* Back navigation trigger */}
              <button 
                onClick={() => handleSelectService(null)}
                className="flex items-center gap-2 text-[var(--text-accent)] font-semibold text-[14.5px] mb-8 cursor-pointer hover:underline font-sans"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Services Listing
              </button>

              {/* 1. HERO SECTION */}
              {activeService.heroVideo ? (
                <div className="relative w-full overflow-hidden rounded-3xl mb-16 border border-black/10 shadow-[0_15px_35px_rgba(0,0,0,0.12)] min-h-[400px] flex items-center p-8 md:p-12 bg-[#0a0c10]">
                  {/* Background Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
                  >
                    <source src={activeService.heroVideo} type="video/mp4" />
                  </video>

                  {/* Dark gradient overlay – left-to-right */}
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background: "linear-gradient(to right, rgba(10, 12, 18, 0.92) 0%, rgba(10, 12, 18, 0.78) 40%, rgba(10, 12, 18, 0.3) 75%, transparent 100%)"
                    }}
                  />

                  {/* Subtle glass reflection */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />

                  {/* Text Content */}
                  <div className="relative z-20 max-w-[720px] text-left">
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase block mb-3">
                      Nexa Service
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.05] mb-5 tracking-tight" style={{ color: '#ffffff' }}>
                      {activeService.title}
                    </h1>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed font-sans font-medium max-w-[620px]">
                      {activeService.subtitle}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
                  <div className="lg:col-span-8">
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold tracking-widest uppercase block mb-3">
                      Nexa Service
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[var(--text-primary)] leading-[1.05] mb-5">
                      {activeService.title}
                    </h1>
                    <p className="text-[18px] md:text-[20px] font-serif italic text-[var(--text-body)] mb-6 leading-relaxed">
                      {activeService.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex justify-end">
                    <div className={`clay-icon ${activeService.color} shrink-0 w-24 h-24 rounded-3xl shadow-md flex items-center justify-center`}>
                      {(() => {
                        const Icon = activeService.icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. DEFINITION STATEMENT */}
              <div className="neo-card p-8 bg-[var(--bg-alt)] border-t border-white mb-16">
                <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)] uppercase font-semibold block mb-2">Service Description</span>
                <p className="font-sans text-base md:text-lg text-[var(--text-primary)] leading-relaxed font-medium">
                  {activeService.exactDefinition}
                </p>
              </div>

              {/* 3. CORE DELIVERABLES ("WHAT WE OFFER") */}
              <div className="mb-16">
                <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-8">What We Provide & Deliver</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeService.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="neo-card p-8 border border-white flex flex-col gap-5 bg-white">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full shrink-0" />
                        <h3 className="font-serif text-[20px] font-bold text-[var(--text-primary)]">{del.title}</h3>
                      </div>
                      
                      <p className="text-[13.5px] text-[var(--text-body)] leading-relaxed font-sans">
                        {del.description}
                      </p>

                      <div className="border-t border-slate-100 my-1" />

                      <DeliverablesList items={del.items} maxVisibleItems={5} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. SERVICE PROCESS TIMELINE ("HOW WE OFFER IT") */}
              <div className="mb-16">
                <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-8">Our Delivery Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative before:absolute before:top-[42px] before:left-6 before:right-6 before:h-[2px] before:bg-slate-200/50 before:hidden before:lg:block">
                  {activeService.process.map((step, sIdx) => (
                    <div key={sIdx} className="neo-card p-6 border border-white bg-white/70 relative z-10 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-2xl text-[var(--text-accent)] bg-[var(--accent-soft)] px-3 py-1 rounded-lg">
                          {step.step}
                        </span>
                        <Clock className="w-4 h-4 text-[var(--text-muted)]" />
                      </div>
                      <h4 className="font-serif text-[18px] font-bold text-[var(--text-primary)] mt-1">{step.title}</h4>
                      <p className="text-[12.5px] text-[var(--text-body)] leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. PRICING PACKAGES & COST */}
              <div className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)]">Packages & Cost Tiers</h2>
                    <p className="text-sm text-[var(--text-body)] mt-1 font-sans">Transparent global pricing tailored to custom requirements.</p>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold">Standard Indian/US Pricing</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {activeService.packages.map((pkg, pIdx) => (
                    <div 
                      key={pIdx} 
                      className={`neo-card p-8 border flex flex-col justify-between relative ${
                        pkg.isPopular 
                          ? "border-[var(--accent)] ring-2 ring-[var(--accent-soft)] bg-white" 
                          : "border-white bg-white/80"
                      }`}
                    >
                      {pkg.isPopular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-[9.5px] font-mono font-bold uppercase tracking-widest px-4.5 py-1 rounded-full shadow-sm">
                          Most Recommended
                        </span>
                      )}

                      <div className="flex flex-col gap-5">
                        <div>
                          <span className="font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-1">{pkg.name}</span>
                          <div className="flex items-baseline gap-1.5 mt-1.5">
                            <span className="text-3xl font-black font-sans text-[var(--text-primary)]">{pkg.priceINR}</span>
                            <span className="text-sm font-mono text-[var(--text-muted)] font-semibold">/ {pkg.period}</span>
                          </div>
                          <div className="text-[12px] font-mono text-[var(--accent)] font-semibold mt-0.5">
                            Approx. {pkg.priceUSD} USD
                          </div>
                        </div>

                        <div className="border-t border-slate-100 my-1" />

                        <PackageFeaturesList items={pkg.features} maxVisibleItems={5} />
                      </div>

                      <button 
                        onClick={handleScrollToContact}
                        className={`w-full py-3.5 px-4 mt-8 font-bold text-xs justify-center flex cursor-pointer select-none transition-all ${
                          pkg.isPopular ? "btn-primary text-white" : "btn-secondary text-[var(--text-primary)]"
                        }`}
                      >
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. COMPLETED WORK / CASE STUDIES (2 to 4 done) */}
              <div className="mb-16">
                <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-8">Completed Projects & Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeService.projects.map((proj, prIdx) => (
                    <div key={prIdx} className="neo-card p-8 border border-white bg-white flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4.5 h-4.5 text-[var(--accent)] shrink-0" />
                          <h3 className="font-serif text-[19px] font-bold text-[var(--text-primary)]">{proj.title}</h3>
                        </div>
                        <p className="text-[13.5px] text-[var(--text-body)] leading-relaxed font-sans">
                          {proj.desc}
                        </p>
                      </div>

                      {/* Metric display box */}
                      <div className="p-4 bg-[var(--bg-base)] border border-[var(--border-soft)] rounded-xl flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[var(--text-muted)] font-bold uppercase tracking-wider">{proj.metricLabel}</span>
                        <span className="font-mono text-2xl font-black text-[var(--accent)]">{proj.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. CLIENT FEEDBACK TESTIMONIAL */}
              <div className="neo-card p-10 bg-[var(--bg-alt)] border-t border-white mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-serif text-[120px] text-slate-300/40 select-none leading-none pointer-events-none">
                  “
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-6 relative z-10 italic">
                  "{activeService.feedback.quote}"
                </blockquote>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center font-bold font-serif text-white text-base">
                    {activeService.feedback.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-sans font-bold text-sm text-[var(--text-primary)]">{activeService.feedback.author}</span>
                    <span className="block font-mono text-[10.5px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                      {activeService.feedback.role} · {activeService.feedback.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* 8. INTEGRATED CONTACT FORM SECTION */}
              <div ref={contactFormRef} className="glass-panel p-8 border border-white max-w-[800px] mx-auto animate-fadeIn">
                {formSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-5">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">Consultation Request Queued!</h3>
                    <p className="text-[var(--text-muted)] max-w-sm text-sm">
                      Thank you, {name || "there"}. We've auto-selected <span className="font-bold text-[var(--accent)]">{activeService.title}</span> as your service area. An AI engineer will reach out in 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={scrollConfirmContact} className="space-y-5">
                    <div className="text-center mb-6">
                      <span className="eyebrow block mb-2">Request Consultation</span>
                      <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                        Get Started with {activeService.title}
                      </h3>
                      <p className="text-[13px] text-[var(--text-body)] mt-1 font-sans">
                        Provide your details below to schedule an onboarding call for this specific service.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group mb-0">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Arjun Sharma" 
                          className="neo-inset w-full"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>Work Email *</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="arjun@company.com" 
                          className="neo-inset w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group mb-0">
                        <label>Contact Phone</label>
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210" 
                          className="neo-inset w-full"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>Company / Organization</label>
                        <input 
                          type="text" 
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Corp" 
                          className="neo-inset w-full"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0">
                      <label htmlFor="locked-service">Selected Service (Auto-Locked)</label>
                      <input 
                        id="locked-service"
                        type="text" 
                        disabled
                        value={activeService.title}
                        className="neo-inset w-full bg-slate-100 text-slate-500 font-bold border-dashed cursor-not-allowed opacity-80"
                      />
                    </div>

                    <div className="form-group">
                      <label>Describe your project & milestones</label>
                      <textarea 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your requirements, current stack, and expected timelines..." 
                        className="neo-inset w-full"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full justify-center py-4 cursor-pointer select-none font-bold text-xs"
                    >
                      {activeService.ctaLabel} <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          )
        )}

      </div>
      
      {/* Scroll to section style helper */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: var(--border-soft);
          border-radius: 10px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}

function DeliverablesList({ items, maxVisibleItems = 5 }: { items: string[], maxVisibleItems?: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, maxVisibleItems);
  return (
    <div className="flex flex-col gap-3">
      <ul className="space-y-3 transition-all duration-300">
        {visibleItems.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-body)] leading-relaxed font-sans font-medium">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {items.length > maxVisibleItems && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="text-[11px] font-sans font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors self-start py-1 px-2 mt-1 rounded border border-slate-200/40 bg-slate-50/10 hover:bg-slate-100/50 cursor-pointer inline-flex items-center gap-1 shadow-sm"
        >
          {expanded ? "Show Less" : `View More (+${items.length - maxVisibleItems} deliverables)`}
        </button>
      )}
    </div>
  );
}

function PackageFeaturesList({ items, maxVisibleItems = 5 }: { items: string[], maxVisibleItems?: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, maxVisibleItems);
  return (
    <div className="flex flex-col gap-3">
      <ul className="space-y-3 transition-all duration-300">
        {visibleItems.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-body)] leading-relaxed font-sans font-medium">
            <Check className="w-4.5 h-4.5 text-[var(--accent)] shrink-0 mt-0.5" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      {items.length > maxVisibleItems && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="text-[11px] font-sans font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors self-start py-1 px-2 mt-1 rounded border border-slate-200/40 bg-slate-50/10 hover:bg-slate-100/50 cursor-pointer inline-flex items-center gap-1 shadow-sm"
        >
          {expanded ? "Show Less" : `View More (+${items.length - maxVisibleItems} features)`}
        </button>
      )}
    </div>
  );
}
