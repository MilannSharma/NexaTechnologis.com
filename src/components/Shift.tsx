import { useEffect, useRef, useState } from "react";
import { Eye, Headphones, Code2 } from "lucide-react";

export default function Shift() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="shift" 
      className="relative w-full py-24 select-none overflow-hidden transition-all duration-1000 transform"
      style={{ 
        backgroundColor: "var(--bg-alt)",
        // Custom subtle diagonal grid structure
        backgroundImage: "repeating-linear-gradient(45deg, rgba(180, 165, 148, 0.02) 0px, rgba(180, 165, 148, 0.02) 2px, transparent 2px, transparent 10px)"
      }}
    >
      <div 
        style={{ maxWidth: "760px" }} 
        className={`mx-auto px-6 text-center transition-all duration-1000 delay-100 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <span className="eyebrow block mb-4">The Shift</span>
        
        <h2 className="text-[var(--text-h2)] font-bold mb-10 leading-tight">
          Google is no longer <br />
          the <span className="text-gradient font-extrabold">only gateway.</span>
        </h2>

        {/* Narrative layout blocks */}
        <div className="flex flex-col gap-6 text-[var(--test-body)] text-center leading-[1.8] text-[17px] font-sans max-w-[700px] mx-auto text-justify">
          <p className="transition-all duration-700 delay-300">
            AI systems — <span className="font-semibold text-[var(--text-primary)]">ChatGPT, Gemini, Perplexity, Copilot</span> — are where millions of people now find immediate answers, discover trusted brands, and make confident buying decisions. If your business does not natively appear inside these AI-generated citations, <span className="font-semibold text-[color:var(--accent)]">you are effectively invisible</span> to a rapidly expanding audience.
          </p>
          <p className="transition-all duration-700 delay-500">
            At the same time, the businesses that survive this digital migration will be the ones that run on deep AI structures internally — deploying autonomous agents that master support workflows, customer success operations, finance metrics — and engineered entirely with <span className="font-semibold text-[var(--text-primary)]">AI-native software architecture</span> that needs no retrofitting later.
          </p>
          <p className="transition-all duration-700 delay-700">
            Yet, most enterprise teams don’t know where to start: Scattered proprietary information, lack of clear visibility benchmarks, and no execution resources that understand how to build. <span className="font-semibold text-[var(--text-primary)]">That is the precise problem Nexa Technology exists to solve.</span>
          </p>
        </div>

        {/* Custom SVG equilateral interactive active flow diagram */}
        <div 
          className={`relative mx-auto mt-20 max-w-[540px] h-[360px] flex items-center justify-center transition-all duration-1000 delay-[900ms] transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Animated SVG link vectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} viewBox="0 0 540 360">
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2B5CE6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Dash dashed vectors (Triangle layout midpoints coordinate maps)
                Top point:   { x: 270, y: 55 }
                Bottom Left:  { x: 100, y: 260 }
                Bottom Right: { x: 440, y: 260 }
            */}

            {/* Loop Link 1 -> 2 (Top to Bottom Left) */}
            <line 
              x1="270" y1="55" 
              x2="100" y2="260" 
              stroke="url(#blueGrad)" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              className="animate-dash"
              opacity="0.6"
            />

            {/* Loop Link 2 -> 3 (Bottom Left to Bottom Right) */}
            <line 
              x1="100" y1="260" 
              x2="440" y2="260" 
              stroke="url(#blueGrad)" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              className="animate-dash"
              opacity="0.6"
            />

            {/* Loop Link 3 -> 1 (Bottom Right to Top) */}
            <line 
              x1="440" y1="260" 
              x2="270" y2="55" 
              stroke="url(#blueGrad)" 
              strokeWidth="2.5" 
              strokeDasharray="8 6" 
              className="animate-dash"
              opacity="0.6"
            />
          </svg>

          {/* Node 1: Top (AI discovers your brand) */}
          <div className="absolute top-[10px]" style={{ zIndex: 10 }}>
            <div className="flex flex-col items-center group">
              {/* Pulse rings */}
              <div className="absolute top-8 w-20 h-20 bg-[var(--accent-glow)] rounded-full -translate-y-1/2 animate-ping opacity-40 shrink-0" />
              
              {/* Clay icon wrapper */}
              <div className="clay-icon shrink-0">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div className="glass-panel px-4 py-2 mt-3 select-none pointer-events-none transform transition-transform group-hover:scale-105">
                <span className="font-sans font-semibold text-[13px] text-[var(--text-primary)]">AI Discovers Your Brand</span>
              </div>
            </div>
          </div>

          {/* Node 2: Bottom-Left (AI runs your operations) */}
          <div className="absolute bottom-[40px] left-[0px]" style={{ zIndex: 10 }}>
            <div className="flex flex-col items-center group">
              {/* Pulse rings */}
              <div className="absolute top-8 w-20 h-20 bg-[var(--accent-glow)] rounded-full -translate-y-1/2 animate-ping opacity-45 delay-700 shrink-0" />

              <div className="clay-icon green shrink-0">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <div className="glass-panel px-4 py-2 mt-3 select-none pointer-events-none transform transition-transform group-hover:scale-105">
                <span className="font-sans font-semibold text-[13px] text-[var(--text-primary)]">AI Runs Your Operations</span>
              </div>
            </div>
          </div>

          {/* Node 3: Bottom-Right (AI powers your software) */}
          <div className="absolute bottom-[40px] right-[0px]" style={{ zIndex: 10 }}>
            <div className="flex flex-col items-center group">
              {/* Pulse rings */}
              <div className="absolute top-8 w-20 h-20 bg-[var(--accent-glow)] rounded-full -translate-y-1/2 animate-ping opacity-45 delay-1400 shrink-0" />

              <div className="clay-icon teal shrink-0">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div className="glass-panel px-4 py-2 mt-3 select-none pointer-events-none transform transition-transform group-hover:scale-105">
                <span className="font-sans font-semibold text-[13px] text-[var(--text-primary)]">AI Powers Your Software</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Inject custom inline animations specifically for directional vector dashoffsets */}
      <style>{`
        @keyframes strokeDash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-dash {
          animation: strokeDash 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
