import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/cta-link";
import { Notice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";
import { resources } from "@/lib/content";

const bodies: Record<string, string[]> = {
  "dha-vs-doh-vs-mohap": [
    "If you already know the emirate where you will work, start with that authority: DHA for Dubai, DOH for Abu Dhabi, MOHAP for several Northern Emirates settings.",
    "If you do not yet have an employer, a Primary Assessment is usually wiser than paying for three exam sittings. Dual and triple programmes exist for clinicians who need mobility, not for people collecting licences as trophies.",
    "Category titles differ. A specialist in one system may be assessed as general in another. Only the authority’s current published list and their review of your file decide this.",
    "SCFHS is a Saudi pathway. It can be planned in parallel but it does not replace a UAE licence.",
  ],
  "documents-for-psv": [
    "Most files need identity, primary qualification, internship or equivalent, current licence, good standing and experience evidence. Names must match across documents.",
    "Primary Source Verification is performed by designated vendors, not by MedLicense Hub. We help you assemble a complete pack so the vendor is not waiting on missing pages.",
    "Translations and attestations are your cost unless a statement of work says otherwise. Do not send originals through unverified channels.",
    "This checklist is a starting point. Your profession and authority may require additional items such as ACLS, dataflow reports or specialty board certificates.",
  ],
  "exams-without-panic": [
    "Many categories require a computer-based exam. Some senior or already-licensed groups follow a different assessment route. Check the live authority page; do not rely on forum posts.",
    "We issue a study plan and recommended resources after we know your likely category. We do not sit the exam, and we do not guarantee a pass.",
    "Book exams only after identity and eligibility documents are in order. A cancelled sitting is usually more expensive than waiting one week for a document.",
    "If you fail, the authority’s retake rules apply. We can help you plan; we cannot override them.",
  ],
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = resources.find((entry) => entry.slug === slug);
  return { title: item?.title ?? "Guide" };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = resources.find((entry) => entry.slug === slug);
  const paragraphs = bodies[slug];
  if (!item || !paragraphs) notFound();

  return (
    <>
      <PageHero kicker="Guide" title={item.title} description={item.excerpt} />
      <Section>
        <div className="mx-auto max-w-2xl">
          <Notice className="mb-8">
            Educational content only. Not legal advice. Official licences are issued solely by the relevant authority.
          </Notice>
          <div className="space-y-4 text-base leading-7 text-slate-700">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/eligibility">Map your pathway</CtaLink>
            <CtaLink href="/resources" variant="outline">
              All guides
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
