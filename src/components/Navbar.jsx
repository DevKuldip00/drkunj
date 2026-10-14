import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from "lucide-react";
import { doctorData } from "../data/clinicData";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    { name: "About Dr. Patel", href: "#about" },
    { name: "Clinical Standards", href: "#standards" },
    { name: "Locations & Timings", href: "#locations" },
    { name: "Patient FAQs", href: "#faqs" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          backgroundColor: isScrolled ? "rgba(251, 249, 245, 0.92)" : "rgba(251, 249, 245, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 4px 20px -2px rgba(18, 24, 21, 0.05)" : "none",
          animation: "heroFadeIn 0.8s ease-out forwards",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo Brand */}
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              group: "brand",
            }}
            aria-label="Dr. Kunj Patel - Home"
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.45rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              DR. KUNJ PATEL
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent-gold-dark)",
                marginTop: "2px",
              }}
            >
              M.D. Dermatology & Cosmetology
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{ display: "none" }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Action CTAs */}
          <div style={{ display: "none", alignItems: "center", gap: "1rem" }} className="desktop-actions">
            <a
              href={`tel:${doctorData.phoneClean}`}
              className="btn btn-secondary"
              style={{ padding: "0.65rem 1.2rem", fontSize: "0.88rem" }}
              title="Call IRIS Hospital Anand / Dr. Jayant Shah Hospital Nadiad"
            >
              <Phone size={15} style={{ color: "var(--accent-sage)" }} />
              <span>{doctorData.primaryPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: "0.65rem 1.35rem", fontSize: "0.88rem" }}
            >
              <Calendar size={15} />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle"
            style={{
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(18, 24, 21, 0.5)",
          backdropFilter: "blur(6px)",
          zIndex: 49,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        style={{
          position: "fixed",
          top: "var(--header-height)",
          left: 0,
          right: 0,
          background: "#FFFFFF",
          zIndex: 50,
          padding: "2rem 1.5rem",
          boxShadow: "var(--shadow-xl)",
          borderBottom: "1px solid var(--border-gold)",
          transform: mobileMenuOpen ? "translateY(0)" : "translateY(-120%)",
          opacity: mobileMenuOpen ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  display: "block",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", paddingTop: "0.5rem" }}>
          <a
            href={`tel:${doctorData.phoneClean}`}
            className="btn btn-secondary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <Phone size={16} />
            <span>Call {doctorData.primaryPhone}</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <Calendar size={16} />
            <span>Schedule Consultation</span>
          </button>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textAlign: "center",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <MapPin size={14} style={{ color: "var(--accent-gold)" }} />
          <span>IRIS Hospital Anand & Dr. Jayant Shah Hospital Nadiad</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}