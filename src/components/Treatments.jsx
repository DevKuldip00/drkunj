import React, { useState } from "react";
import { ArrowRight, Check, Sparkles, ChevronDown, Activity } from "lucide-react";
import { treatmentCategories } from "../data/clinicData";

export default function Treatments({ onSelectTreatment }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="treatments"
      style={{
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="reveal-on-scroll"
          style={{
            maxWidth: "680px",
            margin: "0 auto 3.5rem auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              backgroundColor: "var(--accent-sage-light)",
              color: "var(--accent-sage)",
              borderRadius: "var(--radius-pill)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} />
            <span>Clinical Expertise</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.22,
              marginBottom: "1rem",
            }}
          >
            Four Specialized Pillars of Dermatological Care.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
            }}
          >
            From chronic inflammatory dermatoses to state-of-the-art trichology and sterile dermatosurgery, all treatments are led personally by Dr. Kunj Patel.
          </p>
        </div>

        {/* 4 Signature Treatment Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
          className="treatments-grid"
        >
          {treatmentCategories.map((cat, idx) => {
            const isExpanded = expandedId === cat.id;
            return (
              <article
                key={cat.id}
                className={`treatment-card reveal-on-scroll delay-${(idx + 1) * 100}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Wrapper with gentle zoom */}
                <div className="treatment-card-img-wrap">
                  <img
                    src={cat.image}
                    alt={`${cat.title} clinical care by Dr. Kunj Patel`}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      zIndex: 2,
                    }}
                  >
                    <span className="treatment-card-tag">{cat.category}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="treatment-card-body">
                  <h3 className="treatment-card-title">{cat.title}</h3>
                  <p className="treatment-card-desc">{cat.description}</p>

                  {/* Highlights list preview */}
                  <ul className="treatment-card-list">
                    {cat.items.slice(0, 3).map((item) => (
                      <li key={item.name}>
                        <Check size={16} />
                        <span>
                          <strong style={{ fontWeight: 600, color: "var(--text-primary)" }}>{item.name}:</strong>{" "}
                          {item.desc.split(".")[0]}.
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable items container with smooth accordion */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isExpanded ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                      opacity: isExpanded ? 1 : 0,
                      marginBottom: isExpanded ? "1rem" : 0,
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div
                        style={{
                          paddingTop: "0.8rem",
                          borderTop: "1px dashed var(--border-medium)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.6rem",
                        }}
                      >
                        {cat.items.slice(3).map((item) => (
                          <div key={item.name} style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                            <strong style={{ color: "var(--text-primary)" }}>• {item.name}:</strong> {item.desc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Toggle Link */}
                  {cat.items.length > 3 && (
                    <button
                      onClick={() => toggleExpand(cat.id)}
                      style={{
                        alignSelf: "flex-start",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--accent-gold-dark)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        marginBottom: "1.2rem",
                        padding: "0.2rem 0",
                      }}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Show Less Procedures" : `View All ${cat.items.length} Procedures`}</span>
                      <ChevronDown
                        size={14}
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </button>
                  )}

                  {/* Action CTA Button */}
                  <button
                    onClick={() => onSelectTreatment(cat.title)}
                    className="treatment-card-action"
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>Inquire for {cat.category}</span>
                    <span className="arrow-icon">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) and (max-width: 1024px) {
          .treatments-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1025px) {
          .treatments-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}