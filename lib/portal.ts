export const candidateCase = {
  name: "Dr. Lina Haddad",
  email: "lina.haddad@example.com",
  profession: "Specialist internist",
  package: "DHA License Support",
  caseId: "MLH-20418",
  nextAction: "Upload a colour scan of your current medical licence (all pages).",
};

export const timeline = [
  { id: "intake", title: "Intake complete", detail: "Consultation notes captured", status: "complete" as const },
  { id: "docs", title: "Document collection", detail: "2 of 8 files still outstanding", status: "current" as const },
  { id: "psv", title: "Primary Source Verification", detail: "Not started — waiting on complete pack", status: "pending" as const },
  { id: "exam", title: "Exam planning", detail: "Roadmap issued after PSV launch", status: "pending" as const },
  { id: "apply", title: "Authority application review", detail: "We review before you submit to DHA", status: "pending" as const },
];

export const documents = [
  { id: "passport", name: "Passport bio page", status: "uploaded" as const },
  { id: "photo", name: "Passport photograph", status: "uploaded" as const },
  { id: "degree", name: "Primary medical degree", status: "uploaded" as const },
  { id: "licence", name: "Current practising licence", status: "action" as const },
  { id: "goodstanding", name: "Certificate of good standing", status: "pending" as const },
  { id: "experience", name: "Experience letters", status: "pending" as const },
  { id: "internship", name: "Internship / house job certificate", status: "pending" as const },
  { id: "cv", name: "Curriculum vitae", status: "uploaded" as const },
];

export const messages = [
  {
    from: "Case manager",
    at: "Yesterday",
    body: "Thank you for the degree scan. Please add a colour licence scan so we can start the PSV checklist. DHA — not MedLicense Hub — will make the licensing decision.",
  },
  {
    from: "You",
    at: "Monday",
    body: "Degree uploaded. I will request good standing from my home council this week.",
  },
];

export const facilityRequest = {
  organisation: "Gulf Care Medical Group",
  contact: "Noura Al Mazrouei",
  status: "In review",
  summary: "Seeking two DHA-ready family medicine physicians for Q4 clinic openings. No candidate has been promised.",
};
