import React from "react";
import { Phone, MessageCircle, MapPin, Mail, ShieldAlert, ArrowUp } from "lucide-react";
import { doctorData, clinicLocations } from "../data/clinicData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-on-dark)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand & Doctor Info */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "0.2rem",
                letterSpacing: "0.02em",
              }}
            >
              DR. KUNJ PATEL
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--accent-gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              M.D. (Dermatology, Venereology & Leprosy)
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--text-on-dark-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Consultant Dermatologist, Trichologist & Dermatosurgeon. Dedicated to medical accuracy, patient-centric safety, and state-of-the-art dermatological care.
            </p>
            <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.55)" }}>
              Gujarat University Alumnus (NMMC & L.G. Hospital, Ahmedabad)
            </div>
          </div>

          {/* Anand Location */}
          <div>
            <div
              style={{
                fontSize: "0.84rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-gold)",
                marginBottom: "1rem",
              }}
            >
              Anand Practice (Unit 2)
            </div>
            <div style={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.98rem", marginBottom: "0.4rem" }}>
              IRIS Hospital (Unit 2)
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-on-dark-muted)", marginBottom: "0.8rem" }}>
              Nani Khodiyar, 60 Feet Road, Beside Kusum Hospital, Near Lifeline Hospital, Anand, Gujarat – 388001
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--accent-gold-light)", marginBottom: "0.4rem" }}>
              Mon – Sat: 5:00 PM – 6:30 PM (Evening OPD)
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-on-dark-muted)" }}>
              Sunday: Closed
            </div>
          </div>

          {/* Nadiad Location */}
          <div>
            <div
              style={{
                fontSize: "0.84rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-gold)",
                marginBottom: "1rem",
              }}
            >
              Nadiad Practice
            </div>
            <div style={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.98rem", marginBottom: "0.4rem" }}>
              Dr. Jayant Shah’s Hospital
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-on-dark-muted)", marginBottom: "0.8rem" }}>
              Station Road / College Road, Nadiad, Gujarat
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--accent-gold-light)", marginBottom: "0.4rem" }}>
              Consultations by Prior Appointment
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-on-dark-muted)" }}>
              Call ahead for scheduled days
            </div>
          </div>

          {/* Direct Phone & WhatsApp Contacts */}
          <div>
            <div
              style={{
                fontSize: "0.84rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--accent-gold)",
                marginBottom: "1rem",
              }}
            >
              Direct Contacts
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li>
                <a
                  href={`tel:${doctorData.phoneClean}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "#FFFFFF",
                    fontSize: "0.92rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <Phone size={16} style={{ color: "var(--accent-gold)" }} />
                  <span>{doctorData.primaryPhone} (Mobile)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:02692317421"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "var(--text-on-dark-muted)",
                    fontSize: "0.92rem",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--accent-gold)" }} />
                  <span>{doctorData.landline} (IRIS Hospital Desk)</span>
                </a>
              </li>
              <li>
                <a
                  href={doctorData.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "#25D366",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Direct WhatsApp Inquiries</span>
                </a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "1.8rem",
                fontSize: "0.82rem",
                color: "var(--text-on-dark-muted)",
                background: "rgba(255, 255, 255, 0.06)",
                padding: "0.45rem 0.9rem",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                cursor: "pointer",
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Medical Ethics & Clinical Notice */}
        <div
          style={{
            padding: "1.5rem 1.8rem",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(255, 255, 255, 0.07)",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.8rem",
          }}
        >
          <ShieldAlert size={20} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
          <p style={{ fontSize: "0.82rem", color: "var(--text-on-dark-muted)", lineHeight: 1.6 }}>
            <strong>Medical Notice:</strong> Information on this website is published for patient educational purposes and general clinic schedule awareness. It does not replace an in-person clinical diagnosis or specialized medical examination by Dr. Kunj Patel. For emergencies, please report to the nearest hospital casualty department immediately.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "rgba(255, 255, 255, 0.45)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "2rem",
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. Kunj Patel (M.D. Dermatology). All rights reserved. Anand & Nadiad, Gujarat.
          </div>
          <div>
            Consultant Dermatologist • Trichologist • Dermatosurgeon
          </div>
        </div>
      </div>
    </footer>
  );
}