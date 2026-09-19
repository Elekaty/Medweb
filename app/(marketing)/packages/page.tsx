import type { Metadata } from "next";
import { JobNotice } from "@/components/notice";
import { PackageCard } from "@/components/packages/package-card";
import { PageHero, Section } from "@/components/section";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        kicker="Packages"
        title="Structured support packages for real licensing pathways."
        description="Choose the programme that fits your authority and timeline. Consultancy fees are listed separately from authority, DataFlow and exam fees. Official licences remain with DHA, DOH, MOHAP or other authorities."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <PackageCard key={item.slug} item={item} />
          ))}
        </div>
        <JobNotice className="mt-8" />
      </Section>
    </>
  );
}
