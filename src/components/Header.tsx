import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Menu, 
  X
} from "lucide-react";

interface HeaderProps {
  currentPage?: "home" | "services" | "products" | "blog" | "contact";
  // eslint-disable-next-line no-unused-vars
  navigateTo?: (page: "home" | "services" | "products" | "blog" | "contact", serviceId?: string | null) => void;
}

export default function Header({ currentPage = "home", navigateTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToSection = (id: string) => {
    setIsMobileOpen(false);
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigateTo) {
      navigateTo("home");
    } else {
      window.location.href = "/";
    }
  };

  const handleLinkClick = (page: "home" | "services" | "products" | "blog" | "contact", sectionId?: string, serviceId?: string | null) => {
    setIsMobileOpen(false);
    if (navigateTo) {
      navigateTo(page, serviceId);
    }
    if (sectionId) {
      setTimeout(() => {
        smoothScrollToSection(sectionId);
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          
          {/* Brand Logo */}
          <a href="/" className="flex items-center group" onClick={handleLogoClick}>
            <img 
               src="/Nexa_full_logo-removebg-preview.png" 
               alt="Nexa Technology" 
               className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                 isScrolled ? "h-[50px] md:h-[60px]" : "h-[80px] md:h-[90px]"
               }`}
               referrerPolicy="no-referrer"
             />
          </a>

          {/* Desktop Navigation Link Menu - centered in navbar */}
          <div className="hidden lg:flex items-center gap-9 h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button 
              onClick={() => handleLinkClick("home")}
              className={`font-sans text-[14.5px] font-medium transition-colors hover:text-[var(--accent)] tracking-wide cursor-pointer ${currentPage === "home" ? "text-[var(--accent)] font-semibold" : "text-[var(--text-body)]"}`}
            >
              Home
            </button>

            <button 
              onClick={() => handleLinkClick("services")}
              className={`font-sans text-[14.5px] font-medium transition-colors hover:text-[var(--accent)] tracking-wide cursor-pointer ${currentPage === "services" ? "text-[var(--accent)] font-semibold" : "text-[var(--text-body)]"}`}
            >
              Services
            </button>

            <button 
              onClick={() => handleLinkClick("products")}
              className={`font-sans text-[14.5px] font-medium transition-colors hover:text-[var(--accent)] tracking-wide cursor-pointer ${currentPage === "products" ? "text-[var(--accent)] font-semibold" : "text-[var(--text-body)]"}`}
            >
              Products
            </button>

            <button 
              onClick={() => handleLinkClick("blog")}
              className={`font-sans text-[14.5px] font-medium transition-colors hover:text-[var(--accent)] tracking-wide cursor-pointer ${currentPage === "blog" ? "text-[var(--accent)] font-semibold" : "text-[var(--text-body)]"}`}
            >
              Blogs
            </button>

          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <button 
              className="btn-primary nav-cta nav-cta-btn flex items-center gap-2 cursor-pointer animate-pulse-subtle"
              onClick={() => handleLinkClick("contact")}
            >
              Contact Us <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button 
            id="mobile-hamburger"
            className="nav-hamburger lg:hidden flex items-center justify-center p-2 rounded-full transition-colors focus:ring-2 focus:ring-[var(--accent)] cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            {...{ "aria-expanded": isMobileOpen ? "true" : "false" }}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 shrink-0 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-6 h-6 shrink-0 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer with clean, flat links */}
      {isMobileOpen && (
        <div 
          id="mobile-drawer" 
          className="lg:hidden fixed inset-0 z-[999] pt-[100px] flex flex-col bg-[var(--bg-base)] animate-slideIn select-none"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
            <button 
              onClick={() => handleLinkClick("home")}
              className="text-left text-2xl font-bold font-sans text-[var(--text-primary)] hover:text-[var(--accent)] py-2"
            >
              Home
            </button>

            <button 
              onClick={() => handleLinkClick("services")}
              className={`text-left text-2xl font-bold font-sans hover:text-[var(--accent)] py-2 ${currentPage === "services" ? "text-[var(--accent)]" : "text-[var(--text-primary)]"}`}
            >
              Services
            </button>

            <button 
              onClick={() => handleLinkClick("products")}
              className="text-left text-2xl font-bold font-sans text-[var(--text-primary)] hover:text-[var(--accent)] py-2"
            >
              Products
            </button>

            <button 
              onClick={() => handleLinkClick("blog")}
              className="text-left text-2xl font-bold font-sans text-[var(--text-primary)] hover:text-[var(--accent)] py-2"
            >
              Blogs
            </button>
            <button 
              className="btn-primary mt-6 py-3.5 justify-center text-[15px] cursor-pointer flex items-center gap-2"
              onClick={() => handleLinkClick("contact")}
            >
              Contact Team <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

