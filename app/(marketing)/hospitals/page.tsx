import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { JobNotice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "For hospitals and clinics",
};

const points = [
  {
    title: "Licence-aware shortlists",
    body: "Describe the role and preferred authority. We help you identify who is realistically licence-ready, so your hiring team stays in control of the seat.",
  },
  {
    title: "How staffing support works",
    body: "You send requirements. We may introduce candidates already progressing through a licensing programme. Interviews, offers, visas and privileging stay with the facility.",
  },
  {
    title: "Authority-first status",
    body: "A candidate is licensed when the authority says so. Start dates stay tied to real DHA, DOH or MOHAP queues — shared with you as they stand.",
  },
];

export default function HospitalsPage() {
  return (
    <>
      <PageHero
        kicker="For hospitals & clinics"
        title="Build licence-ready shortlists with a partner who respects your hire."
        description="MedLicense Hub supports facilities that need clinicians already progressing through UAE licensing. You stay the employer. Matching is structured support — with zero false hope."
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
        <JobNotice className="mt-8" />
        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-semibold">Request a shortlist or send requirements</h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Phase 1 stores nothing on a server. Use this form to see the workflow; connect your backend when ready.
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
