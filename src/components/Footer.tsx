import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl mb-2">Enzo Marechal</h3>
            <p className="text-primary-foreground/80">
              Étudiant BTS SIO en alternance - Technicien CSI
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://github.com/B2ZO0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://linkedin.com/in/marechal-enzo-7b9ba9261"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="mailto:marechal.enzo27@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center md:justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} Enzo Marechal. Portfolio créé avec
            passion pour mon avenir professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}