import { useEffect, useRef, useState } from "react";

export default function ReusableStats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [industries, setIndustries] = useState(0);
  const [pillars, setPillars] = useState(0);
  const [customPct, setCustomPct] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          runCountUps();
        }
      },
      { threshold: 0.20 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasRun]);

  const runCountUps = () => {
    // Industries CountUp: 0 to 5 (user requests Edtech, health, SaaS, real estate + more)
    // Wait, the prompt stats layout shows: "01 + Industries" but we can animate it or count up from 0 to 11+
    // or similarly we can count from 0 to 5 or similar. The prompt says: "01 +" or "01 +" or similar. Let's make "05 +" or animate "0" to "1". Let's represent the exact literals shown:
    // Stat 1: 01 +
    // Stat 2: 6
    // Stat 3: 100%
    
    // Animate Industries to 5+ or let's animate the exact numerals in of the prompt:
    const duration = 1800; // ms
    const startTime = Date.now();

    const frame = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setIndustries(Math.floor(eased * 1)); // exactly 1
      setPillars(Math.floor(eased * 6)); // exactly 6
      setCustomPct(Math.floor(eased * 100)); // exactly 100

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setIndustries(1);
        setPillars(6);
        setCustomPct(100);
      }
    };

    requestAnimationFrame(frame);
  };

  return (
    <section 
      ref={sectionRef} 
      id="stats" 
      className="relative w-full py-16 bg-[var(--bg-base)] border-y border-[var(--border-soft)]"
    >
      <div 
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }} 
        className="px-6"
      >
        
        {/* Full-width flat-elevated neomorphic layout list */}
        <div className="w-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-soft)] p-8 md:p-12 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-4 relative">
              <span 
                className="text-[56px] font-extrabold text-[var(--text-primary)] leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                0{industries} +
              </span>
              <span className="font-sans font-bold text-[14px] text-[var(--text-body)] uppercase tracking-wide mb-1">
                Industries Served
              </span>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-[200px]">
                EdTech, Health, Real Estate, SaaS & more
              </p>
              
              {/* Flanking Divider line strictly on desktop displays */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[1px] bg-[var(--border-soft)]" />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-4 relative">
              <span 
                className="text-[56px] font-extrabold text-[var(--text-primary)] leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {pillars}
              </span>
              <span className="font-sans font-bold text-[14px] text-[var(--text-body)] uppercase tracking-wide mb-1">
                AI Pillars
              </span>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-[200px]">
                GEO, Agents, Knowledge, Software & more
              </p>

              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[1px] bg-[var(--border-soft)]" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <span 
                className="text-[56px] font-extrabold text-[var(--text-primary)] leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {customPct}%
              </span>
              <span className="font-sans font-bold text-[14px] text-[var(--text-body)] uppercase tracking-wide mb-1">
                Custom-Built
              </span>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-[200px]">
                Zero generic templates. Everything purpose-built.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
