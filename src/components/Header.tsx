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
        {/* Logo centered at top */}
        <div className="flex justify-center pt-4 pb-2">
          <a href="/">
            <img 
              src={logo} 
              alt="Le Petit Bourbonnais" 
              className="h-24 md:h-28 lg:h-32 w-auto"
            />
          </a>
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
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Right - Actions */}
              <div className="flex items-center gap-3">
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors hidden sm:inline">
                  Connexion
                </a>
                <a
                  href="#"
                  className="px-4 py-1.5 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
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
