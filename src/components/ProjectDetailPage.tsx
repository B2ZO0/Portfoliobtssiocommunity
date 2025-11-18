import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowLeft, Target, CheckCircle2, AlertCircle, Lightbulb, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const projectsData: Record<string, any> = {
    "bios-hp": {
      title: "Script de modification BIOS HP",
      type: "Entreprise",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc2MDM0OTU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["BCU HP", "PowerShell", "BIOS", "Scripting"],
      contexte: "En entreprise chez Armatis, j'ai identifié un besoin d'automatisation pour la configuration des BIOS sur le parc de PC HP. Le processus manuel était chronophage et source d'erreurs.",
      problematique: "Comment automatiser la modification des paramètres BIOS sur plusieurs modèles de PC HP différents pour standardiser les configurations du parc informatique ?",
      objectifs: [
        "Automatiser la configuration BIOS sur les PC HP",
        "Standardiser les paramètres de sécurité",
        "Réduire le temps de déploiement des postes",
        "Créer un outil réutilisable et évolutif"
      ],
      cahierDesCharges: {
        besoins: [
          "Script compatible avec plusieurs modèles HP",
          "Configuration automatique des paramètres BIOS critiques",
          "Logs détaillés des opérations effectuées",
          "Gestion des erreurs et retours d'information"
        ],
        contraintes: [
          "Utilisation obligatoire de l'outil BCU HP",
          "Compatibilité avec Windows 10/11",
          "Aucune intervention utilisateur pendant l'exécution",
          "Sauvegarde des configurations avant modification"
        ],
        livrables: [
          "Script PowerShell fonctionnel",
          "Documentation technique",
          "Guide d'utilisation pour les techniciens",
          "Fichiers de configuration BIOS modèles"
        ]
      },
      resultats: [
        "Réduction de 75% du temps de configuration BIOS",
        "Standardisation des paramètres de sécurité sur tout le parc",
        "Script adopté par l'équipe technique",
        "0 incident lors du déploiement"
      ],
      competencesBTS: [
        "Répondre aux incidents et demandes d'assistance (B1.2)",
        "Développer la présence en ligne de l'organisation (B1.3)",
        "Travailler en mode projet (B1.4)",
        "Gérer le patrimoine informatique (B1.1)"
      ]
    },
    "zabbix": {
      title: "Installation et supervision Zabbix",
      type: "École",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGF8ZW58MXx8fHwxNzYwMzQ5NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Zabbix", "Monitoring", "Linux", "Supervision"],
      contexte: "Dans le cadre de mon BTS SIO, projet de mise en place d'une solution de monitoring pour surveiller l'infrastructure réseau du laboratoire informatique.",
      problematique: "Comment mettre en place une solution de supervision complète pour monitorer l'état des serveurs et du réseau du BTS SIO en temps réel ?",
      objectifs: [
        "Installer et configurer un serveur Zabbix",
        "Superviser les équipements réseau et serveurs",
        "Mettre en place des alertes automatiques",
        "Créer des tableaux de bord de supervision"
      ],
      cahierDesCharges: {
        besoins: [
          "Surveillance CPU, RAM, disque des serveurs",
          "Monitoring de la disponibilité réseau",
          "Alertes par email en cas de problème",
          "Interface web pour visualisation en temps réel"
        ],
        contraintes: [
          "Serveur Linux Debian pour Zabbix",
          "Budget : 0€ (solution open-source)",
          "Intégration avec l'infrastructure existante",
          "Documentation complète pour maintenance future"
        ],
        livrables: [
          "Serveur Zabbix opérationnel",
          "Agents installés sur tous les équipements",
          "Tableau de bord personnalisé",
          "Documentation d'installation et d'utilisation"
        ]
      },
      resultats: [
        "Supervision de 15 équipements (serveurs + switches)",
        "Détection proactive des problèmes réseau",
        "Réduction du temps de diagnostic des incidents",
        "Solution maintenue et utilisée par les étudiants"
      ],
      competencesBTS: [
        "Mettre à disposition des utilisateurs un service informatique (B1.5)",
        "Travailler en mode projet (B1.4)",
        "Organiser son développement professionnel (B1.6)",
        "Gérer le patrimoine informatique (B1.1)"
      ]
    },
    "ansible": {
      title: "Automatisation avec Ansible",
      type: "École",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGJsdWV8ZW58MXx8fHwxNzYwMzQ5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Ansible", "YAML", "Linux", "Automatisation"],
      contexte: "Projet scolaire visant à découvrir l'automatisation de configuration et le déploiement d'infrastructure avec Ansible.",
      problematique: "Comment automatiser le déploiement et la configuration de multiples serveurs Linux de manière reproductible et maintenable ?",
      objectifs: [
        "Découvrir les concepts d'Infrastructure as Code",
        "Créer des playbooks Ansible fonctionnels",
        "Automatiser l'installation de services",
        "Déployer une infrastructure complète rapidement"
      ],
      cahierDesCharges: {
        besoins: [
          "Playbooks pour déploiement de serveurs web",
          "Configuration automatique des services (Apache, MySQL)",
          "Gestion des utilisateurs et permissions",
          "Idempotence des opérations"
        ],
        contraintes: [
          "Utilisation d'Ansible (pas d'autres outils)",
          "Environnement de test avec machines virtuelles",
          "Documentation YAML claire et commentée",
          "Respect des bonnes pratiques Ansible"
        ],
        livrables: [
          "Repository Git avec playbooks",
          "Documentation d'utilisation",
          "Environnement de démonstration",
          "Présentation du projet"
        ]
      },
      resultats: [
        "5 playbooks fonctionnels créés",
        "Déploiement automatisé d'un stack LAMP",
        "Temps de déploiement divisé par 10",
        "Compétences en automatisation acquises"
      ],
      competencesBTS: [
        "Travailler en mode projet (B1.4)",
        "Organiser son développement professionnel (B1.6)",
        "Mettre à disposition des utilisateurs un service informatique (B1.5)"
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Projet non trouvé</h1>
          <Button onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux projets
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux projets
          </Button>
        </div>
      </div>

      {/* Hero du projet */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/20 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant={project.type === "Entreprise" ? "default" : "secondary"} className="mb-4">
                {project.type}
              </Badge>
              <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.contexte}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-primary/10">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Problématique et Objectifs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-primary" />
                Problématique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.problematique}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Objectifs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.objectifs.map((obj: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                    <span className="text-sm">{obj}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Cahier des charges */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <FileText className="h-6 w-6 mr-3 text-primary" />
              Cahier des Charges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                  Besoins
                </h4>
                <ul className="space-y-2">
                  {project.cahierDesCharges.besoins.map((besoin: string, index: number) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                      <span>{besoin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  Contraintes
                </h4>
                <ul className="space-y-2">
                  {project.cahierDesCharges.contraintes.map((contrainte: string, index: number) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                      <span>{contrainte}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  Livrables
                </h4>
                <ul className="space-y-2">
                  {project.cahierDesCharges.livrables.map((livrable: string, index: number) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                      <span>{livrable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résultats et Compétences BTS */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                Résultats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.resultats.map((resultat: string, index: number) => (
                  <li key={index} className="flex items-start p-3 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span>{resultat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Compétences BTS SIO (Bloc B1)
              </CardTitle>
              <CardDescription>
                Compétences mobilisées dans ce projet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.competencesBTS.map((comp: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{comp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}