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
        title="Map your likely licensing pathway in four questions."
        description="Profession, specialty, training country and experience. You receive a recommended package to review. DHA, DOH, MOHAP or SCFHS still make every licensing decision."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <EligibilityChecker />
        </div>
      </Section>
    </>
  );
}
