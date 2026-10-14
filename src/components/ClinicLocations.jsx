import React, { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { clinicLocations, doctorData } from "../data/clinicData";

export default function ClinicLocations({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("anand");
  const selectedLocation = clinicLocations.find((loc) => loc.id === activeTab) || clinicLocations[0];

  return (
    <section
      id="locations"
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
            <MapPin size={14} />
            <span>Consultation Centers</span>
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
            Convenient Access in Anand & Nadiad.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
            }}
          >
            Dr. Kunj Patel provides clinical dermatology consultations at two premier healthcare institutions in Gujarat.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div
          className="reveal-on-scroll delay-100"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            marginBottom: "2.5rem",
          }}
        >
          {clinicLocations.map((loc) => {
            const isActive = loc.id === activeTab;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                style={{
                  padding: "0.8rem 1.8rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: isActive ? "1px solid var(--accent-sage)" : "1px solid var(--border-medium)",
                  backgroundColor: isActive ? "var(--accent-sage)" : "var(--bg-surface)",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  boxShadow: isActive ? "0 4px 14px rgba(42, 72, 60, 0.2)" : "var(--shadow-sm)",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
              >
                <span>{loc.city} Center — {loc.hospital.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Location Card */}
        <div
          className="reveal-on-scroll delay-200"
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            background: "var(--bg-primary)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-gold)",
            boxShadow: "var(--shadow-lg)",
            padding: "2.5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
          className="location-card-grid"
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "0.3rem 0.8rem",
                borderRadius: "var(--radius-pill)",
                backgroundColor: "var(--accent-gold-subtle)",
                color: "var(--accent-gold-dark)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "0.8rem",
              }}
            >
              {selectedLocation.tagline}
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.85rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {selectedLocation.hospital}
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: "0.98rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              <MapPin size={20} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "3px" }} />
              <span>{selectedLocation.address}</span>
            </div>

            {/* Timing Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                background: "var(--bg-surface)",
                padding: "1rem 1.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                marginBottom: "1.5rem",
              }}
            >
              <Clock size={20} style={{ color: "var(--accent-sage)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  Consultation Schedule:
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  {selectedLocation.timings}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>
                  Sunday: {selectedLocation.sunday}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
              {selectedLocation.highlights.map((h) => (
                <span
                  key={h}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "var(--radius-pill)",
                    backgroundColor: "var(--bg-surface)",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: "var(--accent-gold)" }} />
                  <span>{h}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary"
              >
                <Calendar size={16} />
                <span>Book at {selectedLocation.city}</span>
              </button>

              <a
                href={doctorData.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${doctorData.phoneClean}`}
                className="btn btn-secondary"
              >
                <Phone size={16} />
                <span>Call Clinic</span>
              </a>

              <a
                href={selectedLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="Get Google Maps Navigation Directions"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}