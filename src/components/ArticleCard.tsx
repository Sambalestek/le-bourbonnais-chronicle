import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  author?: string;
  credit?: string;
  image?: string;
  variant?: "featured" | "standard" | "compact" | "list";
  className?: string;
}

export function ArticleCard({
  title,
  author,
  credit,
  image,
  variant = "standard",
  className,
}: ArticleCardProps) {
  // Featured - Large center article
  if (variant === "featured") {
    return (
      <article className={cn("article-hover cursor-pointer", className)}>
        {image && (
          <div className="mb-4">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        )}
        {credit && <p className="credit-line mb-2">{credit}</p>}
        <h2 className="headline-xl mb-3">{title}</h2>
        {author && <p className="author-byline">{author}</p>}
      </article>
    );
  }

  // Standard - Left column articles with images
  if (variant === "standard") {
    return (
      <article className={cn("article-hover cursor-pointer pb-6 mb-6 border-b border-border last:border-0", className)}>
        {image && (
          <div className="mb-3">
            <img src={image} alt={title} className="w-full h-auto aspect-[4/3] object-cover" />
          </div>
        )}
        {credit && <p className="credit-line mb-2">{credit}</p>}
        <h3 className="headline-md mb-2">{title}</h3>
        {author && <p className="author-byline">{author}</p>}
      </article>
    );
  }

  // Compact - Right column list with small thumbnails
  if (variant === "compact") {
    return (
      <article className={cn("article-hover cursor-pointer flex gap-4 pb-5 mb-5 border-b border-border last:border-0", className)}>
        <div className="flex-1 min-w-0">
          <h3 className="headline-sm mb-2">{title}</h3>
          {author && <p className="author-byline">{author}</p>}
        </div>
        {image && (
          <div className="w-20 h-20 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </article>
    );
  }

  // List - Simple text list
  return (
    <article className={cn("article-hover cursor-pointer py-4 border-b border-border last:border-0", className)}>
      <h3 className="headline-sm">{title}</h3>
      {author && <p className="author-byline mt-1">{author}</p>}
    </article>
  );
}
