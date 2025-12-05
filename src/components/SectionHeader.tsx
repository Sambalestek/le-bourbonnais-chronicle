import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  href?: string;
  className?: string;
}

export function SectionHeader({ title, href, className }: SectionHeaderProps) {
  return (
    <div className={cn("section-divider pb-4 mb-6", className)}>
      <div className="flex items-center justify-between pt-4">
        <h2 className="font-serif text-2xl font-semibold">{title}</h2>
        {href && (
          <a
            href={href}
            className="text-sm text-accent hover:text-accent/80 font-medium editorial-link"
          >
            Voir tout
          </a>
        )}
      </div>
    </div>
  );
}
