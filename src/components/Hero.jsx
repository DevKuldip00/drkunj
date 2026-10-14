import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";
import { doctorData } from "../data/clinicData";

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "calc(var(--header-height) + 2.5rem)",
        paddingBottom: "4.5rem",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Restrained, slow decorative background ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "55%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(194, 162, 122, 0.16) 0%, rgba(42, 72, 60, 0.08) 50%, rgba(251, 249, 245, 0) 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "ambientGlow 14s ease-in-out infinite alternate",
        }}
      />
      
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          left: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42, 72, 60, 0.09) 0%, rgba(251, 249, 245, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Text Column */}
          <div style={{ maxWidth: "620px" }}>
            {/* Top Verified Location & Doctor Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.4rem 1rem",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-gold)",
                borderRadius: "var(--radius-pill)",
                boxShadow: "var(--shadow-sm)",
                marginBottom: "1.4rem",
                animation: "heroSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-sage)",
                  display: "inline-block",
                  animation: "pulseDot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                Consultant Dermatologist • Anand & Nadiad
              </span>
            </div>

            {/* Main Headline with line-by-line reveal */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "1.3rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "heroSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
                }}
              >
                Science-Led Dermatology &
              </span>
              <span
                style={{
                  display: "block",
                  color: "var(--accent-sage)",
                  animation: "heroSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
                }}
              >
                Aesthetic Precision.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.68,
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                animation: "heroFadeIn 0.8s ease-out 0.3s both",
              }}
            >
              Comprehensive clinical dermatology, specialized trichology, and advanced aesthetic care by{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {doctorData.name}
              </strong>
              , M.D. (Dermatology, Venereology & Leprosy). Grounded in diagnostic depth and hospital-grade sterile safety.
            </p>

            {/* Primary & Secondary Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "2.4rem",
                animation: "heroSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both",
              }}
            >
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: "0.95rem 2rem", fontSize: "1rem" }}
              >
                <span>Schedule Consultation</span>
                <span className="btn-icon-glide">
                  <ArrowRight size={18} />
                </span>
              </button>

              <a
                href={doctorData.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "0.95rem 1.8rem", fontSize: "1rem" }}
                title="Message Dr. Kunj Patel's Clinic on WhatsApp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
                animation: "heroFadeIn 0.9s ease-out 0.5s both",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <CheckCircle2 size={18} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>M.D. Dermatology</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Gujarat University Alumnus</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <ShieldCheck size={18} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>Sterile Surgical Suite</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Hospital-Grade Safety</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <Clock size={18} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)" }}>Mon – Sat OPD</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>IRIS Hospital Anand</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column with subtle scale from 1.04 to 1.0 */}
          <div
            style={{
              position: "relative",
              animation: "heroImageScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            {/* Visual Container */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid var(--border-gold)",
                aspectRatio: "16 / 11",
                backgroundColor: "var(--bg-surface-elevated)",
              }}
            >
              <img
                src="/assets/images/hero.jpg"
                alt="Dr. Kunj Patel Dermatology & Aesthetic Clinic Reception Ambiance"
                loading="eager"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Gradient Vignette overlay for editorial warmth */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(18, 24, 21, 0.04) 0%, rgba(18, 24, 21, 0.35) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Floating Live Clinic Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.2rem",
                  left: "1.2rem",
                  right: "1.2rem",
                  background: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(10px)",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(194, 162, 122, 0.4)",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-gold-dark)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Official Consultation Center
                  </div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    IRIS Hospital (Unit 2), Anand
                  </div>
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--accent-sage)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#25D366", display: "inline-block" }}></span>
                  <span>5:00 PM – 6:30 PM OPD</span>
                </div>
              </div>
            </div>

            {/* Decorative Gold Border Offset Accent */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-8px",
                border: "1px solid rgba(194, 162, 122, 0.28)",
                borderRadius: "calc(var(--radius-lg) + 8px)",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}