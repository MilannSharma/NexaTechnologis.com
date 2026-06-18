import React, { useEffect, useRef, useState } from "react";
import { 
  FlaskConical, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  BarChart2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const productSlides = [
  {
    id: 'deeptest',
    name: 'DeepTest AI',
    eyebrow: 'TESTING & QA',
    tagline: 'Autonomous QA that never sleeps.',
    body: 'DeepTest AI runs your entire test suite autonomously — writing new tests, identifying regressions, and reporting failures before they reach production. Replace 80% of your manual QA effort.',
    status: 'IN DEVELOPMENT',
    chips: ['Test Automation', 'AI-written tests', 'Regression Detection', 'CI/CD Integration'],
    icon: FlaskConical,
    color: 'blue'
  },
  {
    id: 'nexasignal',
    name: 'NexaSignal',
    eyebrow: 'BRAND INTELLIGENCE',
    tagline: 'Know when AI talks about you.',
    body: 'NexaSignal monitors how ChatGPT, Gemini, Perplexity, and Copilot mention your brand — in real time. Track your AI citation rate, competitor mentions, and sentiment drift across every major AI system.',
    status: 'IN DEVELOPMENT',
    chips: ['AI Citation Tracking', 'Brand Monitoring', 'Competitor Analysis', 'Sentiment'],
    icon: Radio,
    color: 'purple'
  },
  {
    id: 'agentops',
    name: 'AgentOps',
    eyebrow: 'AGENT MONITORING',
    tagline: 'Your agents, always under control.',
    body: 'AgentOps gives you full observability over every AI agent in production — latency, accuracy, fallback rate, cost per task. Set thresholds, get alerts, and optimise performance continuously.',
    status: 'IN DEVELOPMENT',
    chips: ['Agent Monitoring', 'Latency Tracking', 'Cost Analytics', 'Real-time Alerts'],
    icon: Cpu,
    color: 'teal'
  },
  {
    id: 'nexaguard',
    name: 'NexaGuard',
    eyebrow: 'AI COMPLIANCE',
    tagline: 'Safe AI, by design.',
    body: 'NexaGuard scans your AI outputs, agent decisions, and model responses for compliance violations, bias, and safety risks — before they reach your users or regulators.',
    status: 'IN DEVELOPMENT',
    chips: ['Compliance Scanning', 'Bias Detection', 'Safety Filters', 'Enterprise Ready'],
    icon: ShieldCheck,
    color: 'coral'
  },
  {
    id: 'modelbench',
    name: 'ModelBench',
    eyebrow: 'LLM EVALUATION',
    tagline: 'Find the right model for your use case.',
    body: 'ModelBench runs structured evaluations of GPT-4o, Claude, Gemini, Llama, and others against your specific tasks, data, and quality criteria — so you pick the right model, not the most popular one.',
    status: 'IN DEVELOPMENT',
    chips: ['LLM Benchmarking', 'Custom Evals', 'Cost vs Quality', 'Multi-model'],
    icon: BarChart2,
    color: 'green'
  }
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Auto scroll logic (4s auto)
  useEffect(() => {
    const handleAutoplay = () => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % productSlides.length);
        setTransitioning(false);
      }, 350);
    };

    const intervalId = setInterval(() => {
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

  const currentData = productSlides[currentSlide];

  // 3D Card Tilt handler
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
    card.style.setProperty('--mx', `${x * 100 + 50}%`);
    card.style.setProperty('--my', `${y * 100 + 50}%`);
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  const setPageHash = () => {
    window.location.hash = "#products";
  };

  return (
    <section 
      ref={sectionRef}
      id="products"
      className="reveal-section relative w-full py-24 select-none bg-[var(--bg-alt)] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">IN DEVELOPMENT</span>
          <h2 className="text-[var(--text-h1)] font-serif font-black tracking-tighter leading-none md:leading-[1.05] mb-4 text-[var(--text-primary)]">
            Tools we built because <br />
            <span className="text-gradient font-black">they didn't exist.</span>
          </h2>
          <p className="font-sans text-[18px] text-[var(--text-body)] max-w-[560px] mx-auto leading-relaxed">
            Every product here was born from a real problem we kept hitting in client work. If one solves something you're dealing with — we'd like to talk.
          </p>
        </div>

        {/* Carousel Layout (FLIPPED: Visual LEFT, Text RIGHT) */}
        <div className="carousel-wrapper flipped">
          
          {/* Visual Column (LEFT on desktop) */}
          <div className="carousel-visual-col">
            <div className="carousel-track">
              {productSlides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className="carousel-slide flex items-center justify-center h-full w-full p-4"
                    style={{
                      position: 'absolute',
                      inset: '0',
                      opacity: isActive ? '1' : '0',
                      transform: isActive ? 'translateX(0) scale(1)' : 'translateX(-60px) scale(0.97)',
                      pointerEvents: isActive ? 'all' : 'none',
                      transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div 
                      className="tilt-card neo-card w-full h-full max-w-[480px] p-0 overflow-hidden relative flex flex-col items-center justify-center cursor-pointer"
                      style={{ borderRadius: "28px", background: "var(--bg-elevated)", boxShadow: "var(--clay-shadow)" }}
                      onMouseMove={handleCardTilt}
                      onMouseLeave={handleCardLeave}
                    >
                      {/* Product 1 - DeepTest AI */}
                      {index === 0 && (
                        <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#0F1117] text-white p-6 flex flex-col justify-between text-left relative">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                              <span className="text-xs font-mono font-bold tracking-wider text-slate-400">DeepTest AI Agent Console</span>
                              <span className="text-[10px] bg-indigo-950 text-indigo-300 font-mono font-semibold px-2 py-0.5 rounded-full flex items-center gap-1.5 border border-indigo-800">
                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
                                Running tests...
                              </span>
                            </div>

                            {/* CI/CD progress bar */}
                            <div className="mb-4">
                              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                                <span>Execution status</span>
                                <span className="font-bold text-slate-200">85% Complete</span>
                              </div>
                              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full rounded-full animate-pulse" style={{ width: '85%' }} />
                              </div>
                            </div>

                            {/* Result log lines */}
                            <div className="space-y-2.5 font-mono text-xs">
                              <div className="flex items-start gap-2 text-emerald-400">
                                <span className="font-extrabold">✓</span>
                                <div>
                                  <div className="font-bold">Auth flow tests — 48/48 passed</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-2 text-emerald-400">
                                <span className="font-extrabold">✓</span>
                                <div>
                                  <div className="font-bold">API endpoint tests — 124/124 passed</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-2 text-[#FF8B6B]">
                                <span className="font-extrabold">⚠</span>
                                <div>
                                  <div className="font-bold flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                                    New regression found in checkout
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Stats and metadata */}
                          <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-400">
                            <span>Coverage: <b>94%</b></span>
                            <span>Time: <b>2m 14s</b></span>
                            <span>AI-written: <b>38 tests</b></span>
                          </div>

                          {/* Floating glass chips top-left and top-right */}
                          <span className="clay-3d-chip-purple absolute top-[16%] left-6 text-[10px] text-white font-bold z-30 shadow-lg py-1 px-2.5">
                            🦾 Self-Healing Tests
                          </span>
                          <span className="glass-chip absolute top-[16%] right-0 text-[10px] font-bold text-indigo-400 border-indigo-950 bg-indigo-950/40 z-30 shadow-md" style={{ right: '24px' }}>
                            ⚡ Auto-fixed 3 bugs
                          </span>
                        </div>
                      )}

                      {/* Product 2 - NexaSignal */}
                      {index === 1 && (
                        <div className="w-full h-full rounded-[28px] overflow-hidden p-6 flex flex-col justify-between text-left bg-white relative">
                          {/* Floating glass chips top-left and top-right */}
                          <span className="clay-3d-chip-purple absolute top-[14%] left-0 z-30 shadow-lg py-1 px-2.5" style={{ left: '24px' }}>
                            🔍 AI Brand Search Tracking
                          </span>
                          <span className="glass-chip absolute top-[14%] right-0 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 py-1 px-2.5 rounded-full z-30 shadow-md" style={{ right: '24px' }}>
                            📈 Real-Time Citations
                          </span>
                          <div>
                            <span className="font-mono text-[9px] text-slate-400 uppercase font-semibold block mb-2">ai model brand tracking</span>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase mb-1">AI CITATION RATE</span>
                                <div className="text-xl font-bold font-serif text-emerald-600">23% <span className="text-[10px] font-sans font-normal">↑ 4.2%</span></div>
                              </div>
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase mb-1">COMPETITOR RATE</span>
                                <div className="text-xl font-bold font-serif text-[#E84040]">61% <span className="text-[10px] font-sans font-normal">↓ 1.8%</span></div>
                              </div>
                            </div>

                            {/* Chart representation */}
                            <div className="mb-4">
                              <span className="text-[9px] font-mono text-slate-400 font-semibold block mb-1">YOUR BRAND CITATIONS (30 DAYS)</span>
                              <div className="h-[80px] bg-slate-50 rounded-lg border border-slate-100 p-2 flex items-end">
                                <svg className="w-full h-full" viewBox="0 0 200 60">
                                  {/* Area under curve */}
                                  <path d="M0,55 C20,53 40,43 60,35 C80,27 100,22 120,29 C140,36 160,10 180,5 L200,60 L0,60 Z" fill="rgba(43,92,230,0.06)" />
                                  {/* The curve */}
                                  <path d="M0,55 C20,53 40,35 60,35 C80,27 100,22 120,29 C140,36 160,10 180,5" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                                </svg>
                              </div>
                            </div>

                            {/* Citation source breakdown */}
                            <div className="space-y-1 text-[10px] font-sans">
                              <div className="flex justify-between items-center text-slate-600">
                                <span>🤖 ChatGPT citation area</span>
                                <span className="text-emerald-600 font-bold">Mentioned 14x this week</span>
                              </div>
                              <div className="flex justify-between items-center text-slate-600">
                                <span>✦ Gemini citation index</span>
                                <span className="text-blue-600 font-bold">Mentioned 6x this week</span>
                              </div>
                              <div className="flex justify-between items-center text-[#E84040] font-semibold">
                                <span>🔎 Perplexity reference</span>
                                <span>Not appearing — fix needed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Product 3 - AgentOps */}
                      {index === 2 && (
                        <div className="w-full h-full rounded-[28px] overflow-hidden p-6 flex flex-col justify-between text-left bg-white relative">
                          {/* Floating glass chips top-left and top-right */}
                          <span className="clay-3d-chip-purple absolute top-[14%] left-0 z-30 shadow-lg py-1 px-2.5 select-none" style={{ left: '24px' }}>
                            📊 Latency & Cost Metrics
                          </span>
                          <span className="glass-chip absolute top-[14%] right-0 text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 py-1 px-2.5 rounded-full z-30 shadow-md" style={{ right: '24px' }}>
                            💡 Smart Rate Limiters
                          </span>
                          <div className="w-full">
                            <span className="font-mono text-[9px] text-slate-400 uppercase font-bold block mb-3">AgentOps · 3 agents monitored</span>
                            
                            {/* Three active agents profiles */}
                            <div className="space-y-2.5 mb-4">
                              <div className="neo-inset p-3 bg-slate-50 border border-slate-100 rounded-xl">
                                <div className="flex justify-between items-center mb-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-xs font-bold text-slate-800">Support Agent</span>
                                  </div>
                                  <span className="text-[9px] text-slate-400">🟢 ACTIVE</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-slate-500">
                                  <span>Lat: <b>1.2s</b></span>
                                  <span>Task/hr: <b>340</b></span>
                                  <span>Cost: <b>$0.004</b></span>
                                </div>
                              </div>

                              <div className="neo-inset p-3 bg-slate-50 border border-slate-100 rounded-xl">
                                <div className="flex justify-between items-center mb-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span className="text-xs font-bold text-slate-800">Sales Agent</span>
                                  </div>
                                  <span className="text-[9px] text-slate-400">🔵 ACTIVE</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-slate-500">
                                  <span>Lat: <b>2.1s</b></span>
                                  <span>Task/hr: <b>89</b></span>
                                  <span>Cost: <b>$0.012</b></span>
                                </div>
                              </div>

                              <div className="neo-inset p-3 bg-slate-50 border border-slate-100 rounded-xl">
                                <div className="flex justify-between items-center mb-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    <span className="text-xs font-bold text-slate-800">Ops Monitor</span>
                                  </div>
                                  <span className="text-[9px] text-slate-400">🟣 ACTIVE</span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-slate-500">
                                  <span>Lat: <b>0.8s</b></span>
                                  <span>Task/hr: <b>1200</b></span>
                                  <span>Cost: <b>$0.001</b></span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                            <span className="text-[11px] font-sans font-bold text-[color:var(--accent)]">
                              Total saved vs human ops: $4,200 this month
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Product 4 - NexaGuard */}
                      {index === 3 && (
                        <div className="w-full h-full rounded-[28px] overflow-hidden p-6 flex flex-col justify-between text-left bg-white relative">
                          {/* Floating glass chips top-left and top-right */}
                          <span className="clay-3d-chip-purple absolute top-[14%] left-0 z-30 shadow-lg py-1 px-2.5 select-none" style={{ left: '24px' }}>
                            🛡️ Real-Time Guardrails
                          </span>
                          <span className="glass-chip absolute top-[14%] right-0 text-[10px] font-bold text-rose-500 bg-rose-50 border border-rose-200 py-1 px-2.5 rounded-full z-30 shadow-md" style={{ right: '24px' }}>
                            ⚠️ Leak Filtered
                          </span>
                          <div>
                            <span className="font-mono text-[9px] text-slate-400 uppercase font-semibold block mb-3">NexaGuard · Last scan: 2 min ago</span>
                            
                            {/* SVG progress circle with text in center */}
                            <div className="flex items-center gap-6 mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                  <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                  <path className="text-emerald-500" strokeDasharray="96, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <span className="absolute text-xs font-bold text-slate-800">96%</span>
                              </div>
                              <div>
                                <h4 className="text-sm font-sans font-bold text-slate-800">Model Safety Rating</h4>
                                <p className="text-[10px] text-slate-400 font-mono">ALL AGENT NETWORKS SCAN PRE-FLIGHT</p>
                              </div>
                            </div>

                            {/* Compliance rules checked */}
                            <div className="space-y-2 text-xs">
                              <div className="flex items-center gap-2 text-slate-600">
                                <span className="text-emerald-500 font-extrabold text-[13px]">✓</span>
                                <span>No PII exposed in model outputs</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600">
                                <span className="text-emerald-500 font-extrabold text-[13px]">✓</span>
                                <span>Model bias score: <b>0.04</b> (within safety range)</span>
                              </div>
                              <div className="flex items-center gap-2 text-amber-600 font-semibold">
                                <span className="text-amber-500 font-extrabold text-[13px]">⚠</span>
                                <span>Hallucination risk: medium in product descriptions</span>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                            <span className="text-[10px] text-slate-400 font-mono">
                              Scan 50,000 outputs/day on Enterprise
                            </span>
                            <span className="text-[10px] bg-[var(--accent-soft)] text-[var(--accent)] font-bold px-2 py-0.5 rounded-full">
                              Fix suggested ✦
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Product 5 - ModelBench */}
                      {index === 4 && (
                        <div className="w-full h-full rounded-[28px] overflow-hidden p-6 flex flex-col justify-between text-left bg-white relative">
                          {/* Floating glass chips top-left and top-right */}
                          <span className="clay-3d-chip-purple absolute top-[14%] left-0 z-30 shadow-lg py-1 px-2.5 select-none" style={{ left: '24px' }}>
                            📋 Custom LLM Benchmarks
                          </span>
                          <span className="glass-chip absolute top-[14%] right-0 text-[9px] font-bold text-slate-700 bg-slate-100 border border-slate-300 py-1 px-2.5 rounded-full z-30 shadow-md" style={{ right: '24px' }}>
                            🎯 Reality Evals
                          </span>
                          <div>
                            <span className="font-mono text-[9px] text-slate-400 uppercase font-semibold block mb-2">ModelBench · Custom eval results</span>
                            
                            {/* Metrics comparison table */}
                            <div className="overflow-x-auto border border-slate-100 rounded-lg">
                              <table className="w-full text-[9px] font-sans text-left border-collapse">
                                <thead>
                                  <tr className="bg-slate-50 border-b border-slate-100 text-[8px] font-mono text-slate-400 font-bold uppercase">
                                    <th className="p-2">Model</th>
                                    <th className="p-2">Speed</th>
                                    <th className="p-2">Accuracy</th>
                                    <th className="p-2">Cost</th>
                                    <th className="p-2">Overall</th>
                                  </tr>
                                </thead>
                                <tbody className="text-slate-600">
                                  <tr className="border-b border-slate-100">
                                    <td className="p-2 font-bold text-slate-800">GPT-4o</td>
                                    <td className="p-2">1.8s</td>
                                    <td className="p-2 font-bold text-slate-800">91%</td>
                                    <td className="p-2">$0.030</td>
                                    <td className="p-2 text-amber-500">⭐⭐⭐⭐</td>
                                  </tr>
                                  {/* Highlighted Row */}
                                  <tr className="bg-[var(--accent-soft)]/50 border-b border-[#2b5ce6]/25 text-slate-900">
                                    <td className="p-2 font-bold text-[color:var(--accent)] flex items-center gap-1">Claude 3.5 ✦</td>
                                    <td className="p-2 font-medium">2.1s</td>
                                    <td className="p-2 font-bold">94%</td>
                                    <td className="p-2 font-medium">$0.018</td>
                                    <td className="p-2 text-amber-500 font-bold">⭐⭐⭐⭐⭐</td>
                                  </tr>
                                  <tr className="border-b border-slate-100">
                                    <td className="p-2">Gemini 1.5</td>
                                    <td className="p-2">1.2s</td>
                                    <td className="p-2">88%</td>
                                    <td className="p-2">$0.007</td>
                                    <td className="p-2 text-amber-500">⭐⭐⭐</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2">Llama 3.1</td>
                                    <td className="p-2">0.9s</td>
                                    <td className="p-2 font-semibold text-emerald-600">83%</td>
                                    <td className="p-2 font-mono font-bold text-emerald-600">$0.001</td>
                                    <td className="p-2 text-amber-500">⭐⭐⭐</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="border-t border-slate-100 pt-2 text-left">
                            <span className="text-[10px] font-bold text-[var(--accent)] leading-tight block">
                              Best for your use case: Claude 3.5 Sonnet
                            </span>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text Column (RIGHT on desktop) */}
          <div className="carousel-text-col">
            <div className={`transition-all duration-350 ease-in-out ${transitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className={`clay-icon ${currentData.color} shrink-0`} style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                  <currentData.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-accent)] font-semibold">
                  {currentData.eyebrow}
                </span>

                {/* status badge */}
                <span className="badge-building font-semibold uppercase">
                  {currentData.status}
                </span>
              </div>
              
              <h3 className="font-serif text-[var(--text-h2)] font-bold text-[var(--text-primary)] leading-tight mb-2">
                {currentData.tagline}
              </h3>
              
              <p className="font-sans text-[18px] text-[var(--text-body)] leading-[1.75] mb-6">
                {currentData.body}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {currentData.chips.map((chip, idx) => (
                  <span key={idx} className="glass-chip text-xs font-semibold">
                    {chip}
                  </span>
                ))}
              </div>

              <div>
                <button
                  onClick={setPageHash}
                  className="btn-secondary text-[13px] font-bold"
                  style={{ padding: "10px 24px" }}
                >
                  Discuss Early Access ✦
                </button>
              </div>

            </div>
          </div>

          {/* Carousel Footer across columns */}
          <div className="carousel-footer">
            <div className="carousel-dots">
              {productSlides.map((_, idx) => (
                <span 
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`c-dot ${idx === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
            
            <button 
              onClick={setPageHash}
              className="btn-primary font-bold"
            >
              Explore All Products <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        .carousel-wrapper.flipped {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 0 clamp(48px, 6vw, 96px);
          align-items: center;
          position: relative;
        }
        .carousel-wrapper.flipped .carousel-visual-col {
          grid-column: 1; 
          grid-row: 1;
          position: relative;
          height: clamp(400px, 50vw, 580px);
          overflow: hidden;
          border-radius: 28px;
        }
        .carousel-wrapper.flipped .carousel-text-col { 
          grid-column: 2; 
          grid-row: 1; 
          padding-left: 24px; 
          padding-right: 0;
          text-align: left;
        }
        .carousel-wrapper.flipped .carousel-footer {
          grid-column: 1 / -1; 
          grid-row: 2;
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          margin-top: 40px; 
          padding-top: 32px;
          border-top: 1px solid var(--border-soft);
        }
        @media (max-width: 1023px) {
          .carousel-wrapper.flipped { grid-template-columns: 1fr; }
          .carousel-wrapper.flipped .carousel-visual-col { grid-row: 1; height: 360px; grid-column: 1; margin-bottom: 24px; }
          .carousel-wrapper.flipped .carousel-text-col { grid-row: 2; padding-left: 0; grid-column: 1; }
          .carousel-wrapper.flipped .carousel-footer { flex-direction: column; gap: 20px; }
        }
      `}</style>
    </section>
  );
}
