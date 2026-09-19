import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { JobNotice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";
import { jobs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Job opportunities",
};

export default function JobsPage() {
  return (
    <>
      <PageHero
        kicker="Jobs"
        title="Openings we can discuss with matching support."
        description="Browse current listings or request matching. Employers make every hiring decision. Job placement is not guaranteed."
      />
      <Section>
        <JobNotice className="mb-8" />
        <div className="grid gap-4">
          {jobs.map((job) => (
            <article key={job.id} className="rounded-xl border border-slate-200 p-5 sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="mt-1 text-sm text-slate-600">
                  {job.location} · {job.setting} · {job.type}
                </p>
                <p className="mt-1 text-sm text-teal-dark">{job.authority}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-semibold">Request matching support</h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Tell us your profession and preferred emirate. Matching support is optional — employers hire.
          </p>
          <ConsultationForm
            defaultAudience="professional"
            topics={[
              { value: "matching", label: "Request job matching support" },
              { value: "listing", label: "Ask about a listed opening" },
              { value: "consult", label: "Licensing consult first" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
