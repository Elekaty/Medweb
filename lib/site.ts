export const site = {
  name: "MedLicense Hub",
  legalName: "MedLicense Hub",
  tagline:
    "Licensing support and successful hospital placement for healthcare professionals and facilities across the UAE and GCC.",
  description:
    "Independent consultancy helping doctors, nurses, dentists and allied health professionals prepare DHA, DOH, MOHAP and optional SCFHS licensing pathways — and placing licence-ready talent with hospitals and clinics.",
  url: "https://github.com/Elekaty/Medweb",
  email: "hello@medlicensehub.example",
  phone: "+971 4 000 0000",
  location: "Dubai, United Arab Emirates",
  hours: "Sunday–Thursday, 9:00–18:00 GST",
} as const;

export const nav = {
  primary: [
    { href: "/candidates", label: "For professionals" },
    { href: "/hospitals", label: "For hospitals" },
    { href: "/packages", label: "Packages" },
    { href: "/eligibility", label: "Eligibility" },
    { href: "/jobs", label: "Jobs" },
    { href: "/resources", label: "Resources" },
  ],
  secondary: [
    { href: "/authorities", label: "Authorities" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/disclaimer", label: "Disclaimer" },
  ],
} as const;

export const licenseDisclaimer =
  "Official licences are issued by DHA, DOH, MOHAP, SCFHS or other relevant authorities. MedLicense Hub prepares applications and supports career placement with hospitals and clinics.";
