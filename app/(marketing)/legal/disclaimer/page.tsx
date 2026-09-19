import type { Metadata } from "next";
import { jobDisclaimer, licenseDisclaimer } from "@/lib/site";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Disclaimer"
        description="Read this before using any package, job list or eligibility result."
      />
      <Section>
        <div className="max-w-2xl space-y-4 text-sm leading-7 text-slate-700">
          <p>{licenseDisclaimer}</p>
          <p>{jobDisclaimer}</p>
          <p>
            Eligibility checker results are educational hypotheses based on the answers you provide. They are
            not Primary Source Verification, not an exam result, and not a substitute for the authority’s
            published criteria.
          </p>
          <p>
            Timelines and prices are estimates or placeholders. Third-party vendors and authorities set their
            own fees and queues.
          </p>
        </div>
      </Section>
    </>
  );
}
