import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { JobNotice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "For healthcare professionals",
};

const supports = [
  {
    title: "Licensing preparation",
    body: "Pathway mapping, document checklists, PSV coordination and application review for DHA, DOH, MOHAP and optional SCFHS orientation.",
  },
  {
    title: "Exam planning",
    body: "Study roadmaps where an exam or assessment applies, so you sit prepared and in control of the next step.",
  },
  {
    title: "Career matching (optional)",
    body: "Share vacancies and facility interest when you want matching support. Employers hire; we keep that process honest.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        kicker="For professionals"
        title="Structured licensing support built for clinicians."
        description="Doctors, nurses, dentists and allied health professionals work with a case manager to prepare UAE authority applications — with the same clarity for every file."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/eligibility">Map your pathway</CtaLink>
          <CtaLink href="/packages" variant="outline">
            Compare packages
          </CtaLink>
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {supports.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <JobNotice className="mt-8" />
      </Section>
    </>
  );
}
