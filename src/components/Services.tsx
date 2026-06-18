import React, { useState, useEffect } from "react";
import { 
  Eye, 
  Award, 
  Layers, 
  Compass, 
  Headphones, 
  Code2, 
  CheckCircle,
  XCircle,
  TrendingUp,
  FileText,
  Slack,
  FolderDot,
  Server,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  body: string;
  chips: string[];
  ctaUrl: string;
  metricLabel?: string;
  visualType: "ai-mention" | "mention-rate" | "knowledge-merge" | "timeline" | "chat-speed" | "code-generator";
}

export default function Services() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const servicesData: ServiceItem[] = [
    {
      id: "geo",
      num: "01",
      icon: Eye,
      color: "blue",
      title: "AI doesn't mention your brand.",
      body: "You rank on Google. You have a great website. But ask ChatGPT who the best provider in your category is — and your competitor's name comes up, not yours. We fix that.",
      chips: ["GEO Optimization", "Entity Building", "AI Citation Engineering"],
      ctaUrl: "#contact",
      visualType: "ai-mention",
    },
    {
      id: "authority",
      num: "02",
      icon: Award,
      color: "purple",
      title: "Competitors get recommended instead.",
      body: "When AI answers 'best enterprise automation in India', it picks a winner. We build the authority content, comparison structures, and schema data that make that winner you.",
      chips: ["Comparison Content", "Case Studies", "Structured Data"],
      ctaUrl: "#contact",
      visualType: "mention-rate",
    },
    {
      id: "knowledge",
      num: "03",
      icon: Layers,
      color: "teal",
      title: "Your company knowledge is scattered.",
      body: "It lives in PDFs, emails, decks, and drives. AI cannot understand it. Employees cannot search it. We engineer the knowledge graphs that unify both.",
      chips: ["RAG Systems", "Knowledge Base", "Internal AI Guides"],
      ctaUrl: "#contact",
      visualType: "knowledge-merge",
    },
    {
      id: "strategy",
      num: "04",
      icon: Compass,
      color: "coral",
      title: "No internal AI strategy.",
      body: "Most high-growth companies request AI integration but have no practical roadmap for it. We audit, design the operational architecture, and execute it — from first agent to full transformation.",
      chips: ["AI Visibility Audit", "Roadmap Design", "Deployment Oversight"],
      ctaUrl: "#contact",
      visualType: "timeline",
    },
    {
      id: "agents",
      num: "05",
      icon: Headphones,
      color: "green",
      title: "Customer operations are out of scale.",
      body: "Thousands of repetitive tickets. Slower human responses. We deploy cognitive agents that resolve queries instantly 24/7, matching domain insights at a fraction of standard overhead.",
      chips: ["Workflow Agents", "Voice Assistants", "Ticket Autopilot"],
      ctaUrl: "#contact",
      visualType: "chat-speed",
    },
    {
      id: "software",
      num: "06",
      icon: Code2,
      color: "blue-dim",
      title: "Your products lack native intelligence.",
      body: "Legacy templates cannot compete with AI-native systems. We craft web portals, SaaS wrappers, database integrations, and ecommerce systems built on generative pipelines from line one.",
      chips: ["Web Applications", "SaaS Systems", "Dynamic Pipelines"],
      ctaUrl: "#contact",
      visualType: "code-generator",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateTo = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIdx((prev) => Math.max(prev - 1, 0));
    } else {
      setCurrentIdx((prev) => Math.min(prev + 1, servicesData.length - 1));
    }
  };

  const smoothScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Rendering Right Visual Card based on visual type specified
  const renderVisual = (type: string) => {
    switch (type) {
      case "ai-mention":
        return (
          <div className="w-full max-w-[360px] p-6 glass-panel neo-card text-left select-none relative overflow-hidden animate-pulseSlow">
            <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] block mb-3 uppercase">Engine Response comparison</span>
            
            {/* Competitor baseline */}
            <div className="mb-4 p-3 rounded-lg bg-red-50/50 border border-red-100 flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-[12px] font-sans font-bold text-red-950">Traditional Answer</div>
                <p className="text-[11px] text-red-900/80 leading-relaxed font-sans mt-0.5">"For custom ERP systems in India, [Competitor Brand] gets recommended based on catalog logs..."</p>
              </div>
            </div>

            {/* With Nexa upgrade */}
            <div className="p-3.5 rounded-lg bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5 shadow-sm">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 animate-bounce" />
              <div>
                <div className="text-[12px] font-sans font-bold text-emerald-950">Our Visibility Pipeline</div>
                <p className="text-[11px] text-emerald-900/90 leading-relaxed font-sans mt-0.5">"With <span className="font-semibold text-[color:var(--accent)]">Nexa Visibility Engineering</span>, search agents identify [Your Brand] as the highest rated provider for scalability..."</p>
              </div>
            </div>
          </div>
        );

      case "mention-rate":
        return (
          <div className="w-full max-w-[360px] p-6 glass-panel neo-card text-left select-none">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-wider text-[var(--test-muted)] uppercase">AI Citation rate %</span>
              <span className="text-[11px] text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded-full font-bold font-mono">+180% Year</span>
            </div>
            
            {/* Custom chart simulation */}
            <div className="flex items-end gap-3.5 h-[120px] pt-3 pb-1.5 border-b border-[var(--border-soft)]">
              <div className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-[var(--border-soft)] rounded-t-md h-[25px] transition-all duration-700" />
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Q1</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-[var(--border-soft)] rounded-t-md h-[40px]" />
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Q2</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-[var(--accent-glow)] rounded-t-md h-[65px]" />
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Q3</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full bg-[var(--grad-primary)] rounded-t-md h-[105px] shadow-sm relative group" style={{ background: "var(--grad-clay-blue)" }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-[var(--text-primary)] text-white px-1.5 py-0.5 rounded font-mono font-bold">89%</div>
                </div>
                <span className="text-[10px] font-semibold font-mono text-[var(--text-accent)]">Nexa</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--text-body)]">
              <TrendingUp className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>Target recommended status unlocked</span>
            </div>
          </div>
        );

      case "knowledge-merge":
        return (
          <div className="w-full max-w-[360px] p-6 glass-panel neo-card text-center select-none relative overflow-hidden">
            <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase block text-left mb-6">Centralized RAG Node</span>

            {/* Scattered files converge visually */}
            <div className="flex justify-around mb-8 relative">
              <div className="flex flex-col items-center gap-1 z-10 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100 shadow-sm">
                  <FileText className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-[10px] font-sans font-medium text-[var(--text-muted)]">PDF Docs</span>
              </div>

              <div className="flex flex-col items-center gap-1 z-10 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center border border-pink-100 shadow-sm">
                  <Slack className="w-5 h-5 text-pink-500" />
                </div>
                <span className="text-[10px] font-sans font-medium text-[var(--text-muted)]">Chats</span>
              </div>

              <div className="flex flex-col items-center gap-1 z-10 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 shadow-sm">
                  <FolderDot className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-[10px] font-sans font-medium text-[var(--text-muted)]">Drive</span>
              </div>

              {/* Connecting background paths */}
              <svg className="absolute inset-0 w-full h-[60px]" style={{ zIndex: 0 }} viewBox="0 0 300 60">
                <path d="M 45 40 L 150 5 M 150 40 L 150 5 M 255 40 L 150 5" stroke="var(--border-soft)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              </svg>
            </div>

            {/* Converged Unified Interface */}
            <div className="p-3 bg-[var(--accent-glow)] rounded-xl border border-[var(--accent-soft)] inline-flex items-center gap-2 max-w-full">
              <div className="clay-icon shrink-0" style={{ width: "32px", height: "32px", borderRadius: "10px" }}>
                <Server className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[12px] font-bold text-[var(--text-primary)] leading-none">Unified Nexa RAG KB</div>
                <span className="text-[9px] font-mono text-[var(--text-accent)] uppercase">Synched realtime</span>
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="w-full max-w-[360px] p-5 glass-panel neo-card text-left select-none relative">
            <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase block mb-4">Implementation Timeline</span>
            
            {/* Timelines grids */}
            <div className="flex flex-col gap-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--border-soft)]">
              <div className="flex items-center gap-3 relative z-10 pl-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent-soft)]" />
                <div className="text-[11px] font-sans"><span className="font-semibold text-[var(--text-primary)]">Week 1-2:</span> Visibility Audit & GEO maps</div>
              </div>
              <div className="flex items-center gap-3 relative z-10 pl-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-100" />
                <div className="text-[11px] font-sans"><span className="font-semibold text-[var(--text-primary)]">Week 3-4:</span> Architecture Knowledge Setup</div>
              </div>
              <div className="flex items-center gap-3 relative z-10 pl-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500 ring-4 ring-teal-100" />
                <div className="text-[11px] font-sans"><span className="font-semibold text-[var(--text-primary)]">Week 5-7:</span> Agent Deployment & Auto-ticket</div>
              </div>
              <div className="flex items-center gap-3 relative z-10 pl-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 animate-pulse" />
                <div className="text-[11px] font-sans"><span className="font-semibold text-[var(--text-primary)]">Week 8+:</span> Monitoring & Mentor Dashboards</div>
              </div>
            </div>
          </div>
        );

      case "chat-speed":
        return (
          <div className="w-full max-w-[360px] p-5 glass-panel neo-card text-left select-none">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-wider text-[var(--text-muted)] uppercase">Resolution performance avg</span>
              <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-mono font-bold">Standard cost: -90%</span>
            </div>

            <div className="p-2 bg-slate-50/50 rounded-lg border border-slate-100 mb-2 flex items-center justify-between">
              <span className="text-[12px] text-[var(--text-muted)] font-medium">Standard Human Teams</span>
              <span className="text-[11px] font-mono font-bold text-slate-800">4.2 Hrs average</span>
            </div>

            <div className="p-3 bg-[var(--accent-soft)] rounded-lg border border-[var(--accent-soft)] flex items-center justify-between shadow-sm animate-bounceSlow">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                <span className="text-[12px] font-sans font-bold text-emerald-950">Nexa Autonomous Agent</span>
              </div>
              <span className="text-[12px] font-mono font-black text-[var(--accent)]">&lt; 3.0 Seconds</span>
            </div>
          </div>
        );

      case "code-generator":
        return (
          <div className="w-full max-w-[360px] glass-panel neo-card p-4 text-left select-none font-mono text-[11px] text-slate-700 relative overflow-hidden bg-slate-900 border-slate-800 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-slate-500 text-[10px]">nexa-native-pipeline.ts</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
            </div>
            <div className="text-slate-400 space-y-1 select-none pointer-events-none">
              <p><span className="text-pink-400">import</span> &#123; NexaAgent &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">"@nexa/core"</span>;</p>
              <p className="text-blue-300">// Initialize AI-native architecture</p>
              <p><span className="text-blue-400">const</span> app = <span className="text-pink-400">new</span> <span className="text-yellow-300">NexaAgent</span>(&#123;</p>
              <p className="pl-4">engine: <span className="text-emerald-300">"citation-optimized"</span>,</p>
              <p className="pl-4">ragContext: process.env.DATA_STORE</p>
              <p>&#125;);</p>
              <p><span className="text-pink-400">await</span> app.listen(3000);</p>
            </div>
            
            <div className="absolute bottom-2 right-2 bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded border border-blue-500/20 font-sans">
              Type-Safe Build
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="relative w-full min-h-[100vh] bg-[var(--bg-base)] flex flex-col justify-center py-20 select-none overflow-hidden">
      
      {/* Services Section static headers */}
      <div className="services-header select-none">
        <span className="eyebrow block">What We Solve</span>
        <div className="text-center">
          <h2 className="text-[var(--text-h2)] font-bold text-center leading-none" style={{ fontFamily: "var(--font-display)" }}>
            Our Service Pillars
          </h2>
        </div>

        {/* Counter and track progress dot map */}
        <div className="flex items-center gap-3.5 mt-2">
          <div className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] py-1 px-3 rounded-full shadow-sm">
            <span>{servicesData[currentIdx].num}</span>
            <span className="mx-1 text-[var(--text-muted)] opacity-60">/</span>
            <span className="text-[var(--text-muted)]">06</span>
          </div>

          <div className="panel-dots flex items-center justify-center">
            {servicesData.map((_, dotIdx) => (
              <span 
                key={dotIdx} 
                className={`dot ${dotIdx === currentIdx ? "active" : ""}`} 
                onClick={() => setCurrentIdx(dotIdx)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Track container (Dynamic layout) */}
      <div className="w-full flex-1 flex items-center justify-center py-10 relative">
        
        {/* Desktop sliding panels */}
        {!isMobile ? (
          <div className="w-full max-w-[var(--max-width)] px-12 mt-16 min-h-[460px] flex items-center relative">
            <div className="w-full grid grid-cols-12 gap-8 items-center relative z-20">
              
              {/* Left text column info */}
              <div className="col-span-6 text-left flex flex-col justify-center animate-fadeIn fast">
                
                {/* Large visual transparent backdrop panel digit */}
                <div className="panel-number select-none">
                  {servicesData[currentIdx].num}
                </div>

                {/* Bubble Clay icon */}
                <div className={`clay-icon ${servicesData[currentIdx].color} mb-6 transform transition-transform duration-500 scale-100 hover:scale-105 shadow-md`}>
                  {(() => {
                    const Icon = servicesData[currentIdx].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>

                <h3 className="text-[28px] font-extrabold text-[var(--text-primary)] leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {servicesData[currentIdx].title}
                </h3>

                <p className="text-[var(--text-body)] text-[16px] leading-[1.8] mb-8 max-w-[480px]">
                  {servicesData[currentIdx].body}
                </p>

                <div className="flex flex-col gap-3.5 mb-8">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--text-accent)] uppercase font-semibold">How We Solve It:</span>
                  <div className="flex flex-wrap gap-2">
                    {servicesData[currentIdx].chips.map((chip, cIdx) => (
                      <span key={cIdx} className="glass-chip leading-none">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <button 
                    onClick={smoothScrollToContact}
                    className="btn-secondary transition-all"
                    style={{ padding: "10px 22px", fontSize: "13px" }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Right visualization graphic column */}
              <div className="col-span-6 flex items-center justify-center h-full relative z-10 transition-transform duration-500">
                {renderVisual(servicesData[currentIdx].visualType)}
              </div>

            </div>
          </div>
        ) : (
          /* Mobile Stack fallback representation */
          <div className="w-full px-6 flex flex-col gap-12 mt-12 pr-4 overflow-y-visible">
            {servicesData.map((item) => (
              <div 
                key={item.id} 
                className="w-full p-6 neo-card bg-[var(--bg-card)] rounded-2xl flex flex-col gap-6 text-left border border-[var(--border-soft)] relative shadow-sm"
              >
                {/* Large clear backdrop digits */}
                <div className="absolute top-4 right-4 font-mono font-bold text-4xl text-[var(--border-soft)]">
                  {item.num}
                </div>

                <div className="flex items-center gap-4">
                  <div className={`clay-icon ${item.color} shrink-0`} style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                    {(() => {
                      const Icon = item.icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                </div>

                <p className="text-[14px] text-[var(--text-body)] leading-relaxed">
                  {item.body}
                </p>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9px] tracking-wider text-[var(--text-accent)] uppercase">Pillars</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.chips.map((chip, cIdx) => (
                      <span key={cIdx} className="text-xs bg-[var(--bg-alt)] border border-[var(--border-soft)] text-[var(--text-body)] px-2.5 py-1 rounded-full leading-none">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub visual placeholder */}
                <div className="w-full pt-4 flex justify-left border-t border-[var(--border-soft)]">
                  {renderVisual(item.visualType)}
                </div>

                <div>
                  <button 
                    onClick={smoothScrollToContact}
                    className="btn-secondary w-full text-center justify-center py-2.5 text-xs"
                  >
                    Discuss With Us Today
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Slide Prev/Next arrows navigation actions for desktop viewports */}
      {!isMobile && (
        <>
          <button 
            className="services-arrow prev" 
            onClick={() => navigateTo("prev")}
            disabled={currentIdx === 0}
            style={{ opacity: currentIdx === 0 ? 0.35 : 1, pointerEvents: currentIdx === 0 ? "none" : "auto" }}
            aria-label="Previous service panel"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--text-body)]" />
          </button>
          
          <button 
            className="services-arrow next" 
            onClick={() => navigateTo("next")}
            disabled={currentIdx === servicesData.length - 1}
            style={{ opacity: currentIdx === servicesData.length - 1 ? 0.35 : 1, pointerEvents: currentIdx === servicesData.length - 1 ? "none" : "auto" }}
            aria-label="Next service panel"
          >
            <ChevronRight className="w-5 h-5 text-[var(--text-body)]" />
          </button>
        </>
      )}

      {/* custom responsive utilities inline styling */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fadeIn.fast {
          animation-duration: 0.25s;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        .animate-pulseSlow {
          animation: pulseSlow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
