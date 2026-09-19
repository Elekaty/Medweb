import { cn } from "@/lib/utils";

export function Stepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {steps.map((step, index) => {
        const active = index === current;
        const done = index < current;
        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                done && "bg-teal-dark text-white",
                active && "bg-navy-deep text-white",
                !done && !active && "bg-slate-200 text-slate-600",
              )}
            >
              {index + 1}
            </span>
            <span className={cn("text-sm", active ? "font-medium text-navy-deep" : "text-muted-foreground")}>
              {step}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
