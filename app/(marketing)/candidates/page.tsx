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
    body: "Study roadmaps where an exam or assessment applies. We prepare you; we do not sit or pass the exam for you.",
  },
  {
    title: "Career matching (optional)",
    body: "If you ask, we can share vacancies or facility interest. Employers decide. Job placement is not guaranteed.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        kicker="For professionals"
        title="Licensing support first. Careers second. Guarantees never."
        description="Doctors, nurses, dentists and allied health professionals use MedLicense Hub to prepare UAE authority applications with a case manager — while staying clear that authorities issue licences and employers hire."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/eligibility">Check eligibility</CtaLink>
          <CtaLink href="/packages" variant="outline">
            View packages
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
