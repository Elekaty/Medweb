"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PortalShell } from "@/components/portal/portal-shell";
import { Notice } from "@/components/notice";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { candidateCase, documents as seedDocs, messages, timeline } from "@/lib/portal";
import { readSession, type PortalSession } from "@/lib/session";

export function CandidatePortal() {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession | null>(null);
  const [docs, setDocs] = useState(seedDocs);

  useEffect(() => {
    const current = readSession();
    if (!current || current.role !== "candidate") {
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
      <p className="text-sm text-teal-dark">Case {candidateCase.caseId}</p>
      <h1 className="mt-1 text-3xl font-semibold">Welcome back, {candidateCase.name}</h1>
      <p className="mt-2 text-sm text-slate-600">
        {candidateCase.profession} · {candidateCase.package}
      </p>
      <Notice className="mt-6">
        Mock data for Phase 1. Official licences are issued only by DHA / DOH / MOHAP. Job placement is not guaranteed.
      </Notice>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Case timeline</CardTitle>
            <CardDescription>Status is illustrative until a backend is connected.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 pb-6">
            {timeline.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3 rounded-lg border px-3 py-3">
                <div>
                  <p className="font-medium text-navy-deep">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
                <StatusPill status={item.status}>{item.status}</StatusPill>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next action</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <p className="text-sm leading-6 text-slate-700">{candidateCase.nextAction}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>Toggles stay in this browser tab only.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 pb-6">
            {docs.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2">
                <div>
                  <p className="text-sm font-medium">{doc.name}</p>
                  <StatusPill status={doc.status}>{doc.status}</StatusPill>
                </div>
                {doc.status !== "uploaded" ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setDocs((current) =>
                        current.map((row) => (row.id === doc.id ? { ...row, status: "uploaded" } : row)),
                      )
                    }
                  >
                    Mark uploaded
                  </Button>
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 pb-6">
            {messages.map((item) => (
              <article key={item.body} className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-muted-foreground">
                  {item.from} · {item.at}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.body}</p>
              </article>
            ))}
          </CardContent>
        </Card>
      </div>
    </PortalShell>
  );
}
