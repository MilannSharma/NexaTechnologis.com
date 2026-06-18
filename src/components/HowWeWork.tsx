import { useEffect, useRef, useState } from "react";
import { Search, Map, Wrench, Activity } from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  icon: any;
  color: string;
  body: string;
}

export default function HowWeWork() {
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

  const stepsData: StepItem[] = [
    {
      num: "01",
      title: "Audit",
      icon: Search,
      color: "blue",
      body: "We run a complete AI visibility audit — how AI models see your brand, where agents can save you margins, and what infrastructure you are missing."
    },
    {
      num: "02",
      title: "Strategy",
      icon: Map,
      color: "purple",
      body: "You receive a tailored, high-conviction roadmap — which pillars to activate first, in what sequence, with clear ROI milestones."
    },
    {
      num: "03",
      title: "Build",
      icon: Wrench,
      color: "teal",
      body: "Our senior engineers build and deploy — agents, unified knowledge systems, AI-native software, or visibility campaigns — with full technical ownership."
    },
    {
      num: "04",
      title: "Monitor",
      icon: Activity,
      color: "green",
      body: "We continuously monitor AI mention velocities, agent latency, and database accuracy using proprietary utilities for proactive tuning."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative w-full py-24 select-none bg-[var(--bg-base)] overflow-hidden"
    >
      <div 
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }} 
        className="px-6 relative"
      >
        
        {/* Title Group */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">The Process</span>
          <h2 className="text-[var(--text-h1)] font-bold tracking-tight mb-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            From audit to result <br />
            in <span className="text-gradient font-extrabold">four steps.</span>
          </h2>
        </div>

        {/* Desktop Connected Path Map (Drawn only above mobile break) */}
        <div className="hidden lg:block absolute left-12 right-12 top-[345px] h-[3px] pointer-events-none" style={{ zIndex: 1 }}>
          <svg className="w-full h-full" viewBox="0 0 1000 3" preserveAspectRatio="none">
            <line 
              x1="0%" y1="1.5" 
              x2={isVisible ? "100%" : "0%"} y2="1.5" 
              stroke="var(--accent)" 
              strokeWidth="2" 
              strokeDasharray="8 6" 
              opacity="0.4"
              style={{ transition: "all 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }}
            />
          </svg>
          
          {/* Centralized Midpoint Anchor Nodes of the track */}
          <div className="absolute inset-0 flex justify-between items-center px-[12%]">
            <span className={`w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-base)] ring-2 ring-[var(--accent-glow)] transition-transform duration-500 scale-100 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
            <span className={`w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[var(--bg-base)] ring-2 ring-purple-100 transition-transform duration-500 delay-300 scale-100 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
            <span className={`w-3.5 h-3.5 rounded-full bg-teal-500 border-4 border-[var(--bg-base)] ring-2 ring-teal-100 transition-transform duration-500 delay-600 scale-100 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
            <span className={`w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-[var(--bg-base)] ring-2 ring-emerald-100 transition-transform duration-500 delay-900 scale-100 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
          </div>
        </div>

        {/* Steps Card Grid (Responsive layout transitions) */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 duration-1000 transform transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {stepsData.map((step) => {
            const StepIcon = step.icon;
            return (
              <div 
                key={step.num}
                className="neo-card p-8 bg-[var(--bg-card)] rounded-2xl flex flex-col items-start text-left border border-[var(--border-soft)] relative transition-all duration-300 transform"
                style={{
                  minHeight: "330px"
                }}
              >
                {/* Large Ghost Step Numbers background */}
                <div 
                  className="absolute top-4 right-6 font-bold leading-none select-none text-[64px]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--border-soft)", opacity: 0.4 }}
                >
                  {step.num}
                </div>

                {/* Bubble Clay Icon wrapper */}
                <div className={`clay-icon ${step.color} mb-6 shrink-0`} style={{ width: "56px", height: "56px", borderRadius: "16px" }}>
                  <StepIcon className="w-6 h-6 text-white shrink-0" />
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-[var(--text-primary)] leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Body paragraph */}
                <p className="text-[var(--text-body)] text-[14px] leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
