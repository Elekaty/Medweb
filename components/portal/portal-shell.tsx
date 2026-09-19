"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { clearSession, type PortalSession } from "@/lib/session";

export function PortalShell({
  session,
  children,
}: {
  session: PortalSession;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link href={session.role === "facility" ? "/portal/facility" : "/portal/candidate"}>
            <BrandLogo />
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-slate-600 sm:inline">{session.email}</span>
            <Link href="/" className="text-muted-foreground hover:text-navy-deep">
              Public site
            </Link>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                clearSession();
                router.push("/portal/login");
              }}
            >
              Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
    </div>
  );
}
