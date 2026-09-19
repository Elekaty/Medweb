import type { Metadata } from "next";
import { PageHero, Section } from "@/components/section";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of use"
        description="Placeholder terms for the MedLicense Hub website. Have a UAE-qualified lawyer review before launch."
      />
      <Section>
        <div className="max-w-2xl space-y-4 text-sm leading-7 text-slate-700">
          <p>
            This site provides information about consultancy services. It does not create a clinician–patient
            relationship, an employment contract, or an agency licence.
          </p>
          <p>
            Package descriptions are invitations to treat. A paid engagement starts only with a signed
            statement of work. Authority fees are never included unless listed in that document.
          </p>
          <p>
            You agree not to rely on this website as confirmation that you are eligible to practise in the UAE
            or GCC. Only the relevant health authority can make that determination.
          </p>
        </div>
      </Section>
    </>
  );
}
