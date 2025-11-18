import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, MapPin, User, Building2, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onNavigateToEntreprise?: () => void;
}

export function AboutSection({ onNavigateToEntreprise }: AboutSectionProps) {
  const details = [
    { icon: User, label: "Âge", value: "20 ans" },
    {
      icon: MapPin,
      label: "Localisation",
      value: "France - Caen",
    },
    {
      icon: Calendar,
      label: "Année d'études",
      value: "2ème année BTS SIO - Alternance",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours et ma passion pour
            l'informatique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Je suis actuellement en 2ème année de <strong>BTS Services
              Informatiques aux Organisations</strong>, option <strong>SISR</strong> (Solutions
              d'Infrastructure, Systèmes et Réseaux). Cette formation
              en alternance à l'AFTEC de Caen me permet de développer
              des compétences solides en infrastructure IT et d'acquérir
              le <strong>Bloc B1</strong> du référentiel BTS SIO.
            </p>
            <p className="text-lg mb-6">
              Mon alternance chez <strong>Armatis</strong> me permet d'appliquer
              concrètement les enseignements du BTS : support utilisateur,
              gestion de parc informatique, résolution d'incidents et
              maintenance d'infrastructure. Je développe ainsi une double
              compétence théorique et pratique essentielle pour mon projet
              professionnel.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="default">
                BTS SIO SISR
              </Badge>
              <Badge variant="default">
                Bloc B1
              </Badge>
              <Badge variant="secondary">
                Infrastructure & Réseaux
              </Badge>
              <Badge variant="secondary">
                Support IT
              </Badge>
              <Badge variant="secondary">
                Gestion de Parc
              </Badge>
              <Badge variant="secondary">
                Alternance Armatis
              </Badge>
            </div>

            {onNavigateToEntreprise && (
              <Button onClick={onNavigateToEntreprise} size="lg" className="w-full sm:w-auto">
                <Building2 className="h-4 w-4 mr-2" />
                Découvrir mon entreprise Armatis
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {details.map((detail, index) => (
              <Card key={index}>
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="font-medium">
                      {detail.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}