import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function AboutPreview() {
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
      id="about" 
      className="relative w-full py-24 select-none overflow-hidden"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div 
        style={{ maxWidth: "var(--max-width)", margin: "0 auto" }} 
        className="px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        
        {/* Left Column information text */}
        <div 
          className={`lg:col-span-6 text-left max-w-[540px] transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="eyebrow block mb-3">Who We Are</span>
          
          <h2 className="text-[var(--text-h1)] font-bold tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Built by people who have seen <br />
            <span className="text-gradient font-black">what's coming.</span>
          </h2>

          <div className="flex flex-col gap-5 text-[var(--text-body)] text-[15px] leading-relaxed font-sans mb-8">
            <p>
              Nexa Technology was founded in 2026 by a senior team that has spent years in custom AI deployment, digital transformation workflows, and scalable software systems engineering. We saw first-hand the massive gap between where AI capability is going and where most businesses are stuck — and we built Nexa specifically to close it.
            </p>
            <p>
              We are not a generic consulting firm with AI keywords bolted on. We are not a speculative pre-revenue startup with zero implementation experience. We are practitioners — supplying a full-spectrum operative toolkit engineered from the ground up for the AI-exclusive era.
            </p>
          </div>

          <div>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-secondary transition-all"
            >
              Meet the Team <ArrowRight className="w-4 h-4 text-[var(--accent)] ml-1" />
            </button>
          </div>
        </div>

        {/* Right overlapping premium layout visual element cards */}
        <div 
          className={`lg:col-span-6 flex items-center justify-center relative min-h-[380px] select-none transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          
          {/* Back Card: India map vector card rotated -4deg */}
          <div 
            className="absolute p-6 w-[280px] sm:w-[325px] h-[230px] rounded-2xl glass-panel bg-white/70 border border-white/70 shadow-lg transform -rotate-4 translate-x-[-15px] translate-y-[-20px] transition-transform duration-500 hover:rotate-[-6deg]"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-wider uppercase">Headquarters</span>
              <span className="text-[10px] font-bold py-0.5 px-2.5 bg-blue-50 text-[var(--accent)] rounded-full uppercase">Founded 2026</span>
            </div>

            {/* Micro India vector outline highlighted overlay inside map visual */}
            <div className="flex gap-4 items-center h-[120px] pt-1 select-none pointer-events-none">
              <div className="w-20 h-20 bg-[var(--accent-glow)] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-[var(--accent)] animate-bounce" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[13px] font-bold text-[var(--text-primary)]">India & Global</div>
                <div className="text-[11px] text-[var(--text-muted)] leading-normal mt-1">
                  Engineered with premium Swiss aesthetics, deployed for scale.
                </div>
              </div>
            </div>
          </div>

          {/* Front Card: Elevated Business Details card 0deg rotation with clay shadow */}
          <div 
            className="absolute p-7 w-[290px] sm:w-[340px] h-[240px] rounded-2xl bg-white border border-white shadow-xl transform translate-x-[20px] translate-y-[35px] transition-transform duration-500 hover:-translate-y-1"
            style={{ 
              zIndex: 10,
              boxShadow: "0 20px 40px rgba(180, 165, 148, 0.18), 0 1px 3px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="flex items-center gap-3.5 mb-5 select-none pointer-events-none">
              {/* N Logo Clay mark */}
              <div className="clay-icon" style={{ width: "40px", height: "40px", borderRadius: "10px" }}>
                <span className="text-white font-extrabold text-[18px]">N</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold tracking-tight text-[var(--text-primary)]">Nexa Technology</div>
                <span className="text-[11px] font-medium text-[var(--text-muted)]">AI Systems Integrator</span>
              </div>
            </div>

            {/* Small description indicators */}
            <div className="text-left font-sans text-[12px] text-[var(--text-muted)] leading-relaxed flex flex-col gap-1.5 border-b border-[var(--border-soft)] pb-4 mb-3">
              <span>● AI Presence & Citation Engineering (GEO)</span>
              <span>● Autonomous Support Agent Networks</span>
              <span>● AI-Native Platform Constructs</span>
            </div>

            {/* Micro email footer and dots trackers */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[var(--text-muted)]">hello@nexatechnology.ai</span>
              
              {/* Three colorful small clay orbs points */}
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="w-2 h-2 rounded-full bg-teal-500" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
