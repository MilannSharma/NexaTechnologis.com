import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  Cpu, 
  Search, 
  Layers, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface RolePill {
  title: string;
  icon: any;
  color: string;
}

export default function CareersTeaser() {
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

  const roles: RolePill[] = [
    { title: "Product Designer", icon: Palette, color: "blue" },
    { title: "AI Engineer", icon: Cpu, color: "purple" },
    { title: "GEO Specialist", icon: Search, color: "teal" },
    { title: "Full Stack Developer", icon: Layers, color: "coral" }
  ];

  const smoothScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="careers" 
      className="relative w-full py-24 select-none overflow-hidden"
      style={{
        backgroundColor: "var(--bg-base)",
        backgroundImage: "linear-gradient(135deg, rgba(43, 92, 230, 0.04) 0%, rgba(123, 63, 228, 0.04) 100%)"
      }}
    >
      <div 
        style={{ maxWidth: "760px", margin: "0 auto" }} 
        className={`px-6 text-center transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        
        {/* Title Group */}
        <span className="eyebrow block mb-3">Join Us</span>
        
        <h2 className="text-[var(--text-h1)] font-bold tracking-tight mb-5 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          We're hiring people who <br />
          <span className="text-gradient font-black">think in systems.</span>
        </h2>

        <p className="text-[var(--text-body)] text-[16px] leading-[1.8] max-w-[620px] mx-auto mb-10 font-sans">
          We are a small, elite team building critical digital ecosystems. If you analyze AI architectures deeply, appreciate raw software simplicity, love tackling hard problems, and want to establish yourself at the literal frontier — we would love to talk.
        </p>

        {/* Roles wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {roles.map((role, idx) => {
            const RoleIcon = role.icon;
            return (
              <div 
                key={idx}
                className="glass-chip flex items-center gap-2.5 px-4.5 py-3 transition-transform hover:-translate-y-0.5"
                style={{
                  boxShadow: "2px 2px 6px rgba(180, 165, 148, 0.15), -1px -1px 4px rgba(255, 255, 255, 0.80)"
                }}
              >
                {/* Embedded dynamic rounded icon wrapper */}
                <div className={`clay-icon ${role.color} shrink-0`} style={{ width: "24px", height: "24px", borderRadius: "6px" }}>
                  <RoleIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[13px] font-sans font-semibold text-[var(--text-primary)]">
                  {role.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Primary Action Button */}
        <div>
          <button 
            onClick={smoothScrollToContact}
            className="btn-primary"
          >
            <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: "3s" }} /> View Open Roles <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
