import { Eye, Cpu, Zap, RefreshCw, Headphones, TrendingUp, Settings, ArrowRight } from "lucide-react";

export default function AgenticShowcase() {

  const smoothScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="agents"
      className="relative w-full py-24 select-none bg-[var(--bg-alt)] overflow-hidden"
    >
      {/* Background decoration diagonals */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, var(--text-muted) 0px, var(--text-muted) 2px, transparent 2px, transparent 10px)"
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & Use Cases */}
          <div className="lg:col-span-6 flex flex-col items-start text-left max-w-[500px]">
            <span className="eyebrow block mb-3">AGENTIC AI</span>
            <h2 className="font-serif text-[var(--text-h2)] font-bold text-[var(--text-primary)] leading-tight mb-4">
              AI that works <br />
              <span className="text-gradient">while you sleep.</span>
            </h2>
            <p className="font-sans text-[18px] text-[var(--text-body)] leading-relaxed mb-8">
              Agentic AI isn't a chatbot. It's a system that perceives, decides, and acts — autonomously, continuously, across your entire operation.
            </p>

            {/* Three Use Case Rows */}
            <div className="flex flex-col gap-6 w-full mb-8">
              
              {/* Row 1 — Customer Support Agent */}
              <div className="flex items-start gap-4">
                <div className="clay-icon green shrink-0" style={{ width: "42px", height: "42px", borderRadius: "10px" }}>
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[15px] text-[var(--text-primary)] leading-tight mb-1">
                    Customer Support Agent
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Resolves 80% of tickets without human handoff. Available 24/7.
                  </p>
                </div>
              </div>

              {/* Row 2 — Sales Qualification Agent */}
              <div className="flex items-start gap-4">
                <div className="clay-icon shrink-0" style={{ width: "42px", height: "42px", borderRadius: "10px" }}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[15px] text-[var(--text-primary)] leading-tight mb-1">
                    Sales Qualification Agent
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Scores leads, follows up, books meetings automatically.
                  </p>
                </div>
              </div>

              {/* Row 3 — Operations Agent */}
              <div className="flex items-start gap-4">
                <div className="clay-icon purple shrink-0" style={{ width: "42px", height: "42px", borderRadius: "10px" }}>
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[15px] text-[var(--text-primary)] leading-tight mb-1">
                    Operations Agent
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Monitors systems, flags anomalies, triggers workflows.
                  </p>
                </div>
              </div>

            </div>

            {/* Deploy First Agent CTA */}
            <div>
              <button
                onClick={smoothScrollToContact}
                className="btn-primary"
              >
                Deploy Your First Agent <ArrowRight className="w-4 h-4 ml-1 inline" />
              </button>
            </div>
          </div>

          {/* Right Column - Animated Loop diagram */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="neo-card glass-panel p-8 w-full max-w-[460px] relative rounded-[28px] overflow-hidden flex flex-col items-center">
              
              {/* Central flow loop */}
              <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                
                {/* SVG circular dashed line */}
                <svg className="absolute inset-0 w-full h-full animate-spinSlow" viewBox="0 0 280 280">
                  <circle
                    cx="140"
                    cy="140"
                    r="100"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeDasharray="10 8"
                    opacity="0.5"
                    className="animate-dash"
                  />
                </svg>

                {/* Center text "Agent running 24/7" */}
                <div className="text-center z-10 flex flex-col items-center select-none">
                  <span className="font-serif font-black text-[24px] text-[var(--text-primary)]">Agent</span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">
                    RUNNING 24/7
                  </span>
                </div>

                {/* Node 1: Perceive (Top) */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] border border-[var(--border-soft)] shadow flex items-center justify-center group hover:scale-105 transition-transform">
                    <Eye className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-600 mt-1 uppercase">Perceive</span>
                </div>

                {/* Node 2: Decide (Right) */}
                <div className="absolute right-[10px] top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] border border-[var(--border-soft)] shadow flex items-center justify-center group hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-600 mt-1 uppercase">Decide</span>
                </div>

                {/* Node 3: Act (Bottom) */}
                <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] border border-[var(--border-soft)] shadow flex items-center justify-center group hover:scale-105 transition-transform">
                    <Zap className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-600 mt-1 uppercase">Act</span>
                </div>

                {/* Node 4: Learn (Left) */}
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] border border-[var(--border-soft)] shadow flex items-center justify-center group hover:scale-105 transition-transform">
                    <RefreshCw className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-bold text-slate-600 mt-1 uppercase">Learn</span>
                </div>

              </div>

              {/* Floating tags */}
              <div className="absolute bottom-4 left-4 glass-chip shadow-md text-[11px] font-semibold text-slate-700">
                &lt; 3s response
              </div>
              <div className="absolute bottom-4 right-4 glass-chip shadow-md text-[11px] font-semibold text-emerald-600">
                ↓ 60% support cost
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spinSlow {
          animation: spinSlow 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
