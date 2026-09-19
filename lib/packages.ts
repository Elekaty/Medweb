export type Package = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  audience: string;
  price: string;
  timeline: string;
  featured?: boolean;
  inclusions: string[];
  exclusions: string[];
};

export const packages: Package[] = [
  {
    slug: "primary-assessment",
    name: "Primary Assessment",
    shortName: "Assessment",
    summary:
      "A structured review of your credentials, experience and likely licensing pathway before you spend on exams or authority fees.",
    audience: "All professions, especially first-time UAE applicants",
    price: "From AED 750",
    timeline: "Typically 5–10 working days after complete documents",
    featured: true,
    inclusions: [
      "Credential and experience gap review",
      "Suggested authority pathway (DHA, DOH, MOHAP or combination)",
      "Document checklist tailored to your profession",
      "Written next-step plan and 30-minute consult",
    ],
    exclusions: [
      "Authority, DataFlow, exam or translation fees",
      "Submission of an official licence application",
      "Job search or interview representation",
      "Any guarantee of eligibility or outcome",
    ],
  },
  {
    slug: "dha-license",
    name: "DHA License Support",
    shortName: "DHA",
    summary:
      "Case-managed support for Dubai Health Authority licensing preparation, from Primary Source Verification through application review.",
    audience: "Professionals targeting Dubai facilities",
    price: "From AED 6,500",
    timeline: "Often 8–16 weeks, depending on PSV, exams and authority queues",
    featured: true,
    inclusions: [
      "Dedicated case manager and document workflow",
      "DataFlow / PSV coordination guidance",
      "Exam (Prometric/CBT) preparation roadmap",
      "Application form review before you submit to DHA",
      "Status updates through your candidate portal",
    ],
    exclusions: [
      "Official DHA, DataFlow or exam fees paid to third parties",
      "Good standing, attestation or translation costs",
      "A job offer, visa or Emirates ID",
      "Guarantee that DHA will issue a licence",
    ],
  },
  {
    slug: "doh-license",
    name: "DOH License Support",
    shortName: "DOH",
    summary:
      "Support for Department of Health — Abu Dhabi licensing pathways, aligned to current published requirements.",
    audience: "Professionals targeting Abu Dhabi and Al Ain",
    price: "From AED 6,800",
    timeline: "Often 8–16 weeks after a complete file",
    inclusions: [
      "Pathway mapping against current DOH categories",
      "PSV and document completeness checks",
      "Exam and assessment guidance where applicable",
      "Application review and portal status tracking",
    ],
    exclusions: [
      "Official DOH and third-party processing fees",
      "Employer offer letters or facility privileges",
      "Immigration or visa services",
      "Guarantee of licence issuance",
    ],
  },
  {
    slug: "moh-license",
    name: "MOH License Support",
    shortName: "MOHAP",
    summary:
      "Guidance for Ministry of Health and Prevention licensing used across several Northern Emirates settings.",
    audience: "Professionals open to Sharjah, Ajman, UAQ, RAK, Fujairah and mixed UAE practice",
    price: "From AED 5,900",
    timeline: "Often 6–14 weeks after a complete file",
    inclusions: [
      "MOHAP pathway briefing for your profession",
      "Document and PSV coordination support",
      "Exam booking guidance where required",
      "Application review before submission",
    ],
    exclusions: [
      "Official MOHAP and vendor fees",
      "Job placement or facility contracting",
      "Guarantee of exam pass or licence grant",
    ],
  },
  {
    slug: "dual-license",
    name: "Dual License Support",
    shortName: "Dual",
    summary:
      "Coordinated support when you intend to pursue two UAE authority pathways (for example DHA + MOHAP).",
    audience: "Experienced clinicians who may work across emirates",
    price: "From AED 10,500",
    timeline: "Often 12–20 weeks; second file usually follows the first",
    featured: true,
    inclusions: [
      "Primary Assessment covering both authorities",
      "Shared document set with authority-specific gaps flagged",
      "Sequenced exam and PSV plan to reduce duplicate effort",
      "Two application reviews",
    ],
    exclusions: [
      "All official authority and exam fees (two sets may apply)",
      "Privilege to practice at a named facility",
      "Job placement in either emirate",
      "Guarantee that either licence will be issued",
    ],
  },
  {
    slug: "triple-license",
    name: "Triple License Support",
    shortName: "Triple",
    summary:
      "Structured support for DHA, DOH and MOHAP preparation in a single case-managed programme.",
    audience: "Senior clinicians and families planning long-term GCC mobility",
    price: "From AED 14,900",
    timeline: "Often 16–28 weeks, sequenced rather than simultaneous",
    inclusions: [
      "Full three-authority gap analysis",
      "Master document vault and checklist",
      "Sequenced exam and PSV calendar",
      "Three application reviews and portal tracking",
      "Quarterly strategy call during the programme",
    ],
    exclusions: [
      "Official fees payable to DHA, DOH, MOHAP and vendors",
      "SCFHS (KSA) filing unless scoped separately",
      "Employment, visa or housing",
      "Any guarantee of licensing outcomes",
    ],
  },
];

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}
