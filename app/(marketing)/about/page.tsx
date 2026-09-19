import type { Metadata } from "next";
import { PageHero, Section } from "@/components/section";
import { Notice } from "@/components/notice";

export const metadata: Metadata = {
  title: "About and trust",
};

const principles = [
  {
    title: "Authorities decide licences",
    body: "We prepare files. DHA, DOH, MOHAP, SCFHS and peers issue licences. We will say this on every package and portal screen.",
  },
  {
    title: "Jobs are never guaranteed",
    body: "Matching support is optional. Facilities hire. Candidates may complete licensing without ever receiving an offer, and that is disclosed up front.",
  },
  {
    title: "Fees stay visible",
    body: "Consultancy fees are separate from authority, exam and vendor fees. Placeholder prices on this site must be replaced with a written quote.",
  },
  {
    title: "No invented outcomes",
    body: "Testimonials, stats and case studies will be labelled as placeholders until they are consented and factual.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A consultancy that would rather lose a sale than over-promise a licence."
        description="MedLicense Hub is a working name for an independent UAE/GCC healthcare licensing and recruitment-support practice. It is not a government entity and not a hospital."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold">Our story</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              International clinicians often pay for the wrong exam, the wrong authority, or a “guaranteed job”
              package that cannot legally be guaranteed. This platform is designed as a trust-first front door:
              dual paths for professionals and facilities, plain-language authorities, and a portal that shows
              case status without pretending we are DHA.
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
