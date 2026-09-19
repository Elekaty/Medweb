import type { Metadata } from "next";
import { PageHero, Section } from "@/components/section";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "About and trust",
};

const principles = [
  {
    title: "Authorities decide licences",
    body: "We prepare files. DHA, DOH, MOHAP, SCFHS and peers issue licences. That line is on every package and portal screen because accuracy is the product.",
  },
  {
    title: "Successful career placement",
    body: "We match licence-ready professionals with hospitals and clinics so licensing leads into a role that fits.",
  },
  {
    title: "Fees stay visible",
    body: "Consultancy fees are separate from authority, exam and vendor fees. Placeholder prices on this site must be replaced with a written quote.",
  },
  {
    title: "Evidence before claims",
    body: "Testimonials, stats and case studies stay labelled until they are consented and factual.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Licensing and placement, handled with accuracy."
        description="MedLicense Hub is an independent UAE/GCC healthcare licensing and placement practice. We prepare files. Authorities issue licences. We match clinicians into hospital and clinic roles."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold">Our story</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              International clinicians often pay for the wrong exam or the wrong authority. This platform
              is a front door for both: structured licensing for professionals, and successful placement
              into hospitals and clinics that need licence-ready talent.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Replace this story with the founders’ actual background before public launch. Until then, treat
              every metric on the home page as structural, not marketing proof.
            </p>
          </div>
          <Notice>
            Transparency statement: Phase 1 uses mock portal data and client-side forms. No live patient,
            candidate or facility records are processed until a production backend (for example Supabase or
            NextAuth + Prisma) is connected.
          </Notice>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
