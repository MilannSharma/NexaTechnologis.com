import React, { useEffect, useState, useRef } from "react";
import { 
  Smartphone, 
  Monitor, 
  ShoppingBag, 
  Cpu, 
  Bot, 
  GitMerge, 
  ArrowRight,
  Cloud,
  Database,
  CreditCard,
  MessageSquare,
  Hash,
  Code
} from "lucide-react";

const serviceSlides = [
  {
    eyebrow: 'ANDROID & iOS',
    h3: 'Apps that think, not just run.',
    body: 'We build Android and iOS applications with AI baked in — smart onboarding, predictive UX, in-app AI assistants, and backends that learn from usage. Not a template wrapper. A product engineered for intelligence.',
    chips: ['Android', 'iOS', 'Flutter', 'React Native', 'AI-integrated'],
    icon: Smartphone,
    color: 'blue'
  },
  {
    eyebrow: 'WEB & SAAS',
    h3: 'SaaS platforms built for scale.',
    body: 'We architect web applications and SaaS platforms from scratch — multi-tenant, API-first, and ready to plug AI into every workflow. CRM, marketplace, vertical SaaS — we build it AI-native.',
    chips: ['Next.js', 'Node.js', 'Multi-tenant', 'API-first', 'AI workflows'],
    icon: Monitor,
    color: 'purple'
  },
  {
    eyebrow: 'ECOMMERCE ECOSYSTEM',
    h3: 'The complete commerce stack.',
    body: 'We build full ecommerce ecosystems — web store + mobile app + admin dashboard, all integrated. AI-powered product discovery, dynamic pricing, personalised recommendations, and inventory automation.',
    chips: ['Web Store', 'Mobile App', 'Admin Panel', 'AI Recommendations', 'Dynamic Pricing'],
    icon: ShoppingBag,
    color: 'coral'
  },
  {
    eyebrow: 'AI-NATIVE ARCHITECTURE',
    h3: 'Legacy software cannot compete.',
    body: 'We do not bolt AI onto existing software. We build from the ground up — vector databases, RAG pipelines, agent scaffolds, and LLM integrations wired into the core product architecture.',
    chips: ['RAG Pipelines', 'Vector DB', 'LLM APIs', 'Agent scaffolds', 'AI pipelines'],
    icon: Cpu,
    color: 'teal'
  },
  {
    eyebrow: 'AGENTIC AI SYSTEMS',
    h3: 'AI that works while you sleep.',
    body: 'We build autonomous agent systems — support agents, sales qualification bots, operations monitors — that run 24/7 without human handoff. Deploy once, scale infinitely.',
    chips: ['Autonomous Agents', 'Support Bots', 'Sales Agents', 'Ops Automation', '24/7 Runtime'],
    icon: Bot,
    color: 'green'
  },
  {
    eyebrow: 'ENTERPRISE INTEGRATIONS',
    h3: 'Connect everything. Automate the rest.',
    body: 'CRM integrations, ERP connectors, third-party API pipelines, and custom middleware — we wire your entire stack together and add AI decision layers across every touchpoint.',
    chips: ['CRM Integration', 'ERP Connectors', 'API Middleware', 'Webhooks', 'AI decision layer'],
    icon: GitMerge,
    color: 'purple'
  }
];

export default function DevelopmentServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Auto scroll logic (4s auto)
  useEffect(() => {
    const handleAutoplay = () => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
        setTransitioning(false);
      }, 350);
    };

    const intervalId = setInterval(() => {
      // Pause if tab is hidden
      if (document.hidden) return;
      handleAutoplay();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === currentSlide) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTransitioning(false);
    }, 350);
  };

  const currentData = serviceSlides[currentSlide];



  const smoothScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="development"
      className="reveal-section"
    >
      <div className="max-w-[1240px] mx-auto px-6 h-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 shrink-0">
          <span className="eyebrow block mb-2 md:mb-3">WHAT WE BUILD</span>
          <h2 className="section-h2 text-[var(--text-primary)] leading-none md:leading-[1.05] tracking-tighter">
            Everything your business needs,<br />
            built <span className="text-gradient font-black">AI-native from day one.</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper flex-1">
          
          {/* Left Column: Text side */}
          <div className="carousel-text-col">
            <div className={`transition-all duration-350 ease-in-out ${transitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <div className="slide-eyebrow">
                {currentData.eyebrow}
              </div>
              
              <h3 className="slide-h3">
                {currentData.h3}
              </h3>
              
              <p className="font-sans text-[15px] md:text-[18px] text-[var(--text-body)] leading-relaxed mb-6 max-w-[500px]">
                {currentData.body}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentData.chips.map((chip, idx) => (
                  <span key={idx} className="glass-chip text-xs font-semibold">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Slider CTA directly under text */}
              <div className="slide-cta">
                <button 
                  onClick={smoothScrollToContact}
                  className="btn-primary flex items-center justify-center font-bold"
                >
                  Get Your Product Built Today <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Slide Navigation dots below the CTA */}
              <div className="slide-dots">
                {serviceSlides.map((_, idx) => (
                  <span 
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`c-dot ${idx === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Side (direct mockup rendering without background card wrappers) */}
          <div className="carousel-visual-col">
            <div className="carousel-track h-full w-full relative">
              {serviceSlides.map((_, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className="carousel-slide flex items-center justify-center h-full w-full"
                    style={{
                      position: 'absolute',
                      inset: '0',
                      opacity: isActive ? '1' : '0',
                      transform: isActive ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.96)',
                      pointerEvents: isActive ? 'all' : 'none',
                      transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  >
                         {/* SLIDE 1 — MOBILE APP (ANDROID & iOS) */}
                    {index === 0 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
                        {/* Glowing backdrop aura */}
                        <div className="absolute w-[200px] h-[200px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                        {/* Floating glass chip top-left */}
                        <div className="absolute left-[6%] top-[8%] z-30 hidden md:block">
                          <div className="glass-chip shadow-md text-[10px] font-bold tracking-tight text-white bg-white/10 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            ✨ On-Device Intelligence
                          </div>
                        </div>

                        {/* Single Brand iOS Phone */}
                        <div className="phone-container iphone relative z-20 w-[195px] h-[390px] rounded-[38px] bg-transparent shadow-[0_30px_70px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-[38px] border-[3.2px] border-[var(--text-primary)] bg-[#0C101B] overflow-hidden relative flex flex-col justify-between">
                            {/* Dynamic Island phone notch */}
                            <div className="absolute top-1.8 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#111] absolute left-3.5" />
                              <div className="w-2.5 h-1 rounded-full bg-[#222] absolute right-3.5" />
                            </div>
                            
                            {/* Screen contents */}
                            <div className="flex-1 flex flex-col p-3 pt-5.5 text-left bg-[#0A0D15]">
                              {/* Top Status Bar indicator */}
                              <div className="flex justify-between items-center text-slate-400 text-[8px] mb-3.5 font-semibold px-0.5">
                                <span>9:41</span>
                                <div className="flex items-center gap-1">
                                  <span>📶</span>
                                  <span>🔋</span>
                                </div>
                              </div>

                              {/* Assistant Brand Header */}
                              <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2 px-0.5">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-5.5 h-5.5 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-[10px] shadow-md shadow-blue-500/10">N</div>
                                  <div>
                                    <div className="text-[9px] font-extrabold text-white leading-tight">Nexa Voice</div>
                                    <div className="text-[6px] text-emerald-400 font-extrabold tracking-wider uppercase">Active Agent</div>
                                  </div>
                                </div>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              </div>

                              {/* Interactive assistant flow items */}
                              <div className="space-y-2 mb-3.5">
                                <div className="bg-slate-800/50 border border-slate-700/20 rounded-xl rounded-tl-sm p-2 text-[7.5px] text-slate-300 max-w-[90%] font-medium">
                                  "Confirm onboarding with Arjun and schedule a kickoff call."
                                </div>
                                <div className="bg-gradient-to-r from-blue-600/80 to-indigo-600/80 text-white rounded-xl rounded-tr-sm p-2 text-[7.5px] max-w-[90%] ml-auto text-right font-medium">
                                  "Onboarding checklist complete. Kickoff scheduled for tomorrow 10 AM."
                                </div>
                              </div>

                              {/* CSS voice waveform visualizer */}
                              <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-2 mb-3 text-center flex flex-col items-center justify-center relative overflow-hidden">
                                <span className="text-[5.5px] text-slate-400 uppercase tracking-widest font-mono font-bold mb-1 block">Live speech parsing</span>
                                
                                <div className="flex justify-center items-end gap-[2px] h-6 w-full mt-1">
                                  <div className="w-0.5 bg-blue-500 rounded-full h-[50%] animate-pulse" />
                                  <div className="w-0.5 bg-indigo-500 rounded-full h-[90%] animate-pulse" style={{ animationDelay: '0.1s' }} />
                                  <div className="w-0.5 bg-purple-500 rounded-full h-[35%] animate-pulse" style={{ animationDelay: '0.2s' }} />
                                  <div className="w-0.5 bg-emerald-500 rounded-full h-[80%] animate-pulse" style={{ animationDelay: '0.3s' }} />
                                  <div className="w-0.5 bg-rose-500 rounded-full h-[45%] animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                              </div>

                              {/* Quick controls panel */}
                              <div className="grid grid-cols-2 gap-1.5 mt-auto">
                                <div className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-800 rounded-lg p-1 text-center transition">
                                  <div className="text-[8.5px] mb-0.5">📊</div>
                                  <div className="text-[6px] font-bold text-white font-sans">Insights</div>
                                </div>
                                <div className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-800 rounded-lg p-1 text-center transition">
                                  <div className="text-[8.5px] mb-0.5">👤</div>
                                  <div className="text-[6px] font-bold text-white font-sans">Settings</div>
                                </div>
                              </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute left-1/2 bottom-[4px] -translate-x-1/2 w-11 h-[2.5px] rounded bg-white/20 z-20" />
                          </div>
                        </div>

                        {/* Floating glass chip top-right */}
                        <div className="absolute right-[6%] top-[8%] z-30 hidden md:block">
                          <div className="glass-chip shadow-md text-[10px] font-bold tracking-tight text-white bg-white/10 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            ⚡ AI Smart UX
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SLIDE 2 — WEB & SAAS DASHBOARD (PURE CRM DASHBOARD) */}
                    {index === 1 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
                        
                        {/* Laptop chassis angled block */}
                        <div className="laptop-wrapper flex flex-col items-center select-none" style={{ perspective: '1200px' }}>
                          
                          {/* Laptop Screen / Lid */}
                          <div 
                            className="laptop-screen rounded-xl border-[2.5px] border-[var(--text-primary)] bg-[#0C0F1A] overflow-hidden relative shadow-2xl flex flex-col justify-between"
                            style={{ 
                              width: '480px', 
                              height: '290px', 
                              transform: 'rotateX(4deg) translateZ(0)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            {/* Webcam */}
                            <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/60 border border-white/10 z-30" />
                            
                            {/* CRM Dashboard Layout */}
                            <div className="flex-1 flex bg-[var(--bg-base)]">
                              
                              {/* Left Navigation bar */}
                              <div className="w-[44px] bg-[#0E1324] text-white/50 border-r border-slate-800 p-1 py-3 flex flex-col items-center justify-between h-full shrink-0">
                                <div className="flex flex-col gap-3 items-center w-full">
                                  {/* App Logo */}
                                  <div className="w-6 h-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-[10px] text-white font-extrabold mb-1 shadow-md shadow-indigo-500/10">N</div>
                                  <div className="w-5 h-5 rounded-md bg-white/10 hover:bg-white/15 cursor-pointer flex items-center justify-center text-[8px] text-white">📊</div>
                                  <div className="w-5 h-5 rounded-md bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-center text-[8px]">💬</div>
                                  <div className="w-5 h-5 rounded-md bg-white/5 hover:bg-white/10 cursor-pointer flex items-center justify-center text-[8px]">🎯</div>
                                </div>
                                <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center text-[8.5px]">⚙️</div>
                              </div>

                              {/* Main panel */}
                              <div className="flex-1 flex flex-col h-full bg-[#FAFBFD] dark:bg-[#0B0F19] overflow-hidden text-left">
                                {/* Dashboard Header */}
                                <div className="h-8 border-b border-[var(--border-soft)] flex items-center justify-between px-3 bg-white dark:bg-[#111625] shrink-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[6.5px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">&lt;nexa-crm&gt;</span>
                                    <span className="text-slate-300">/</span>
                                    <span className="text-[7px] text-slate-500 font-bold font-sans">Pipeline</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-16 h-4 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200/60 dark:border-slate-700/80 flex items-center px-1 text-[5.5px] text-[var(--text-muted)]">Search Leads...</div>
                                    <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-[7px] text-white">A</div>
                                  </div>
                                </div>

                                {/* Body contents: Pure CRM style */}
                                <div className="p-2.5 flex-1 flex flex-col justify-between overflow-hidden gap-2">
                                  
                                  {/* CRM Metrics cards Row */}
                                  <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-white dark:bg-[#12182B] border border-slate-200/60 dark:border-slate-800 rounded-xl p-1.5 shadow-xs">
                                      <span className="text-[5px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">Total Deals</span>
                                      <span className="text-[11.5px] font-black text-indigo-600 dark:text-indigo-400 block leading-tight mt-0.5">$382,400</span>
                                    </div>
                                    <div className="bg-white dark:bg-[#12182B] border border-slate-200/60 dark:border-slate-800 rounded-xl p-1.5 shadow-xs">
                                      <span className="text-[5px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">Win Rate</span>
                                      <span className="text-[11.5px] font-black text-emerald-500 block leading-tight mt-0.5">84.2%</span>
                                    </div>
                                    <div className="bg-white dark:bg-[#12182B] border border-slate-200/60 dark:border-slate-800 rounded-xl p-1.5 shadow-xs">
                                      <span className="text-[5px] text-slate-400 dark:text-slate-500 font-bold block uppercase tracking-wider">MQLs</span>
                                      <span className="text-[11.5px] font-black text-purple-600 dark:text-purple-400 block leading-tight mt-0.5">2,810</span>
                                    </div>
                                  </div>

                                  {/* Conversion / Closed Deals chart */}
                                  <div className="bg-white dark:bg-[#12182B] border border-slate-200/60 dark:border-slate-800 rounded-xl p-2 flex flex-col justify-between h-[82px] relative shadow-xs overflow-hidden">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[6px] text-indigo-600 dark:text-indigo-400 font-black uppercase font-mono tracking-wider">Pipeline Flow Trend</span>
                                      <span className="text-[5px] text-emerald-500 font-extrabold bg-emerald-500/10 px-1 rounded-full">+18% This Mo</span>
                                    </div>
                                    
                                    <svg className="w-full h-[36px] z-10" viewBox="0 0 320 40">
                                      <path d="M0,35 C30,30 60,38 90,20 C120,5 150,15 180,8 C210,1 240,28 270,12 L320,5" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                                      <path d="M0,35 C30,30 60,38 90,20 C120,5 150,15 180,8 C210,1 240,28 270,12 L320,5 L320,40 L0,40 Z" fill="var(--accent-soft)" opacity="0.15" />
                                    </svg>
                                    
                                    <div className="flex justify-between items-center text-[5px] text-slate-400 font-mono px-0.5">
                                      <span>Stage Q1</span><span>Stage Q2</span><span>Negotiations</span><span>Contract Issued</span><span>Closed Won</span>
                                    </div>
                                  </div>

                                  {/* CRM Leads detailed pipeline list */}
                                  <div className="bg-white dark:bg-[#12182B] border border-slate-200/60 dark:border-slate-800 rounded-xl p-1.5 flex flex-col gap-1 shadow-xs">
                                    <div className="flex justify-between text-[5px] text-slate-400 font-bold uppercase tracking-wider px-1">
                                      <span>Account Lead</span>
                                      <span>Value</span>
                                      <span>Stage</span>
                                    </div>
                                    <div className="border-t border-slate-100 dark:border-slate-800/80 my-0.5" />
                                    <div className="flex justify-between items-center text-[6px] px-1">
                                      <div className="flex items-center gap-1">
                                        <div className="w-3.5 h-3.5 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-700 text-[5px]">AS</div>
                                        <span className="font-extrabold text-[#111] dark:text-[#f3f4f6]">Arjun Sharma</span>
                                      </div>
                                      <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">$42,000</span>
                                      <span className="px-1 py-0.2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 font-bold text-[5px]">AI Demo</span>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Laptop Hinge */}
                          <div className="w-[410px] h-1 bg-slate-900 border-t border-slate-700/60 z-10" />

                          {/* Laptop Base */}
                          <div 
                            className="bg-slate-400 shadow-xl relative"
                            style={{ 
                              width: '500px', 
                              height: '15px', 
                              borderRadius: '0 0 18px 18px',
                              borderBottom: '4.5px solid #b1b5c0',
                              borderLeft: '1.5px solid #bebfcc',
                              borderRight: '1.5px solid #bebfcc'
                            }}
                          >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[3.5px] bg-[#9195a0] rounded-b-md" />
                          </div>

                        </div>

                        {/* Floating glass chip top-left */}
                        <div className="clay-3d-chip-purple absolute top-[8%] left-[6%] shadow-lg py-1 px-3 text-[10px] font-bold z-30">
                          📊 Custom AI Scoring
                        </div>
                      </div>
                    )}

                    {/* SLIDE 3 — ECOMMERCE ECOSYSTEM (LAPTOP AND MOBILE CLOSE AND COMPACT) */}
                    {index === 2 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[280px] md:min-h-[320px]">
                        
                        {/* Nested centered box to keep laptop & phone tight & close */}
                        <div className="relative w-full max-w-[490px] h-[320px] md:h-[330px] flex items-center justify-center select-none">
                          
                          {/* Laptop (Positioned slightly left, slightly lower as base, moved inner for tight composition) */}
                          <div className="absolute left-[10px] md:left-[15px] bottom-[10px] scale-[1.02] hover:scale-105 transition-transform duration-300 z-10 hidden md:block">
                            <div className="flex flex-col items-center" style={{ perspective: '1200px' }}>
                              {/* Laptop screen */}
                              <div className="w-[325px] h-[208px] rounded-xl border-[2px] border-[var(--text-primary)] bg-[var(--bg-elevated)] overflow-hidden relative flex flex-col justify-between shadow-2xl">
                                {/* Web app mockup inside */}
                                <div className="flex-1 flex flex-col bg-[var(--bg-base)] text-left">
                                  {/* Header navbar */}
                                  <div className="h-7 border-b border-orange-100 flex items-center justify-between px-2 bg-gradient-to-r from-orange-50 to-white">
                                    <div className="flex items-center gap-1.5">
                                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                                      <span className="font-sans text-[8px] font-black text-orange-950">NexStore.la</span>
                                    </div>
                                    <div className="text-[6.5px] font-mono text-orange-400 font-extrabold bg-orange-50 px-1.5 py-0.5 rounded">Cart (3) 🛍️</div>
                                  </div>

                                  {/* Product Category filter pills */}
                                  <div className="p-1 px-1.5 flex gap-1 bg-white/55 border-b border-slate-50">
                                    <span className="text-[5.5px] px-1.5 py-0.5 rounded-full bg-orange-150 text-orange-850 font-bold font-mono">All</span>
                                    <span className="text-[5.5px] px-1.5 py-0.5 rounded-full bg-slate-50 text-slate-450 font-mono scale-90">Trending</span>
                                    <span className="text-[5.5px] px-1.5 py-0.5 rounded-full bg-slate-50 text-slate-450 font-mono scale-90">Sale</span>
                                  </div>

                                  {/* Ecommerce Product list grid (2x2) */}
                                  <div className="p-2 grid grid-cols-2 gap-1.5 flex-1 bg-white items-start">
                                    {[1, 2, 3, 4].map((itemIdx) => (
                                      <div key={itemIdx} className="border border-orange-50/70 rounded-xl p-1 relative bg-gradient-to-b from-[#FFFBF8] to-white flex flex-col justify-between min-h-[58px] shadow-xs">
                                        <div className="w-full h-6.5 bg-gradient-to-br from-orange-100 to-amber-50 rounded-lg flex items-center justify-center" />
                                        {itemIdx === 1 && (
                                          <span className="absolute top-[2px] left-[2px] bg-orange-500 text-white text-[4.5px] px-1 rounded-full font-black scale-90 shadow-sm">
                                            🤖 AI Pick
                                          </span>
                                        )}
                                        <div className="flex justify-between items-center mt-1 leading-none">
                                          <div className="text-left">
                                            <div className="text-[5px] font-extrabold text-slate-600">Retro Sneaker</div>
                                            <div className="text-[5.5px] text-orange-600 font-black mt-0.5">₹2,499</div>
                                          </div>
                                          <span className="text-[8px] bg-orange-100/50 p-0.5 rounded text-orange-600">➕</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                </div>
                              </div>
                              <div className="w-[270px] h-[3px] bg-slate-900" />
                              <div className="w-[335px] h-2.5 bg-slate-400 rounded-b-xl shadow-md" />
                            </div>
                          </div>

                          {/* Mobile Phone (Overlapping closely, sitting right next to/on top of laptop base) */}
                          <div className="phone-container relative md:absolute md:right-[15px] md:bottom-[15px] z-20 w-[152px] h-[304px] rounded-[34px] bg-transparent shadow-2xl hover:scale-[1.10] transition-transform duration-300">
                            <div className="w-full h-full rounded-[34px] border-[3px] border-[var(--text-primary)] bg-[var(--bg-elevated)] overflow-hidden relative flex flex-col justify-between shadow-xl">
                              
                              {/* Phone Header notch */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[6px] bg-[var(--text-primary)] rounded-b-[5px] z-30" />

                              {/* Screen items */}
                              <div className="flex-1 flex flex-col p-3 pt-4.5 bg-white text-left">
                                {/* Hero image item container */}
                                  <div className="relative w-full h-[98px] rounded-xl overflow-hidden bg-gradient-to-br from-orange-400 via-amber-300 to-rose-400 flex flex-col justify-end p-2.5 mb-1.5 shadow-xs">
                                  <span className="absolute top-1 right-1 bg-yellow-400 text-slate-900 font-bold text-[4.5px] px-1 py-0.5 rounded-full shadow-md">🔥 TRENDING</span>
                                  <div className="text-[10px] text-white font-black leading-tight drop-shadow-md">Running Pro X</div>
                                  <div className="text-[6.5px] text-white/90 drop-shadow-sm font-sans">Next-gen speed cushion</div>
                                </div>

                                {/* Price block */}
                                <div className="flex items-center gap-1 mb-1.5 px-0.5">
                                  <span className="text-[10.5px] font-black text-orange-600 leading-none">₹2,499</span>
                                  <span className="text-[6.5px] text-slate-400 line-through">₹3,999</span>
                                  <span className="text-[6.5px] text-emerald-500 font-bold font-mono">37% OFF</span>
                                </div>

                                {/* Full width buy button */}
                                <button className="clay-3d-button w-full text-[8.5px] py-1.5 mb-2 font-bold text-center block font-sans" style={{ padding: '3.5px' }}>
                                  Buy Now ⚡
                                </button>

                                {/* Recommendations row */}
                                <div className="border-t border-slate-100 pt-1.5 flex flex-col">
                                  <span className="text-[6px] text-slate-400 font-bold mb-1 uppercase tracking-wider block">AI Recommends</span>
                                  <div className="grid grid-cols-2 gap-1.5">
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-1 text-center flex flex-col justify-between min-h-[44px]">
                                      <div className="h-3.5 bg-orange-100/30 rounded" />
                                      <span className="text-[5px] text-slate-600 font-semibold leading-none mt-0.5">Gym Socks</span>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-1 text-center flex flex-col justify-between min-h-[44px]">
                                      <div className="h-3.5 bg-blue-100/30 rounded" />
                                      <span className="text-[5px] text-slate-600 font-semibold leading-none mt-0.5">Fanny Pack</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Bottom navigation bar */}
                              <div className="bg-slate-50 border-t border-slate-100 py-1 px-3 flex justify-between items-center text-slate-400 text-[9px] z-20 text-center">
                                <span className="opacity-50">🏠</span>
                                <span className="opacity-50">🔍</span>
                                <span className="text-orange-500 font-bold">🛒</span>
                                <span className="opacity-50">👤</span>
                              </div>

                              {/* Home Indicator */}
                              <div className="absolute left-1/2 bottom-[2px] -translate-x-1/2 w-9 h-[1.5px] rounded bg-[var(--text-muted)] opacity-30 z-20" />
                            </div>
                          </div>

                        </div>

                        {/* Floating visual chips */}
                        <div className="clay-3d-chip-yellow absolute top-[5%] right-[5%] shadow-lg py-1 px-3 text-[10px] font-bold z-30">
                          📱 Web + App Ecosystem
                        </div>
                      </div>
                    )}

                    {/* SLIDE 4 — AI-NATIVE ARCHITECTURE (DEVELOPER SLATE-GRAY LAPTOP SCREEN) */}
                    {index === 3 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
                        
                        {/* Midnight/Carbon Developer Laptop Frame containing the editor */}
                        <div className="laptop-wrapper flex flex-col items-center select-none" style={{ perspective: '1200px' }}>
                          
                          {/* Laptop Screen in space gray border */}
                          <div 
                            className="laptop-screen rounded-xl border-[2.5px] border-[#202330] bg-[#0E111A] overflow-hidden relative shadow-2xl flex flex-col"
                            style={{ 
                              width: '480px', 
                              height: '290px', 
                              transform: 'rotateX(4deg) translateZ(0)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            {/* Webcam */}
                            <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.2 h-1.2 rounded-full bg-black/80 z-30" />
                            
                            {/* Embedded Code Editor layout inside */}
                            <div className="flex-1 flex flex-col bg-[#0F1117] overflow-hidden text-left h-full">
                              
                              {/* Code Tab bar */}
                              <div className="h-[24px] bg-[#161622] border-b border-white/5 px-2.5 flex items-center justify-between shrink-0">
                                <div className="flex gap-1.5 items-center">
                                  <span className="w-2 h-2 rounded-full bg-[#FF5F57] block" />
                                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E] block" />
                                  <span className="w-2 h-2 rounded-full bg-[#28C840] block" />
                                </div>
                                <div className="px-3 py-0.5 bg-[#0F1117] rounded-t-md text-[8px] text-white/90 font-mono border-t border-x border-white/5 -mb-[1.5px] relative leading-none flex items-center justify-center">
                                  nexa-pipeline.ts
                                </div>
                                <div className="w-4 h-4" />
                              </div>

                              {/* Editor Workspace panels */}
                              <div className="flex-1 flex overflow-hidden">
                                
                                {/* Side panel */}
                                <div className="w-[55px] bg-[#13131F] border-r border-white/5 p-1.5 flex flex-col gap-1.5 h-full pt-2.5 shrink-0">
                                  <div className="h-1 w-5 bg-white/10 rounded mb-0.5" />
                                  <div className="py-0.5 px-1 bg-blue-500/20 border-l border-blue-500 flex items-center text-[5.5px] text-blue-300 font-mono">
                                    📄 pipe.ts
                                  </div>
                                  <div className="px-1 flex items-center text-[5.5px] text-slate-500 font-mono">
                                    📄 config.json
                                  </div>
                                  <div className="px-1 flex items-center text-[5.5px] text-slate-500 font-mono">
                                    📄 schema.db
                                  </div>
                                </div>

                                {/* Main code details with auto delay animations */}
                                <div className="flex-1 bg-[#0F1117] p-2.5 pl-3 flex gap-2 text-[7.5px] font-mono leading-relaxed select-none overflow-y-auto">
                                  {/* Line Numbers */}
                                  <div className="text-slate-600 text-right flex flex-col gap-[1px] select-none font-bold" style={{ width: '10px' }}>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                  </div>

                                  {/* Code Line Contents */}
                                  <div className="flex-1 flex flex-col gap-[1px] text-slate-300 overflow-x-hidden font-mono text-left">
                                    <div className="code-editor-line font-mono" style={{ animationDelay: '0.1s' }}>
                                      <span className="color-coral mr-1">import</span>
                                      <span className="text-slate-100 mr-1">&#123; NexaCore &#125;</span>
                                      <span className="color-coral mr-1">from</span>
                                      <span className="color-green">"@nexa/native"</span>
                                    </div>
                                    <div className="code-editor-line" style={{ animationDelay: '0.22s' }}>&nbsp;</div>
                                    <div className="code-editor-line text-slate-500 italic" style={{ animationDelay: '0.3s' }}>
                                      // AI-native from line one
                                    </div>
                                    <div className="code-editor-line" style={{ animationDelay: '0.4s' }}>
                                      <span className="color-purple mr-1">const</span>
                                      <span className="text-white mr-1">client</span>
                                      <span className="text-slate-150 mr-1">=</span>
                                      <span className="color-purple mr-1">new</span>
                                      <span className="color-blue">NexaCore</span>
                                      <span className="text-slate-100">&#123;</span>
                                    </div>
                                    <div className="code-editor-line pl-3" style={{ animationDelay: '0.5s' }}>
                                      <span className="text-slate-100 mr-1">llm:</span>
                                      <span className="color-green">"gemini-2.0"</span>
                                      <span className="text-slate-200">,</span>
                                    </div>
                                    <div className="code-editor-line pl-3" style={{ animationDelay: '0.6s' }}>
                                      <span className="text-slate-100 mr-1">ragEnabled:</span>
                                      <span className="color-coral">true</span>
                                    </div>
                                    <div className="code-editor-line" style={{ animationDelay: '0.7s' }}>
                                      <span className="text-slate-100">&#125;);</span>
                                    </div>
                                    <div className="code-editor-line mt-0.5" style={{ animationDelay: '0.8s' }}>
                                      <span className="color-purple mr-1">await</span>
                                      <span className="color-blue">client.streamOutputs</span>
                                      <span className="text-slate-100">();</span>
                                    </div>
                                  </div>
                                </div>

                              </div>

                              {/* Status Footer info bar inside laptop screen */}
                              <div className="h-[16px] bg-[#1a5bdf] text-white font-mono text-[5.5px] flex items-center justify-between px-2.5 leading-none shrink-0 z-20">
                                <span className="font-extrabold flex items-center gap-1">
                                  <span className="w-1 h-1 bg-yellow-300 rounded-full animate-ping" />
                                  ● AI-NATIVE CORE
                                </span>
                                <span className="opacity-80 text-[4.5px]">TS · RAG ENABLED · LLM: GEMINI</span>
                              </div>

                            </div>

                          </div>

                          {/* Laptop Hinge in Slate-gray metal */}
                          <div className="w-[410px] h-1 bg-[#1A1C24] border-t border-[#303342] z-10" />

                          {/* Laptop Keyboard chassis */}
                          <div 
                            className="bg-[#2D313F] shadow-xl relative"
                            style={{ 
                              width: '500px', 
                              height: '15px', 
                              borderRadius: '0 0 18px 18px',
                              borderBottom: '4.5px solid #14161D',
                              borderLeft: '1.5px solid #282B37',
                              borderRight: '1.5px solid #282B37'
                            }}
                          >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[3.5px] bg-[#1C1D26] rounded-b-md" />
                          </div>

                        </div>

                        {/* Floating glass chips top-left and top-right */}
                        <div className="clay-3d-chip-yellow absolute top-[8%] left-[6%] shadow-lg py-1 px-3 text-[10px] font-bold z-30">
                          📂 Vector DB Indexing
                        </div>
                        <div className="glass-chip absolute right-[6%] top-[8%] shadow-md text-[10px] font-bold z-30 tracking-tight text-white bg-white/10 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full hidden md:block">
                          ⚡ Hybrid Search RAG
                        </div>

                      </div>
                    )}

                    {/* SLIDE 5 — AGENTIC AI SYSTEMS */}
                    {index === 4 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
                        
                        {/* Operations Control Agent Dashboard Panel */}
                        <div className="agent-panel opacity-100 select-none text-left shadow-2xl border border-[var(--border-soft)]">
                          {/* Header panel code */}
                          <div className="flex justify-between items-center mb-4 border-b border-[var(--border-soft)] pb-3">
                            <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest font-extrabold">Agent Control Panel</span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-[8px] font-extrabold text-emerald-600 uppercase font-mono tracking-wider">LIVE</span>
                            </div>
                          </div>

                          {/* 3 Live Inset Agent Rows */}
                          <div className="space-y-2.5 mb-5 select-none">
                            
                            {/* Support Agent */}
                            <div className="bg-[#EEF5FF] dark:bg-slate-900 border border-slate-100/50 rounded-2xl p-2.5 flex flex-col gap-1 shadow-inner relative overflow-hidden transition hover:border-blue-400">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="text-[11.5px] font-extrabold text-slate-800 dark:text-slate-200">Support Agent</span>
                                </div>
                                <span className="text-[9.5px] text-emerald-600 font-extrabold font-mono text-right">1,240 resolved</span>
                              </div>
                              <div className="flex gap-4 text-[8.5px] text-[var(--text-muted)] font-mono font-medium mt-0.5">
                                <span>Latency 1.2s</span>
                                <span className="text-blue-500 font-bold">Cost $0.004/task</span>
                              </div>
                            </div>

                            {/* Sales Agent */}
                            <div className="bg-[#EEF5FF] dark:bg-slate-900 border border-slate-100/50 rounded-2xl p-2.5 flex flex-col gap-1 shadow-inner relative overflow-hidden transition hover:border-blue-400">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                  <span className="text-[11.5px] font-extrabold text-slate-800 dark:text-slate-200">Sales Agent</span>
                                </div>
                                <span className="text-[9.5px] text-blue-600 font-extrabold font-mono text-right">48 leads today</span>
                              </div>
                              <div className="flex gap-4 text-[8.5px] text-[var(--text-muted)] font-mono font-medium mt-0.5">
                                <span>Latency 2.1s</span>
                                <span className="text-blue-500 font-bold">Cost $0.012/task</span>
                              </div>
                            </div>

                            {/* Ops Monitor */}
                            <div className="bg-[#EEF5FF] dark:bg-slate-900 border border-slate-100/50 rounded-2xl p-2.5 flex flex-col gap-1 shadow-inner relative overflow-hidden transition hover:border-blue-400">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                  <span className="text-[11.5px] font-extrabold text-slate-800 dark:text-slate-200">Ops Monitor</span>
                                </div>
                                <span className="text-[9.5px] text-purple-600 font-extrabold font-mono text-right">0 anomalies</span>
                              </div>
                              <div className="flex gap-4 text-[8.5px] text-[var(--text-muted)] font-mono font-medium mt-0.5">
                                <span>Latency 0.8s</span>
                                <span className="text-blue-500 font-bold">Cost $0.001/task</span>
                              </div>
                            </div>

                          </div>

                          {/* Stats aggregation below */}
                          <div className="grid grid-cols-3 gap-2 border-t border-[var(--border-soft)] pt-3.5 select-none">
                            <div className="text-center md:text-left">
                              <div className="font-serif font-black text-slate-800 text-[18px] md:text-[20px] text-blue-600 leading-tight">&lt; 3s</div>
                              <span className="text-[7.5px] text-[var(--text-muted)] uppercase tracking-wider font-extrabold font-mono">Avg resp</span>
                            </div>
                            <div className="text-center md:text-left">
                              <div className="font-serif font-black text-emerald-600 text-[18px] md:text-[20px] leading-tight text-emerald-600">↓ 60%</div>
                              <span className="text-[7.5px] text-[var(--text-muted)] uppercase tracking-wider font-extrabold font-mono">Support cost</span>
                            </div>
                            <div className="text-center md:text-left">
                              <div className="font-serif font-black text-purple-600 text-[18px] md:text-[20px] leading-tight text-purple-600">24/7</div>
                              <span className="text-[7.5px] text-[var(--text-muted)] uppercase tracking-wider font-extrabold font-mono">Runtime</span>
                            </div>
                          </div>

                        </div>

                        {/* Floating glass chips top-left and top-right */}
                        <div className="clay-3d-chip-purple absolute top-[3%] left-[3%] shadow-lg py-1 px-3 text-[10px] font-bold z-30">
                          🤖 Autonomous Multi-Agent
                        </div>
                        <div className="glass-chip absolute top-[3%] right-[3%] shadow-lg text-[10px] font-bold z-30 tracking-tight text-white bg-white/10 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                          🚀 Deploy once, scale infinitely
                        </div>

                      </div>
                    )}

                    {/* SLIDE 6 — ENTERPRISE INTEGRATIONS */}
                    {index === 5 && (
                      <div className="relative w-full h-full flex items-center justify-center min-h-[340px]">
                        
                        {/* Static container matching SVG bounds for pixel perfect coordinate binding */}
                        <div className="integration-stage relative w-[460px] h-[340px] select-none scale-[1.08] transition-all duration-300">
                          
                          {/* Radial SVG Network Map canvas without background cards to float directly */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 460 340">
                            
                            {/* Pulsing connections from center to 6 surrounding nodes */}
                            {/* Salesforce top */}
                            <line x1="230" y1="170" x2="230" y2="40" className="stroke-laser" />
                            {/* SAP top-right */}
                            <line x1="230" y1="170" x2="380" y2="105" className="stroke-laser animate-dash" />
                            {/* Stripe bottom-right */}
                            <line x1="230" y1="170" x2="380" y2="235" className="stroke-laser" />
                            {/* WhatsApp bottom */}
                            <line x1="230" y1="170" x2="230" y2="300" className="stroke-laser animate-dash" />
                            {/* Slack bottom-left */}
                            <line x1="230" y1="170" x2="80" y2="235" className="stroke-laser" />
                            {/* Custom Code top-left */}
                            <line x1="230" y1="170" x2="80" y2="105" className="stroke-laser animate-dash" />
                            
                            {/* Glowing connection anchor points */}
                            <circle cx="230" cy="170" r="4" className="fill-blue-500" />
                            <circle cx="230" cy="40" r="4" className="fill-sky-550 animate-pulse" style={{ fill: '#38bdf8' }} />
                            <circle cx="380" cy="105" r="4" className="fill-amber-550 animate-pulse" style={{ fill: '#f59e0b' }} />
                            <circle cx="380" cy="235" r="4" className="fill-indigo-550 animate-pulse" style={{ fill: '#6366f1' }} />
                            <circle cx="230" cy="300" r="4" className="fill-emerald-555 animate-pulse" style={{ fill: '#10b981' }} />
                            <circle cx="80" cy="235" r="4" className="fill-rose-555 animate-pulse" style={{ fill: '#f43f5e' }} />
                            <circle cx="80" cy="105" r="4" className="fill-purple-555 animate-pulse" style={{ fill: '#a855f7' }} />
                            
                          </svg>

                          {/* CENTER ENGINE HUB */}
                          <div className="absolute top-[138px] left-[198px] z-20 flex flex-col items-center select-none scale-100">
                            <div className="clay-icon bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_12px_32px_rgba(43,92,230,0.42)] border border-white/20 relative z-10 scale-105">
                              <GitMerge className="w-6.5 h-6.5 text-white animate-spin" style={{ animationDuration: '24s' }} />
                            </div>
                            <span className="text-[9.5px] font-bold mt-1.5 w-[90px] bg-white border-2 border-slate-100 text-center rounded-inner text-slate-800 shadow-md select-none tracking-tight block dark:text-slate-900 py-0.5">
                              Nexa Layer
                            </span>
                          </div>

                          {/* 6 Satellite Integration nodes positioned radially */}
                          {/* top (0°): Salesforce */}
                          <div className="satellite-hub absolute top-[8px] left-[198px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <Cloud className="w-4 h-4 text-sky-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">CRM</span>
                            </div>
                          </div>

                          {/* top-right (60°): SAP ERP */}
                          <div className="satellite-hub absolute top-[73px] right-[48px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <Database className="w-4 h-4 text-amber-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">SAP ERP</span>
                            </div>
                          </div>

                          {/* bottom-right (120°): Stripe */}
                          <div className="satellite-hub absolute bottom-[73px] right-[48px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <CreditCard className="w-4 h-4 text-indigo-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">Stripe</span>
                            </div>
                          </div>

                          {/* bottom (180°): WhatsApp */}
                          <div className="satellite-hub absolute bottom-[8px] left-[198px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <MessageSquare className="w-4 h-4 text-emerald-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">WhatsApp</span>
                            </div>
                          </div>

                          {/* bottom-left (240°): Slack */}
                          <div className="satellite-hub absolute bottom-[73px] left-[48px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <Hash className="w-4 h-4 text-rose-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">Slack</span>
                            </div>
                          </div>

                          {/* top-left (300°): Custom API */}
                          <div className="satellite-hub absolute top-[73px] left-[48px] z-10 transition-transform hover:scale-110">
                            <div className="w-[64px] h-[64px] rounded-full bg-[var(--bg-elevated)] border border-[var(--border-soft)] shadow-md flex flex-col justify-center items-center p-1 font-sans">
                              <Code className="w-4 h-4 text-purple-500 mb-1" />
                              <span className="text-[7px] text-slate-500 font-extrabold uppercase leading-none tracking-tight font-mono">Custom API</span>
                            </div>
                          </div>

                        </div>

                        {/* Floating top glass chips top-left and top-right */}
                        <div className="clay-3d-chip-purple absolute top-[4%] left-[6%] shadow-lg py-1 px-3.5 text-[10px] font-bold z-30">
                          ⚡ AI Decision Layer
                        </div>
                        <div className="absolute top-[4%] right-[6%] z-30 hidden md:block">
                          <div className="glass-chip shadow-md text-[10px] font-bold tracking-tight text-white bg-white/10 border border-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                            🔌 Multi-System Bus
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* ─── NEW VIEWPORT CONSTRAINT & FLEX SPEC ─── */
        #development {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-top: var(--space-section);
          padding-bottom: clamp(20px, 3vw, 40px);
          background-color: var(--bg-base);
        }

        /* Section H2 — Larger spec */
        #development .section-h2 {
          font-family: var(--font-display);
          font-size: clamp(44px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        /* Slide eyebrow / category */
        .carousel-text-col .slide-eyebrow {
          font-family: var(--font-sans);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          color: var(--text-accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          display: block;
        }

        /* Slide H3 size */
        .carousel-text-col .slide-h3 {
          font-family: var(--font-display);
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        /* Slide CTA immediately below text */
        .carousel-text-col .slide-cta {
          margin-top: 28px;
        }

        /* Dots directly below CTA */
        .carousel-text-col .slide-dots {
          margin-top: 20px;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        /* Carousel structural grid config */
        .carousel-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 clamp(40px, 5vw, 80px);
          align-items: center;
        }

        .carousel-text-col {
          grid-column: 1;
          text-align: left;
        }

        /* Visual column: no background card or wrapper */
        .carousel-visual-col {
          grid-column: 2;
          grid-row: 1 / 3; /* Spans text + dots row to balance weight */
          position: relative;
          height: clamp(380px, 48vw, 560px);
          overflow: visible; /* device screens breathe */
          border-radius: 0;
          background: none !important;
          box-shadow: none !important;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-45px); /* Move all mockups more upside */
        }

        /* ─── SLIDE 4 - TYPEWRITER EFFECT INTEGRATION ─── */
        .code-editor-frame {
          width: clamp(280px, 40vw, 480px);
          height: clamp(300px, 38vw, 440px);
          background: #0F1117;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04);
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .code-editor-line {
          white-space: nowrap;
          overflow: hidden;
          display: flex;
          align-items: center;
          width: 0;
          animation: typewriterReveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes typewriterReveal {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }

        .color-coral { color: #FF8B6B; }
        .color-green { color: #6BFFB8; }
        .color-purple { color: #A87BFF; }
        .color-blue { color: #5B8FFF; }

        /* ─── SLIDE 5 - AGENT CONTROL PANEL ─── */
        .agent-panel {
          width: clamp(320px, 45vw, 520px);
          background: var(--bg-elevated);
          border-radius: 20px;
          border: 1px solid var(--border-soft);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
          padding: 24px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* ─── SLIDE 6 - LASER dashed line connections ─── */
        .stroke-laser {
          stroke: var(--accent);
          stroke-width: 1.25px;
          stroke-dasharray: 5 4;
          opacity: 0.45;
          animation: laserTravel 2.4s linear infinite;
        }
        @keyframes laserTravel {
          from { stroke-dashoffset: 28; }
          to { stroke-dashoffset: 0; }
        }

        /* ─── MOBILE SCROLL TRIGGERS & BREAKPOINTS (STRICT UP TO 1023px) ─── */
        @media (max-width: 1023px) {
          #development {
            height: auto;
            min-height: auto;
            padding-top: clamp(48px, 6vw, 72px);
            padding-bottom: clamp(16px, 2.5vw, 32px);
          }
          .carousel-wrapper {
            grid-template-columns: 1fr;
            gap: 16px 0;
          }
          .carousel-visual-col {
            grid-column: 1;
            grid-row: 2; /* Shows mockup after content/CTA on mobile */
            height: 340px; /* fixed height to fit scaled mockups nicely */
            overflow: visible;
            margin-top: 36px; /* push mockup down to avoid overlapping the CTA button/dots */
            margin-bottom: 24px;
            transform: translateY(0); /* Reset desktop translate shift */
          }
          .carousel-text-col {
            grid-column: 1;
            grid-row: 1; /* Shows content first on mobile */
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .carousel-text-col .slide-eyebrow {
            margin-bottom: 6px;
          }
          .carousel-text-col .slide-h3 {
            margin-bottom: 8px;
          }
          .carousel-text-col .slide-cta {
            margin-top: 14px;
            width: 100%;
          }
          .carousel-text-col .slide-dots {
            margin-top: 14px;
            justify-content: center;
          }
          .phone-container.android {
            left: auto !important;
            right: auto !important;
            transform: scale(0.72) translateY(0);
          }
          .phone-container.iphone {
            left: auto !important;
            right: auto !important;
            transform: scale(0.72) translateY(0);
          }
          .laptop-wrapper {
            transform: scale(0.70) translateY(0) !important;
            transform-origin: center center;
          }
          .code-editor-frame {
            transform: translate(-50%, -50%) scale(0.70) translateY(0) !important;
          }
          .agent-panel {
            transform: translate(-50%, -50%) scale(0.70) translateY(0) !important;
          }
          .integration-stage {
            transform: scale(0.72) translateY(0) !important;
            transform-origin: center center;
          }
        }
      `}</style>
    </section>
  );
}
