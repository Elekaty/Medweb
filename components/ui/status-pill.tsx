import { cn } from "@/lib/utils";

const tones = {
  complete: "border-emerald-200 bg-emerald-50 text-emerald-800",
  current: "border-teal-200 bg-teal-50 text-teal-800",
  pending: "border-slate-200 bg-slate-100 text-slate-600",
  action: "border-amber-200 bg-amber-50 text-amber-900",
  uploaded: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

export function StatusPill({
  status,
  children,
}: {
  status: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[status],
      )}
    >
      {children}
    </span>
  );
}
