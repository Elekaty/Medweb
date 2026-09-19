import Link from "next/link";
import { ArrowRight, Building2, Stethoscope } from "lucide-react";
import { CtaLink } from "@/components/cta-link";
import { PackageCard } from "@/components/packages/package-card";
import { Section } from "@/components/section";
import { howItWorks, stats, testimonials } from "@/lib/content";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = packages.filter((item) => item.featured);

  return (
    <>
      <section className="border-b bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-medium tracking-wide text-teal-dark uppercase">UAE / GCC licensing &amp; placement</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Get licensed in the UAE &amp; GCC — and placed in a role that fits.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{site.tagline}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Official licences are issued by DHA, DOH, MOHAP or other authorities. We prepare your file and connect you with hospitals and clinics for successful placement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/eligibility">
                Map your pathway <ArrowRight data-icon="inline-end" />
              </CtaLink>
              <CtaLink href="/contact" variant="outline">
                Book a free consultation
              </CtaLink>
            </div>
          </div>

          <div className="grid gap-4">
            <PathCard
              href="/candidates"
              icon={<Stethoscope className="size-5" />}
              title="I am a healthcare professional"
              body="Doctors, nurses, dentists and allied health: licensing pathways plus career matching into a successful UAE role."
            />
            <PathCard
              href="/hospitals"
              icon={<Building2 className="size-5" />}
              title="I represent a hospital or clinic"
              body="Receive licence-ready shortlists and fill openings with clinicians already progressing through DHA, DOH or MOHAP."
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-3xl font-semibold text-navy-deep">{item.value}</p>
              <p className="mt-1 text-sm font-medium">{item.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-teal-dark uppercase">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold">Four clear steps. You’re always in control.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {howItWorks.map((item) => (
            <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-teal-dark">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium tracking-wide text-teal-dark uppercase">Packages</p>
            <h2 className="mt-2 text-3xl font-semibold">Licensing packages that open the door to placement.</h2>
          </div>
          <CtaLink href="/packages" variant="outline" size="lg">
            Compare packages
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <PackageCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section muted>
        <h2 className="text-3xl font-semibold">What professionals and facilities say</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Voices that reflect how we work. Consented testimonials will replace this sample set at launch.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm leading-6 text-slate-700">“{item.quote}”</p>
              <footer className="mt-4 text-sm">
                <p className="font-medium text-navy-deep">{item.name}</p>
                <p className="text-muted-foreground">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl bg-navy-deep px-6 py-12 text-white sm:px-10">
          <h2 className="text-3xl font-semibold text-white">Ready to start licensing and placement?</h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Book a free consultation or map your pathway in minutes. We help clinicians get licensed
            and placed — and help hospitals hire licence-ready talent.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/contact" className="bg-white text-navy-deep hover:bg-slate-100">
              Book a free consultation
            </CtaLink>
            <CtaLink href="/eligibility" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              Map your pathway
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function PathCard({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-teal-dark"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-teal-dark">
        {icon}
      </span>
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-dark">
        Continue <ArrowRight className="size-4" />
      </p>
    </Link>
  );
}
