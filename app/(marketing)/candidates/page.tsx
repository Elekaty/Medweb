import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
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
    title: "Successful placement",
    body: "Career matching with hospitals and clinics so licensing leads into a role that fits your specialty and preferred emirate.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        kicker="For professionals"
        title="Get licensed — then placed in a UAE role that fits."
        description="Doctors, nurses, dentists and allied health professionals work with a case manager on authority applications and successful hospital or clinic placement."
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
      </Section>
    </>
  );
}
