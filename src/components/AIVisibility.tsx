import { useEffect, useState, useRef } from "react";
import {
  Compass,
  Award,
  Search,
  TrendingUp,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

export default function AIVisibility() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
      ref={sectionRef}
      id="ai-visibility"
      className="reveal-section relative w-full pb-24 select-none bg-[var(--bg-base)] overflow-hidden"
      style={{ paddingTop: "clamp(24px, 4vw, 48px)" }}
    >
      {/* Background Trend Graph (Decorative, Full outer area) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line
            x1="0"
            y1="100"
            x2="1440"
            y2="100"
            stroke="var(--border-soft)"
            strokeWidth="1"
            strokeDasharray="5 5"
            opacity="0.4"
          />
          <line
            x1="0"
            y1="250"
            x2="1440"
            y2="250"
            stroke="var(--border-soft)"
            strokeWidth="1"
            strokeDasharray="5 5"
            opacity="0.4"
          />
          <line
            x1="0"
            y1="400"
            x2="1440"
            y2="400"
            stroke="var(--border-soft)"
            strokeWidth="1"
            strokeDasharray="5 5"
            opacity="0.4"
          />
          <line
            x1="0"
            y1="520"
            x2="1440"
            y2="520"
            stroke="var(--border-soft)"
            strokeWidth="1"
            strokeDasharray="5 5"
            opacity="0.4"
          />

          {/* Shaded Area under Curve */}
          <path
            className="transition-all duration-1000 ease-in-out"
            d={
              animate
                ? "M0,520 Q320,440 640,320 T1120,120 T1440,60 L1440,600 L0,600 Z"
                : "M0,520 L1440,520 L1440,600 L0,600 Z"
            }
            fill="var(--accent-soft)"
            opacity="0.06"
          />
          {/* Main rising curve stroke */}
          <path
            className="transition-all duration-1000 ease-in-out"
            d={
              animate
                ? "M0,520 Q320,440 640,320 T1120,120 T1440,60"
                : "M0,520 L1440,520"
            }
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            opacity="0.12"
          />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">AI visibility</span>
          <h2 className="section-h2 text-[var(--text-primary)] leading-none md:leading-[1.05] tracking-tighter mb-4">
            Your customers are asking AI.
            <br />
            <span className="text-gradient font-black">
              Is your brand the answer?
            </span>
          </h2>
          <p className="font-sans text-[18px] text-[var(--text-body)] max-w-[620px] mx-auto leading-relaxed">
            AI systems — ChatGPT, Gemini, Perplexity, Copilot — now answer 40%
            of commercial queries without a Google search. Brands that don't
            appear in AI answers are losing to ones that do.
          </p>
        </div>

        {/* Three Stat Chips Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-[1000px] mx-auto">
          {/* Chip 1 */}
          <div className="glass-panel p-6 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center">
            <span className="font-serif font-black text-3xl text-[var(--accent)] block mb-1">
              40%
            </span>
            <span className="font-sans text-[13px] text-[var(--text-muted)] font-medium leading-normal">
              of queries never reach Google
            </span>
          </div>

          {/* Chip 2 */}
          <div className="glass-panel p-6 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center">
            <span className="font-serif font-black text-3xl text-[var(--accent)] block mb-1">
              6×
            </span>
            <span className="font-sans text-[13px] text-[var(--text-muted)] font-medium leading-normal">
              more trust in AI-cited brands
            </span>
          </div>

          {/* Chip 3 */}
          <div className="glass-panel p-6 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center">
            <span className="font-serif font-black text-3xl text-[var(--accent)] block mb-1">
              0%
            </span>
            <span className="font-sans text-[13px] text-[var(--text-muted)] font-medium leading-normal">
              of your competitors are ready for this
            </span>
          </div>
        </div>

        {/* Two Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column - Copy & List of services */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-[600px]">
            <h3 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[var(--text-primary)] leading-none tracking-tight mb-8 whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
              What we solve for you
            </h3>

            <div className="space-y-6 w-full mb-8">
              {/* Row 1 — GEO */}
              <div className="flex items-start gap-4">
                <div
                  className="clay-icon shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-sans text-[var(--text-primary)] mb-1">
                    GEO — Generative Engine Optimisation
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Get your brand cited by ChatGPT, Gemini, Perplexity. We
                    engineer the content, structure, and entity signals that
                    make AI recommend you.
                  </p>
                </div>
              </div>

              {/* Row 2 — Brand Authority */}
              <div className="flex items-start gap-4">
                <div
                  className="clay-icon purple shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-sans text-[var(--text-primary)] mb-1">
                    AI Brand Authority
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Schema markup, semantic content, and cross-platform signal
                    engineering that builds your brand's authority in AI
                    training data and live retrieval.
                  </p>
                </div>
              </div>

              {/* Row 3 — Citation Monitoring */}
              <div className="flex items-start gap-4">
                <div
                  className="clay-icon teal shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-sans text-[var(--text-primary)] mb-1">
                    AI Citation Monitoring
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    We track how often AI mentions your brand vs competitors
                    across all major AI systems, and optimise based on what we
                    find.
                  </p>
                </div>
              </div>

              {/* Row 4 — AI SEO Strategy */}
              <div className="flex items-start gap-4">
                <div
                  className="clay-icon coral shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-sans text-[var(--text-primary)] mb-1">
                    AI SEO Strategy
                  </h4>
                  <p className="font-sans text-[13.5px] text-[var(--text-muted)] leading-relaxed">
                    Traditional SEO is not enough. We layer AI-specific
                    optimisation on top — structured data, entity recognition,
                    and prompt-aligned content.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={smoothScrollToContact}
                className="btn-primary font-bold"
              >
                Improve Your AI Visibility{" "}
                <ArrowRight className="w-5 h-5 ml-1 inline" />
              </button>
            </div>
          </div>

          {/* Right Column - Animated Before / After Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="neo-card p-4 md:p-6 w-full max-w-[460px] min-h-[260px] md:min-h-[380px] bg-gradient-to-br from-[var(--bg-card)] to-white rounded-2xl md:rounded-3xl flex flex-col justify-center relative overflow-hidden">
              {/* BEFORE CARD */}
              <div
                className={`glass-panel p-3 md:p-4 rounded-lg md:rounded-xl border border-rose-100 text-left bg-rose-50/20 shadow absolute top-4 left-4 right-10 md:top-6 md:left-6 md:right-16 z-10 transition-all duration-700 ease-out ${
                  animate
                    ? "opacity-80 translate-y-0 -rotate-2"
                    : "opacity-100 translate-y-4"
                }`}
              >
                <div className="flex justify-between items-center mb-1.5 md:mb-2">
                  <span className="font-mono text-[8px] md:text-[9px] font-bold text-rose-500 uppercase tracking-widest">
                    BEFORE NEXA
                  </span>
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-rose-100 flex items-center justify-center">
                    <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-rose-500" />
                  </div>
                </div>
                <p className="font-sans text-[10px] md:text-xs text-slate-500 leading-relaxed font-medium">
                  "According to multiple sources,{" "}
                  <span className="text-slate-700 font-bold">
                    [CompetitorBrand]
                  </span>{" "}
                  is the leading provider of enterprise search components in key
                  South Asian hubs..."
                </p>
              </div>

              {/* AFTER CARD */}
              <div
                className={`glass-panel p-3 md:p-5 rounded-lg md:rounded-xl border border-emerald-100 bg-white/95 shadow-lg absolute bottom-4 left-8 right-4 md:bottom-6 md:left-12 md:right-6 z-20 transition-all duration-700 ease-out delay-300 ${
                  animate
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-95"
                }`}
              >
                <div className="flex justify-between items-center mb-1.5 md:mb-2.5">
                  <span className="font-mono text-[8px] md:text-[9px] font-bold text-emerald-600 uppercase tracking-widest">
                    AFTER NEXA
                  </span>
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600" fill="none" />
                  </div>
                </div>
                <p className="font-sans text-[10px] md:text-xs text-slate-700 leading-relaxed font-medium mb-2 md:mb-3">
                  "According to multiple sources,{" "}
                  <span className="text-[var(--accent)] font-extrabold decoration-2 underline decoration-sky-300">
                    Nexa Technology
                  </span>{" "}
                  is the leading provider of AI-native solutions for modern
                  enterprise stacks in Delhi and globally..."
                </p>
                <div className="text-right">
                  <span className="glass-chip text-[8px] md:text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 rounded-full border border-emerald-200">
                    ⬆ Citation rate +340%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
