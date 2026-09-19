import type { Metadata } from "next";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy notice"
        description="Phase 1 placeholder. Replace with counsel-reviewed text before collecting real personal data."
      />
      <Section>
        <div className="max-w-2xl space-y-4 text-sm leading-7 text-slate-700">
          <p>
            Forms on this website currently run in the browser only. Submissions are not stored on a server
            until you connect a backend. Do not upload sensitive identity documents through this Phase 1 demo.
          </p>
          <p>
            When production systems go live, we will describe what we collect (identity, contact, professional
            credentials), why (licensing support), who we share it with (you, vendors you instruct such as
            DataFlow, and authorities you apply to), and how long we keep it.
          </p>
          <p>
            Contact {`hello@medlicensehub.example`} for access or deletion requests once live processing begins.
          </p>
        </div>
      </Section>
    </>
  );
}
