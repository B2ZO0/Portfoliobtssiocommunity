import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code, Database, Shield, Server } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Systèmes & Réseaux",
      icon: Server,
      color: "text-purple-600",
      skills: [
        { name: "Configuration réseau", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Windows Server", level: 70 },
        { name: "Virtualisation", level: 75 },
        { name: "Administration système", level: 70 },
      ],
    },
    {
      title: "Cybersécurité",
      icon: Shield,
      color: "text-red-600",
      skills: [
        { name: "Sécurité réseau", level: 75 },
        { name: "Pare-feu", level: 70 },
        { name: "Audit sécurité", level: 65 },
        { name: "RGPD", level: 70 },
      ],
    },
    {
      title: "Développement (NSI)",
      icon: Code,
      color: "text-blue-600",
      skills: [
        { name: "Python", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "SQL", level: 70 },
      ],
    },
    {
      title: "Infrastructure",
      icon: Database,
      color: "text-green-600",
      skills: [
        { name: "Active Directory", level: 65 },
        { name: "DNS/DHCP", level: 75 },
        { name: "VPN", level: 60 },
        { name: "Monitoring", level: 55 },
      ],
    },
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Mes compétences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un aperçu de mes compétences techniques acquises durant ma formation BTS SIO
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-${category.color.split('-')[1]}-100`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}