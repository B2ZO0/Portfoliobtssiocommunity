import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Menu, X, Home, User, Building2, GraduationCap, FolderKanban, Award, FileText, Eye, Mail } from "lucide-react";
import { useState } from "react";

interface HeaderWithDropdownProps {
  onNavigateToEntreprise?: () => void;
}

export function HeaderWithDropdown({ onNavigateToEntreprise }: HeaderWithDropdownProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleEntreprise = () => {
    if (onNavigateToEntreprise) {
      onNavigateToEntreprise();
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

          {/* Navigation desktop avec menus déroulants */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection('#accueil')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Accueil
                </button>
              </NavigationMenuItem>

              {/* Menu Parcours */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <User className="h-4 w-4 mr-2" />
                  Parcours
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('#apropos')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            <div className="font-medium leading-none">À propos</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Mon profil, mon parcours et mes motivations
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={handleEntreprise}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-2" />
                            <div className="font-medium leading-none">Entreprise - Armatis</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Mon alternance et mes missions de technicien IT
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('#formation')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          <div className="flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            <div className="font-medium leading-none">Formation</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Mon cursus académique et mes diplômes
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Réalisations */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FolderKanban className="h-4 w-4 mr-2" />
                  Réalisations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('#projets')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          <div className="flex items-center">
                            <FolderKanban className="h-4 w-4 mr-2" />
                            <div className="font-medium leading-none">Projets</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Mes réalisations techniques en entreprise et à l'école
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => scrollToSection('#competences')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                        >
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            <div className="font-medium leading-none">Compétences</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Mes compétences techniques et certifications
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Documents */}
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection('#cv')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Document
                </button>
              </NavigationMenuItem>

              {/* Menu Veille */}
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection('#veille-techno')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Veille
                </button>
              </NavigationMenuItem>

              {/* Contact simple */}
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
          <nav className="md:hidden pb-4 border-t pt-4">
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection('#accueil')}
                className="w-full text-left py-2 px-3 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </button>
              
              <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">Parcours</div>
              <button
                onClick={() => scrollToSection('#apropos')}
                className="w-full text-left py-2 px-6 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                À propos
              </button>
              <button
                onClick={handleEntreprise}
                className="w-full text-left py-2 px-6 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <Building2 className="h-4 w-4 mr-2" />
                Entreprise
              </button>
              <button
                onClick={() => scrollToSection('#formation')}
                className="w-full text-left py-2 px-6 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Formation
              </button>

              <div className="py-2 px-3 text-sm font-semibold text-muted-foreground mt-2">Réalisations</div>
              <button
                onClick={() => scrollToSection('#projets')}
                className="w-full text-left py-2 px-6 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <FolderKanban className="h-4 w-4 mr-2" />
                Projets
              </button>
              <button
                onClick={() => scrollToSection('#competences')}
                className="w-full text-left py-2 px-6 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <Award className="h-4 w-4 mr-2" />
                Compétences
              </button>

              <button
                onClick={() => scrollToSection('#cv')}
                className="w-full text-left py-2 px-3 rounded-md hover:bg-accent transition-colors flex items-center mt-2"
              >
                <FileText className="h-4 w-4 mr-2" />
                Document
              </button>

              <button
                onClick={() => scrollToSection('#veille-techno')}
                className="w-full text-left py-2 px-3 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                Veille
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full text-left py-2 px-3 rounded-md hover:bg-accent transition-colors flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}