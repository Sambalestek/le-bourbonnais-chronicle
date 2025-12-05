import { Calendar, MapPin } from "lucide-react";

interface AgendaCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export function AgendaCard({ title, date, time, location, category }: AgendaCardProps) {
  return (
    <article className="article-card cursor-pointer group p-4 bg-card border border-border hover:border-accent/50 transition-colors">
      <span className="category-badge">{category}</span>
      <h3 className="text-article-title mt-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
        <span>{date} • {time}</span>
      </div>
      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </article>
  );
}
