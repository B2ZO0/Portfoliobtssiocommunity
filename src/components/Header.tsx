import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigateToEntreprise?: () => void;
}

export function Header({ onNavigateToEntreprise }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#accueil", label: "Accueil", type: "scroll" },
    { href: "#apropos", label: "À propos", type: "scroll" },
    { href: "entreprise", label: "Entreprise", type: "page" },
    { href: "#projets", label: "Projets", type: "scroll" },
    { href: "#formation", label: "Formation", type: "scroll" },
    { href: "#cv", label: "CV", type: "scroll" },
    { href: "#veille-techno", label: "Veille Techno", type: "scroll" },
    { href: "#competences", label: "Compétences", type: "scroll" },
    { href: "#contact", label: "Contact", type: "scroll" },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === "page" && item.href === "entreprise" && onNavigateToEntreprise) {
      onNavigateToEntreprise();
    } else if (item.type === "scroll") {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="cursor-pointer" onClick={() => scrollToSection('#accueil')}>
            <span className="text-xl font-medium">Enzo Marechal</span>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item)}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className="text-left py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}