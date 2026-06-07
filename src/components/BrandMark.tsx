import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  withWordmark?: boolean;
}

/**
 * Shahid Patel brand mark.
 * Concept: I-beam column (top flange, web, bottom flange) with
 * "S" and "P" letterforms cantilevered off the central web —
 * structural engineering motif rendered as a monogram.
 */
export function BrandMark({ className, withWordmark = false }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0"
        aria-label="Shahid Patel"
        role="img"
      >
        {/* Structural frame outline */}
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="1"
        />
        {/* Corner rivets */}
        <g fill="hsl(var(--primary))">
          <rect x="3" y="3" width="2" height="2" />
          <rect x="59" y="3" width="2" height="2" />
          <rect x="3" y="59" width="2" height="2" />
          <rect x="59" y="59" width="2" height="2" />
        </g>
        {/* I-beam: top flange */}
        <rect x="10" y="9" width="44" height="5" fill="hsl(var(--primary))" />
        {/* I-beam: web (central column) */}
        <rect x="29.5" y="14" width="5" height="36" fill="hsl(var(--primary))" />
        {/* I-beam: bottom flange */}
        <rect x="10" y="50" width="44" height="5" fill="hsl(var(--primary))" />

        {/* "S" letterform — left of the web, two cantilevered bars */}
        <rect x="12" y="22" width="14" height="4" fill="hsl(var(--primary))" />
        <rect x="12" y="22" width="4" height="9" fill="hsl(var(--primary))" />
        <rect x="12" y="31" width="14" height="4" fill="hsl(var(--primary))" />
        <rect x="22" y="31" width="4" height="9" fill="hsl(var(--primary))" />
        <rect x="12" y="38" width="14" height="4" fill="hsl(var(--primary))" />

        {/* "P" letterform — right of the web */}
        <rect x="38" y="22" width="4" height="20" fill="hsl(var(--primary))" />
        <rect x="42" y="22" width="10" height="4" fill="hsl(var(--primary))" />
        <rect x="48" y="22" width="4" height="10" fill="hsl(var(--primary))" />
        <rect x="42" y="28" width="10" height="4" fill="hsl(var(--primary))" />
      </svg>

      {withWordmark && (
        <span className="font-display text-base font-bold tracking-wide text-foreground uppercase leading-none">
          Shahid <span className="text-primary">Patel</span>
        </span>
      )}
    </span>
  );
}