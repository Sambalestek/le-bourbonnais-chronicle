import { useState } from "react";
import { Search, Mail, User, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const menuItems = [
  {
    label: "Actualités",
    submenu: [
      { label: "Politique locale", href: "#" },
      { label: "Économie locale", href: "#" },
      { label: "Agriculture & Ruralité", href: "#" },
      { label: "Industrie & Entreprises", href: "#" },
    ],
  },
  {
    label: "Société",
    submenu: [
      { label: "Éducation", href: "#" },
      { label: "Santé", href: "#" },
      { label: "Initiatives citoyennes", href: "#" },
    ],
  },
  {
    label: "Culture",
    submenu: [
      { label: "Patrimoine", href: "#" },
      { label: "Livres", href: "#" },
      { label: "Cinéma", href: "#" },
      { label: "Musiques & spectacles", href: "#" },
    ],
  },
  { label: "Faits divers", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Environnement", href: "#" },
  { label: "Portraits", href: "#" },
  {
    label: "Bonnes adresses",
    submenu: [
      { label: "Restaurants", href: "#" },
      { label: "Producteurs locaux", href: "#" },
      { label: "Hébergements", href: "#" },
      { label: "Idées week-end", href: "#" },
    ],
  },
  { label: "Agenda", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border/50">
        <div className="container flex items-center justify-between py-2 text-sm text-muted-foreground">
          <span>Jeudi 5 décembre 2025</span>
          <div className="flex items-center gap-4">
            <button className="editorial-link flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Newsletter</span>
            </button>
            <button className="editorial-link flex items-center gap-1 hover:text-foreground transition-colors">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Connexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Le Petit Bourbonnais" className="h-12 md:h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors editorial-link"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </a>
                
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 mt-0 py-2 bg-card border border-border shadow-lg min-w-[200px] animate-fade-in">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-secondary rounded-sm transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 last:border-0">
                <a
                  href={item.href || "#"}
                  className="flex items-center justify-between py-3 text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
