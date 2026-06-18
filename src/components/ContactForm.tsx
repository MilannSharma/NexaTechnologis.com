import { useEffect, useRef, useState, FormEvent } from "react";
import { 
  Mail, 
  Globe, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !service) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setIsSubmitted(true);
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="reveal-section relative w-full pb-24 select-none bg-[var(--bg-base)] overflow-hidden text-left"
      style={{ paddingTop: "var(--space-section)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Copy and Contact Info */}
        <div className={`lg:col-span-6 flex flex-col items-start transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <span className="eyebrow block mb-3">GET IN TOUCH</span>
          
          <h2 className="text-[var(--text-h1)] font-serif font-black tracking-tighter text-[var(--text-primary)] leading-none md:leading-[1.05] mb-6">
            Let's figure out <br />
            where AI fits for <br />
            <span className="text-gradient font-black">your business.</span>
          </h2>

          <p className="font-sans text-[18px] text-[var(--text-body)] leading-relaxed max-w-[460px] mb-8">
            No generic playbooks. No upselling. We spend 30 minutes understanding your situation and tell you exactly what we'd do — and whether that means working with us.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-5 mb-8 w-full">
            
            {/* Email link */}
            <div className="flex items-center gap-4">
              <div className="clay-icon shrink-0" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="font-sans">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-0.5">SEND AN EMAIL</span>
                <a 
                  href="mailto:hello@nexatechnology.ai" 
                  className="text-[16px] font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-250"
                >
                  hello@nexatechnology.ai
                </a>
              </div>
            </div>

            {/* Website link */}
            <div className="flex items-center gap-4">
              <div className="clay-icon purple shrink-0" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="font-sans">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-0.5">VISIT WEBSITE</span>
                <span className="text-[16px] font-bold text-[var(--text-primary)] select-all">
                  nexatechnology.ai
                </span>
              </div>
            </div>

            {/* Map Address */}
            <div className="flex items-center gap-4">
              <div className="clay-icon teal shrink-0" style={{ width: "48px", height: "48px", borderRadius: "12px" }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="font-sans">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-0.5">OUR LOCATION</span>
                <span className="text-[16px] font-bold text-[var(--text-primary)]">
                  India & Global
                </span>
              </div>
            </div>

          </div>

          {/* Social icons row */}
          <div className="flex gap-4 items-center">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-slate-200/50 flex items-center justify-center shadow-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:translate-y-[-2px] transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Premium Form with transitions */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
          
          <div className="w-full max-w-[480px] relative min-h-[460px] flex items-center justify-center">
            
            {/* Form State */}
            {!isSubmitted ? (
              <div className="glass-panel w-full p-8 rounded-3xl text-left border border-white">
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Your Name */}
                  <div className="form-group">
                    <label htmlFor="name-input">Your Name *</label>
                    <input 
                      id="name-input"
                      type="text" 
                      className="neo-inset w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Arjun Sharma"
                      required
                    />
                  </div>

                  {/* Work Email */}
                  <div className="form-group">
                    <label htmlFor="email-input">Work Email *</label>
                    <input 
                      id="email-input"
                      type="email" 
                      className="neo-inset w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="arjun@company.com"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label htmlFor="company-input">Company</label>
                    <input 
                      id="company-input"
                      type="text" 
                      className="neo-inset w-full"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  {/* dropdown selector */}
                  <div className="form-group">
                    <label htmlFor="select-intent">What are you looking for? *</label>
                    <select 
                      id="select-intent"
                      className="neo-inset w-full bg-[var(--bg-alt)] block cursor-pointer"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Web / SaaS Development">Web / SaaS Development</option>
                      <option value="Ecommerce Ecosystem">Ecommerce Ecosystem</option>
                      <option value="AI-Native Software Build">AI-Native Software Build</option>
                      <option value="AI Agents & Automation">AI Agents & Automation</option>
                      <option value="AI Visibility / GEO">AI Visibility / GEO</option>
                      <option value="Knowledge Infrastructure">Knowledge Infrastructure</option>
                      <option value="AI Transformation Consulting">AI Transformation Consulting</option>
                      <option value="Product Early Access">Product Early Access</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  {/* Textarea details */}
                  <div className="form-group">
                    <label htmlFor="details-input">Tell us more</label>
                    <textarea 
                      id="details-input"
                      rows={4}
                      className="neo-inset w-full"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Briefly describe your situation or goal."
                    />
                  </div>

                  {showError && (
                    <p className="text-red-500 font-mono text-xs font-bold uppercase tracking-wider">
                      Please satisfy all required fields with *
                    </p>
                  )}

                  {/* Submit CTA */}
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full justify-center text-center py-4 font-bold rounded-xl"
                    >
                      Send Message <ArrowRight className="w-5 h-5 ml-1 inline" />
                    </button>
                  </div>

                  <p className="text-center font-sans text-xs text-[var(--text-muted)] mt-4">
                    We respond within 24 hours. No spam, ever.
                  </p>

                </form>
              </div>
            ) : (
              /* Success State */
              <div className="glass-panel w-full p-10 rounded-3xl text-center bg-white border border-emerald-100 shadow-xl flex flex-col items-center justify-center animate-fadeIn duration-500">
                <div className="clay-icon green mb-6" style={{ width: "72px", height: "72px", borderRadius: "50%" }}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-[28px] font-bold text-[var(--text-primary)] mb-3">
                  Message sent!
                </h3>
                <p className="font-sans text-[16px] text-[var(--text-muted)] leading-relaxed max-w-xs">
                  We'll be in touch with a customized AI plan within 24 hours.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        label {
          display: block; 
          font-family: var(--font-body);
          font-size: 14px; 
          font-weight: 500;
          color: var(--text-body); 
          margin-bottom: 8px;
          text-align: left;
        }
        .form-group { margin-bottom: 20px; }
        .neo-inset {
          width: 100%; 
          padding: 13px 16px;
          background: var(--bg-alt);
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          box-shadow: var(--neo-shadow-in);
          font-family: var(--font-body); 
          font-size: 16px;
          color: var(--text-primary); 
          outline: none;
          transition: all 0.2s ease;
          -webkit-appearance: none;
        }
        .neo-inset:focus {
          border-color: var(--accent);
          box-shadow: var(--neo-shadow-in), 0 0 0 3px rgba(43,92,230,0.12);
        }
        .neo-inset::placeholder { color: var(--text-muted); }
      `}</style>
    </section>
  );
}
