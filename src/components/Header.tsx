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
      <header className="bg-background relative">
        {/* Main header bar with logo breaking through */}
        <div className="container">
          <div className="relative flex items-end justify-between h-28 md:h-36">
            {/* Left side - Menu, Search, Nav */}
            <div className="flex items-center gap-4 pb-3">
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
              <nav className="hidden lg:flex items-center gap-6 ml-4">
                {navLinks.slice(0, 3).map((link) => (
                  <a key={link.label} href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Center - Logo breaking out of the bar */}
            <a href="/" className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-10">
              <img 
                src={logo} 
                alt="Le Petit Bourbonnais" 
                className="h-32 md:h-40 lg:h-48 w-auto"
              />
            </a>

            {/* Right side - Actions */}
            <div className="flex items-center gap-4 pb-3">
              <nav className="hidden lg:flex items-center gap-6 mr-4">
                {navLinks.slice(3).map((link) => (
                  <a key={link.label} href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
              <a href="#" className="nav-link hidden sm:inline">
                Connexion
              </a>
              <a
                href="#"
                className="px-4 py-1.5 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                S'abonner
              </a>
            </div>

            {/* Horizontal line that goes behind the logo */}
            <div className="absolute bottom-3 left-0 right-0 h-px bg-border" />
          </div>
        </div>

        {/* Spacer for the logo overflow */}
        <div className="h-8 md:h-10" />
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
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Faits divers
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Environnement
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Opinions
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Bonnes adresses
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
