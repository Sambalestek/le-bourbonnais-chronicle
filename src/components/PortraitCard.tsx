interface PortraitCardProps {
  name: string;
  role: string;
  excerpt: string;
  image: string;
}

export function PortraitCard({ name, role, excerpt, image }: PortraitCardProps) {
  return (
    <article className="article-card cursor-pointer group flex gap-4 p-4 bg-card border border-border hover:border-accent/50 transition-colors">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-lg font-semibold group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-accent font-medium">{role}</p>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{excerpt}</p>
      </div>
    </article>
  );
}
