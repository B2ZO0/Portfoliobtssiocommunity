import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Users,
  Wrench,
  Headphones,
  Server,
  Shield,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EntreprisePageProps {
  onBack: () => void;
}

export function EntreprisePage({
  onBack,
}: EntreprisePageProps) {
  const missions = [
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Support Utilisateur",
      description:
        "Assistance technique de premier niveau (frontline) auprès des utilisateurs finaux",
      details: [
        "Prise en charge des tickets et incidents",
        "Diagnostic et résolution des problèmes matériels et logiciels",
        "Accompagnement et formation des utilisateurs",
        "Documentation des solutions et procédures",
      ],
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Exploitation & Infrastructure",
      description:
        "Gestion et maintenance quotidienne de l'infrastructure informatique",
      details: [
        "Supervision et monitoring des systèmes",
        "Maintenance préventive et corrective",
        "Gestion des sauvegardes",
        "Administration des systèmes Windows et Linux",
      ],
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Gestion du Parc Informatique",
      description:
        "Administration complète du parc matériel et logiciel de l'entreprise",
      details: [
        "Inventaire et suivi du matériel informatique",
        "Déploiement et configuration de postes de travail",
        "Mise à jour et maintenance du parc",
        "Gestion du cycle de vie des équipements",
      ],
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Sécurité & Conformité",
      description:
        "Application des bonnes pratiques de sécurité informatique",
      details: [
        "Veille sur les vulnérabilités et menaces",
        "Application des correctifs de sécurité",
        "Respect des procédures de sécurité",
        "Sensibilisation des utilisateurs",
      ],
    },
  ];

  const competences = [
    { name: "Windows Server", level: "daily" },
    { name: "Active Directory", level: "daily" },
    { name: "Gestion de tickets", level: "daily" },
    { name: "Support N1/N2", level: "daily" },
    { name: "PowerShell", level: "regular" },
    { name: "Déploiement postes", level: "regular" },
    { name: "Docker", level: "regular" },
    { name: "Terraform", level: "regular" },
    { name: "Virtualisation", level: "regular" },
    { name: "Monitoring", level: "regular" },
  ];

  const realisations = [
    "Script PowerShell pour automatisation du BIOS HP avec BCU",
    "Optimisation des processus de déploiement de postes",
    "Participation à la gestion des incidents critiques",
    "Documentation technique des procédures IT",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au portfolio
          </Button>
        </div>
      </div>

      {/* Hero Section Entreprise */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-4xl md:text-5xl">
                  Mon Alternance
                </h1>
              </div>
              <h2 className="text-3xl text-primary mb-6">
                Armatis - Caen
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Je réalise mon alternance chez{" "}
                <strong>Armatis</strong>, entreprise spécialisée
                dans les appels. En tant que{" "}
                <strong>Technicien Informatique</strong>,
                j'assure l'exploitation, le support utilisateur
                et la gestion du parc informatique au quotidien.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-3 w-3" />
                  Caen, Normandie
                </Badge>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <Users className="h-3 w-3" />
                  Services IT & Infogérance
                </Badge>
                <Badge variant="default">
                  Technicien Informatique
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750768145651-86374acaff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMzQ4MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Environnement de travail IT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mes Missions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Mes Missions Quotidiennes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mes responsabilités en tant que technicien
            informatique chez Armatis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="bg-primary/10 p-3 rounded-lg mr-3">
                    {mission.icon}
                  </div>
                  <CardTitle>{mission.title}</CardTitle>
                </div>
                <CardDescription>
                  {mission.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mission.details.map(
                    (detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {detail}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compétences Techniques */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <TrendingUp className="h-6 w-6 mr-3 text-primary" />
              Compétences Développées en Entreprise
            </CardTitle>
            <CardDescription>
              Technologies et outils utilisés quotidiennement
              dans mes missions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {competences.map((comp, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    comp.level === "daily"
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/50 border-border"
                  }`}
                >
                  <div className="font-medium mb-1">
                    {comp.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {comp.level === "daily"
                      ? "Utilisation quotidienne"
                      : "Utilisation régulière"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Réalisations */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl mb-6">
              Réalisations & Contributions
            </h3>
            <div className="space-y-4">
              {realisations.map((realisation, index) => (
                <div
                  key={index}
                  className="flex items-start bg-card border rounded-lg p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>{realisation}</span>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Expérience Professionnelle Concrète
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cette alternance me permet de développer
                      une véritable expertise terrain en gestion
                      de parc informatique, support utilisateur
                      et exploitation IT, complétant
                      parfaitement ma formation théorique en BTS
                      SIO.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-primary/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmslMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc2MDM0ODM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Infrastructure réseau"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}