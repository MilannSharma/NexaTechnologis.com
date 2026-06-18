import { useState } from "react";
import { 
  Linkedin, 
  Twitter, 
  Github 
} from "lucide-react";

interface FooterProps {
  // eslint-disable-next-line no-unused-vars
  navigateTo?: (page: "home" | "services" | "products" | "blog" | "contact", serviceId?: string | null) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const [legalMessage, setLegalMessage] = useState<string | null>(null);

  const smoothScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleLegalClick = (type: "privacy" | "terms") => {
    if (navigateTo) {
      navigateTo("contact");
    } else {
      if (type === "privacy") {
        setLegalMessage("Nexa Technology's privacy controls are engineered to fulfill global data-retention sandboxes and Indian PDP regulations.");
      } else {
        setLegalMessage("Standard pre-launch subscription agreements of Nexa Technology apply to all experimental builds.");
      }
      setTimeout(() => {
        setLegalMessage(null);
      }, 4000);
    }
  };

  return (
    <footer 
      id="footer" 
      className="relative w-full bg-[var(--bg-alt)] border-t border-[var(--border-soft)] pt-20 pb-10 select-none z-10 text-left"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            
            <a 
              href="#" 
              className="flex items-center group" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (navigateTo) navigateTo("home"); 
                else window.scrollTo({ top: 0, behavior: "smooth" }); 
              }}
            >
              <img 
                src="/Nexa_full_logo-removebg-preview.png" 
                alt="Nexa Technology" 
                className="h-[120px] md:h-[155px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="font-sans text-[13px] text-[var(--text-muted)] leading-relaxed max-w-[280px] mt-1.5">
              The full-spectrum AI company.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-3">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 footer-col text-left">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-5">Company</h4>
            <div className="flex flex-col gap-1.5">
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (navigateTo) navigateTo("home"); 
                  else window.scrollTo({ top: 0, behavior: "smooth" }); 
                }}
              >
                About Us
              </a>
              <a 
                href="#products" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (navigateTo) navigateTo("products"); 
                  else smoothScrollToSection("products"); 
                }}
              >
                Products
              </a>
              <a 
                href="#blog" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (navigateTo) navigateTo("blog"); 
                  else smoothScrollToSection("ai-visibility"); 
                }}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (navigateTo) navigateTo("contact"); 
                  else smoothScrollToSection("contact"); 
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 footer-col text-left">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-5">Services</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#services/saas" onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo("services", "saas"); }}>Mobile & Web Dev</a>
              <a href="#services/geo" onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo("services", "geo"); }}>AI Presence</a>
              <a href="#services/agentic" onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo("services", "agentic"); }}>AI Agents</a>
              <a href="#services/knowledge" onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo("services", "knowledge"); }}>Knowledge Infra</a>
              <a href="#services/consulting" onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo("services", "consulting"); }}>Consulting</a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 footer-col text-left">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-5">Legal</h4>
            <div className="flex flex-col gap-1.5">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); handleLegalClick("privacy"); }}>Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); handleLegalClick("terms"); }}>Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Legal temporary tooltip overlay inside Footer bar */}
        {legalMessage && (
          <div className="mt-8 bg-white/90 border border-slate-200 text-xs font-mono py-2.5 px-4 rounded-lg shadow-sm text-[var(--text-body)] select-none">
            {legalMessage}
          </div>
        )}

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-soft)] pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center text-[13px] font-sans text-[var(--text-muted)] gap-4">
          <div>
            © 2026 Nexa Technology. All rights reserved.
          </div>
          <div className="font-semibold">
            Made in India 🇮🇳
          </div>
        </div>

      </div>

      <style>{`
        .footer-col h4 {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .footer-col a {
          display: block; font-family: var(--font-body);
          font-size: 14px; color: var(--text-body);
          text-decoration: none; padding: 4px 0;
          transition: color 0.2s ease;
        }
        .footer-col a:hover { color: var(--accent); }
      `}</style>
    </footer>
  );
}
