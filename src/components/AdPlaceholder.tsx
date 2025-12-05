interface AdPlaceholderProps {
  variant?: "banner" | "sidebar" | "inline";
  className?: string;
}

export function AdPlaceholder({ variant = "sidebar", className = "" }: AdPlaceholderProps) {
  const sizes = {
    banner: "h-24 w-full",
    sidebar: "h-64 w-full",
    inline: "h-20 w-full my-6",
  };

  return (
    <div 
      className={`bg-cream-light/50 border border-cream flex items-center justify-center text-muted-foreground/40 text-xs uppercase tracking-wider ${sizes[variant]} ${className}`}
    >
      <span>Espace publicitaire</span>
    </div>
  );
}
