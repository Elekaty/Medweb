import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { licenseDisclaimer, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandLogo light />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">{site.tagline}</p>
          <p className="mt-4 max-w-xl text-xs leading-5 text-white/55">{licenseDisclaimer}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {nav.primary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li>{site.location}</li>
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.hours}</li>
            {nav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/portal/login" className="hover:text-white">
                Portal login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.legalName}. Independent consultancy — not a health authority.
      </div>
    </footer>
  );
}
