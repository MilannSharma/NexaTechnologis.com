import React, { useState } from "react";
import { 
  ArrowLeft,
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Download, 
  Shield, 
  FileText, 
  ArrowRight, 
  CheckCircle,
  Building,
  Calendar,
  X
} from "lucide-react";

interface ContactPageProps {
  // eslint-disable-next-line no-unused-vars
  navigateTo: (page: "home" | "products" | "blog" | "contact") => void;
}

export default function ContactPage({ navigateTo }: ContactPageProps) {
  const [activeForm, setActiveForm] = useState<"message" | "callback">("message");
  
  // Modals state
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  // Form submission states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  // Form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName("");
      setEmail("");
      setCompany("");
      setService("");
      setMessage("");
    }, 4500);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setName("");
      setPhone("");
    }, 4500);
  };

  const downloadContract = () => {
    const link = document.createElement("a");
    link.href = "/nexa_agreement.pdf";
    link.download = "Nexa_Technology_Service_Agreement.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-body)] font-sans relative pt-[100px] pb-20">
      
      <div className="max-w-[1240px] mx-auto px-6 text-left">
        
        {/* Back navigation */}
        <button 
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2 text-[var(--text-accent)] font-semibold text-[14.5px] mb-8 cursor-pointer hover:underline font-sans"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero title & intro text */}
        <div className="max-w-[800px] mb-12">
          <span className="eyebrow block mb-3">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[var(--text-primary)] leading-[1.1] mb-5">
            Let's build the future of <span className="text-gradient">AI infrastructure</span> together.
          </h1>
          <p className="text-lg text-[var(--text-body)] leading-relaxed max-w-[700px]">
            Have a question, feedback, or looking to integrate autonomous AI agents and GEO strategies in your business? We're ready to tailor a solution.
          </p>
        </div>

        {/* Two-Column Grid: Info (Left) vs Forms (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details + address + download buttons */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Cards Container */}
            <div className="neo-card p-8 border border-white space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">Contact Information</h3>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-alt)] shadow-[inset_2px_2px_5px_rgba(180,165,148,0.3)] flex items-center justify-center text-[var(--text-accent)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Corporate Email</span>
                  <a href="mailto:hello@nexatechnology.ai" className="font-semibold text-[16.5px] hover:text-[var(--accent)] transition-colors">
                    hello@nexatechnology.ai
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-alt)] shadow-[inset_2px_2px_5px_rgba(180,165,148,0.3)] flex items-center justify-center text-[var(--text-accent)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Phone Lines</span>
                  <a href="tel:+918049123456" className="font-semibold text-[16.5px] hover:text-[var(--accent)] transition-colors">
                    +91 80 4912 3456
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-alt)] shadow-[inset_2px_2px_5px_rgba(180,165,148,0.3)] flex items-center justify-center text-[var(--text-accent)] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Operating Hours</span>
                  <p className="font-semibold text-[16.5px] text-[var(--text-primary)]">
                    Mon - Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-200/55">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-alt)] shadow-[inset_2px_2px_5px_rgba(180,165,148,0.3)] flex items-center justify-center text-[var(--text-accent)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Registered Office Address</span>
                  <p className="font-semibold text-[15.5px] text-[var(--text-primary)] leading-relaxed">
                    Nexa Towers, 4th Floor, Tech Hub Cluster,<br />
                    Koramangala 4th Block, Bengaluru,<br />
                    Karnataka, India - 560034
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons (Terms, Privacy, PDF Download) */}
            <div className="flex flex-col gap-4">
              
              {/* PDF Contract Download Button */}
              <button 
                onClick={downloadContract}
                className="w-full flex items-center justify-between p-5 bg-[var(--bg-card)] border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--accent)] hover:translate-y-[-2px] transition-all cursor-pointer text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--text-accent)] shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-[15.5px] text-[var(--text-primary)] block">Corporate Service Agreement</span>
                    <span className="text-[12px] text-[var(--text-muted)] font-mono">Download standard contract PDF</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-muted)]" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Privacy Policy Trigger */}
                <button 
                  onClick={() => setModalType("privacy")}
                  className="flex items-center justify-center gap-2.5 p-4 bg-[var(--bg-card)] border border-slate-200/50 rounded-xl shadow-sm hover:border-[var(--accent)] hover:translate-y-[-2px] transition-all cursor-pointer font-semibold text-[14.5px] text-[var(--text-body)]"
                >
                  <Shield className="w-4.5 h-4.5 text-[var(--text-accent)]" /> Privacy Policy
                </button>

                {/* Terms Trigger */}
                <button 
                  onClick={() => setModalType("terms")}
                  className="flex items-center justify-center gap-2.5 p-4 bg-[var(--bg-card)] border border-slate-200/50 rounded-xl shadow-sm hover:border-[var(--accent)] hover:translate-y-[-2px] transition-all cursor-pointer font-semibold text-[14.5px] text-[var(--text-body)]"
                >
                  <FileText className="w-4.5 h-4.5 text-[var(--text-accent)]" /> Terms of Service
                </button>

              </div>

            </div>

          </div>

          {/* Right Column: Custom interactive form switches (Message vs Callback Request) */}
          <div className="lg:col-span-7">
            
            {/* Form Type Switch Buttons */}
            <div className="flex bg-[var(--bg-alt)] p-1 rounded-xl shadow-[inset_2px_2px_5px_rgba(180,165,148,0.25)] mb-6 max-w-sm">
              <button 
                onClick={() => setActiveForm("message")}
                className={`flex-1 py-3 text-center rounded-lg font-semibold text-[14px] cursor-pointer transition-all ${activeForm === "message" ? "bg-white text-[var(--text-primary)] shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
              >
                Send Message
              </button>
              <button 
                onClick={() => setActiveForm("callback")}
                className={`flex-1 py-3 text-center rounded-lg font-semibold text-[14px] cursor-pointer transition-all ${activeForm === "callback" ? "bg-white text-[var(--text-primary)] shadow-sm" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
              >
                Request Callback
              </button>
            </div>

            {/* Main Email Message Form */}
            {activeForm === "message" ? (
              <div className="glass-panel p-8 border border-white">
                {formSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-5">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">Message Sent Successfully!</h3>
                    <p className="text-[var(--text-muted)] max-w-sm">
                      Thank you for reaching out, {name || "there"}. One of our AI Strategy experts will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="space-y-5">
                    
                    <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-[var(--text-accent)]" /> Project Details Form
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group mb-0">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Arjun Sharma" 
                          className="neo-inset"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>Work Email *</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="arjun@company.com" 
                          className="neo-inset"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group mb-0">
                        <label>Company / Organization</label>
                        <input 
                          type="text" 
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Corp" 
                          className="neo-inset"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>What are you looking for? *</label>
                        <select 
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="neo-inset"
                          title="Select a service area"
                        >
                          <option value="">Select a service area</option>
                          <option value="avogeo">AI Presence & GEO Audit</option>
                          <option value="agents">AI Agents & Automation Build</option>
                          <option value="rag">Knowledge Infrastructure (RAG)</option>
                          <option value="dev">AI-Native Software Build</option>
                          <option value="consult">AI Transformation Consulting</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Describe your challenge</label>
                      <textarea 
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the project, timelines, and current bottlenecks..." 
                        className="neo-inset"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full justify-center py-4 cursor-pointer"
                    >
                      Submit Consultation Request <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    
                    <p className="text-xs text-[var(--text-muted)] text-center mt-2">
                      🔒 Your data is processed in accordance with our PDP privacy guidelines.
                    </p>
                  </form>
                )}
              </div>
            ) : (
              /* Callback request Form */
              <div className="glass-panel p-8 border border-white">
                {callbackSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-5">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">Callback Scheduled!</h3>
                    <p className="text-[var(--text-muted)] max-w-sm">
                      We've queued a callback for {name}. An AI developer will call you at {phone} within 4 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-6">
                    
                    <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[var(--text-accent)]" /> Request 10-Min Strategy Call
                    </h3>

                    <p className="text-[var(--text-body)] text-[14.5px] leading-relaxed">
                      Need a quick answer? Skip the long forms. Provide your number below and we will call you back during office hours to answer your questions.
                    </p>

                    <div className="form-group">
                      <label>Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Arjun Sharma" 
                        className="neo-inset"
                      />
                    </div>

                    <div className="form-group">
                      <label>Contact Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210" 
                        className="neo-inset"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full justify-center py-4 cursor-pointer"
                    >
                      Request Call Back <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    
                  </form>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* OVERLAY LEGAL MODALS */}
      {modalType !== null && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="neo-card max-w-[700px] w-full max-h-[85vh] flex flex-col border border-white bg-[var(--bg-elevated)] p-8 shadow-2xl relative">
            
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-4">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                {modalType === "privacy" ? (
                  <>
                    <Shield className="w-6 h-6 text-[var(--text-accent)]" /> Privacy Policy
                  </>
                ) : (
                  <>
                    <FileText className="w-6 h-6 text-[var(--text-accent)]" /> Terms and Conditions
                  </>
                )}
              </h3>
              <button 
                onClick={() => setModalType(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--bg-base)] text-[var(--text-body)] hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal content body */}
            <div className="flex-1 overflow-y-auto text-left text-sm text-[var(--text-body)] leading-relaxed space-y-4 font-sans pr-2">
              {modalType === "privacy" ? (
                <>
                  <p className="font-semibold">Last Updated: June 18, 2026</p>
                  <p>
                    Nexa Technology values your privacy and is committed to protecting your personal and corporate datasets. This policy outlines how we gather, process, and protect your information when utilizing our AI services and landing pages.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">1. Data Ingestion & Storage</h4>
                  <p>
                    All customer inputs collected via our forms, callback triggers, or service portals are encrypted in transit using SSL/TLS algorithms. Corporate data evaluated during audits is stored in secure, logically separated tenant containers inside GCP-managed data centers located in India and European zones.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">2. LLM Data Retention Guidelines</h4>
                  <p>
                    We guarantee that zero client information, proprietary codes, or RAG content datasets submitted to Nexa systems are shared with third-party LLM vendors for model training or tuning. All API calls are mapped under zero-retention developer agreements.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">3. User Controls</h4>
                  <p>
                    You maintain full rights to delete your collected contact listings or request a compliance export of archived project descriptions. Contact privacy@nexatechnology.ai to initiate queries.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold">Last Updated: June 18, 2026</p>
                  <p>
                    These terms govern the pre-launch engagement agreements and consulting services offered by Nexa Technology to prospective corporate clients.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">1. Service Scope</h4>
                  <p>
                    Nexa Technology provides custom artificial intelligence software builds, Generative Engine Optimization (GEO) audits, and retrieval infrastructure pipelines. Detailed milestones are mapped individually under signed Service Agreements.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">2. Intellectual Property</h4>
                  <p>
                    Unless otherwise specified under signed contract addendums, all custom pipelines, agent architectures, and structured databases built explicitly for a client are assigned to that client upon final payment capture. Nexa retains rights to its standard pre-built libraries and engine modules.
                  </p>
                  <h4 className="font-serif text-[16px] font-bold text-[var(--text-primary)]">3. Liabilities</h4>
                  <p>
                    Nexa Technology delivers its pre-launch experimental tools on an "as-is" basis. While we verify and guarantee AI accuracy metrics under strict QA checks, Nexa does not assume liability for unexpected LLM hallucinations or subsequent search engine crawler updates.
                  </p>
                </>
              )}
            </div>

            {/* Modal footer close */}
            <div className="border-t border-slate-200/60 pt-4 mt-4 text-right">
              <button 
                onClick={() => setModalType(null)}
                className="btn-primary py-2 px-6 text-sm cursor-pointer"
              >
                I Understand
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
