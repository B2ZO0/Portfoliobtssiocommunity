import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Shield, Globe, BookOpen, Video, FileText, AlertTriangle, ArrowLeft } from "lucide-react";

interface VeilleCyberPageProps {
  onBack: () => void;
}

export function VeilleCyberPage({ onBack }: VeilleCyberPageProps) {
  const categories = [
    {
      title: "Menaces et Vulnérabilités",
      icon: <AlertTriangle className="h-5 w-5" />,
      articles: [
        {
          title: "Ransomware-as-a-Service : l'évolution en 2024",
          source: "ANSSI",
          date: "15 Jan 2024",
          description: "Analyse des nouvelles variantes de ransomware et des tactiques des groupes cybercriminels.",
          tags: ["Ransomware", "RaaS", "Menaces"],
          url: "https://www.ssi.gouv.fr/"
        },
        {
          title: "CVE-2024 : Vulnérabilités critiques Windows",
          source: "Microsoft Security",
          date: "10 Jan 2024",
          description: "Bulletin de sécurité Microsoft sur les dernières vulnérabilités critiques découvertes.",
          tags: ["CVE", "Windows", "Vulnérabilités"],
          url: "https://msrc.microsoft.com/"
        }
      ]
    },
    {
      title: "Défense et Protection",
      icon: <Shield className="h-5 w-5" />,
      articles: [
        {
          title: "SOC et détection comportementale",
          source: "CERT-FR",
          date: "12 Jan 2024",
          description: "Guide de mise en place d'un SOC avec analyse comportementale des utilisateurs.",
          tags: ["SOC", "UEBA", "Détection"],
          url: "https://www.cert.ssi.gouv.fr/"
        },
        {
          title: "Zero Trust : implémentation pratique",
          source: "NIST",
          date: "08 Jan 2024",
          description: "Framework NIST pour l'implémentation d'une architecture Zero Trust.",
          tags: ["Zero Trust", "NIST", "Architecture"],
          url: "https://www.nist.gov/"
        }
      ]
    },
    {
      title: "Réglementations et Conformité",
      icon: <BookOpen className="h-5 w-5" />,
      articles: [
        {
          title: "NIS2 : nouvelles obligations pour 2024",
          source: "European Union",
          date: "14 Jan 2024",
          description: "Impact de la directive NIS2 sur les entreprises françaises et mesures à prendre.",
          tags: ["NIS2", "Conformité", "RGPD"],
          url: "https://digital-strategy.ec.europa.eu/"
        },
        {
          title: "Cyber Resilience Act : ce qui change",
          source: "CNIL",
          date: "09 Jan 2024",
          description: "Analyse du Cyber Resilience Act et son impact sur les produits connectés.",
          tags: ["CRA", "IoT", "Conformité"],
          url: "https://www.cnil.fr/"
        }
      ]
    }
  ];

  const sources = [
    { name: "ANSSI", type: "Sécurité nationale", icon: "🇫🇷", url: "https://www.ssi.gouv.fr/" },
    { name: "CERT-FR", type: "Réponse aux incidents", icon: "🚨", url: "https://www.cert.ssi.gouv.fr/" },
    { name: "KrebsOnSecurity", type: "Actualités cyber", icon: "🔍", url: "https://krebsonsecurity.com/" },
    { name: "Bleeping Computer", type: "News & analyses", icon: "💻", url: "https://www.bleepingcomputer.com/" },
    { name: "MITRE ATT&CK", type: "Framework TTPs", icon: "⚔️", url: "https://attack.mitre.org/" },
    { name: "NIST Cybersecurity", type: "Standards US", icon: "📋", url: "https://www.nist.gov/cybersecurity" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au portfolio
          </Button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl mb-2">Veille Cybersécurité</h1>
            <p className="text-xl text-muted-foreground">
              Suivi quotidien des menaces, vulnérabilités et actualités en cybersécurité
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sources de veille */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-6 w-6 mr-3 text-primary" />
              Mes Sources de Veille Cybersécurité
            </CardTitle>
            <CardDescription>
              Sources spécialisées que je consulte quotidiennement pour suivre l'actualité cyber
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sources.map((source, index) => (
                <a 
                  key={index} 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-card rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                >
                  <span className="text-2xl mr-3">{source.icon}</span>
                  <div>
                    <h4 className="font-semibold">{source.name}</h4>
                    <p className="text-sm text-muted-foreground">{source.type}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Articles par catégorie */}
        <div className="space-y-12 mb-12">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-muted-foreground">{article.source}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-3">{article.title}</h4>
                      <p className="text-muted-foreground mb-4">{article.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Consulter la source
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Méthode de veille */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                Outils & Méthodes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Feedly pour l'agrégation des flux RSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Newsletters spécialisées (ANSSI, CERT-FR)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Communautés Reddit (r/cybersecurity)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Twitter/X pour les alertes en temps réel</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Rapports mensuels des éditeurs de sécurité</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-primary" />
                Contenus Vidéos & Podcasts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Conférences SSTIC et FIC</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Webinaires ANSSI et CERT-FR</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Chaînes YouTube spécialisées</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Podcasts "NoLimitSecu" et "ComptoirSecu"</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Démonstrations techniques sur Twitch</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fréquence et organisation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Organisation de ma Veille
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Quotidien (30min)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Consultation des alertes CERT-FR</li>
                  <li>• Lecture des CVE critiques</li>
                  <li>• Suivi Twitter des experts cyber</li>
                  <li>• News sur Bleeping Computer</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Hebdomadaire (2h)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Synthèse des incidents majeurs</li>
                  <li>• Rapports de threat intelligence</li>
                  <li>• Podcasts spécialisés</li>
                  <li>• Documentation des nouvelles TTPs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Mensuel (4h)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Rapports ANSSI et organismes</li>
                  <li>• Conférences et webinaires</li>
                  <li>• Tests de nouveaux outils</li>
                  <li>• Mise à jour de ma documentation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}