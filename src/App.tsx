import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DevelopmentServices from "./components/DevelopmentServices";
import AIVisibility from "./components/AIVisibility";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import Blog from "./components/Blog";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "products" | "blog" | "contact">("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // GSAP ScrollTrigger Section Reveal Animations
  useEffect(() => {
    if (currentPage !== "home") return;

    // We target the main sections to reveal with a gorgeous 3D fluid upward roll and tilt as the user scrolls
    const sections = ["#development", "#ai-visibility", "#contact"];

    const ctx = gsap.context(() => {
      sections.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert(); // Automatically reverts and destroys ScrollTriggers correctly!
    };
  }, [currentPage]);

  // Synchronize state with URL hash routing for continuous preview robustness
  useEffect(() => {
    // Check initial hash on load
    const initialHash = window.location.hash;
    if (initialHash === "#products" || initialHash.startsWith("#products-detail")) {
      setCurrentPage("products");
    } else if (initialHash === "#blog") {
      setCurrentPage("blog");
    } else if (initialHash === "#contact-page") {
      setCurrentPage("contact");
    } else if (initialHash === "#services" || initialHash.startsWith("#services/")) {
      setCurrentPage("services");
      const parts = initialHash.split("/");
      if (parts.length > 1) {
        setSelectedServiceId(parts[1]);
      } else {
        setSelectedServiceId(null);
      }
    } else {
      setCurrentPage("home");
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#products" || hash.startsWith("#products-detail")) {
        setCurrentPage("products");
        window.scrollTo({ top: 0, behavior: "instant" as "instant" });
      } else if (hash === "#blog") {
        setCurrentPage("blog");
        window.scrollTo({ top: 0, behavior: "instant" as "instant" });
      } else if (hash === "#contact-page") {
        setCurrentPage("contact");
        window.scrollTo({ top: 0, behavior: "instant" as "instant" });
      } else if (hash === "#services" || hash.startsWith("#services/")) {
        setCurrentPage("services");
        const parts = hash.split("/");
        if (parts.length > 1) {
          setSelectedServiceId(parts[1]);
        } else {
          setSelectedServiceId(null);
        }
        window.scrollTo({ top: 0, behavior: "instant" as "instant" });
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: "home" | "services" | "products" | "blog" | "contact", serviceId?: string | null) => {
    setCurrentPage(page);
    if (page === "products") {
      window.location.hash = "#products";
    } else if (page === "blog") {
      window.location.hash = "#blog";
    } else if (page === "contact") {
      window.location.hash = "#contact-page";
    } else if (page === "services") {
      if (serviceId) {
        setSelectedServiceId(serviceId);
        window.location.hash = `#services/${serviceId}`;
      } else {
        setSelectedServiceId(null);
        window.location.hash = "#services";
      }
    } else {
      window.history.pushState(null, "", window.location.pathname || "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-body)] antialiased selection:bg-[var(--accent)] selection:text-white">
      
      {/* Header component now receives routing props for flat flat-link navigation */}
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === "home" && (
        // Landing (Home) Page Layout & Sections
        <main className="relative w-full overflow-x-hidden">
          
          {/* Section 1 — Interactive WEBGL 3D Particle system + brand introduction */}
          <section id="hero-section">
            <Hero />
          </section>

          {/* Section 01: Development Services Carousel */}
          <DevelopmentServices />

          {/* Section 03: AI Visibility & SEO */}
          <AIVisibility />

          {/* Section 05: Contact Form */}
          <ContactForm />

        </main>
      )}

      {currentPage === "services" && (
        // Dedicated Services Page (Listing + Subpage Details)
        <main className="relative w-full overflow-x-hidden animate-fadeIn">
          <ServicesPage 
            selectedServiceId={selectedServiceId} 
            setSelectedServiceId={setSelectedServiceId} 
          />
        </main>
      )}

      {currentPage === "products" && (
        // Dedicated Product Page view
        <main className="relative w-full overflow-x-hidden animate-fadeIn">
          
          {/* Detailed Product Page Sections */}
          <ProductPage />

          {/* Persistent Contact CTA Form for lead capturing */}
          <ContactForm />

        </main>
      )}

      {currentPage === "blog" && (
        // Dedicated Blog Page view
        <main className="relative w-full overflow-x-hidden animate-fadeIn">
          <Blog navigateTo={navigateTo} />
        </main>
      )}

      {currentPage === "contact" && (
        // Dedicated Contact Page view
        <main className="relative w-full overflow-x-hidden animate-fadeIn">
          <ContactPage navigateTo={navigateTo} />
        </main>
      )}

      {/* Footer Details */}
      <Footer navigateTo={navigateTo} />

    </div>
  );
}
