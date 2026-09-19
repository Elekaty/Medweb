import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { LoginForm } from "@/components/portal/login-form";
import { Notice } from "@/components/notice";

export const metadata: Metadata = { title: "Portal login" };

export default function PortalLoginPage() {
  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          <Link href="/">
            <BrandLogo />
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-navy-deep">
            Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
        <h1 className="text-2xl font-semibold">Portal login</h1>
        <p className="mt-2 text-sm text-slate-600">
          Phase 1 demo: any email, password <code className="rounded bg-slate-200 px-1">demo1234</code>, then
          choose candidate or facility.
        </p>
        <div className="mt-6 rounded-xl border bg-white p-6">
          <LoginForm />
        </div>
        <Notice className="mt-6">
          Not a health-authority login. This portal tracks consultancy cases only.
        </Notice>
      </main>
    </div>
  );
}
