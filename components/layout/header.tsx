"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { CtaLink } from "@/components/cta-link";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="MedLicense Hub home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition-colors hover:text-navy-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/portal/login" className="mr-1 text-sm text-muted-foreground hover:text-navy-deep">
            Portal
          </Link>
          <CtaLink href="/eligibility" variant="outline" size="lg">
            I am a professional
          </CtaLink>
          <CtaLink href="/hospitals" size="lg">
            I represent a hospital
          </CtaLink>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-3" aria-label="Mobile">
            {[...nav.primary, ...nav.secondary].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/portal/login" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              Portal login
            </Link>
            <div className="mt-2 grid gap-2">
              <CtaLink href="/eligibility" onClick={() => setOpen(false)} className="w-full">
                I am a professional
              </CtaLink>
              <CtaLink href="/hospitals" variant="outline" className="w-full" onClick={() => setOpen(false)}>
                I represent a hospital
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
