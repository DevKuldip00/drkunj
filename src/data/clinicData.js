export const doctorData = {
  name: "Dr. Kunj Patel",
  credentials: "M.D. (Dermatology, Venereology & Leprosy), M.B.B.S.",
  specialty: "Consultant Dermatologist, Trichologist & Dermatosurgeon",
  education: "M.D. Dermatology, Venereology & Leprosy from Gujarat University (Narendra Modi Medical College & L.G. Hospital, Ahmedabad)",
  experienceNote: "Practicing clinical dermatologist committed to rigorous evidence-based protocols, sterile surgical care, and refined cosmetic dermatology.",
  primaryPhone: "+91 82387 46288",
  phoneClean: "+918238746288",
  landline: "02692-317421",
  whatsapp: "+91 82387 46288",
  whatsappDirectUrl: "https://wa.me/918238746288?text=Hello%20Dr.%20Kunj%20Patel%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
  email: "contact@drkunjpatel.com"
};

export const clinicLocations = [
  {
    id: "anand",
    city: "Anand",
    hospital: "IRIS Hospital (Unit 2)",
    tagline: "Primary Evening Consultation OPD",
    address: "Nani Khodiyar, 60 Feet Road, Beside Kusum Hospital, Near Lifeline Hospital, Anand, Gujarat – 388001",
    timings: "Monday to Saturday: 5:00 PM – 6:30 PM",
    days: "Monday – Saturday",
    sunday: "Closed",
    phone: "+91 82387 46288",
    landline: "02692-317421",
    mapUrl: "https://maps.google.com/?q=IRIS+Hospital+Unit+2+Anand+Gujarat",
    highlights: ["In-house laser & aesthetic suite", "Sterile minor procedure OT", "Dedicated pharmacy access"]
  },
  {
    id: "nadiad",
    city: "Nadiad",
    hospital: "Dr. Jayant Shah’s Hospital",
    tagline: "Consultant Dermatologist OPD",
    address: "Station Road / College Road, Nadiad, Gujarat",
    timings: "By Prior Appointment (Scheduled Days)",
    days: "Selected Weekdays (Call Ahead)",
    sunday: "Closed",
    phone: "+91 82387 46288",
    landline: null,
    mapUrl: "https://maps.google.com/?q=Dr+Jayant+Shah+Hospital+Nadiad+Gujarat",
    highlights: ["Prior appointment scheduling", "Clinical dermatology consultations", "Post-treatment follow-ups"]
  }
];

export const treatmentCategories = [
  {
    id: "skin-care",
    title: "Clinical Dermatology & Skin Care",
    category: "Skin Health",
    description: "Thorough diagnostic evaluations and targeted therapeutic regimens for inflammatory, infectious, and chronic dermatological conditions.",
    image: "/assets/images/skincare.jpg",
    items: [
      { name: "Acne & Scar Revision", desc: "Comedonal, cystic acne protocols, chemical peels, and subcision for pitted acne scars." },
      { name: "Eczema & Atopic Dermatitis", desc: "Skin barrier repair strategies, non-steroidal immunomodulators, and allergy relief." },
      { name: "Psoriasis & Vitiligo Care", desc: "Topical regimens, phototherapy guidance, and systemic biologic management." },
      { name: "Infections & Allergies", desc: "Targeted antifungal, antibacterial therapy and comprehensive urticaria patch testing." },
      { name: "Mole & Pigment Dermoscopy", desc: "High-magnification surface microscopy for evaluating benign vs atypical melanocytic lesions." }
    ]
  },
  {
    id: "hair-care",
    title: "Trichology & Hair Restoration",
    category: "Hair & Scalp",
    description: "Specialized clinical trichology addressing hair shedding, pattern thinning, and scalp health with restorative medical protocols.",
    image: "/assets/images/trichology.jpg",
    items: [
      { name: "PRP & GFC Therapy", desc: "Autologous Platelet-Rich Plasma and Growth Factor Concentrate for bio-stimulation of miniaturized follicles." },
      { name: "Pattern Baldness (Androgenetic)", desc: "Tailored DHT-blocker regimens, minoxidil combinations, and nutritional co-factor balancing." },
      { name: "Alopecia Areata", desc: "Intralesional immunotherapy and targeted topical agents for autoimmune patchy hair loss." },
      { name: "Scalp Dermatitis & Dandruff", desc: "Anti-fungal keratolytic cleansers and anti-inflammatory scalp lotions to restore microbial balance." },
      { name: "Hair Transplant Evaluation", desc: "Donor density assessment, trichoscopic hair caliber mapping, and surgical eligibility counseling." }
    ]
  },
  {
    id: "nail-care",
    title: "Nail Care & Dermatosurgery",
    category: "Surgical & Nails",
    description: "Meticulous in-office minor surgical interventions performed under sterile local anesthesia with a focus on cosmetic preservation.",
    image: "/assets/images/dermatosurgery.jpg",
    items: [
      { name: "Ingrown Toenail Surgery", desc: "Conservative wedge resection and chemical matrixectomy for permanent, pain-free relief." },
      { name: "Onychomycosis Therapy", desc: "Targeted systemic antimycotic courses and non-invasive topical lacquers for fungal dystrophy." },
      { name: "RF Excision of Warts & Tags", desc: "High-frequency radiofrequency ablation for instant, scar-sparing removal of cutaneous tags." },
      { name: "Cyst & Lipoma Enucleation", desc: "Minimal-incision excision of epidermoid cysts with meticulous intradermal suturing." },
      { name: "Keloid & Scar Remodeling", desc: "Triple-action intralesional corticosteroid, 5-FU infusions, and cryotherapy combinations." }
    ]
  },
  {
    id: "aesthetic-care",
    title: "Aesthetic Care & Medical Lasers",
    category: "Advanced Aesthetics",
    description: "Safety-first aesthetic enhancements and US-FDA compliant laser technologies designed specifically for Indian Fitzpatrick skin types.",
    image: "/assets/images/lasers.jpg",
    items: [
      { name: "Medical Chemical Peels", desc: "Dermatologist-formulated lactic, salicylic, glycolic, and yellow peels for pigment & radiant glow." },
      { name: "Laser Hair Reduction", desc: "Triple-wavelength diode laser with active contact cooling for permanent reduction across all skin tones." },
      { name: "Carbon Laser 'Hollywood' Peel", desc: "Nanosecond Q-switched carbon suspension photo-peel for open pores, oil control, and instant glow." },
      { name: "Pigmentation & Melasma Laser", desc: "Fractional and toning laser protocols targeted at stubborn dermal pigmentation without hyperpigmentation risk." },
      { name: "Laser Tattoo Removal", desc: "Selective photothermolysis breaking ink pigments naturally cleared by lymphatic pathways." }
    ]
  }
];

export const clinicalPillars = [
  {
    number: "01",
    title: "Diagnostic Depth",
    description: "Every treatment starts with thorough clinical examination and high-resolution dermoscopic imaging to identify the root medical pathology."
  },
  {
    number: "02",
    title: "Evidence-Based Formulations",
    description: "Prescriptions and in-clinic procedures follow strictly peer-reviewed dermatological guidelines, avoiding fleeting trends or unverified fads."
  },
  {
    number: "03",
    title: "Sterile Surgical Precision",
    description: "Minor dermatosurgical procedures are performed with hospital-grade sterilization protocols to minimize scarring and guarantee zero infection risk."
  },
  {
    number: "04",
    title: "Bespoke Patient Ethics",
    description: "Transparent medical counseling with honest prognosis, realistic expectations, and zero push for unnecessary cosmetic procedures."
  }
];

export const faqsList = [
  {
    q: "Do I need a prior appointment to consult Dr. Kunj Patel?",
    a: "While walk-ins are accepted during OPD hours at IRIS Hospital (Unit 2), Anand (Monday to Saturday, 5:00 PM – 6:30 PM), prior appointment booking is strongly recommended to minimize waiting times. For consultations at Dr. Jayant Shah’s Hospital in Nadiad, prior booking is required."
  },
  {
    q: "What should I bring to my first dermatology consultation?",
    a: "Please bring a list of your current skincare products, hair oils, shampoos, and previous dermatological prescriptions. If you have recent blood reports or allergy history, having them on hand helps Dr. Patel formulate an accurate diagnosis."
  },
  {
    q: "What is the difference between PRP and GFC for hair loss?",
    a: "Both therapies utilize your body’s own growth factors. PRP (Platelet-Rich Plasma) involves concentrating whole platelets, while GFC (Growth Factor Concentrate) is an advanced next-generation preparation that isolates pure, cell-free growth factors in higher concentrations with minimal discomfort and higher reproducibility."
  },
  {
    q: "Are chemical peels and laser treatments safe for Indian skin tones?",
    a: "Yes, when performed by a qualified dermatologist (M.D. Dermatology). Indian skin (Fitzpatrick types III to V) requires calibrated laser wavelengths and gentle peel concentrations to prevent post-inflammatory hyperpigmentation. Dr. Kunj Patel customizes every energy parameter for your specific skin type."
  },
  {
    q: "How can I book an appointment via WhatsApp?",
    a: "You can click the 'WhatsApp Booking' button on this website or message +91 82387 46288 directly. Our clinic coordinator will confirm your preferred date, location (Anand or Nadiad), and estimated appointment slot."
  },
  {
    q: "What minor dermatosurgery procedures are done in the clinic?",
    a: "Dr. Patel performs sterile in-office procedures including ingrowing toenail matrixectomy, radiofrequency excision of skin tags and warts, cyst and mole removal, diagnostic skin punch biopsies, and intralesional injections for keloids and hypertrophic scars."
  }
];