import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "BTS Services Informatiques aux Organisations",
      school: "AFTEC Caen",
      period: "2024 - 2026",
      status: "En cours - 2ème année",
      description: "Spécialisation SISR (Solutions d'Infrastructure, Systèmes et Réseaux) - Formation en alternance",
      highlights: ["Administration réseau", "Gestion d'infrastructure", "Cybersécurité", "Expérience professionnelle"],
    },
    {
      degree: "Baccalauréat Professionnel",
      school: "Lycée Charles Tellier - Condé-en-Normandie",
      period: "2020 - 2023",
      status: "Obtenu",
      description: "Système Numérique option Réseaux Informatiques et Systèmes Communicants",
      highlights: ["Réseaux", "Systèmes", "Développement", "Fibre", "Téléphonie IP"],
    },
  ];

  const certifications = [
    {
      name: "PIX - Certification des compétences numériques",
      issuer: "GIP PIX",
      date: "2023",
      level: "Niveau 4",
    },
    {
      name: "Microsoft 365 Certifié : Principes de base",
      issuer: "Microsoft",
      date: "2025",
      level: "En cours",
    },
    {
      name: "Microsoft Certified : Principes de base d'Azure",
      issuer: "Microsoft",
      date: "2025",
      level: "En cours",
    },
  ];

  return (
    <section id="formation" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Formation & Certification</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mon parcours académique et mes certifications professionnelles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </CardDescription>
                      </div>
                      <Badge variant={edu.status === "Obtenu" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{edu.school}</p>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      <Badge>{cert.level}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-dashed">
                <CardContent className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Autres certifications en cours...
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}