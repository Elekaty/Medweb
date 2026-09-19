"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PortalShell } from "@/components/portal/portal-shell";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { StatusPill } from "@/components/ui/status-pill";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { facilityRequest } from "@/lib/portal";
import { readSession, type PortalSession } from "@/lib/session";

export function FacilityPortal() {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession | null>(null);

  useEffect(() => {
    const current = readSession();
    if (!current || current.role !== "facility") {
      router.replace("/portal/login");
      return;
    }
    setSession(current);
  }, [router]);

  if (!session) {
    return <p className="p-8 text-sm text-muted-foreground">Loading portal…</p>;
  }

  return (
    <PortalShell session={session}>
      <h1 className="text-3xl font-semibold">Facility workspace</h1>
      <p className="mt-2 text-sm text-slate-600">
        Mock request status for {facilityRequest.organisation}.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Current request</CardTitle>
          <CardDescription>{facilityRequest.contact}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-start justify-between gap-4 pb-6">
          <p className="text-sm leading-6 text-slate-700">{facilityRequest.summary}</p>
          <StatusPill status="current">{facilityRequest.status}</StatusPill>
        </CardContent>
      </Card>

      <div className="mt-8 max-w-2xl">
        <h2 className="text-xl font-semibold">New requirement</h2>
        <p className="mt-2 mb-4 text-sm text-muted-foreground">
          This form does not write to a database in Phase 1.
        </p>
        <ConsultationForm
          defaultAudience="facility"
          topics={[
            { value: "shortlist", label: "Shortlist request" },
            { value: "update", label: "Update an existing requirement" },
          ]}
        />
      </div>
    </PortalShell>
  );
}
