import { CtaLink } from "@/components/cta-link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] w-full max-w-lg flex-col items-start justify-center px-4">
        <p className="text-sm font-medium text-teal-dark">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          That URL is not part of MedLicense Hub. Try the home page or eligibility checker.
        </p>
        <div className="mt-6 flex gap-3">
          <CtaLink href="/">Home</CtaLink>
          <CtaLink href="/eligibility" variant="outline">
            Eligibility
          </CtaLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
