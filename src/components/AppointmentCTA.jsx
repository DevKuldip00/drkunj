import React from "react";
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { doctorData } from "../data/clinicData";

export default function AppointmentCTA({ onOpenBooking }) {
  return (
    <section
      id="appointment-cta"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        backgroundColor: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative slow subtle gradient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(194, 162, 122, 0.18) 0%, rgba(42, 72, 60, 0.08) 50%, rgba(251, 249, 245, 0) 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            backgroundColor: "var(--bg-surface)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-xl)",
            padding: "clamp(2rem, 5vw, 4rem)",
            textAlign: "center",
          }}
          className="reveal-on-scroll"
        >
          {/* Subtle Top Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              backgroundColor: "var(--accent-sage-light)",
              color: "var(--accent-sage)",
              borderRadius: "var(--radius-pill)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            <ShieldCheck size={16} />
            <span>Consultation & Direct Booking</span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Experience Dermatological Care Built on Clinical Precision.
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: "1.08rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            Whether addressing persistent acne, scalp hair loss, or specialized minor dermatosurgery, schedule your confidential in-person consultation with Dr. Kunj Patel.
          </p>

          {/* Button Group */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2.5rem",
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: "0.95rem 2.2rem", fontSize: "1rem" }}
            >
              <Calendar size={18} />
              <span>Book Appointment Online</span>
              <span className="btn-icon-glide">
                <ArrowRight size={16} />
              </span>
            </button>

            <a
              href={doctorData.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "0.95rem 2rem", fontSize: "1rem" }}
            >
              <MessageCircle size={18} />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={`tel:${doctorData.phoneClean}`}
              className="btn btn-secondary"
              style={{ padding: "0.95rem 1.8rem", fontSize: "1rem" }}
            >
              <Phone size={18} style={{ color: "var(--accent-sage)" }} />
              <span>Call {doctorData.primaryPhone}</span>
            </a>
          </div>

          {/* Timing & Clinic Note */}
          <div
            style={{
              paddingTop: "1.8rem",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              fontSize: "0.88rem",
              color: "var(--text-muted)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Clock size={16} style={{ color: "var(--accent-gold)" }} />
              <span>IRIS Hospital Anand: Mon – Sat (5:00 PM – 6:30 PM)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Clock size={16} style={{ color: "var(--accent-gold)" }} />
              <span>Dr. Jayant Shah Hospital Nadiad: By Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}