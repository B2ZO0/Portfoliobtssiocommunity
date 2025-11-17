import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, FileText } from "lucide-react";

interface ProjectsSectionProps {
  onViewProjectDetail?: (projectId: string) => void;
}

export function ProjectsSection({ onViewProjectDetail }: ProjectsSectionProps) {
  const projects = [
    {
      id: "bios-hp",
      title: "Script de modification BIOS HP",
      description: "Développement d'un script en entreprise permettant de modifier automatiquement le BIOS sur certains modèles de PC HP à l'aide de l'outil BCU HP. Automatisation du déploiement de configurations BIOS sur le parc informatique.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc2MDM0OTU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["BCU HP", "PowerShell", "BIOS", "Scripting"],
      type: "Entreprise",
      github: "https://github.com/B2ZO0",
    },
    {
      id: "zabbix",
      title: "Installation et supervision Zabbix",
      description: "Mise en place d'un serveur Zabbix pour la supervision du réseau local de mon BTS SIO. Configuration du monitoring réseau, serveurs et alertes en temps réel pour l'infrastructure pédagogique.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGRhdGF8ZW58MXx8fHwxNzYwMzQ5NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Zabbix", "Monitoring", "Linux", "Supervision"],
      type: "École",
      github: "https://github.com/B2ZO0",
    },
    {
      id: "ansible",
      title: "Automatisation avec Ansible",
      description: "Projet scolaire de développement d'un playbook Ansible pour piloter des machines à distance et déployer des instances rapidement. Automatisation de la configuration et du déploiement d'infrastructure.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGJsdWV8ZW58MXx8fHwxNzYwMzQ5NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Ansible", "YAML", "Linux", "Automatisation"],
      type: "École",
      github: "https://github.com/B2ZO0",
    },
  ];

  return (
    <section id="projets" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Mes projets</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mes réalisations en entreprise et mes projets académiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="line-clamp-2 flex-1">{project.title}</CardTitle>
                  <Badge variant={project.type === "Entreprise" ? "default" : "secondary"} className="ml-2 shrink-0">
                    {project.type}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {onViewProjectDetail && (
                    <Button size="sm" onClick={() => onViewProjectDetail(project.id)} className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Cahier des charges
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}