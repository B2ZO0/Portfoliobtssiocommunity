import { Button } from "./ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Enzo Marechal<br />
              <span className="text-primary">Étudiant BTS SIO SISR - Alternance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
              Étudiant en 2ème année de BTS Services Informatiques aux Organisations, option SISR (Solutions d'Infrastructure, Systèmes et Réseaux). En alternance chez Armatis, j'acquiers une expérience concrète en gestion d'infrastructure et support informatique.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl">
              BTS SIO SISR • Alternance Armatis • Infrastructure & Réseaux • Support IT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button onClick={() => scrollToSection('#projets')} size="lg">
                Voir mes projets
              </Button>
              <Button onClick={() => scrollToSection('#contact')} variant="outline" size="lg">
                Me contacter
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/B2ZO0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/enzo-marechal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:enzo.marechal@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBpbGx1c3RyYXRpb24lMjBtaW5pbWFsfGVufDF8fHx8MTc2MDM0OTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enzo Marechal - Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('#apropos')}
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}