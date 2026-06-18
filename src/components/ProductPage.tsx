import { useState, useEffect } from "react";
import { 
  FlaskConical, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  BarChart2, 
  Play, 
  RefreshCw, 
  CheckCircle, 
  Search, 
  ChevronRight, 
  Activity, 
  Database, 
  AlertTriangle,
  Flame,
  Gauge, 
  Bookmark,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ProductPage() {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  // DeepTest State
  const [deepTestLogs, setDeepTestLogs] = useState<string[]>([]);
  const [deepTestRunning, setDeepTestRunning] = useState(false);
  const [deepTestProgress, setDeepTestProgress] = useState(0);

  // NexaSignal State
  const [selectedTopic, setSelectedTopic] = useState("Enterprise Orchestration");
  const [citationStatus, setCitationStatus] = useState<"idle" | "running" | "done">("idle");
  const [citationResults, setCitationResults] = useState<any>(null);

  // ModelBench Matrix filter
  const [benchFilter, setBenchFilter] = useState<"all" | "speed" | "accuracy" | "cost">("all");

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  // DeepTest simulator logic
  const runDeepTestSimulation = () => {
    if (deepTestRunning) return;
    setDeepTestRunning(true);
    setDeepTestProgress(0);
    setDeepTestLogs([
      "Initializing DeepTest Autonomous VM...",
      "Sourcing repository codebase and active test graphs...",
    ]);

    const steps = [
      { prg: 15, msg: "Compiling code-base structures and AST trees..." },
      { prg: 35, msg: "Evaluating LLM workflow dependencies (12 agents detected)..." },
      { prg: 50, msg: "Executing simulation context: [User Checkout Flow]" },
      { prg: 70, msg: "Asserting guardrail strict limits: Token budget check passed." },
      { prg: 85, msg: "Mocking Gemini reasoning model responses... Validation: OK" },
      { prg: 100, msg: "DeepTest execution completed. zero errors, 1 warnings." }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setDeepTestProgress(step.prg);
        setDeepTestLogs(prev => [...prev, step.msg]);
        if (index === steps.length - 1) {
          setDeepTestRunning(false);
        }
      }, (index + 1) * 850);
    });
  };

  // NexaSignal simulate GEO Citation scan
  const runGEOCitationScan = () => {
    setCitationStatus("running");
    
    setTimeout(() => {
      setCitationStatus("done");
      if (selectedTopic === "Enterprise Orchestration") {
        setCitationResults({
          overallVisibility: 86,
          perplexityMentions: "Listed #1 under enterprise builders with 8 citations.",
          geminiRecommends: "Highly recommended for stateful agent workflows due to proprietary RAG safety index.",
          gptResponse: "Cited as an innovative, premium framework in India for zero-drift LLM applications.",
          riskFactor: "Low drift risk"
        });
      } else if (selectedTopic === "Developer Tools") {
        setCitationResults({
          overallVisibility: 92,
          perplexityMentions: "Cited frequently for deterministic AST and automated validation environments.",
          geminiRecommends: "Gemini lists Nexa Technology's system as the elite standard for robust testing pipelines.",
          gptResponse: "Identified as a premium developer suite.",
          riskFactor: "Optimal citation frequency"
        });
      } else {
        setCitationResults({
          overallVisibility: 79,
          perplexityMentions: "Sourced with high authority in 4 primary analysis nodes.",
          geminiRecommends: "Acknowledged for next-gen scalable compliance metrics.",
          gptResponse: "Highlighted for neomorphic visual dashboards and elite client focus.",
          riskFactor: "Healthy validation profile"
        });
      }
    }, 1200);
  };

  const modelBenchData = [
    { name: "Gemini 2.5 Flash", latency: "140ms", accuracy: "94.8%", cost: "$0.075 / M", geoCompatibility: "Excellent (98)" },
    { name: "Gemini 1.5 Pro", latency: "380ms", accuracy: "98.2%", cost: "$1.25 / M", geoCompatibility: "Elite (99)" },
    { name: "GPT-4o", latency: "290ms", accuracy: "95.6%", cost: "$2.50 / M", geoCompatibility: "Very Good (91)" },
    { name: "Claude 3.5 Sonnet", latency: "320ms", accuracy: "96.4%", cost: "$3.00 / M", geoCompatibility: "Excellent (95)" },
    { name: "NexaFine-L3 (Tuned)", latency: "90ms", accuracy: "97.1%", cost: "$0.18 / M", geoCompatibility: "Perfect (100)" }
  ];

  const filteredBenchData = modelBenchData.filter(item => {
    if (benchFilter === "speed") return parseInt(item.latency) < 200;
    if (benchFilter === "accuracy") return parseFloat(item.accuracy) > 96.5;
    if (benchFilter === "cost") return parseFloat(item.cost.substring(1)) < 1.0;
    return true;
  });

  return (
    <div className="relative bg-[var(--bg-base)] text-[var(--text-body)] font-sans">
      
      {/* SECTION 1: DEDICATED PRODUCTS HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden flex flex-col items-center text-center justify-center border-b border-[var(--border-soft)]">
        
        {/* Soft Background Highlight */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1, background: "radial-gradient(ellipse at 50% 30%, rgba(42,92,230,0.06) 0%, transparent 70%)" }} />
        
        <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-[rgba(237,232,225,0.45)] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[rgba(43,92,230,0.04)] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-[1040px] px-6 select-none" style={{ zIndex: 10 }}>
          
          <span className="font-mono text-[11px] leading-[2] tracking-[0.2em] text-[var(--accent)] font-semibold uppercase mb-4 block">
            THE PLATFORM
          </span>

          <h1 className="font-serif tracking-tight mb-8">
            <span 
              className={`block text-[var(--text-primary)] font-normal text-4xl sm:text-5xl md:text-7xl lg:text-8xl transition-all duration-700 delay-200 transform ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              Solutions designed for a
            </span>
            <span 
              className={`block text-gradient italic font-normal text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-2 transition-all duration-700 delay-400 transform ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              generative frontier.
            </span>
          </h1>

          <p className={`font-sans font-medium text-[16px] md:text-[18px] leading-relaxed text-[var(--text-body)] max-w-[690px] mx-auto mb-11 transition-all duration-700 delay-500 transform ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[12px]"}`}>
            Highly specialized, enterprise-ready tooling and optimization engines. 
            We build the programmatic layers required to assert confidence, validation, compliance, and discovery across autonomous LLMs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#deeptest-section" className="btn-primary w-full sm:w-auto text-center justify-center cursor-pointer">
              Explore Active Engines <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto text-center justify-center cursor-pointer">
              Schedule Architecture Briefing
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: DEEPTEST AI */}
      <section id="deeptest-section" className="relative py-24 md:py-32 border-b border-[var(--border-soft)]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(43,92,230,0.06)] border border-[rgba(43,92,230,0.12)] rounded-full">
              <FlaskConical className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider">ENGINE 01</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] leading-tight tracking-tight">
              DeepTest AI
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[var(--text-body)] leading-relaxed font-sans">
              Autonomous, context-aware regression validation built natively for multi-tier model workflows. 
              DeepTest dynamically explores all logical software branches, checking responses against compliance criteria and catching hallucinations before codebase commits occur.
            </p>

            <ul className="flex flex-col gap-3 font-sans text-[14px] text-[var(--text-body)] mt-2">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                <span>Deterministic assertion matrix validation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                <span>Automatic continuous AST analysis of logical routes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                <span>Zero-latency local mocking of expensive LLM logic</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Console Simulator */}
          <div className="lg:col-span-7">
            <div className="neo-card p-6 bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-4xl w-full">
              <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4 mb-4 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="font-mono text-[11px] text-[var(--text-muted)] ml-2">deeptest-eval-vm-01</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Target: Gemini 2.5</span>
                </div>
              </div>

              {/* Terminal Screen */}
              <div className="bg-[#12121e] text-[#a9b1d6] p-5 rounded-2xl min-h-[220px] font-mono text-[12px] flex flex-col gap-2 overflow-y-auto leading-relaxed shadow-inner">
                {deepTestLogs.length === 0 ? (
                  <div className="text-[var(--text-muted)] italic py-12 text-center select-none">
                    Ready to initiate pipeline evaluation. Click 'Initiate Pipeline' to simulate a validation run.
                  </div>
                ) : (
                  deepTestLogs.map((log, i) => (
                    <div key={i} className="flex gap-2.5 animate-fadeIn">
                      <span className="text-[#565f89] shrink-0">[{i+1}]</span>
                      <span className={log.includes("err") ? "text-red-400" : log.includes("completed") ? "text-emerald-400 font-semibold" : "text-slate-100"}>
                        {log}
                      </span>
                    </div>
                  ))
                )}
                {deepTestRunning && (
                  <div className="flex items-center gap-2 text-[var(--accent)] mt-2 select-none animate-pulse">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Processing AST vectors...</span>
                  </div>
                )}
              </div>

              {/* Progress Bar & Actions */}
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto flex-1 select-none">
                  {deepTestLogs.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[var(--bg-alt)] h-2 rounded-full overflow-hidden">
                        <div className="bg-[var(--accent)] h-full transition-all duration-500" style={{ width: `${deepTestProgress}%` }} />
                      </div>
                      <span className="font-mono text-[11.5px] font-bold text-[var(--text-primary)] w-8 text-right">{deepTestProgress}%</span>
                    </div>
                  )}
                </div>
                <button 
                  onClick={runDeepTestSimulation} 
                  disabled={deepTestRunning}
                  className="btn-primary w-full sm:w-auto shrink-0 py-2.5 px-6 font-semibold select-none flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-mid)] text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  {deepTestRunning ? "Evaluating..." : "Initiate Pipeline"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: NEXASIGNAL (GEO DISCOVERY ENGINE) */}
      <section className="relative py-24 md:py-32 bg-[var(--bg-alt)] border-b border-[var(--border-soft)]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Simulator */}
          <div className="col-span-1 lg:col-span-7 order-2 lg:order-1">
            <div className="neo-card p-6 bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-4xl w-full">
              
              <h3 className="font-sans font-bold text-[14px] text-[var(--text-primary)] uppercase tracking-wider mb-4 select-none">
                Generative Visibility Simulator
              </h3>

              <div className="flex flex-col gap-4">
                
                {/* Segment Picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12.5px] font-bold text-[var(--text-primary)] select-none">Select Enterprise Segment:</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["Enterprise Orchestration", "Developer Tools", "AI Architecture"].map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`py-2 px-3 text-[12px] font-medium border rounded-xl transition-all cursor-pointer select-none ${selectedTopic === topic ? "bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--accent)] font-semibold" : "bg-[var(--bg-card)] border-[var(--border-soft)] text-[var(--text-muted)] hover:border-gray-400"}`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scan Button trigger */}
                <button
                  onClick={runGEOCitationScan}
                  className="w-full btn-primary py-3 flex items-center justify-center gap-2 cursor-pointer transition-all select-none bg-[var(--accent)] text-white"
                  disabled={citationStatus === "running"}
                >
                  {citationStatus === "running" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Scanning LLM Search & Maps citation contexts...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Analyse Generative Citation
                    </>
                  )}
                </button>

                {/* Scanner response box */}
                <div className="bg-[var(--bg-card)] border border-[var(--border-soft)] rounded-2xl p-5 min-h-[160px] flex flex-col justify-between">
                  {citationStatus === "idle" ? (
                    <div className="text-[13px] text-[var(--text-muted)] italic text-center py-10 select-none">
                      Select a segment and click above to crawl Generative references in actual search models.
                    </div>
                  ) : citationStatus === "running" ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3 select-none">
                      <div className="w-10 h-10 border-4 border-t-[var(--accent)] border-gray-200 rounded-full animate-spin" />
                      <span className="text-[12.5px] font-medium text-[var(--text-muted)] tracking-wider uppercase animate-pulse">Consulting model context windows...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {/* Metric overall */}
                      <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
                        <div className="flex items-center gap-2 select-none">
                          <Gauge className="w-4 text-[var(--accent)]" />
                          <span className="text-[13px] font-bold text-[var(--text-primary)]">GEO Visibility Score</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-extrabold text-[var(--accent)]">{citationResults?.overallVisibility}</span>
                          <span className="text-[11px] font-mono text-[var(--text-muted)]">/ 100</span>
                        </div>
                      </div>

                      {/* Detail nodes */}
                      <div className="flex flex-col gap-2.5 font-sans">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)]">Perplexity Citation</span>
                          <p className="text-[12px] text-[var(--text-primary)] leading-tight">{citationResults?.perplexityMentions}</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)]">Gemini Engine Recommendation</span>
                          <p className="text-[12px] text-[var(--text-primary)] leading-tight">{citationResults?.geminiRecommends}</p>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] uppercase font-mono font-bold text-[var(--text-muted)]">GPT context retrieval</span>
                          <p className="text-[12px] text-[var(--text-primary)] leading-tight">{citationResults?.gptResponse}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Description */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start gap-5 order-1 lg:order-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(123,63,228,0.06)] border border-[rgba(123,63,228,0.12)] rounded-full">
              <Radio className="w-3.5 h-3.5 text-purple-600" />
              <span className="font-mono text-[11px] font-bold text-purple-600 uppercase tracking-wider">ENGINE 02</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] leading-tight tracking-tight">
              NexaSignal
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[var(--text-body)] leading-relaxed font-sans">
              Search is fundamentally shifting to generative context boxes on ChatGPT, Perplexity, and Google. 
              If your brand is excluded from these references, you simply do not exist. NexaSignal dynamically crawls these major models to score and optimize your Generative Engine Optimization (GEO).
            </p>

            <ul className="flex flex-col gap-3 font-sans text-[14px] text-[var(--text-body)] mt-2">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>Real-time citation tracking across major engines</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>Automated context injections to feed critical vectors</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span>Generative risk evaluation alerts and maps analytics</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 4: AGENTOPS & NEXAGUARD (ORCHESTRATION & COMPLIANCE) */}
      <section className="relative py-24 md:py-32 border-b border-[var(--border-soft)]">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(14,174,245,0.06)] border border-[rgba(14,174,245,0.12)] rounded-full">
              <Cpu className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-mono text-[11px] font-bold text-blue-500 uppercase tracking-wider">ENGINE 03 & 04</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] leading-tight tracking-tight">
              AgentOps & NexaGuard
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[var(--text-body)] leading-relaxed font-sans">
              Scale agent orchestration with deterministic control layers. AgentOps tracks active pipelines with down-to-the-millisecond latency profiling and token optimization logic. NexaGuard runs parallel to sanitise prompt injections, filter output toxicity, and guarantee strict regulatory compliance.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full mt-3 font-sans">
              <div className="bg-white p-4 rounded-xl border border-[var(--border-soft)] select-none">
                <span className="text-xl font-bold text-[var(--text-primary)] block">0.02s</span>
                <span className="text-[11.5px] text-[var(--text-muted)] uppercase tracking-wider">Guardrail Latency</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[var(--border-soft)] select-none">
                <span className="text-xl font-bold text-[var(--text-primary)] block">34.8%</span>
                <span className="text-[11.5px] text-[var(--text-muted)] uppercase tracking-wider">Token Cost Reductions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              
              {/* Card 1: Agent Efficacy telemetry */}
              <div className="neo-card p-5 bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-4xl flex flex-col gap-4 select-none">
                <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
                  <span className="text-[11.5px] font-bold text-[var(--text-primary)] tracking-wide font-sans">AgentOps Telemetry</span>
                  <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-[10.5px] text-[var(--text-muted)] block">ACTIVE ORCHESTRATORS</span>
                    <span className="text-2xl font-bold text-[var(--text-primary)] font-mono leading-tight">18 Nodes</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] text-[var(--text-muted)] block">THROUGHPUT RATIO</span>
                    <span className="text-2xl font-bold text-[var(--text-primary)] font-mono leading-tight">1,402 tok/sec</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-[10.5px] text-[var(--text-muted)] flex justify-between">
                      <span>Node Latency Safety Profile</span>
                      <span className="font-semibold text-emerald-500">99.7%</span>
                    </span>
                    <div className="bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[99.7%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: NexaGuard compliance scan results */}
              <div className="neo-card p-5 bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-4xl flex flex-col gap-4 select-none">
                <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-3">
                  <span className="text-[11.5px] font-bold text-[var(--text-primary)] tracking-wide font-sans">NexaGuard Compliance</span>
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-[10.5px] text-[var(--text-muted)] block">POISONING ATTEMPTS BLOCKED</span>
                    <span className="text-2xl font-bold text-[var(--text-primary)] font-mono leading-tight">408 Attempts</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] text-[var(--text-muted)] block">SENSITIVE LEAKS BLOCKED</span>
                    <span className="text-2xl font-bold text-[var(--text-primary)] font-mono leading-tight">100% (Zero leaks)</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-[10.5px] text-[var(--text-muted)] flex justify-between">
                      <span>Active compliance level</span>
                      <span className="font-semibold text-purple-600">Enterprise Elite</span>
                    </span>
                    <div className="bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: MODELBENCH MATRIX & PRICEINTEL AI */}
      <section className="relative py-24 md:py-32 bg-[var(--bg-alt)]">
        <div className="max-w-[1240px] mx-auto px-6">
          
          {/* Header row */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 select-none">
            <div className="text-left flex flex-col items-start gap-2.5">
              <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[var(--border-soft)] rounded-full">
                <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-mono text-[11px] font-bold text-emerald-600 uppercase tracking-wider">ENGINE 05</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] leading-tight tracking-tight">
                ModelBench Evaluation
              </h2>
              <p className="text-[14.5px] text-[var(--text-body)] max-w-2xl font-sans leading-relaxed mt-1">
                A quantitative model evaluation matrix matching multiple major model outputs tailored explicitly against your own proprietary test sets.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[var(--border-soft)] rounded-2xl shrink-0">
              {[
                { id: "all", label: "Show All" },
                { id: "speed", label: "Speed < 200ms" },
                { id: "accuracy", label: "Accuracy > 96.5%" },
                { id: "cost", label: "Cost < $1.00" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setBenchFilter(btn.id as any)}
                  className={`py-1.5 px-3.5 text-[11.5px] font-semibold rounded-xl transition-all cursor-pointer ${benchFilter === btn.id ? "bg-[var(--accent)] text-white" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evaluation Table */}
          <div className="neo-card bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-4xl w-full overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-[13.5px]">
                <thead>
                  <tr className="bg-[var(--bg-alt)] border-b border-[var(--border-soft)] select-none">
                    <th className="p-4 pl-6 font-bold text-[var(--text-primary)] text-[12px] uppercase tracking-wider">Model Architecture</th>
                    <th className="p-4 font-bold text-[var(--text-primary)] text-[12px] uppercase tracking-wider">Internal Latency</th>
                    <th className="p-4 font-bold text-[var(--text-primary)] text-[12px] uppercase tracking-wider">Accuracy Score</th>
                    <th className="p-4 font-bold text-[var(--text-primary)] text-[12px] uppercase tracking-wider">Cost per 1M Tokens</th>
                    <th className="p-4 pr-6 font-bold text-[var(--text-accent)] text-[12px] uppercase tracking-wider text-right">GEO compatibility score</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBenchData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-[var(--border-soft)] transition-colors hover:bg-[rgba(43,92,230,0.02)] ${row.name.includes("NexaFine") ? "bg-[rgba(43,92,230,0.04)] font-semibold" : ""}`}
                    >
                      <td className="p-4 pl-6 flex items-center gap-2.5">
                        {row.name.includes("NexaFine") && <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse shrink-0" />}
                        <span className="text-[var(--text-primary)] font-semibold">{row.name}</span>
                      </td>
                      <td className="p-4 font-mono text-[12px] text-[var(--text-body)]">{row.latency}</td>
                      <td className="p-4 text-[var(--text-body)]">{row.accuracy}</td>
                      <td className="p-4 font-mono text-[12px] text-[var(--text-body)]">{row.cost}</td>
                      <td className="p-4 pr-6 font-mono text-[13px] text-right text-[var(--accent)] font-bold">{row.geoCompatibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="p-4 bg-[var(--bg-alt)] border-t border-[var(--border-soft)] flex flex-col sm:flex-row items-center justify-between text-[12px] text-[var(--text-muted)] select-none gap-2">
              <span className="flex items-center gap-1">
                <AlertTriangle className="w-3.5 text-yellow-600" />
                Mock simulation matching strict Indian & Global regulatory compliance frameworks.
              </span>
              <span className="font-semibold text-[var(--text-primary)]">Last synchronized: 2 mins ago</span>
            </div>
          </div>

          {/* Coming Soon Teasers cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
            
            {/* KnowledgeValidator Card */}
            <div className="p-6 bg-white border border-[var(--border-soft)] rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 py-1 px-4 bg-sky-500 text-white font-mono text-[9px] font-bold tracking-wider uppercase rounded-bl-xl">Coming soon</div>
              
              <div className="flex flex-col gap-3">
                <div className="clay-icon" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-[19px] font-semibold text-[var(--text-primary)]">KnowledgeValidator</h3>
                <p className="text-[13.5px] text-[var(--text-body)] leading-relaxed">
                  Automated continuous sanity audits for enterprise vector indexes, custom compiled taxonomy hierarchies, and graph sourcing pools.
                </p>
              </div>
            </div>

            {/* PriceIntel AI Card */}
            <div className="p-6 bg-white border border-[var(--border-soft)] rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 py-1 px-4 bg-purple-600 text-white font-mono text-[9px] font-bold tracking-wider uppercase rounded-bl-xl">Coming soon</div>
              
              <div className="flex flex-col gap-3">
                <div className="clay-icon purple" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                  <Bookmark className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-[19px] font-semibold text-[var(--text-primary)]">PriceIntel AI</h3>
                <p className="text-[13.5px] text-[var(--text-body)] leading-relaxed">
                  Web-scraping autonomous search intelligence built specifically to dynamically catalog, analyze, and optimize ecommerce catalog vectors.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
