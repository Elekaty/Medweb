import type { Metadata } from "next";
import { FacilityPortal } from "@/components/portal/facility-portal";

export const metadata: Metadata = { title: "Facility portal" };

export default function FacilityPortalPage() {
  return <FacilityPortal />;
}
