import { useState } from "react";
import { Search, Menu, X, User, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { 
    label: "Actualités", 
    href: "#",
    subLinks: ["Politique locale", "Économie", "Agriculture & Ruralité", "Industrie"]
  },
  { 
    label: "Société", 
    href: "#",
    subLinks: ["Éducation", "Santé", "Initiatives citoyennes"]
  },
  { 
    label: "Culture", 
    href: "#",
    subLinks: ["Patrimoine", "Livres", "Cinéma", "Musiques & spectacles"]
  },
  { label: "Sports", href: "#" },
  { label: "Portraits", href: "#" },
  { label: "Agenda", href: "#" },
];

const menuCategories = [
  {
    title: "Actualités",
    links: ["Politique locale", "Économie", "Agriculture & Ruralité", "Industrie"],
  },
  {
    title: "Société",
    links: ["Éducation", "Santé", "Initiatives citoyennes"],
  },
  {
    title: "Culture",
    links: ["Patrimoine", "Livres", "Cinéma", "Musiques & spectacles"],
  },
  {
    title: "À découvrir",
    links: ["Portraits", "Bonnes adresses", "Agenda", "Vie pratique"],
  },
];

// Format current date in French
const formatDate = () => {
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const now = new Date();
  return `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background">
        {/* Logo banner with date and location */}
        <div className="bg-cream border-y border-charcoal/20">
          <div className="container relative py-3">
            {/* Date on left */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <span className="text-xs tracking-wide text-charcoal/70 font-medium">
                {formatDate()}
              </span>
            </div>
            
            {/* Logo centered */}
            <div className="flex justify-center">
              <a href="/">
                <img 
                  src={logo} 
                  alt="Le Petit Bourbonnais" 
                  className="h-24 md:h-28 lg:h-32 w-auto"
                />
              </a>
            </div>
            
            {/* Connexion & Je m'abonne on right */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
              <a 
                href="#" 
                className="p-2 text-charcoal/70 hover:text-charcoal transition-colors"
                aria-label="Connexion"
              >
                <User className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="px-5 py-2 text-sm font-medium text-charcoal bg-[#D9D4A0] rounded-full hover:bg-[#CEC992] transition-colors"
              >
                Je m'abonne
              </a>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="border-y border-border">
          <div className="container">
            <div className="flex items-center justify-between h-12">
              {/* Left - Menu & Search */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 -ml-2 hover:bg-secondary transition-colors"
                  aria-label="Menu"
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                <button className="p-2 hover:bg-secondary transition-colors" aria-label="Rechercher">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Center - Navigation */}
              <nav className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <div key={link.label} className="relative group">
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-3"
                    >
                      {link.label}
                      {link.subLinks && (
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                      )}
                    </a>
                    {link.subLinks && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                          {link.subLinks.map((subLink) => (
                            <a
                              key={subLink}
                              href="#"
                              className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                            >
                              {subLink}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right - Actions (mobile only) */}
              <div className="flex items-center gap-2 md:hidden">
                <a 
                  href="#" 
                  className="px-3 py-1 text-xs font-medium text-foreground/80 border border-border rounded-full hover:border-foreground/50 transition-colors"
                >
                  S'abonner
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background overflow-auto animate-fade-in">
          <div className="container py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuCategories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="section-label mb-4">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
