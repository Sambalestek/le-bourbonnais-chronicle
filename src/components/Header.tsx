import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { label: "Populaire", href: "#" },
  { label: "Récent", href: "#" },
  { label: "Newsletters", href: "#" },
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
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            {/* Left */}
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
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Center - Logo */}
            <a href="/" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Le Petit Bourbonnais" className="h-12 md:h-14 w-auto" />
            </a>

            {/* Right */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hidden sm:inline-flex px-4 py-1.5 text-sm font-medium border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                S'abonner
              </a>
              <a href="#" className="nav-link hidden sm:inline">
                Connexion
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Full menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-14 overflow-auto animate-fade-in">
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
