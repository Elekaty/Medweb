import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "For hospitals and clinics",
};

const points = [
  {
    title: "Licence-ready shortlists",
    body: "Describe the role and preferred authority. We introduce clinicians already progressing through UAE licensing so you can fill seats faster.",
  },
  {
    title: "How placement works",
    body: "You send requirements. We match candidates from our licensing programmes. Interviews, offers and privileging stay coordinated with your team.",
  },
  {
    title: "Successful hires",
    body: "Facilities use MedLicense Hub to place licence-ready doctors, nurses, dentists and allied health into lasting roles.",
  },
];

export default function HospitalsPage() {
  return (
    <>
      <PageHero
        kicker="For hospitals & clinics"
        title="Fill openings with licence-ready clinicians."
        description="MedLicense Hub supports facilities that need clinicians already progressing through UAE licensing — and helps you complete successful placements."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {points.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-semibold">Request a shortlist or send requirements</h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Tell us the role, emirate and authority. We will prepare a licence-ready shortlist for successful placement.
          </p>
          <ConsultationForm
            defaultAudience="facility"
            topics={[
              { value: "shortlist", label: "Request a candidate shortlist" },
              { value: "requirement", label: "Send a new role requirement" },
              { value: "briefing", label: "Licensing briefing for HR" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
