import React from "react";
import { clinicalPillars } from "../data/clinicData";
import { Shield, Sparkles, Microscope, FileText } from "lucide-react";

export default function ClinicalPillars() {
  const icons = [Microscope, FileText, Shield, Sparkles];

  return (
    <section
      id="standards"
      style={{
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="reveal-on-scroll"
          style={{
            maxWidth: "680px",
            margin: "0 auto 4rem auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              backgroundColor: "rgba(194, 162, 122, 0.15)",
              color: "var(--accent-gold)",
              borderRadius: "var(--radius-pill)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(194, 162, 122, 0.3)",
            }}
          >
            <span>Practice Standards</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Uncompromising Standards in Clinical Dermatology.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-on-dark-muted)",
              lineHeight: 1.65,
            }}
          >
            Every patient interaction adheres to rigorous clinical ethics, patient safety protocols, and personalized treatment formulations.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {clinicalPillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={pillar.number}
                className={`reveal-on-scroll delay-${(idx + 1) * 100}`}
                style={{
                  background: "var(--bg-dark-surface)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.2rem 1.8rem",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "rgba(194, 162, 122, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-gold)",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "rgba(194, 162, 122, 0.45)",
                    }}
                  >
                    {pillar.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    marginBottom: "0.8rem",
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: "var(--text-on-dark-muted)",
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}