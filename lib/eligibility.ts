export const professions = [
  { id: "doctor", label: "Doctor" },
  { id: "nurse", label: "Nurse" },
  { id: "dentist", label: "Dentist" },
  { id: "allied", label: "Allied health" },
] as const;

export const specialties: Record<(typeof professions)[number]["id"], { id: string; label: string }[]> = {
  doctor: [
    { id: "gp", label: "General practice / family medicine" },
    { id: "im", label: "Internal medicine" },
    { id: "surgery", label: "Surgery" },
    { id: "paeds", label: "Paediatrics" },
    { id: "obgyn", label: "Obstetrics & gynaecology" },
    { id: "other-doc", label: "Other specialty" },
  ],
  nurse: [
    { id: "rn", label: "Registered nurse (general)" },
    { id: "icu", label: "ICU / critical care" },
    { id: "er", label: "Emergency" },
    { id: "midwife", label: "Midwifery" },
    { id: "other-nurse", label: "Other nursing field" },
  ],
  dentist: [
    { id: "gd", label: "General dentistry" },
    { id: "ortho", label: "Orthodontics" },
    { id: "oral", label: "Oral surgery" },
    { id: "other-dent", label: "Other dental specialty" },
  ],
  allied: [
    { id: "pt", label: "Physiotherapy" },
    { id: "rad", label: "Radiography / imaging" },
    { id: "lab", label: "Medical laboratory" },
    { id: "pharm", label: "Pharmacy" },
    { id: "other-allied", label: "Other allied profession" },
  ],
};

export const countries = [
  { id: "in", label: "India" },
  { id: "ph", label: "Philippines" },
  { id: "pk", label: "Pakistan" },
  { id: "eg", label: "Egypt" },
  { id: "uk", label: "United Kingdom" },
  { id: "us", label: "United States" },
  { id: "za", label: "South Africa" },
  { id: "other", label: "Other country" },
] as const;

export const experienceBands = [
  { id: "0-2", label: "0–2 years" },
  { id: "3-5", label: "3–5 years" },
  { id: "6-10", label: "6–10 years" },
  { id: "10+", label: "10+ years" },
] as const;

export type EligibilityAnswers = {
  profession: (typeof professions)[number]["id"] | "";
  specialty: string;
  country: (typeof countries)[number]["id"] | "";
  experience: (typeof experienceBands)[number]["id"] | "";
};

export type PathwayResult = {
  packageSlug: string;
  headline: string;
  summary: string;
  bullets: string[];
};

export function recommendPathway(answers: EligibilityAnswers): PathwayResult {
  const { profession, country, experience } = answers;
  const western = country === "uk" || country === "us";
  const earlyCareer = experience === "0-2";
  const senior = experience === "10+" || experience === "6-10";

  if (earlyCareer) {
    return {
      packageSlug: "primary-assessment",
      headline: "Start with a Primary Assessment",
      summary:
        "With under three years of experience, the most responsible first step is a credential review — not a full licence filing. This is an educational recommendation, not an official eligibility decision.",
      bullets: [
        "Confirm which authority list your qualification typically maps to",
        "Identify missing good-standing or internship evidence early",
        "Avoid paying exam fees before a pathway is clear",
      ],
    };
  }

  if (senior && profession === "doctor") {
    return {
      packageSlug: "dual-license",
      headline: "Explore Dual License support",
      summary:
        "Experienced physicians often consider two UAE authorities if they want mobility across emirates. Dual support sequences documents; it does not grant two licences.",
      bullets: [
        "DHA is commonly explored for Dubai-based roles",
        "DOH or MOHAP can be added once the first file is stable",
        "Facility privileging and jobs remain separate from licensing",
      ],
    };
  }

  if (profession === "nurse" && (country === "ph" || country === "in" || country === "pk")) {
    return {
      packageSlug: "moh-license",
      headline: "MOHAP is a frequent first pathway to compare",
      summary:
        "Many internationally trained nurses compare MOHAP and DHA. Your exam category still depends on the authority’s current lists — only they can confirm.",
      bullets: [
        "Primary Source Verification is usually required",
        "A DHA package may still be more suitable if you already have a Dubai offer in view",
        "We can switch the recommended package after a consultation",
      ],
    };
  }

  if (western && (profession === "doctor" || profession === "dentist")) {
    return {
      packageSlug: "dha-license",
      headline: "DHA License support is a common next step",
      summary:
        "Clinicians trained in the UK or US often explore Dubai first, then add another emirate if needed. Training country never guarantees a category or exam exemption.",
      bullets: [
        "Expect PSV of education and licence",
        "Confirm exam or assessment rules on the DHA site",
        "Book a consult if you already have an Abu Dhabi preference (DOH)",
      ],
    };
  }

  if (profession === "dentist") {
    return {
      packageSlug: "doh-license",
      headline: "Compare DOH and DHA dental pathways",
      summary:
        "Dental licensing is authority-specific. This result highlights DOH as a structured option to review alongside Dubai if your target city is still open.",
      bullets: [
        "Good standing and internship evidence are frequent gaps",
        "Exam format differs by authority and specialty",
        "A Primary Assessment can still be the cheaper first move",
      ],
    };
  }

  return {
    packageSlug: "dha-license",
    headline: "DHA License support is a sensible default to review",
    summary:
      "Dubai is a common first authority for internationally mobile clinicians. Treat this as a starting hypothesis. Official classification happens only after the authority reviews your file.",
    bullets: [
      "Complete a document gap review before paying vendor fees",
      "Match the authority to where you actually intend to work",
      "Job matching, if requested, is optional and never guaranteed",
    ],
  };
}
