import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Twitter,
  Linkedin,
  Link2,
  Check,
  ChevronDown,
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle,
  FileText,
  Heart,
  MessageCircle,
  Send,
  Share2,
  Clock,
  Tag,
  ThumbsUp,
  ChevronRight,
  Search,
} from "lucide-react";

interface BlogProps {
  // eslint-disable-next-line no-unused-vars
  navigateTo: (page: "home" | "products" | "blog" | "contact") => void;
}

// ─── Blog Data ───────────────────────────────────────────────────────────────
const blogPosts = [
  {
    id: "geo-guide",
    title: "Generative Engine Optimization (GEO): The Complete Guide to Brand Visibility in AI Search",
    slug: "generative-engine-optimization-guide",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    excerpt: "AI systems like ChatGPT, Gemini, and Perplexity now answer questions and recommend brands directly. Learn how GEO keeps your business visible inside these AI-generated answers.",
    author: "Nexa AI Strategy Team",
    authorRole: "Technical SEO & AEO Experts",
    date: "June 18, 2026",
    readTime: "12 min read",
    tags: ["GEO", "AI Search", "SEO", "Brand Visibility"],
    content: `
## Quick Answer

Generative Engine Optimization (GEO) is the process of structuring online content so Large Language Models—ChatGPT, Gemini, Perplexity, Claude—easily find, synthesize, and cite your brand. Unlike traditional SEO which targets ranking lists, GEO targets context-rich AI answers and direct user recommendations.

## 1. The Invisible Shift: Traditional SEO vs. AI Search Synthesis

For over two decades, search engine optimization followed a predictable formula. Brands built structured text, targeted high-intent keywords, earned high PageRank hyperlinks, and successfully climbed the ladder of Google's index.

Today, that formula is fracturing. Millions of internet searches are shifting to conversational AI interfaces like ChatGPT, Gemini, Perplexity, and Apple Intelligence. Google itself is integrating AI Overviews at the top of its search results, transforming the engine from a link directory to an answer provider.

When an LLM processes a query like "What is the most secure compliance scanning software for SaaS startups?", it does not display a list of ten domains. It answers directly in natural language, citing 2 or 3 select providers with reasons. If your software is not in that generated summary, you are invisible to the buyer.

## 2. Why It Matters: The Gatekeepers of Modern Consumer Attention

AI models act as automated research synthesis agents. They scan massive vector datasets, retrieve active web sources through real-time search wrappers, analyze the findings, and generate a customized summary that directly answers the intent.

If a software product or consultancy does not appear in AI-generated answers, it loses access to high-intent leads who are skipping standard browsing altogether.

Furthermore, the conversion rate of AI recommendations is exceptionally high. When ChatGPT or Gemini highlights a specific brand as the optimal solution for a user's exact problem, it carries the weight of a trusted, unbiased consultant.

## 3. The Mechanics of AI Recommendation Engines

### Retrieval-Augmented Generation (RAG) and the Knowledge Graph

AI search engines utilize Retrieval-Augmented Generation (RAG). When a user inputs a query, the search model performs a rapid live search to fetch contextually relevant pages, then feeds those pages into the model context window to generate the final response.

For RAG systems to include your brand:
1. The search system must easily crawl, parse, and verify your content
2. Your content must possess strong semantic matches to the context of the user query

### The Core Ranking Signals of GEO

- **Authority and Trustworthiness**: Data, statistics, and verifiable claims backed by authoritative external references
- **Citation Placement**: Content organized with direct citations which AI crawlers easily parse
- **Factual Depth**: Answering complex multi-step user questions completely in a single document
- **Semantic Enrichment**: Using industry-standard terms and clear descriptions of entity properties

## 4. The Core Strategic Framework

### Structuring Data for Conversational NLP Queries

Conversational search queries are naturally longer and more complex. A user won't just type "RAG software". They will query, "How do I set up a secure local RAG framework using index databases and prevent data leaks?"

To rank for these phrases, your pages must structure content using natural language question headings (H2/H3) followed by direct, logical answers. Incorporating JSON-LD schemas and HTML5 tables helps search crawlers process technical properties without rendering issues.

### Off-Page Authority Amplification

LLMs determine brand credibility based on what other sites say about you. A core pillar of GEO is ensuring your brand is mentioned and described accurately on external platforms—tech forums, GitHub repositories, comparison wikis, news articles.

## 5. Strategic Benefits of Implementing GEO Early

Organizations that adapt to GEO early secure a massive competitive advantage.

| Feature | Traditional SEO | GEO Strategy |
|---|---|---|
| User Intent Focus | Short-tail keywords | Complex conversational questions |
| Output Type | List of hyperlinks | Synthesized natural language |
| Conversion Vector | Clicking to browse pages | Direct recommendation with citation |
| Long-Term Value | Easily displaced | Embedded into LLM training |

## 6. Common GEO Execution Mistakes

- **Keyword Stuffing**: Overloading content with exact keyword matches degrades readability scores
- **Over-Reliance on JavaScript Rendering**: AI indexers often fetch pure raw HTML
- **Vague Marketing Jargon**: "Ultimate solution" vs "AI chatbot that integrates with Slack and Zendesk"
- **Ignoring Schema.org Markup**: Search crawlers use JSON-LD to extract entity parameters

## 7. Expert Tips for Optimizing for Generative AI Systems

**Tip 01 — Write with High Readability**: Structure sentences with a Flesch Kincaid score above 70. LLMs prefer parsing text that is clear, simple, and direct.

**Tip 02 — Build Detailed FAQ Accords**: Incorporate exact user queries as accordion headers with detailed answers directly below. This makes it simple for RAG pipelines to grab the specific block.

**Tip 03 — Secure Reputable References**: Acquire citations in high-authority tech directories, academic archives, and public forums.

**Tip 04 — Perform AI Visibility Audits**: Regularly query AI models with conversational prompts and monitor where your brand ranks using platforms like Nexa Signal.

## 8. Frequently Asked Questions

**What is GEO?** GEO is the technical practice of structuring digital assets so conversational AI models easily discover, synthesize, and cite your brand.

**How does it differ from traditional SEO?** Traditional SEO focuses on keyword density and backlinks. GEO focuses on natural language query alignment, citation placement, structured JSON-LD data, and external authority signals.

**What platforms does GEO target?** ChatGPT, Google AI Overviews, Gemini, Microsoft Copilot, Perplexity, and Apple Intelligence.

**Does client-side JavaScript affect GEO?** Yes. Many AI search wrappers crawl raw HTML. If your site relies on heavy JavaScript rendering, AI indexers may retrieve empty containers and miss your content.

## Conclusion

The digital landscape is undergoing its most significant evolution since the creation of the internet. Continuing to ignore the visibility of your brand inside ChatGPT, Gemini, and Perplexity represents a major business risk.

By adopting a dedicated Generative Engine Optimization strategy, structuring content for natural language crawlers, and building robust third-party authority signals, your organization ensures it remains visible, cited, and recommended in the AI era.
    `,
  },
  {
    id: "ai-agents-automation",
    title: "AI Agents in 2026: How Autonomous Systems Are Replacing Repetitive Business Operations",
    slug: "ai-agents-business-automation-2026",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    excerpt: "Autonomous AI agents are no longer a future concept — they are replacing customer support, sales outreach, and financial operations today. Here's what enterprise leaders need to know.",
    author: "Nexa Engineering Team",
    authorRole: "AI Systems Architects",
    date: "June 14, 2026",
    readTime: "9 min read",
    tags: ["AI Agents", "Automation", "Enterprise AI", "Productivity"],
    content: `
## Quick Answer

AI Agents are autonomous software systems powered by Large Language Models that can perceive inputs, plan multi-step actions, use external tools, and execute tasks without constant human supervision. In 2026, they are actively replacing repetitive operations in customer support, sales, finance, and HR across enterprises of all sizes.

## What Makes AI Agents Different from Chatbots?

Traditional chatbots are simple input/output systems that match user text to predetermined responses. AI Agents are fundamentally different:

- **Goal-oriented**: They receive a high-level objective ("resolve all Tier 1 support tickets today") and plan the steps to achieve it
- **Tool-using**: They can call APIs, search databases, send emails, fill forms, and trigger other software
- **Self-correcting**: When they encounter an error, they diagnose the failure and retry with a different approach
- **Memory-enabled**: They maintain context across long multi-step tasks and sessions

## The Business Case: Where Agents Replace Human Labor

### Customer Support Operations

The most mature deployment of AI agents is in customer support. An AI agent can:
1. Read a new support ticket
2. Query the CRM for customer history
3. Check the knowledge base for relevant solutions
4. Draft a response in the company's brand voice
5. Resolve the ticket or escalate with full context

Companies deploying support agents report **85% reduction in Tier 1 ticket resolution time** and **40-60% reduction in support costs**.

### Sales Development Representatives (SDRs)

AI SDR agents are handling the most repetitive parts of early-stage sales:
- Researching prospects using LinkedIn, company websites, and news articles
- Crafting personalized outreach based on the prospect's recent activity
- Following up with sequences across email and LinkedIn
- Qualifying leads and booking demos on the rep's calendar

### Finance and Accounts Payable

Finance AI agents handle invoice processing, approval routing, anomaly detection in expense reports, and monthly reconciliation with dramatically fewer errors than human processors.

## Implementation: What You Need to Get Started

### Step 1 — Define the Agent's Scope

The biggest mistake is scope creep. Start with a single, clearly defined use case. "Handle customer refund requests for orders under ₹5,000" is better than "handle all customer issues."

### Step 2 — Build the Knowledge Infrastructure

Agents are only as capable as the information they can access. Before deploying an agent, build a structured knowledge base (using RAG architecture) that the agent can query for company policies, product details, and procedures.

### Step 3 — Set Up Guardrails

Deploy monitoring from day one. Tools like Nexa's AgentOps platform track every agent action, flag anomalies, measure response quality, and provide full audit logs.

## The Human-in-the-Loop Imperative

Effective AI agent deployment in 2026 is not about removing humans — it's about redirecting human attention. Agents handle volume; humans handle judgment. The optimal model includes escalation paths for edge cases, regular human review of agent decisions, and continuous feedback loops that improve agent performance over time.

## Conclusion

AI agents are not a technology preview — they are a competitive imperative. Businesses that deploy autonomous agent systems in 2026 are building structural cost and quality advantages that will compound over the next five years. The barrier to entry has never been lower, and the ROI has never been clearer.
    `,
  },
  {
    id: "knowledge-infrastructure",
    title: "Why Your Company's Knowledge Is Invisible to AI — And How to Fix It",
    slug: "company-knowledge-infrastructure-ai-rag",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    excerpt: "Your company's expertise is locked in PDFs, emails, Slack threads, and old drives. AI can't find it, and neither can your team. RAG-powered knowledge infrastructure changes that permanently.",
    author: "Nexa AI Strategy Team",
    authorRole: "Knowledge Systems Specialists",
    date: "June 10, 2026",
    readTime: "8 min read",
    tags: ["RAG", "Knowledge Management", "AI Infrastructure", "Enterprise"],
    content: `
## Quick Answer

Company knowledge infrastructure refers to a system that consolidates your organization's scattered information — documents, policies, product specs, historical decisions — into a centralized, AI-queryable knowledge base powered by Retrieval-Augmented Generation (RAG). It allows employees and AI systems to instantly find accurate, company-specific answers.

## The Problem: Knowledge Silos Are Expensive

Most companies accumulate knowledge in deeply fragmented ways:

- **Documents**: Google Drive, SharePoint, Confluence, Notion
- **Communications**: Email threads, Slack, Microsoft Teams  
- **Systems**: CRM data, ERP records, ticketing systems
- **People's heads**: Expertise that was never written down

The result is a slow, inefficient organization where:
1. New employees take months to become productive
2. Teams make decisions without knowing relevant prior work
3. Customer-facing staff give inconsistent answers
4. AI agents cannot be deployed because they have no reliable information source

## What Is RAG and Why Does It Matter?

Retrieval-Augmented Generation (RAG) is the technical architecture that makes AI-powered knowledge systems work.

When an employee asks "What is our refund policy for international customers?", the RAG system:
1. Converts the query into a semantic vector
2. Searches the knowledge base for the most relevant document chunks
3. Passes those chunks to an LLM as context
4. Generates a specific, accurate answer grounded in your actual policy documents

This is fundamentally different from a keyword search, which requires exact word matches and returns pages of documents to sift through.

## Building Knowledge Infrastructure: A Practical Roadmap

### Phase 1 — Audit and Inventory (Weeks 1-2)

Before building anything, map where your knowledge currently lives. Categorize it by type (policy, product, process, historical) and by quality (authoritative vs. outdated vs. uncertain).

### Phase 2 — Data Ingestion (Weeks 3-4)

Set up automated pipelines that pull documents from your existing systems — Google Drive, SharePoint, Confluence, Notion, email — and convert them into a standardized, indexable format.

### Phase 3 — RAG Architecture Setup (Weeks 5-8)

Deploy a vector database (Pinecone, Weaviate, or pgvector), embed your document corpus, and build the retrieval layer that connects to your LLM of choice (GPT-4o, Gemini Pro, Claude).

### Phase 4 — Interface Deployment (Weeks 9-10)

Deploy the knowledge system through your team's primary interface — Slack bot, web portal, or embedded in existing tools like your CRM or support platform.

### Phase 5 — Feedback and Continuous Improvement (Ongoing)

The system gets better with use. Every query that results in a negative feedback signal (wrong answer, unhelpful response) is a training signal to improve the retrieval and generation quality.

## Measuring the ROI

Organizations that deploy internal knowledge infrastructure consistently report:

- **65% reduction** in time employees spend searching for information
- **40% faster** onboarding for new team members
- **30% improvement** in customer-facing response consistency
- **Significant reduction** in "I'll get back to you" moments in sales

## Conclusion

Your company's collective knowledge is one of its most valuable assets — but only if it can be accessed and applied quickly and accurately. Building RAG-powered knowledge infrastructure is the foundational step that unlocks AI automation, improves employee productivity, and creates a defensible competitive advantage.
    `,
  },
];

// ─── Markdown-like renderer ──────────────────────────────────────────────────
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-bold font-serif text-[var(--text-primary)] mt-10 mb-4 border-b border-slate-200/60 pb-3">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold font-serif text-[var(--text-primary)] mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("| ") && line.endsWith(" |")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].match(/^\|[-| ]+\|$/)) tableLines.push(lines[i]);
        i++;
      }
      const [header, ...rows] = tableLines;
      const headers = header.split("|").filter(Boolean).map((h) => h.trim());
      elements.push(
        <div key={key++} className="overflow-x-auto my-6 neo-card p-1 border border-white">
          <table className="w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-[var(--bg-alt)] border-b border-[var(--border-soft)]">
                {headers.map((h, idx) => (
                  <th key={idx} className="p-3 font-semibold text-[var(--text-primary)]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-[var(--border-soft)]">
                  {row.split("|").filter(Boolean).map((cell, cIdx) => (
                    <td key={cIdx} className={`p-3 ${cIdx > 0 ? "text-[var(--accent)] font-medium" : "font-semibold"}`}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.match(/^\d+\. /)) {
      // Numbered list
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal pl-6 space-y-2 my-3">
          {items.map((item, idx) => (
            <li key={idx} className="text-[var(--text-body)]" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("- ")) {
      // Bullet list
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 my-3">
          {items.map((item, idx) => (
            <li key={idx} className="text-[var(--text-body)]" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() !== "") {
      elements.push(
        <p key={key++} className="text-[var(--text-body)] leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    }
    i++;
  }
  return elements;
}

function formatInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong class='text-[var(--text-primary)] font-semibold'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-slate-100 px-1 rounded text-sm font-mono text-[var(--accent)]'>$1</code>");
}

// ─── Blog Card Component ──────────────────────────────────────────────────────
interface BlogCardProps {
  key?: string;
  post: typeof blogPosts[0];
  isRecent?: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpen: (id: string) => void;
}

function BlogCard({ post, isRecent, onOpen }: BlogCardProps) {
  return (
    <div
      className="neo-card border border-white overflow-hidden cursor-pointer group transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
      onClick={() => onOpen(post.id)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-52">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isRecent && (
          <span className="absolute top-3 left-3 bg-[var(--accent)] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
            Recent
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="glass-chip text-[11px] text-[var(--text-accent)] border-[var(--accent-soft)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-[var(--text-primary)] text-lg leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Full excerpt */}
        <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50">
          <div className="flex items-center gap-2 text-[12px] text-[var(--text-muted)] font-mono">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
            <span className="mx-1">·</span>
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
          <button className="flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[13px] font-sans hover:gap-2.5 transition-all">
            Read More <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Share Buttons ────────────────────────────────────────────────────────────
function ShareButtons({ post }: { post: typeof blogPosts[0] }) {
  const [copied, setCopied] = useState(false);
  const pageUrl = `https://nexatechnology.ai/blog/${post.slug}`;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${pageUrl}\n\n📰 *${post.title}*\n\nRead the full article at Nexa Technology.`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}&via=nexatechnology`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="my-10 p-6 glass-panel border border-white">
      <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-accent)] font-bold mb-4 flex items-center gap-2">
        <Share2 className="w-4 h-4" /> Share this article
      </p>
      <div className="flex flex-wrap gap-3">

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold font-sans transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold font-sans transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ background: "linear-gradient(135deg, #0A66C2, #084B8A)" }}
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        {/* Twitter / X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold font-sans transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ background: "linear-gradient(135deg, #1DA1F2, #0D8BD9)" }}
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold font-sans transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ background: "linear-gradient(135deg, #1877F2, #0E55C8)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Facebook
        </a>

        {/* Telegram */}
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-[13.5px] font-semibold font-sans transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ background: "linear-gradient(135deg, #2AABEE, #1A8EC2)" }}
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[var(--text-body)] text-[13.5px] font-semibold font-sans bg-[var(--bg-card)] border border-slate-200/60 transition-all hover:scale-105 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

// ─── Like + Comments Section ──────────────────────────────────────────────────
function LikeCommentSection({ postId }: { postId: string }) {
  const storageKey = `nexa-blog-${postId}`;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(47);
  const [comments, setComments] = useState([
    { id: 1, name: "Priya Sharma", text: "This is exactly what I was looking for. GEO is still so underrated in the Indian market.", date: "June 18, 2026", avatar: "P" },
    { id: 2, name: "Rahul Mehta", text: "Fantastic breakdown! We implemented a RAG system last quarter and the difference in our team's knowledge access has been remarkable.", date: "June 18, 2026", avatar: "R" },
  ]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.liked) setLiked(true);
        if (data.likeCount) setLikeCount(data.likeCount);
      }
    } catch { /* ignore */ }
  }, [storageKey]);

  const handleLike = () => {
    const newLiked = !liked;
    const newCount = newLiked ? likeCount + 1 : likeCount - 1;
    setLiked(newLiked);
    setLikeCount(newCount);
    try {
      localStorage.setItem(storageKey, JSON.stringify({ liked: newLiked, likeCount: newCount }));
    } catch { /* ignore */ }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    const newComment = {
      id: comments.length + 10,
      name: commentName.trim(),
      text: commentText.trim(),
      date: "Just now",
      avatar: commentName.trim()[0].toUpperCase(),
    };
    setComments([...comments, newComment]);
    setCommentName("");
    setCommentText("");
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  return (
    <div className="mt-12 space-y-8">

      {/* Like Row */}
      <div className="flex items-center gap-4 py-6 border-t border-b border-slate-200/60">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-[14.5px] font-sans transition-all duration-200 cursor-pointer ${
            liked
              ? "bg-red-50 text-red-500 border border-red-200 shadow-sm scale-105"
              : "bg-[var(--bg-card)] text-[var(--text-body)] border border-slate-200/60 hover:border-red-300 hover:text-red-400"
          }`}
        >
          <Heart className={`w-5 h-5 transition-all ${liked ? "fill-red-500 text-red-500 scale-110" : ""}`} />
          {liked ? "Liked" : "Like this article"}
          <span className={`font-mono text-[12px] px-1.5 py-0.5 rounded-full ${liked ? "bg-red-100 text-red-600" : "bg-slate-100 text-[var(--text-muted)]"}`}>
            {likeCount}
          </span>
        </button>
        <span className="text-[13px] text-[var(--text-muted)] font-sans">
          {liked ? "Thank you for your support! 🎉" : "If this article helped you, give it a like."}
        </span>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-[var(--text-accent)]" />
          Discussion <span className="font-mono text-base text-[var(--text-muted)] ml-1">({comments.length})</span>
        </h3>

        {/* Comment List */}
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="neo-card p-5 border border-white flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold font-sans text-sm shrink-0">
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-[var(--text-primary)] text-[14.5px] font-sans">{comment.name}</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">{comment.date}</span>
                </div>
                <p className="text-[var(--text-body)] text-[14px] leading-relaxed font-sans">{comment.text}</p>
                <button className="mt-2 flex items-center gap-1 text-[11.5px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer">
                  <ThumbsUp className="w-3 h-3" /> Helpful
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Comment Form */}
        <div className="glass-panel p-6 border border-white">
          <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-4">Leave a Comment</h4>

          {commentSubmitted && (
            <div className="mb-4 flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl p-3 text-sm font-sans">
              <CheckCircle className="w-4 h-4 shrink-0" />
              Your comment has been posted successfully! Thank you.
            </div>
          )}

          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="form-group mb-0">
              <label>Your Name *</label>
              <input
                type="text"
                required
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                placeholder="Arjun Sharma"
                className="neo-inset"
              />
            </div>
            <div className="form-group mb-0">
              <label>Your Comment *</label>
              <textarea
                required
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts, questions, or feedback on this article..."
                className="neo-inset"
              />
            </div>
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 cursor-pointer"
            >
              Post Comment <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── Main Blog Component ───────────────────────────────────────────────────────
export default function Blog({ navigateTo }: BlogProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPost = blogPosts.find((p) => p.id === selectedPostId) ?? null;

  const filteredPosts = blogPosts.filter((post) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q)) ||
      post.author.toLowerCase().includes(q)
    );
  });

  // Reading progress bar
  useEffect(() => {
    if (!selectedPost) return;
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedPost]);

  // Inject JSON-LD schemas when a post is open
  useEffect(() => {
    if (!selectedPost) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "json-ld-article";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: selectedPost.title,
      description: selectedPost.excerpt,
      author: { "@type": "Organization", name: selectedPost.author },
      datePublished: selectedPost.date,
      image: selectedPost.thumbnail,
    });
    document.head.appendChild(script);
    return () => {
      const old = document.getElementById("json-ld-article");
      if (old) document.head.removeChild(old);
    };
  }, [selectedPost]);

  const handleOpenPost = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Blog Listing View ──────────────────────────────────────────────────────
  if (!selectedPost) {
    return (
      <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-body)] font-sans pt-[100px] pb-20">
        <div className="max-w-[1240px] mx-auto px-6">

          {/* Back */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 text-[var(--text-accent)] font-semibold text-[14px] mb-8 cursor-pointer hover:underline self-start font-sans"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          {/* Header */}
          <div className="max-w-[720px] mb-12">
            <span className="eyebrow block mb-3">Nexa Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] leading-[1.1] mb-4">
              The Nexa <span className="text-gradient">Intelligence Blog</span>
            </h1>
            <p className="text-lg text-[var(--text-body)] leading-relaxed">
              In-depth guides on Generative Engine Optimization, AI agents, knowledge infrastructure, and the future of AI-native business — written by our strategy and engineering teams.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-10 max-w-[500px]">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, tags, author..."
                className="w-full bg-white/40 backdrop-blur-md border border-white/60 focus:border-[var(--accent)] rounded-xl py-3 pl-11 pr-10 text-sm outline-none transition-all placeholder:text-[var(--text-muted)] focus:shadow-md text-[var(--text-primary)] font-sans"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] animate-pulse" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Featured / Recent Post — first card full-width */}
          {searchQuery === "" && blogPosts.length > 0 && (
            <div className="mb-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-accent)] font-bold mb-4 block">
                📌 Most Recent
              </span>
              <div
                className="neo-card border border-white overflow-hidden cursor-pointer group transition-all duration-300 hover:translate-y-[-4px] flex flex-col md:flex-row"
                onClick={() => handleOpenPost(blogPosts[0].id)}
              >
                <div className="relative overflow-hidden md:w-[42%] h-60 md:h-auto">
                  <img
                    src={blogPosts[0].thumbnail}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[var(--accent)] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Recent
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {blogPosts[0].tags.map((t) => (
                      <span key={t} className="glass-chip text-[11px] text-[var(--text-accent)]">{t}</span>
                    ))}
                  </div>
                  <h2 className="font-serif font-bold text-2xl md:text-3xl text-[var(--text-primary)] leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-sans text-[15px] text-[var(--text-muted)] leading-relaxed mb-5">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)] font-mono">
                      <User className="w-3.5 h-3.5" /> {blogPosts[0].author}
                      <span className="mx-1">·</span>
                      <Calendar className="w-3.5 h-3.5" /> {blogPosts[0].date}
                      <span className="mx-1">·</span>
                      <Clock className="w-3.5 h-3.5" /> {blogPosts[0].readTime}
                    </div>
                    <button className="flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[14px] font-sans hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All other posts */}
          <div className="mb-6">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
              {searchQuery === "" ? "All Articles" : `Search Results (${filteredPosts.length})`}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-2xl border border-white p-8">
              <p className="text-[var(--text-muted)] text-[15px] mb-4 font-sans">
                No articles found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn-primary inline-flex items-center gap-2 cursor-pointer font-sans"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  isRecent={post.id === blogPosts[0].id}
                  onOpen={handleOpenPost}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    );
  }

  // ── Single Blog Detail View ────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-body)] font-sans relative pt-[100px] pb-16">

      {/* Reading Progress Bar */}
      <div
        style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #2B5CE6, #7B3FE4, #0EAEF5)", boxShadow: "0 0 8px rgba(43,92,230,0.5)" }}
        className="fixed top-0 left-0 h-[3.5px] z-[9999] transition-all duration-75 rounded-r-full"
      />

      <div className="max-w-[880px] mx-auto px-6">

        {/* Back to Blog List */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[var(--text-accent)] font-semibold text-[14px] mb-8 cursor-pointer hover:underline font-sans"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        {/* Thumbnail Hero */}
        <div className="rounded-2xl overflow-hidden mb-8 shadow-xl max-h-[420px]">
          <img
            src={selectedPost.thumbnail}
            alt={selectedPost.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedPost.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 glass-chip text-[12px] text-[var(--text-accent)]">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[var(--text-primary)] leading-[1.1] mb-6">
          {selectedPost.title}
        </h1>

        {/* Author + Date + Time Meta */}
        <div className="flex flex-wrap items-center gap-4 py-5 border-t border-b border-slate-200/60 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold font-sans text-sm shrink-0">
              {selectedPost.author[0]}
            </div>
            <div>
              <span className="block font-semibold text-[14.5px] text-[var(--text-primary)] font-sans">{selectedPost.author}</span>
              <span className="block text-[11.5px] text-[var(--text-muted)] font-mono">{selectedPost.authorRole}</span>
            </div>
          </div>
          <div className="h-6 w-px bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-4 text-[12.5px] text-[var(--text-muted)] font-mono">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
            <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Nexa Technology</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="text-[16.5px] leading-[1.85] font-sans space-y-2">
          {renderContent(selectedPost.content)}
        </article>

        {/* FAQ Accordion if GEO article */}
        {selectedPost.id === "geo-guide" && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold font-serif text-[var(--text-primary)] mb-5 border-b border-slate-200/60 pb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: "What is GEO exactly?", a: "GEO (Generative Engine Optimization) structures your digital content so AI models like ChatGPT, Gemini, and Perplexity discover, synthesize, and cite your brand in their generated answers to user queries." },
                { q: "How is GEO different from traditional SEO?", a: "Traditional SEO optimizes for keyword rankings on search result lists. GEO optimizes for natural language query alignment, structured schemas, authority citation signals, and readability — so AI systems choose your brand when synthesizing answers." },
                { q: "Which platforms does GEO target?", a: "ChatGPT, Google AI Overviews, Gemini, Microsoft Copilot, Perplexity, and Apple Intelligence — all the major AI-powered answer engines where modern discovery happens." },
                { q: "How do I get started with GEO for my company?", a: "Start with an AI Visibility Audit — this reveals how current AI systems perceive your brand and which competitors they recommend instead. Nexa Technology offers free 30-minute audits for qualifying enterprises." },
                { q: "Can GEO work alongside existing SEO strategies?", a: "Absolutely. GEO is additive. Your existing SEO foundations (technical health, backlinks, structured data) actually accelerate GEO results. The two disciplines reinforce each other significantly." },
              ].map((item, idx) => (
                <div key={idx} className="neo-card overflow-hidden border border-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] flex justify-between items-center transition-colors cursor-pointer bg-transparent font-sans"
                  >
                    <span className="text-[15px]">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-[var(--text-muted)] shrink-0 ml-4 ${openFaq === idx ? "rotate-180 text-[var(--accent)]" : ""}`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-[280px] border-t border-slate-200/50 p-5 bg-[var(--bg-card)]" : "max-h-0 overflow-hidden"}`}>
                    <p className="text-[var(--text-body)] text-[14.5px] leading-relaxed font-sans">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Takeaways Card */}
        <div className="neo-card p-6 bg-[var(--bg-card)] border border-white my-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-accent)] font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Key Takeaways
          </h4>
          <ul className="space-y-3">
            {[
              "Optimize content for conversational AI queries — not just search keywords.",
              "Build external authority through reputable citations and community presence.",
              "Use structured schema markup so AI crawlers extract information accurately.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span className="text-[var(--text-body)] text-[14.5px] font-sans">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SEO Score */}
        <div className="neo-card p-6 border border-white my-6 bg-gradient-to-r from-slate-100/30 to-slate-200/30">
          <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[var(--text-accent)]" /> Article Quality Metrics
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "On-Page SEO", value: "98/100", color: "text-[var(--accent)]" },
              { label: "Readability", value: "82/100", color: "text-green-600" },
              { label: "AEO Score", value: "95/100", color: "text-indigo-600" },
              { label: "EEAT Index", value: "90/100", color: "text-amber-600" },
            ].map((m) => (
              <div key={m.label} className="p-3 glass-panel">
                <span className={`block text-2xl font-bold ${m.color}`}>{m.value}</span>
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <ShareButtons post={selectedPost} />

        {/* CTA */}
        <div className="neo-card p-8 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-alt)] border border-white text-center rounded-2xl my-6">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-[var(--text-primary)] mb-3">
            Ready to become visible in AI search?
          </h3>
          <p className="max-w-[560px] mx-auto text-[var(--text-body)] text-base mb-6">
            Get a free 30-minute AI Visibility Audit. We'll scan Perplexity, ChatGPT, and Gemini to measure your brand's current AI mention share.
          </p>
          <button
            onClick={() => navigateTo("contact")}
            className="btn-primary flex items-center gap-2 mx-auto cursor-pointer"
          >
            Schedule Free Audit <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Like + Comments */}
        <LikeCommentSection postId={selectedPost.id} />

        {/* Other Articles */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== selectedPost.id)
              .slice(0, 2)
              .map((post) => (
                <BlogCard key={post.id} post={post} onOpen={handleOpenPost} />
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
