import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Shield, Eye, ArrowRight } from "lucide-react";

interface VeilleTechnoSectionProps {
  onViewDetails: () => void;
}

export function VeilleTechnoSection({ onViewDetails }: VeilleTechnoSectionProps) {
  const sourcesPreview = [
    { name: "ANSSI", icon: "🇫🇷" },
    { name: "CERT-FR", icon: "🚨" },
    { name: "KrebsOnSecurity", icon: "🔍" },
    { name: "Bleeping Computer", icon: "💻" }
  ];

  const domainesVeille = [
    "Ransomware & Malwares",
    "Vulnérabilités CVE",
    "Zero Trust & SOC",
    "Réglementations (NIS2, CRA)"
  ];

  return (
    <section id="veille-techno" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Veille Cybersécurité</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Suivi quotidien des menaces, vulnérabilités et actualités en cybersécurité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Sources principales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                Sources Principales
              </CardTitle>
              <CardDescription>
                Sources consultées quotidiennement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {sourcesPreview.map((source, index) => (
                  <div key={index} className="flex items-center p-2 bg-muted/50 rounded">
                    <span className="text-lg mr-2">{source.icon}</span>
                    <span className="text-sm font-medium">{source.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Domaines surveillés */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-primary" />
                Domaines Surveillés
              </CardTitle>
              <CardDescription>
                Thématiques de veille prioritaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {domainesVeille.map((domaine, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">{domaine}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fréquence résumée */}
        <Card className="mb-12">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold text-primary mb-1">30min</div>
                <div className="text-sm text-muted-foreground">Veille quotidienne</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Sources spécialisées</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary mb-1">4h</div>
                <div className="text-sm text-muted-foreground">Analyse mensuelle</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bouton pour voir les détails */}
        <div className="text-center">
          <Button onClick={onViewDetails} size="lg" className="px-8">
            Voir ma veille complète
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}