import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { label: "Actualités", href: "#" },
  { label: "Société", href: "#" },
  { label: "Culture", href: "#" },
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background">
        {/* Top utility bar */}
        <div className="border-b border-border">
          <div className="container flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="px-4 py-1.5 text-sm font-medium border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                S'abonner
              </a>
              <a href="#" className="nav-link">
                Connexion
              </a>
            </div>
          </div>
        </div>

        {/* Logo masthead - Large and centered */}
        <div className="py-3 md:py-4 flex justify-center">
          <a href="/" className="block">
            <img 
              src={logo} 
              alt="Le Petit Bourbonnais" 
              className="h-28 md:h-36 lg:h-44 w-auto"
            />
          </a>
        </div>

        {/* Navigation bar */}
        <nav className="border-y border-border">
          <div className="container">
            <ul className="hidden md:flex items-center justify-center gap-8 h-12">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile: just show date */}
            <div className="md:hidden flex items-center justify-center h-10 text-sm text-muted-foreground">
              Jeudi 5 décembre 2025
            </div>
          </div>
        </nav>
      </header>

      {/* Full menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-10 overflow-auto animate-fade-in">
          <div className="container py-8">
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
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Faits divers
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Sports
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Environnement
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Opinions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
