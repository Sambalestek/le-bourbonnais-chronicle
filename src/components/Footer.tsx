import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Actualités", href: "#" },
  { label: "Société", href: "#" },
  { label: "Culture", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Environnement", href: "#" },
  { label: "Portraits", href: "#" },
  { label: "Agenda", href: "#" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "CGU", href: "#" },
  { label: "Confidentialité", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-cream mt-16">
      <div className="container py-12">
        {/* Main footer */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl italic mb-2">Le Petit Bourbonnais</h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Votre média local d'information pour le Bourbonnais et l'Allier.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Le Petit Bourbonnais</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
