export const site = {
  name: "MedLicense Hub",
  legalName: "MedLicense Hub",
  tagline: "UAE and GCC medical licensing support for healthcare professionals and facilities.",
  description:
    "Independent consultancy helping doctors, nurses, dentists and allied health professionals prepare DHA, DOH, MOHAP and optional SCFHS licensing pathways — and helping hospitals request license-ready talent. We do not issue official licenses or guarantee jobs.",
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
  "Official licences are issued only by DHA, DOH, MOHAP, SCFHS or other relevant authorities. MedLicense Hub does not issue, grant or guarantee a licence.";

export const jobDisclaimer =
  "Job placement is not guaranteed. Career matching and vacancy listings are informational support only and do not constitute an offer of employment.";
