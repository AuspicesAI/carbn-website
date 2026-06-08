import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  url?: string;
  className?: string;
}

export function BrowserMockup({
  url = "sandbox.carbn.com",
  className,
}: BrowserMockupProps) {
  return (
    <div className={cn("relative max-w-md mx-auto", className)}>
      {/* Subtle outer glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl blur-lg opacity-30" />

      {/* Main container */}
      <div className="relative bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/20 overflow-hidden">
        {/* Browser header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 dark:bg-white/10 rounded-md border border-white/10 dark:border-white/10">
            <div className="w-2 h-2 bg-primary/60 rounded-sm" />
            <span className="text-xs font-mono text-foreground/80">{url}</span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 space-y-3">
          {/* Header section */}
          <div className="space-y-2">
            <div className="h-3 bg-gradient-to-r from-primary/30 dark:from-primary/20 to-primary/20 dark:to-primary/10 rounded animate-pulse" />
            <div className="h-2 bg-foreground/20 dark:bg-white/15 rounded animate-pulse w-3/4" />
          </div>

          {/* Analysis cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 bg-gradient-to-br from-foreground/15 dark:from-white/10 to-foreground/10 dark:to-white/5 rounded-lg border border-foreground/20 dark:border-white/10" />
            <div className="h-8 bg-gradient-to-br from-foreground/15 dark:from-white/10 to-foreground/10 dark:to-white/5 rounded-lg border border-foreground/20 dark:border-white/10" />
          </div>

          {/* File upload area */}
          <div className="h-12 bg-foreground/10 dark:bg-white/5 rounded-lg border-2 border-dashed border-foreground/30 dark:border-white/20 flex items-center justify-center">
            <div className="w-4 h-4 bg-foreground/30 dark:bg-white/20 rounded" />
          </div>

          {/* Status indicator */}
          <div className="p-3 bg-gradient-to-r from-primary/15 to-purple-600/15 rounded-lg border border-primary/20 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              {/* <div className="w-4 h-4 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center"> */}
              {/* <Shield className="w-2 h-2 text-white" /> */}
              {/* </div> */}
              <div>
                <div className="text-primary font-medium text-xs">
                  Analysis Complete
                </div>
                <div className="text-xs text-foreground/70">
                  Remcos Malware Detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
