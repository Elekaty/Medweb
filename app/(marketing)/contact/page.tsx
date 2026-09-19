import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { Notice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and consultation",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Book a free consultation."
        description="Tell us whether you are a clinician or a facility. We will map an accurate licensing conversation — with the same clarity we use on every file."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-lg font-semibold">Studio details</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>{site.location}</li>
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.hours}</li>
            </ul>
            <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
              <p className="text-sm font-medium text-navy-deep">Calendar placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Embed Cal.com, Calendly or Microsoft Bookings here. Until then, the form is the intake path.
              </p>
            </div>
            <Notice className="mt-6">
              Official licences are issued only by the relevant authorities. Job placement is not guaranteed.
            </Notice>
          </div>
          <ConsultationForm
            topics={[
              { value: "consult", label: "Free licensing consultation" },
              { value: "package", label: "Discuss a package" },
              { value: "facility", label: "Facility staffing request" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
