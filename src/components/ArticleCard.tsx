import { cn } from "@/lib/utils";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt?: string;
  author?: string;
  date: string;
  image?: string;
  variant?: "default" | "featured" | "compact" | "horizontal";
  className?: string;
}

export function ArticleCard({
  category,
  title,
  excerpt,
  author,
  date,
  image,
  variant = "default",
  className,
}: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <article className={cn("article-card cursor-pointer group py-4 border-b border-border last:border-0", className)}>
        <span className="category-badge">{category}</span>
        <h3 className="text-article-title mt-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <time className="text-caption mt-2 block">{date}</time>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className={cn("article-card cursor-pointer group flex gap-4", className)}>
        {image && (
          <div className="w-32 h-24 flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="article-image w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="category-badge">{category}</span>
          <h3 className="text-article-title mt-1 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <time className="text-caption mt-2 block">{date}</time>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className={cn("article-card cursor-pointer group", className)}>
        {image && (
          <div className="aspect-[4/3] overflow-hidden mb-4">
            <img
              src={image}
              alt={title}
              className="article-image w-full h-full object-cover transition-transform duration-500"
            />
          </div>
        )}
        <span className="category-badge">{category}</span>
        <h2 className="text-subheadline mt-2 group-hover:text-accent transition-colors">
          {title}
        </h2>
        {excerpt && (
          <p className="text-muted-foreground mt-3 line-clamp-3">{excerpt}</p>
        )}
        <div className="flex items-center gap-2 mt-4 text-caption">
          {author && <span className="font-medium">{author}</span>}
          {author && <span>•</span>}
          <time>{date}</time>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={cn("article-card cursor-pointer group", className)}>
      {image && (
        <div className="aspect-[16/10] overflow-hidden mb-3">
          <img
            src={image}
            alt={title}
            className="article-image w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      )}
      <span className="category-badge">{category}</span>
      <h3 className="text-article-title mt-1 group-hover:text-accent transition-colors">
        {title}
      </h3>
      {excerpt && (
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{excerpt}</p>
      )}
      <time className="text-caption mt-2 block">{date}</time>
    </article>
  );
}
