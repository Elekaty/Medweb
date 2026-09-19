import { CtaLink } from "@/components/cta-link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Package } from "@/lib/packages";

export function PackageCard({ item }: { item: Package }) {
  return (
    <Card className="h-full border-slate-200 shadow-sm">
      <CardHeader>
        <p className="text-xs font-medium tracking-wide text-teal-dark uppercase">{item.shortName}</p>
        <CardTitle className="text-lg">{item.name}</CardTitle>
        <CardDescription className="leading-6">{item.summary}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        <p className="font-semibold text-navy-deep">{item.price}</p>
        <p className="mt-1">{item.timeline}</p>
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <CtaLink href={`/packages/${item.slug}`} variant="outline" size="lg">
          View details
        </CtaLink>
      </CardFooter>
    </Card>
  );
}
