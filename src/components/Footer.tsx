import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const footerLinks = {
  rubriques: [
    { label: "Actualités", href: "#" },
    { label: "Société", href: "#" },
    { label: "Culture", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Environnement", href: "#" },
    { label: "Portraits", href: "#" },
  ],
  services: [
    { label: "Newsletters", href: "#" },
    { label: "Alertes locales", href: "#" },
    { label: "Agenda", href: "#" },
    { label: "Bonnes adresses", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Contact rédaction", href: "#" },
    { label: "Contact publicité", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Le Petit Bourbonnais" className="h-16 w-auto mb-4 brightness-110" />
            <p className="text-primary-foreground/70 text-sm mt-4">
              Votre média local d'information pour le Bourbonnais et l'Allier. 
              Actualités, culture, économie et vie locale.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Rubriques */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Rubriques</h4>
            <ul className="space-y-2">
              {footerLinks.rubriques.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 Le Petit Bourbonnais. Tous droits réservés.</p>
          <p>Fait avec passion dans le Bourbonnais</p>
        </div>
      </div>
    </footer>
  );
}
