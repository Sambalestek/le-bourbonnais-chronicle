import heroImage from "@/assets/hero-village.jpg";

interface HeroArticleProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

export function HeroArticle({
  category,
  title,
  excerpt,
  author,
  date,
  image = heroImage,
}: HeroArticleProps) {
  return (
    <article className="relative group cursor-pointer overflow-hidden">
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="image-overlay" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-16">
        <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="category-badge text-accent-foreground/90 bg-accent/90 px-2 py-1 mb-4 inline-block">
            {category}
          </span>
          <h1 className="text-headline text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="text-body-large text-primary-foreground/90 mb-6 hidden md:block max-w-2xl">
            {excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
            <span className="font-medium">{author}</span>
            <span>•</span>
            <time>{date}</time>
          </div>
        </div>
      </div>
    </article>
  );
}
