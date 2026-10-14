import React from "react";
import { GraduationCap, Award, Building, CheckCircle, Stethoscope, ArrowRight } from "lucide-react";
import { doctorData } from "../data/clinicData";

export default function DoctorProfile({ onOpenBooking }) {
  return (
    <section
      id="about"
      style={{
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        backgroundColor: "var(--bg-surface-elevated)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column: Doctor Consultation Suite Visual */}
          <div className="reveal-on-scroll">
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid var(--border-gold)",
                aspectRatio: "16 / 10",
                backgroundColor: "var(--bg-surface)",
              }}
            >
              <img
                src="/assets/images/doctor_suite.jpg"
                alt="Dr. Kunj Patel Executive Clinical Consultation Suite"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.8s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(18, 24, 21, 0.05) 0%, rgba(18, 24, 21, 0.45) 100%)",
                }}
              />
              
              {/* Overlay Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.2rem",
                  left: "1.2rem",
                  right: "1.2rem",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  padding: "0.85rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-gold)",
                }}
              >
                <div style={{ fontSize: "0.76rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--accent-gold-dark)" }}>
                  Clinical Consultation Suite
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Confidential, Evidence-Based Dermatological Diagnosis
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Credentials & Clinical Philosophy */}
          <div>
            <div
              className="reveal-on-scroll"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.9rem",
                backgroundColor: "var(--bg-surface)",
                color: "var(--accent-sage)",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              <Stethoscope size={14} style={{ color: "var(--accent-gold)" }} />
              <span>Doctor Profile & Credentials</span>
            </div>

            <h2
              className="reveal-on-scroll delay-100"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              {doctorData.name}
            </h2>

            <div
              className="reveal-on-scroll delay-200"
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--accent-gold-dark)",
                marginBottom: "1.4rem",
              }}
            >
              {doctorData.credentials}
            </div>

            <p
              className="reveal-on-scroll delay-300"
              style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Dr. Kunj Patel completed his specialized post-graduate training, <strong>M.D. in Dermatology, Venereology & Leprosy</strong>, from the prestigious Gujarat University (Narendra Modi Medical College & L.G. Hospital, Ahmedabad).
            </p>

            <p
              className="reveal-on-scroll delay-300"
              style={{
                fontSize: "0.98rem",
                color: "var(--text-secondary)",
                lineHeight: 1.68,
                marginBottom: "2rem",
              }}
            >
              With extensive clinical experience spanning complex cutaneous disorders, pediatric dermatology, and modern dermatosurgery, Dr. Patel emphasizes diagnostic precision before intervention. He believes healthy skin is the result of clinical biology, patient compliance, and customized medical management rather than generic quick fixes.
            </p>

            {/* Credential Cards Stagger */}
            <div
              className="reveal-on-scroll delay-400"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.8rem",
                  background: "var(--bg-surface)",
                  padding: "1rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <GraduationCap size={22} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)" }}>
                    Postgraduate Specialization
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                    M.D. Dermatology, Venereology & Leprosy — Gujarat University
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.8rem",
                  background: "var(--bg-surface)",
                  padding: "1rem 1.2rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Building size={22} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)" }}>
                    Current Hospital Appointments
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                    IRIS Hospital (Unit 2), Anand & Dr. Jayant Shah’s Hospital, Nadiad
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="reveal-on-scroll delay-500">
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
                style={{ padding: "0.85rem 1.8rem" }}
              >
                <span>Consult Dr. Kunj Patel</span>
                <span className="btn-icon-glide">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}