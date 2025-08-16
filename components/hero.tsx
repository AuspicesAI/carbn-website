import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}) {
  return (
    <section className="space-y-6 py-32 md:py-48 lg:py-52">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center justify-center min-h-[60vh]">
        <Link
          href={props.capsuleLink}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/10 text-foreground text-sm font-medium hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
          target="_blank"
        >
          {props.capsuleText}
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-violet-800 via-pink-400 to-purple-800 bg-clip-text text-transparent drop-shadow-lg font-extrabold">
          {props.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {props.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {props.secondaryCtaText}
          </Link>
        </div>

        {props.credits && (
          <p className="text-sm text-muted-foreground mt-4">{props.credits}</p>
        )}
      </div>
    </section>
  );
}
