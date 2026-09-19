import Link from "next/link";
import { type ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type CtaLinkProps = Omit<ComponentProps<typeof Link>, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function CtaLink({
  href,
  children,
  className,
  variant = "default",
  size = "xl",
  ...props
}: CtaLinkProps) {
  return (
    <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}
