import React, { useState, useEffect } from "react";
import { X, Calendar, Phone, MessageCircle, CheckCircle, ShieldCheck } from "lucide-react";
import { doctorData, clinicLocations } from "../data/clinicData";

export default function BookingModal({ isOpen, onClose, initialTreatment }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "anand",
    concern: initialTreatment || "Clinical Dermatology & Skin Care",
    date: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, concern: initialTreatment }));
    }
  }, [initialTreatment]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const locObj = clinicLocations.find((l) => l.id === formData.location) || clinicLocations[0];
    const text = encodeURIComponent(
      `Hello Dr. Kunj Patel Clinic,\n\nI would like to schedule a consultation:\n- *Patient Name:* ${formData.name || "Patient"}\n- *Phone:* ${formData.phone || "Not provided"}\n- *Preferred Center:* ${locObj.hospital} (${locObj.city})\n- *Consultation Concern:* ${formData.concern}\n- *Preferred Date:* ${formData.date || "Next available slot"}\n${formData.notes ? `- *Notes:* ${formData.notes}\n` : ""}\nPlease confirm my appointment slot.`
    );
    window.open(`https://wa.me/918238746288?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
    >
      <div className="modal-dialog">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close appointment modal"
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer",
            padding: "0.4rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s ease, background-color 0.2s ease",
          }}
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <ShieldCheck size={18} style={{ color: "var(--accent-gold)" }} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-gold-dark)" }}>
                Official Appointment Request
              </span>
            </div>

            <h3
              id="modal-booking-title"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.65rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
              }}
            >
              Consult Dr. Kunj Patel
            </h3>

            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "1.6rem" }}>
              Fill in your consultation preference. You can connect directly via WhatsApp or call our hospital desk.
            </p>

            <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-medium)",
                    fontSize: "0.95rem",
                    fontFamily: "inherit",
                    backgroundColor: "var(--bg-primary)",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="modal-input-row">
                <div>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                    Preferred Center *
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.92rem",
                      fontFamily: "inherit",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  >
                    <option value="anand">Anand — IRIS Hospital (Unit 2)</option>
                    <option value="nadiad">Nadiad — Dr. Jayant Shah Hospital</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="modal-input-row">
                <div>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                    Primary Specialty
                  </label>
                  <select
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.92rem",
                      fontFamily: "inherit",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  >
                    <option value="Clinical Dermatology & Skin Care">Clinical Skin Care / Acne</option>
                    <option value="Trichology & Hair Restoration">Hair Loss / PRP / Scalp</option>
                    <option value="Nail Care & Minor Dermatosurgery">Nail Surgery / Mole Excision</option>
                    <option value="Aesthetic Care & Medical Lasers">Medical Peels / Laser Treatment</option>
                    <option value="General Consultation">General Dermatological OPD</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-medium)",
                      fontSize: "0.92rem",
                      fontFamily: "inherit",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                  Brief Notes or Symptoms (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Recurring acne flare-ups or hair thinning over 3 months"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-medium)",
                    fontSize: "0.92rem",
                    fontFamily: "inherit",
                    backgroundColor: "var(--bg-primary)",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: "100%", padding: "0.9rem", fontSize: "1rem" }}
                >
                  <MessageCircle size={18} />
                  <span>Send Appointment Request via WhatsApp</span>
                </button>

                <a
                  href={`tel:${doctorData.phoneClean}`}
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "0.85rem", fontSize: "0.95rem" }}
                >
                  <Phone size={16} />
                  <span>Call Hospital Reception: {doctorData.primaryPhone}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-sage-light)",
                color: "var(--accent-sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.2rem auto",
              }}
            >
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Request Prepared!
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.8rem" }}>
              Your appointment inquiry has been prepared for WhatsApp transmission to Dr. Kunj Patel's coordinator. If WhatsApp did not launch automatically, please call directly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <a
                href={`tel:${doctorData.phoneClean}`}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                <Phone size={16} />
                <span>Call {doctorData.primaryPhone}</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 540px) {
          .modal-input-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}