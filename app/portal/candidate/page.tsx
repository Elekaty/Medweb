import type { Metadata } from "next";
import { CandidatePortal } from "@/components/portal/candidate-portal";

export const metadata: Metadata = { title: "Candidate portal" };

export default function CandidatePortalPage() {
  return <CandidatePortal />;
}
