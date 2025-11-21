import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Users,
} from "lucide-react";

export function CVSection() {
  const handleDownloadCV = () => {
    // Téléchargement du CV en PDF
    const link = document.createElement('a');
    link.href = "/Portfoliobtssiocommunity/cv-enzo-marechal.pdf";
    link.download = 'CV-Enzo-Marechal.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Mon CV</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Retrouvez l'ensemble de mon parcours, mes
            compétences et mes réalisations
          </p>
          <Button
            onClick={handleDownloadCV}
            size="lg"
            className="mb-8"
          >
            <Download className="h-5 w-5 mr-2" />
            Télécharger le CV (PDF)
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold">
                    BTS Services Informatiques aux Organisations
                  </h4>
                  <p className="text-muted-foreground">
                    AFTEC Caen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2024 - 2026
                  </p>
                  <p className="mt-2">
                    SISR - Solutions d'Infrastructure, Systèmes
                    et Réseaux
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold">
                    Baccalauréat Professionnel
                  </h4>
                  <p className="text-muted-foreground">
                    Lycée Charles Tellier - Condé-en-Normandie
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2020 - 2023
                  </p>
                  <p className="mt-2">
                    Systèmes Numériques option RISC
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expérience professionnelle */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                Expérience professionnelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-semibold">
                  Technicien Informatique
                </h4>
                <p className="text-muted-foreground">
                  Armatis - Entreprise d'alternance
                </p>
                <p className="text-sm text-muted-foreground">
                  2024 - Présent
                </p>
                <p className="mt-2 mb-4">
                  Gestion de l'infrastructure, maintenance des
                  systèmes, développement de scripts
                  d'automatisation
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>
                      Script BCU HP pour modification BIOS
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Automatisation Ansible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Support utilisateurs</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compétences */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Compétences techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ansible",
                    "PowerShell",
                    "BCU HP",
                    "Zabbix",
                    "Linux",
                    "Windows Server",
                    "Virtualisation",
                  ].map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Compétences transversales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Travail en équipe",
                    "Résolution de problèmes",
                    "Autonomie",
                    "Communication",
                    "Adaptabilité",
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    PIX - Certification des compétences
                    numériques
                  </h4>
                  <p className="text-muted-foreground">
                    Niveau 4 - 2023
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    Microsoft 365 Certifié : Principes de base
                  </h4>
                  <p className="text-muted-foreground">
                    En cours - 2025
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    Microsoft Certified : Principes de base
                    d'Azure
                  </h4>
                  <p className="text-muted-foreground">
                    En cours - 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projets clés */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                Projets clés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    Automatisation Ansible
                  </h4>
                  <p className="text-muted-foreground">
                    Déploiement automatisé d'infrastructure
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    Script BCU HP
                  </h4>
                  <p className="text-muted-foreground">
                    Modification automatique du BIOS
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold">
                    Supervision Zabbix
                  </h4>
                  <p className="text-muted-foreground">
                    Monitoring du réseau local du BTS SIO
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
