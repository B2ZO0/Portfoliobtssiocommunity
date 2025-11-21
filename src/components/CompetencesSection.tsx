import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, FileText, Star, Award, Code, Database, Network, Shield } from "lucide-react";

export function CompetencesSection() {
  const handleDownloadCompetences = () => {
    // Téléchargement du tableau de compétences en PDF
    const link = document.createElement('a');
    link.href = "/Portfoliobtssiocommunity/competences-enzo-marechal.pdf";
    link.download = 'Competences-Enzo-Marechal.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  const certifications = [
    {
      name: "PIX - Certification des compétences numériques",
      niveau: "Niveau 4",
      date: "2023",
      statut: "Obtenue"
    },
    {
      name: "Microsoft 365 Certifié : Principes de base",
      niveau: "Fundamentals",
      date: "2025",
      statut: "En cours"
    },
    {
      name: "Microsoft Certified : Principes de base d'Azure",
      niveau: "Fundamentals",
      date: "2025",
      statut: "En cours"
    }
  ];

  const blocB1BTS = [
    {
      code: "B1.1",
      titre: "Gérer le patrimoine informatique",
      icone: <Database className="h-5 w-5" />,
      description: "Recenser et identifier les ressources numériques, exploiter des référentiels et bases de données"
    },
    {
      code: "B1.2",
      titre: "Répondre aux incidents et demandes d'assistance",
      icone: <Shield className="h-5 w-5" />,
      description: "Collecter, suivre et orienter les demandes, traiter et résoudre les incidents"
    },
    {
      code: "B1.3",
      titre: "Développer la présence en ligne",
      icone: <Network className="h-5 w-5" />,
      description: "Participer à la valorisation de l'image de l'organisation sur les médias numériques"
    },
    {
      code: "B1.4",
      titre: "Travailler en mode projet",
      icone: <Award className="h-5 w-5" />,
      description: "Analyser les objectifs et besoins, planifier et suivre les activités du projet"
    },
    {
      code: "B1.5",
      titre: "Mettre à disposition des services informatiques",
      icone: <Code className="h-5 w-5" />,
      description: "Réaliser les tests d'intégration, déployer les services et accompagner les utilisateurs"
    },
    {
      code: "B1.6",
      titre: "Organiser son développement professionnel",
      icone: <Star className="h-5 w-5" />,
      description: "Mettre en place une veille technologique, gérer son identité professionnelle"
    }
  ];

  const domainesCompetences = [
    {
      titre: "Systèmes & Infrastructure",
      icone: <Network className="h-6 w-6" />,
      competences: ["Windows Server", "Linux", "Virtualisation", "Active Directory"]
    },
    {
      titre: "Réseaux & Sécurité",
      icone: <Shield className="h-6 w-6" />,
      competences: ["Configuration réseau", "Firewall & VPN", "Monitoring", "Cybersécurité"]
    },
    {
      titre: "Développement & Automatisation",
      icone: <Code className="h-6 w-6" />,
      competences: ["PowerShell", "Ansible", "Docker", "Terraform"]
    },
    {
      titre: "Bases de Données",
      icone: <Database className="h-6 w-6" />,
      competences: ["SQL Server", "MySQL", "PostgreSQL"]
    }
  ];

  const competencesTransversales = [
    "Résolution de problèmes",
    "Travail en équipe", 
    "Communication technique",
    "Veille technologique",
    "Gestion de projet",
    "Formation utilisateurs"
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Fichier de Compétences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Détail de mes compétences techniques et transversales acquises en formation et en alternance
          </p>
          <Button onClick={handleDownloadCompetences} size="lg" className="mb-8">
            <Download className="h-5 w-5 mr-2" />
            Télécharger le fichier complet (PDF)
          </Button>
        </div>

        <div className="space-y-12">
          {/* Bloc B1 BTS SIO */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Bloc B1 - BTS SIO SISR
              </CardTitle>
              <CardDescription className="text-center">
                Support et mise à disposition de services informatiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blocB1BTS.map((competence, index) => (
                  <div key={index} className="bg-background border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3 text-primary">
                        {competence.icone}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-primary">{competence.code}</div>
                        <div className="font-medium text-sm">{competence.titre}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{competence.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Aperçu des domaines de compétences */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Domaines de Compétences Techniques</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domainesCompetences.map((domaine, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-2 text-primary">
                      {domaine.icone}
                    </div>
                    <CardTitle className="text-lg">{domaine.titre}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {domaine.competences.map((comp, compIndex) => (
                        <Badge key={compIndex} variant="secondary" className="text-xs">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Certifications et Diplômes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={cert.statut === "Obtenue" ? "default" : "secondary"}>
                        {cert.statut}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                    <h4 className="font-semibold mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.niveau}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compétences transversales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Star className="h-6 w-6 mr-3 text-primary" />
                Compétences Transversales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {competencesTransversales.map((competence, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium">{competence}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contexte d'acquisition */}
          <Card>
            <CardHeader>
              <CardTitle>Contexte d'Acquisition des Compétences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Formation BTS SIO - SISR
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Administration systèmes Windows et Linux</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Configuration et maintenance des réseaux</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Sécurité des systèmes d'information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Virtualisation et cloud computing</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Alternance en Entreprise
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Support technique utilisateurs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Automatisation avec PowerShell et Ansible</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Maintenance de l'infrastructure informatique</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                      <span>Gestion de projets techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
