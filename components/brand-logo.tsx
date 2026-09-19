import { site } from "@/lib/site";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={
          light
            ? "flex size-9 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20"
            : "flex size-9 items-center justify-center rounded-lg bg-navy-deep text-white"
        }
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18M7 8h10M8 21h8a2 2 0 0 0 2-2v-4.5L12 9 6 14.5V19a2 2 0 0 0 2 2Z" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className={light ? "block text-sm font-semibold text-white" : "block text-sm font-semibold text-navy-deep"}>
          {site.name}
        </span>
        <span className={light ? "block text-[11px] text-white/70" : "block text-[11px] text-muted-foreground"}>
          Licensing support
        </span>
      </span>
    </span>
  );
}
