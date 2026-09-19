import type { Metadata } from "next";
import { EligibilityChecker } from "@/components/eligibility/eligibility-checker";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Eligibility checker",
};

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        kicker="Eligibility"
        title="Find a sensible first pathway — not an official decision."
        description="Answer four questions about profession, specialty, country of training and experience. We suggest a package to review. DHA, DOH, MOHAP or SCFHS still make every licensing decision."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <EligibilityChecker />
        </div>
      </Section>
    </>
  );
}
