import { cn } from "@/lib/utils";

export function Notice({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "warning";
}) {
  return (
    <p
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-6",
        tone === "warning"
          ? "border-amber-200 bg-amber-50 text-amber-950"
          : "border-slate-200 bg-slate-50 text-slate-700",
        className,
      )}
    >
      {children}
    </p>
  );
}
