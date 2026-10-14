import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqsList } from "../data/clinicData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      style={{
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div
          className="reveal-on-scroll"
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
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
            <HelpCircle size={14} />
            <span>Patient Guidance & Clarity</span>
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
            Frequently Asked Questions.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
            }}
          >
            Clear answers regarding consultation procedures, treatment expectations, and clinic scheduling.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="reveal-on-scroll delay-100">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.q}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className="faq-content"
                >
                  <div className="faq-content-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}