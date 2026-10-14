import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import DoctorProfile from "./components/DoctorProfile";
import ClinicalPillars from "./components/ClinicalPillars";
import ClinicLocations from "./components/ClinicLocations";
import AppointmentCTA from "./components/AppointmentCTA";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { doctorData } from "./data/clinicData";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  // IntersectionObserver Scroll-Reveal Engine
  useEffect(() => {
    // If browser supports IntersectionObserver, setup one-way scroll reveal
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              // Unobserve so animations trigger only once naturally
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -60px 0px",
          threshold: 0.12,
        }
      );

      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    } else {
      // Fallback: instantly reveal if IntersectionObserver is unsupported
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
    }
  }, []);

  const handleOpenBooking = () => {
    setSelectedTreatment("");
    setBookingOpen(true);
  };

  const handleSelectTreatment = (treatmentTitle) => {
    setSelectedTreatment(treatmentTitle);
    setBookingOpen(true);
  };

  return (
    <div className="app-root">
      {/* Top Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Treatments onSelectTreatment={handleSelectTreatment} />
        <DoctorProfile onOpenBooking={handleOpenBooking} />
        <ClinicalPillars />
        <ClinicLocations onOpenBooking={handleOpenBooking} />
        <AppointmentCTA onOpenBooking={handleOpenBooking} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />

      {/* Floating Quick Action Dial for Mobile & Instant WhatsApp Contact */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          alignItems: "flex-end",
        }}
        className="floating-contact-dial"
      >
        <a
          href={doctorData.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat with Clinic Coordinator"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(37, 211, 102, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.4)";
          }}
        >
          <MessageCircle size={26} />
        </a>

        <a
          href={`tel:${doctorData.phoneClean}`}
          aria-label="Direct Phone Call to Dr. Kunj Patel's Practice"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "var(--accent-sage)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(42, 72, 60, 0.3)",
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
}