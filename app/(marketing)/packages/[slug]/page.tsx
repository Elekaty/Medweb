import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaLink } from "@/components/cta-link";
import { PageHero, Section } from "@/components/section";
import { getPackage, packages } from "@/lib/packages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return packages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPackage(slug);
  return { title: item?.name ?? "Package" };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPackage(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero kicker="Package" title={item.name} description={item.summary}>
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-navy-deep">{item.price}</span>
          <span className="mx-2">·</span>
          Typical timeline: {item.timeline}
        </p>
      </PageHero>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Inclusions</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.inclusions.map((line) => (
                <li key={line} className="rounded-lg border bg-slate-50 px-3 py-2">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Exclusions</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.exclusions.map((line) => (
                <li key={line} className="rounded-lg border px-3 py-2">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-600">Audience: {item.audience}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/contact">Book a free consultation</CtaLink>
          <CtaLink href="/eligibility" variant="outline">
            Run eligibility checker
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
