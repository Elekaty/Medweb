import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  muted = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("px-4 py-16 sm:px-6 lg:px-8 lg:py-24", muted && "bg-slate-50", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  children,
}: {
  kicker?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {kicker ? (
          <p className="mb-3 text-sm font-medium tracking-wide text-teal-dark uppercase">{kicker}</p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}
