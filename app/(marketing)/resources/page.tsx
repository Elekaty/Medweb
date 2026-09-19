import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageHero, Section } from "@/components/section";
import { faqs, resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Guides and FAQs to read before you pay a vendor fee."
        description="Educational articles only. They are not legal advice, authority policy or a determination of eligibility."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((item) => (
            <article key={item.slug} className="flex flex-col rounded-xl border border-slate-200 p-6">
              <p className="text-xs text-muted-foreground">{item.minutes} min read</p>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{item.excerpt}</p>
              <CtaLink href={`/resources/${item.slug}`} variant="outline" size="lg" className="mt-4 self-start">
                Read guide
              </CtaLink>
            </article>
          ))}
        </div>
        <h2 className="mt-16 text-2xl font-semibold">FAQs</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {faqs.map((item) => (
            <details key={item.q} className="group px-4 py-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-navy-deep focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                {item.q}
              </summary>
              <p className="mt-2 pb-2 text-sm leading-6 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
